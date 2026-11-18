import { jsPDF } from 'jspdf';
import type { Course } from '../data/coursesData';

const PRIMARY_LOGO_URL = '/assets/aistudio/tcs_logo_cropped-removebg-preview_8334b4c5.png';
const FALLBACK_LOGO_URL = '/logo.png';

/**
 * Normalize text for jsPDF built-in Helvetica font (strips unsupported emojis while preserving clean punctuation).
 */
function cleanPdfText(input: string): string {
  return input
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\u2022/g, '*')
    .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

interface LoadedLogos {
  headerLogoDataUrl: string | null;
  watermarkLogoDataUrl: string | null;
  aspectRatio: number;
}

let cachedLogosPromise: Promise<LoadedLogos> | null = null;

async function fetchLogoAsDataUrl(url: string): Promise<string | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const blob = await res.blob();
    return await new Promise<string | null>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(typeof reader.result === 'string' ? reader.result : null);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

export function preloadBrandedLogos(): Promise<LoadedLogos> {
  if (cachedLogosPromise) return cachedLogosPromise;

  cachedLogosPromise = (async () => {
    const rawDataUrl =
      (await fetchLogoAsDataUrl(PRIMARY_LOGO_URL)) ||
      (await fetchLogoAsDataUrl(FALLBACK_LOGO_URL));

    if (!rawDataUrl) {
      return { headerLogoDataUrl: null, watermarkLogoDataUrl: null, aspectRatio: 1 };
    }

    return await new Promise<LoadedLogos>((resolve) => {
      const img = new Image();
      img.onload = () => {
        const w = img.naturalWidth || 500;
        const h = img.naturalHeight || 220;
        const aspectRatio = w / h;

        try {
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            resolve({ headerLogoDataUrl: rawDataUrl, watermarkLogoDataUrl: null, aspectRatio });
            return;
          }
          ctx.clearRect(0, 0, w, h);
          ctx.globalAlpha = 0.12;
          ctx.drawImage(img, 0, 0, w, h);
          const watermarkDataUrl = canvas.toDataURL('image/png');
          resolve({
            headerLogoDataUrl: rawDataUrl,
            watermarkLogoDataUrl: watermarkDataUrl,
            aspectRatio,
          });
        } catch {
          resolve({ headerLogoDataUrl: rawDataUrl, watermarkLogoDataUrl: null, aspectRatio });
        }
      };
      img.onerror = () => {
        resolve({ headerLogoDataUrl: rawDataUrl, watermarkLogoDataUrl: null, aspectRatio: 1 });
      };
      img.src = rawDataUrl;
    });
  })();

  return cachedLogosPromise;
}

export interface GeneratedPdfResult {
  fileName: string;
  blobUrl: string;
}

function triggerMobileFriendlyDownload(blob: Blob, fileName: string): string {
  const pdfBlob = new Blob([blob], { type: 'application/pdf' });
  const blobUrl = URL.createObjectURL(pdfBlob);

  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = fileName;
  link.rel = 'noopener noreferrer';
  link.style.display = 'none';
  document.body.appendChild(link);

  // Use native click for Android Chrome, desktop browsers, and iOS Safari 13+
  link.click();

  // Keep link briefly & keep blobUrl alive for 2 minutes so mobile download managers finish reading
  window.setTimeout(() => {
    if (link.parentNode) {
      link.parentNode.removeChild(link);
    }
  }, 1500);

  window.setTimeout(() => {
    URL.revokeObjectURL(blobUrl);
  }, 120000);

  return blobUrl;
}

