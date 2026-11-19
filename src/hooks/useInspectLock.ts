import { useEffect } from 'react';

export function useInspectLock() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key ? e.key.toUpperCase() : '';
      const hasCtrlOrCmd = e.ctrlKey || e.metaKey;

      // Block F12 (DevTools)
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Block Ctrl/Cmd + Shift + I / J / C / K (DevTools / Console / Element Picker)
      if (hasCtrlOrCmd && e.shiftKey && ['I', 'J', 'C', 'K'].includes(key)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Block macOS Cmd + Option + I / J / C / U
      if (e.metaKey && e.altKey && ['I', 'J', 'C', 'U'].includes(key)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Block Ctrl/Cmd + U (View Source) and Ctrl/Cmd + S (Save Page)
      if (hasCtrlOrCmd && !e.shiftKey && ['U', 'S'].includes(key)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      return true;
    };

    const handleDragStart = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu, { capture: true });
    window.addEventListener('contextmenu', handleContextMenu, { capture: true });
    document.addEventListener('keydown', handleKeyDown, { capture: true });
    document.addEventListener('dragstart', handleDragStart, { capture: true });

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu, { capture: true });
      window.removeEventListener('contextmenu', handleContextMenu, { capture: true });
      document.removeEventListener('keydown', handleKeyDown, { capture: true });
      document.removeEventListener('dragstart', handleDragStart, { capture: true });
    };
  }, []);
}