export async function generateSyllabusPdf(course: Course): Promise<GeneratedPdfResult> {
  const { headerLogoDataUrl, watermarkLogoDataUrl, aspectRatio } = await preloadBrandedLogos();

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginX = 44;
  const contentWidth = pageWidth - marginX * 2;
  const bottomLimit = pageHeight - 54;

  /**
   * Paints the dark page background + centered company logo & full company name watermark
   * BEFORE foreground page content is drawn.
   */
  const paintDarkPageBackdrop = () => {
    // Deep charcoal-obsidian page canvas
    doc.setFillColor(11, 11, 16);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // Subtle top accent hairline
    doc.setFillColor(225, 6, 0);
    doc.rect(0, 0, pageWidth, 3, 'F');

    // Subtle watermark behind page content: Logo + Full Company Name
    const centerX = pageWidth / 2;
    const centerY = pageHeight / 2;

    let labelOffsetY = 92;
    if (watermarkLogoDataUrl) {
      try {
        const safeAspect = aspectRatio > 0.2 ? aspectRatio : 1;
        const wmWidth = safeAspect > 1.4 ? 290 : 220;
        const wmHeight = wmWidth / safeAspect;
        doc.addImage(
          watermarkLogoDataUrl,
          'PNG',
          centerX - wmWidth / 2,
          centerY - wmHeight / 2 - 20,
          wmWidth,
          wmHeight
        );
        labelOffsetY = wmHeight / 2 + 6;
      } catch {
        // Ignore image draw failures
      }
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(36, 39, 52);
    doc.text('THECODESPARK TECHNOLOGIES PRIVATE LIMITED', centerX, centerY + labelOffsetY, {
      align: 'center',
    });
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(30, 32, 44);
    doc.text('OFFICIAL CURRICULUM BROCHURE', centerX, centerY + labelOffsetY + 16, {
      align: 'center',
    });
  };

  // Paint backdrop on Page 1
  paintDarkPageBackdrop();

  let cursorY = 42;

  const drawRunningFooter = (pageNum: number, totalPages: number) => {
    doc.setDrawColor(38, 42, 56);
    doc.setLineWidth(0.75);
    doc.line(marginX, pageHeight - 40, pageWidth - marginX, pageHeight - 40);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.2);
    doc.setTextColor(148, 163, 184);
    doc.text(
      'TheCodeSpark Technologies Private Limited | +91 7398839769 / +91 9548248925',
      marginX,
      pageHeight - 24
    );
    doc.text(`Page ${pageNum} of ${totalPages}`, pageWidth - marginX, pageHeight - 24, {
      align: 'right',
    });
  };

  const addNewPage = () => {
    doc.addPage();
    paintDarkPageBackdrop();
    cursorY = 56;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(255, 107, 61);
    doc.text(
      cleanPdfText(`THECODESPARK TECHNOLOGIES PRIVATE LIMITED  |  ${course.codeName} OFFICIAL SYLLABUS`),
      marginX,
      32
    );
    doc.setDrawColor(38, 42, 56);
    doc.setLineWidth(0.75);
    doc.line(marginX, 40, pageWidth - marginX, 40);
  };

  const ensureSpace = (neededHeight: number) => {
    if (cursorY + neededHeight > bottomLimit) {
      addNewPage();
    }
  };

  const writeWrappedText = (
    text: string,
    x: number,
    maxWidth: number,
    lineHeight: number,
    fontSize: number,
    style: 'normal' | 'bold' = 'normal',
    color: [number, number, number] = [226, 232, 240]
  ) => {
    const cleaned = cleanPdfText(text);
    if (!cleaned) return;
    doc.setFont('helvetica', style);
    doc.setFontSize(fontSize);
    doc.setTextColor(color[0], color[1], color[2]);
    const lines = doc.splitTextToSize(cleaned, maxWidth) as string[];
    for (const line of lines) {
      ensureSpace(lineHeight);
      doc.text(line, x, cursorY);
      cursorY += lineHeight;
    }
  };

  const writeSectionBanner = (title: string) => {
    ensureSpace(34);
    cursorY += 8;
    doc.setFillColor(225, 6, 0);
    doc.roundedRect(marginX, cursorY, contentWidth, 24, 4, 4, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(255, 255, 255);
    doc.text(cleanPdfText(title.toUpperCase()), marginX + 12, cursorY + 15.5);
    cursorY += 36;
  };

  // =========================================================================
  // DARK COVER HEADER BLOCK WITH CRISP LOGO BADGE
  // =========================================================================
  doc.setFillColor(20, 22, 31);
  doc.setDrawColor(46, 50, 68);
  doc.setLineWidth(1);
  doc.roundedRect(marginX, cursorY, contentWidth, 118, 8, 8, 'FD');

  doc.setFillColor(225, 6, 0);
  doc.rect(marginX, cursorY, 6, 118, 'F');

  let headerTextX = marginX + 20;
  if (headerLogoDataUrl) {
    try {
      const boxX = marginX + 18;
      const boxY = cursorY + 21;
      const boxW = 76;
      const boxH = 76;

      // Subtle framed badge for crisp logo contrast
      doc.setFillColor(14, 16, 24);
      doc.setDrawColor(56, 62, 84);
      doc.setLineWidth(0.8);
      doc.roundedRect(boxX, boxY, boxW, boxH, 8, 8, 'FD');

      const safeAspect = aspectRatio > 0.2 ? aspectRatio : 1;
      const maxLogoW = boxW - 14;
      const maxLogoH = boxH - 14;
      let drawW = maxLogoW;
      let drawH = drawW / safeAspect;
      if (drawH > maxLogoH) {
        drawH = maxLogoH;
        drawW = drawH * safeAspect;
      }

      doc.addImage(
        headerLogoDataUrl,
        'PNG',
        boxX + (boxW - drawW) / 2,
        boxY + (boxH - drawH) / 2,
        drawW,
        drawH
      );
      headerTextX = boxX + boxW + 16;
    } catch {
      headerTextX = marginX + 20;
    }
  }

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(255, 107, 61);
  doc.text('THECODESPARK TECHNOLOGIES PRIVATE LIMITED', headerTextX, cursorY + 28);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.setTextColor(255, 255, 255);
  const titleLines = doc.splitTextToSize(
    cleanPdfText(course.title),
    contentWidth - (headerTextX - marginX) - 16
  ) as string[];
  doc.text(titleLines.slice(0, 2), headerTextX, cursorY + 50);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(203, 213, 225);
  doc.text(
    cleanPdfText(
      `${course.codeName} Official Syllabus  |  Founder & CEO: ${course.instructorName || 'Mr. Rohit Kashyap'}`
    ),
    headerTextX,
    cursorY + 98
  );

  cursorY += 134;

  // Dark Quick Metadata Strip
  const metaItems = [
    `Duration: ${course.duration}`,
    `Learning Hours: ${course.hours}`,
    `Modules: ${course.modulesCount}`,
    `Practice: ${course.questionsCount}`,
  ];
  doc.setFillColor(24, 26, 36);
  doc.setDrawColor(46, 50, 68);
  doc.roundedRect(marginX, cursorY, contentWidth, 28, 5, 5, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(226, 232, 240);
  doc.text(cleanPdfText(metaItems.join('   |   ')), marginX + 12, cursorY + 17.5);
  cursorY += 42;

  // Program Subtitle / Overview
  writeWrappedText(course.subtitle, marginX, contentWidth, 14, 10, 'normal', [203, 213, 225]);
  cursorY += 6;

  // Highlights
  if (course.prerequisites?.highlights?.length) {
    writeSectionBanner('Program Highlights & Learning Outcomes');
    for (const highlight of course.prerequisites.highlights) {
      writeWrappedText(`*  ${highlight}`, marginX + 6, contentWidth - 12, 13.5, 9.5, 'normal', [226, 232, 240]);
    }
  }

  // =========================================================================
  // TRACK 1: CORE MODULES / EPISODES / PHASES
  // =========================================================================
  if (course.modules?.length) {
    writeSectionBanner(
      course.capstonesBreakdown?.length
        ? `Complete Curriculum (${course.modules.length} Analytics Phases)`
        : `Complete Curriculum (${course.modules.length} Master Modules)`
    );

    course.modules.forEach((mod, idx) => {
      ensureSpace(48);

      // Dark module badge + title header bar
      doc.setFillColor(24, 26, 36);
      doc.setDrawColor(45, 49, 66);
      doc.roundedRect(marginX, cursorY, contentWidth, 22, 4, 4, 'FD');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(255, 107, 61);
      doc.text(cleanPdfText(`${mod.name || `Module ${idx + 1}`}`), marginX + 10, cursorY + 14.5);

      const badgeWidth = doc.getTextWidth(cleanPdfText(`${mod.name || `Module ${idx + 1}`}`)) + 22;
      doc.setTextColor(248, 250, 252);
      const modTitle = cleanPdfText(mod.title);
      const truncatedTitle =
        doc.getTextWidth(modTitle) > contentWidth - badgeWidth - 10
          ? `${modTitle.slice(0, 68)}...`
          : modTitle;
      doc.text(truncatedTitle, marginX + badgeWidth, cursorY + 14.5);
      cursorY += 28;

      if (mod.desc) {
        writeWrappedText(mod.desc, marginX + 8, contentWidth - 16, 13, 9, 'normal', [186, 196, 210]);
        cursorY += 2;
      }

      if (mod.topics?.length) {
        for (const topic of mod.topics) {
          writeWrappedText(`-  ${topic}`, marginX + 14, contentWidth - 22, 12.5, 9, 'normal', [226, 232, 240]);
        }
      }
      cursorY += 8;
    });
  }

  // =========================================================================
  // TRACK 2: PRODUCTS BREAKDOWN (IF PRESENT)
  // =========================================================================
  if (course.productsBreakdown?.length) {
    writeSectionBanner('Production Products Built Live');

    for (const prod of course.productsBreakdown) {
      ensureSpace(44);
      writeWrappedText(`${prod.name} - ${prod.tagline}`, marginX, contentWidth, 15, 11, 'bold', [255, 255, 255]);
      writeWrappedText(prod.description, marginX, contentWidth, 13, 9.5, 'normal', [186, 196, 210]);
      if (prod.techStack?.length) {
        writeWrappedText(
          `Tech Stack: ${prod.techStack.join(', ')}`,
          marginX,
          contentWidth,
          13,
          9,
          'bold',
          [255, 107, 61]
        );
      }
      cursorY += 4;

      for (const pMod of prod.modules) {
        ensureSpace(28);
        writeWrappedText(
          `Section ${pMod.number}: ${pMod.title}`,
          marginX + 6,
          contentWidth - 12,
          13.5,
          9.5,
          'bold',
          [248, 250, 252]
        );
        for (const item of pMod.items) {
          writeWrappedText(`-  ${item}`, marginX + 14, contentWidth - 22, 12.5, 8.8, 'normal', [203, 213, 225]);
        }
        cursorY += 4;
      }
      cursorY += 6;
    }
  }

  // =========================================================================
  // TRACK 3: DSA IN JAVA COHORT (IF PRESENT)
  // =========================================================================
  if (course.dsaJavaCohort) {
    writeSectionBanner(course.dsaJavaCohort.title || 'DSA in Java Cohort Syllabus');
    if (course.dsaJavaCohort.subtitle) {
      writeWrappedText(course.dsaJavaCohort.subtitle, marginX, contentWidth, 13.5, 9.5, 'normal', [186, 196, 210]);
      cursorY += 4;
    }

    for (const topic of course.dsaJavaCohort.topics) {
      ensureSpace(32);
      writeWrappedText(
        `${topic.badge}: ${topic.title}`,
        marginX,
        contentWidth,
        14,
        10,
        'bold',
        [248, 250, 252]
      );
      if (topic.concepts?.length) {
        writeWrappedText(
          `Concepts: ${topic.concepts.join(' | ')}`,
          marginX + 8,
          contentWidth - 16,
          12.5,
          8.8,
          'normal',
          [186, 196, 210]
        );
      }
      if (topic.problems?.length) {
        for (const prob of topic.problems) {
          writeWrappedText(
            `#${prob.id}  ${prob.problem} [${prob.difficulty}] - Pattern: ${prob.pattern}`,
            marginX + 12,
            contentWidth - 20,
            12,
            8.5,
            'normal',
            [226, 232, 240]
          );
        }
      }
      cursorY += 5;
    }
  }

  // =========================================================================
  // TRACK 4: INDUSTRY CAPSTONES (IF PRESENT)
  // =========================================================================
  if (course.capstonesBreakdown?.length) {
    writeSectionBanner(`Industry Capstones (${course.capstonesBreakdown.length} Enterprise Projects)`);
    course.capstonesBreakdown.forEach((cap, idx) => {
      ensureSpace(44);
      writeWrappedText(
        `Capstone #${idx + 1}: ${cap.title} (${cap.domain})`,
        marginX,
        contentWidth,
        14,
        10,
        'bold',
        [248, 250, 252]
      );
      writeWrappedText(cap.description, marginX + 6, contentWidth - 12, 13, 9, 'normal', [186, 196, 210]);
      if (cap.tools?.length) {
        writeWrappedText(
          `Tools: ${cap.tools.join(', ')}`,
          marginX + 6,
          contentWidth - 12,
          12.5,
          8.8,
          'bold',
          [255, 107, 61]
        );
      }
      for (const deliv of cap.deliverables) {
        writeWrappedText(`-  ${deliv}`, marginX + 14, contentWidth - 22, 12.5, 8.8, 'normal', [226, 232, 240]);
      }
      cursorY += 6;
    });
  }

  // Add running footers across all generated pages
  const totalPages = doc.getNumberOfPages();
  for (let p = 1; p <= totalPages; p += 1) {
    doc.setPage(p);
    drawRunningFooter(p, totalPages);
  }

  const safeSlug = cleanPdfText(course.codeName || course.id || 'TheCodeSpark')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  const fileName = `${safeSlug || 'TheCodeSpark'}-Official-Syllabus.pdf`;

  const rawBlob = doc.output('blob');
  const blobUrl = triggerMobileFriendlyDownload(rawBlob, fileName);
  return { fileName, blobUrl };
}
