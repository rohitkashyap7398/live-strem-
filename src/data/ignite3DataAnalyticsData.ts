import { ModuleItem } from './coursesData';

export interface DataAnalyticsCapstone {
  id: string;
  title: string;
  domain: string;
  description: string;
  tools: string[];
  deliverables: string[];
}

export const IGNITE3_CAPSTONES: DataAnalyticsCapstone[] = [
  {
    id: "capstone-retail",
    title: "Retail & E-commerce Revenue & Cohort Intelligence",
    domain: "E-Commerce / Retail",
    description: "End-to-end sales, profitability, product matrix, customer retention cohort analysis, and executive Power BI dashboard with dynamic drill-throughs.",
    tools: ["Python", "Pandas", "SQL", "Power BI", "DAX"],
    deliverables: [
      "Customer lifetime value & cohort retention matrix",
      "Product basket profitability analysis",
      "Executive Power BI dashboard with multi-page navigation",
      "5-10 actionable business growth recommendations"
    ]
  },
  {
    id: "capstone-hr",
    title: "Enterprise Workforce & HR Attrition Analytics",
    domain: "Human Resources / Operations",
    description: "Hiring funnel conversion, employee turnover risk modeling, department attrition trends, and Row-Level Security (RLS) reporting for HR managers.",
    tools: ["Excel Intelligence", "Power BI", "DAX", "Scikit-Learn (Logistic/RandomForest)"],
    deliverables: [
      "Department-wise turnover rate benchmark",
      "Predictive attrition risk scoring pipeline",
      "Power BI report secured with Dynamic RLS",
      "Data-driven retention policy recommendations"
    ]
  },
  {
    id: "capstone-finance",
    title: "Financial KPI, Variance Analysis & Forecasting",
    domain: "Finance & Accounting",
    description: "Comprehensive financial statement analysis, budget vs actuals variance tracking, expense breakdowns, and time-series revenue forecasting.",
    tools: ["Advanced Excel", "Power Query", "Power Pivot", "Time Intelligence DAX", "ARIMA / statsmodels"],
    deliverables: [
      "Dynamic Star-Schema financial data model",
      "Time Intelligence DAX metrics (TOTALYTD, SAMEPERIODLASTYEAR)",
      "Moving average & Holt-Winters revenue forecast",
      "Executive 1-page financial summary report"
    ]
  },
  {
    id: "capstone-marketing",
    title: "Marketing Campaign ROI, CAC & A/B Testing Evaluation",
    domain: "Marketing & Growth",
    description: "Multi-channel campaign attribution, conversion funnels, Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), and rigorous statistical A/B test analysis.",
    tools: ["Python", "Hypothesis Testing (Z/T-Test)", "Seaborn", "SQL Window Functions"],
    deliverables: [
      "Campaign funnel drop-off and conversion rates",
      "Hypothesis testing report (p-values & confidence intervals)",
      "ROAS & CAC payback period optimization",
      "A/B test decision memo for executive leadership"
    ]
  },
  {
    id: "capstone-operations",
    title: "Engineering Operations, IoT Sensors & Defect Analytics",
    domain: "Engineering & Manufacturing",
    description: "Production yield optimization, machine downtime analysis, IoT sensor telemetry log monitoring, and anomaly detection in manufacturing lines.",
    tools: ["Python", "NumPy", "Pandas", "Matplotlib", "SQL", "Power BI"],
    deliverables: [
      "Sensor telemetry data cleaning & anomaly detection",
      "OEE (Overall Equipment Effectiveness) tracking",
      "Root cause analysis for machine downtime",
      "Real-time operational dashboard with data alerts"
    ]
  },
  {
    id: "capstone-pipeline",
    title: "End-to-End Automated Analytics & ETL Pipeline",
    domain: "Data Engineering & Analytics Architecture",
    description: "Extracting live data from REST APIs, cleaning and validating with Python, loading into PostgreSQL database, and automated refresh in Power BI.",
    tools: ["Python Requests", "PostgreSQL", "SQL Views", "Power BI Scheduled Refresh", "Docker / Airflow (Concept)"],
    deliverables: [
      "Automated Python API extraction & data validation script",
      "Normalized PostgreSQL analytical warehouse tables",
      "Power BI report connected via direct database refresh",
      "Data lineage documentation and error logging mechanism"
    ]
  }
];

export const IGNITE3_MODULES: ModuleItem[] = [
  {
    id: 0,
    name: "PHASE 0",
    title: "Welcome to Data Analytics & Foundations",
    desc: "From raw process and production data to actionable decisions. Core analytics workflow, descriptive vs prescriptive types, KPI design, engineering data focus, problem framing, and REST API data sources.",
    topics: [
      "What is Data Analysis: Data Analysis vs Data Analytics vs Data Science vs Business Intelligence",
      "The Modern Engineering Imperative: Turning raw process numbers into strategic decisions",
      "The End-to-End Workflow: Ask → Collect → Clean → Analyze → Visualize → Communicate → Decide",
      "Why Skipping 'Clean' Catastrophically Breaks Everything Downstream",
      "Tool Mapping across the Workflow: Python, SQL, Pandas, Matplotlib, Excel & Power BI",
      "The 4 Major Types of Analytics: Descriptive (What happened), Diagnostic (Why it happened), Predictive (What is likely to happen), Prescriptive (What should we do)",
      "From Data to Decision: KPIs vs Raw Metrics & Leading Indicators vs Lagging Indicators",
      "Real-World Engineering Use Cases: Quality control data, Sensor & IoT logs, Test bench results, Energy audits",
      "Problem Framing: Translating vague business problems into measurable analytical questions",
      "Stakeholder Management: Identifying users, decision boundaries, constraints & success criteria",
      "Data Sources & Formats: Structured, semi-structured & unstructured data (CSV, Parquet, JSON, SQL, APIs)",
      "REST APIs for Analysts: HTTP methods (GET, POST), status codes, JSON parsing, pagination & authentication",
      "Data Sampling: Representative sampling methods, sampling bias & data completeness checks",
      "Complete Roadmap Walkthrough: Python → Stats → NumPy/Pandas → Visualization → SQL → Power BI → ML & Capstones"
    ]
  },
  {
    id: 1,
    name: "PHASE 1",
    title: "Python (Basics to Advanced & Real-World Analytics)",
    desc: "Complete Python journey: environment setup, string mechanics, data structures, functional programming, exception handling, file CRUD, Object-Oriented Programming (OOP), dunder methods, and analytics workflows.",
    topics: [
      "Installation & Setup: Python 3, PATH configuration, VS Code IDE & executing first Python script",
      "Comments, Variables & Naming Conventions: CamelCase, PascalCase, snake_case & variable scopes",
      "Data Types: Primitive numbers (int, float, complex), strings & boolean truthy/falsy logic",
      "Strings Deep Dive: Positive/negative indexing, slicing [start:stop:step], immutability & string methods",
      "Print Formatting & Inputs: f-strings, escape sequences, raw strings (r''), type casting & input() handling",
      "Operators Mastery: Arithmetic (+, -, *, /, //, %, **), shorthand assignment (+=, -=) & string repetition",
      "Logical & Comparison Operators: ==, !=, >, <, >=, <=, and, or, not condition chains",
      "Conditionals & Control Flow: if, elif, else indentation blocks, pass keyword & ternary operators",
      "Loops in Python: for loops over iterables, range(start, stop, step), while loops & condition-based iteration",
      "Loop Control Statements: break, continue, and the loop-else clause",
      "Functions & Reusable Code: def syntax, parameters vs arguments, default args, return vs print statements",
      "Variable Arguments: *args for positional arguments and **kwargs for keyword argument unpacking",
      "Built-in Data Structures: Lists (mutable, slicing, indexing, deep vs shallow copy, list methods)",
      "Tuples: Parentheses, single element trailing comma, immutability, tuple constructor & unpacking",
      "Sets: Curly braces, unordered storage, no duplicates, set math (union, intersection, difference)",
      "Dictionaries: Key-value pairs, ordered, unique keys, dict constructor, dict.keys(), values(), items()",
      "Advanced Python Concepts: Lambda expressions, map(), filter(), zip() & generator yield functions",
      "Comprehensions: List comprehensions [x for x in list if cond] and dictionary comprehensions {k:v for ...}",
      "Decorators & Function Modifiers: @decorator syntax, timer wrappers & logging decorators",
      "Exception Handling: try, except, else, finally blocks, custom exceptions & raising runtime errors",
      "File Handling (CRUD): open() in read 'r', write 'w', append 'a', exclusive 'x' modes & 'with open()' context",
      "Object-Oriented Programming (OOP): Classes, objects, attributes, instance vs class methods",
      "Constructors & self: __init__() initialization, instance state & attribute access",
      "OOP Principles: Inheritance (Single, Multilevel, Multiple, Hierarchical) & super() keyword",
      "Encapsulation & Access Modifiers: Public attributes, protected _attr & private __attr name mangling",
      "Abstraction & abc Module: Abstract base classes, @abstractmethod & enforcing interface contracts",
      "Polymorphism: Method overriding in child classes & simulated method overloading",
      "Dunder / Magic Methods: __init__, __str__, __repr__, __len__, __getitem__, __add__, __eq__",
      "Modules & Packages: Creating custom .py modules, packages with __init__.py, import statements",
      "Python for Real-World Analytics: Jupyter Notebooks, venv virtual environments, requirements.txt",
      "Data Extraction: Calling REST APIs with requests, pagination handling, timeouts & regex re extraction"
    ]
  },
  {
    id: 2,
    name: "PHASE 2",
    title: "Maths that Matters (Statistics, Probability & Inference)",
    desc: "Descriptive statistics, data distributions, normal distribution rules, probability theory, Bayes' theorem, hypothesis testing (Z, t, Chi-Square, ANOVA), confidence intervals, and experimental A/B testing thinking.",
    topics: [
      "Visualising Data: One-way & two-way frequency tables, relative frequencies & joint distributions",
      "Core Graphical Visuals: Bar charts, pie charts, line graphs, dot plots & histogram representations",
      "Measures of Central Tendency: Mean, Median, Mode & understanding their sensitivity to data shapes",
      "Measures of Spread: Range, Interquartile Range (IQR = Q3 - Q1), Variance (σ²) & Standard Deviation (σ)",
      "Outlier Detection: Lower/Upper whiskers (1.5*IQR rule), trimming vs transforming vs robust statistics",
      "Box Plots Deep Dive: Anatomy of box plots, median line, quartiles, whiskers & extreme outliers",
      "Data Distribution Shapes: Symmetrical bell curves, right-skewed (positive) vs left-skewed (negative)",
      "Density Curves: Progression from Histogram → Frequency Polygon → Smooth Kernel Density Curve",
      "The Normal Distribution: 68-95-99.7% empirical rule, properties & standardized Z-Scores (X - μ) / σ",
      "Covariance & Correlation: Directional relationships vs Pearson correlation coefficient (r from -1 to 1)",
      "Probability Foundations: Favorable outcomes / Total outcomes, simple vs compound probabilities",
      "Addition Rule & Set Theory: Union (A ∪ B) vs Intersection (A ∩ B) & Mutually exclusive events",
      "Conditional Probability: P(A|B) formula, independent vs dependent events & multiplication rule",
      "Bayes' Theorem: Inverting conditional probabilities for diagnostic testing and decision-making",
      "Hypothesis Testing Foundations: Null Hypothesis (H₀) vs Alternative (H₁), Type I (α) vs Type II (β) errors",
      "Statistical Significance: Choosing significance level (α = 0.05) & interpreting p-values correctly",
      "Z-Test: Formula & use cases when population variance is known or sample size n > 30",
      "T-Test: Student's t-test when variance is unknown (One-sample, Independent two-sample, Paired t-test)",
      "Chi-Square (χ²) Test: Test of independence & Goodness of fit for categorical tables Σ[(O - E)² / E]",
      "ANOVA (Analysis of Variance): Comparing means across 3+ groups using the F-statistic (between/within)",
      "Statistical Inference: Population parameters vs sample statistics, Central Limit Theorem (CLT)",
      "Confidence Intervals: Standard error, margin of error & interpreting 90%, 95%, 99% confidence intervals",
      "Correlation vs Causation: Confounding variables, lurking variables & Simpson's Paradox",
      "Experimental Thinking & A/B Testing: Control vs treatment groups, randomization, sample size sizing & guardrail metrics"
    ]
  },
  {
    id: 3,
    name: "PHASE 3",
    title: "Data Analysis (NumPy, Pandas & Advanced Wrangling)",
    desc: "High-performance arrays with NumPy (vectorization, broadcasting, ufuncs) and data wrangling with Pandas (Series, DataFrames, cleaning, filtering, GroupBy, pivot tables, merging, time series, and memory optimization).",
    topics: [
      "NumPy Foundations: 1D and 2D ndarray creation, np.arange(), np.zeros(), np.ones(), np.linspace()",
      "Random Arrays: np.random.rand(), randn(), randint() & reproducible seeding with seed()",
      "Array Attributes & Data Types: shape, size, ndim, dtype & casting with astype()",
      "Array Methods & Axis Aggregations: sum(), mean(), max(), min(), std() along axis=0 (cols) vs axis=1 (rows)",
      "Reshaping & Restructuring: reshape(), resize(), flatten(), ravel() & maintaining data layout",
      "Indexing & Slicing: Matrix slicing [row_start:row_end, col_start:col_end] & boolean mask indexing",
      "Vectorized Operations & Broadcasting: Element-wise arithmetic, dimensional alignment rules & 100x speedup",
      "Conditional Selection: np.where() for vectorized if-else replacements without Python loops",
      "Matrix Math & Ufuncs: np.dot() matrix multiplication, transpose (.T), np.sqrt(), np.exp(), np.log(), np.abs()",
      "Array Stacking & Splitting: vstack(), hstack(), column_stack(), np.concatenate(), vsplit() & hsplit()",
      "Pandas Series & DataFrames: 1D Series vs 2D DataFrame, creating from lists, dicts & NumPy matrices",
      "Reading & Writing Data: pd.read_csv(), pd.read_excel(), pd.read_json(), pd.read_parquet()",
      "Inspecting Datasets: head(), tail(), info(), describe(), shape, dtypes & memory usage inspection",
      "Data Selection: Selecting columns, row indexing with loc (label-based) vs iloc (integer position)",
      "Data Cleaning Essentials: Detecting nulls with isna()/isnull(), dropna(), fillna() with constants/mean/ffill",
      "Data Type Conversion: astype() for numbers, categories, dates & string formatting",
      "Value Corrections & Deduplication: replace() mapping, regex cleaning, duplicated() & drop_duplicates()",
      "Filtering & Querying: Boolean logic (&, |, ~), multiple condition chains & df.query() syntax",
      "String Accessor (.str): .str.contains(), startswith(), lower(), upper(), split(), replace()",
      "Sorting & Statistics: sort_values() ascending/descending, sort_index() & value_counts() frequencies",
      "GroupBy Mastery (Split-Apply-Combine): groupby() with agg() for multi-column custom summaries",
      "Pivot Tables & Crosstabs: pivot_table() with index, columns, values, aggfunc & pd.crosstab()",
      "Combining DataFrames: pd.concat() vertical/horizontal, merge() with inner, left, right, outer joins & join()",
      "Time Series Analysis: pd.to_datetime(), setting DateTimeIndex, resampling ('D', 'W', 'M'), rolling moving averages",
      "Custom Logic with apply() & map(): Vectorized apply() across rows/columns & lambda transformations",
      "Advanced Wrangling & Memory Optimization: chunksize reading for large files, categorical dtype conversion",
      "Data Reshaping: melt() unpivoting wide-to-long, pivot() long-to-wide & multi-index handling",
      "Data Quality Dimensions: Checking accuracy, completeness, consistency, validity, and timeliness"
    ]
  },
  {
    id: 4,
    name: "PHASE 4",
    title: "Data Visualisation (Matplotlib, Seaborn & Storytelling)",
    desc: "From raw plots to compelling executive presentations. Figure & Axes architecture in Matplotlib, statistical relationships in Seaborn, and data storytelling frameworks that drive decisions.",
    topics: [
      "Matplotlib Foundations: Figure canvas, Axes plot areas, Axis ticks & the object-oriented API",
      "Core Matplotlib Plots: plt.plot() line graphs, plt.scatter() scatterplots, plt.bar() bar charts, plt.hist() histograms",
      "Customization & Layout: Titles, axis labels, legends, grid lines, ticks formatting & figure sizes",
      "Subplots & Multi-Panel Figures: plt.subplots(nrows, ncols), layout sharing & tight_layout()",
      "Styling & Output: Color palettes, line styles, alpha opacity, DPI scaling & saving high-res PNG/PDF visuals",
      "Seaborn Introduction: High-level statistical visualization library built on Matplotlib",
      "Relational Plots: sns.scatterplot() correlation views & sns.lineplot() continuous trends over time",
      "Categorical Plots: sns.barplot() mean comparisons, sns.countplot() frequencies & sns.stripplot() / swarmplot()",
      "Distribution Visualization: sns.histplot() with KDE overlays, sns.kdeplot() density curves & sns.rugplot()",
      "Box & Violin Plots: sns.boxplot() quartile/outlier inspection & sns.violinplot() probability density distribution",
      "Regression & Mixed Plots: sns.regplot() fitted trendlines, sns.lmplot() multi-facet regression & sns.pairplot()",
      "Joint Distribution: sns.jointplot() combining scatter and marginal histograms/KDE curves",
      "Matrix & Correlation Plots: sns.heatmap() with annot=True for correlation matrices & sns.clustermap() hierarchical clustering",
      "Global Theming: sns.set_style('whitegrid', 'darkgrid'), color palettes (deep, muted, pastel, coolwarm)",
      "Data Storytelling: Choosing the right chart for the question (comparison, distribution, composition, relationship)",
      "Anti-Slop Visual Discipline: Eliminating chart junk, avoiding misleading 3D graphs & non-zero truncated axes",
      "Visual Hierarchy & Accessibility: Contrast ratio compliance, colorblind-friendly palettes & direct data labeling",
      "Narrative Arc for Engineers: Context → Insight → Evidence → Recommendation framework",
      "Executive Reports: Designing clean, one-page analytical briefing memos for non-technical stakeholders"
    ]
  },
  {
    id: 5,
    name: "PHASE 5",
    title: "Exploratory Data Analysis (EDA) & Investigation",
    desc: "Uncovering the story hidden in datasets before modeling. Univariate, bivariate, and multivariate analysis, outlier detection, data quality verification, anomaly detection, and end-to-end real dataset projects.",
    topics: [
      "EDA Foundations: What EDA is, why it precedes machine learning & the 5 questions every analyst must ask",
      "Dataset Profiling: Dimensions, feature classification (numeric continuous/discrete, categorical nominal/ordinal)",
      "Data Quality Audit: Null counts, duplicate rows, invalid formats, orphan records & data completeness score",
      "Univariate Numeric Analysis: Summary statistics, 5-number summary, histograms, KDE curves, skewness & kurtosis",
      "Univariate Categorical Analysis: Value counts, frequency tables, Pareto charts & cardinality inspection",
      "Bivariate Numerical vs Numerical: Scatter plots, Pearson/Spearman correlation coefficients & trendlines",
      "Bivariate Numerical vs Categorical: Box plots by category, group-wise mean/median comparisons & ANOVA tests",
      "Bivariate Categorical vs Categorical: Two-way cross-tabulations, stacked bar charts & Chi-Square independence",
      "Multivariate Analysis: Multi-variable correlation matrices, hue-grouped pairplots & multi-dimensional pivot tables",
      "Missingness Investigation: Missing Completely at Random (MCAR), Missing at Random (MAR), Missing Not at Random (MNAR)",
      "Outlier Treatment Rules: Box plot 1.5*IQR vs Z-Score 3-sigma thresholds, when to keep vs when to transform",
      "Feature Relationships & Pattern Discovery: Cluster-like groupings, non-linear dependencies & anomaly detection",
      "Data Leakage Awareness: Identifying future-looking variables and target leakage that ruin real-world accuracy",
      "Cohort & Funnel Analysis: Tracking user retention cohorts over time & multi-step conversion funnel drop-offs",
      "Drawing Business Insights: Converting statistical observations into measurable KPIs & commercial recommendations",
      "AI-Assisted EDA: Leveraging LLMs for initial code scaffolding, outlier hypothesis formulation & data profiling",
      "Complete End-to-End EDA Project: Raw messy dataset → Cleaning script → Visual inspection → Final Executive Report"
    ]
  },
  {
    id: 6,
    name: "PHASE 6",
    title: "SQL Mastery (PostgreSQL, Joins, Window Functions & CTEs)",
    desc: "Relational database design, Normalization (1NF-3NF), DDL/DML, CASE WHEN, GROUP BY, advanced Joins, Window Functions (Rank, Dense_Rank, Lag, Lead), CTEs, stored procedures, indexing, query optimization, and Python bridge.",
    topics: [
      "Database Foundations: Relational Database Management Systems (RDBMS), SQL language standards & PostgreSQL setup",
      "Database Design & Normalization: Entities, relationships (1:1, 1:N, N:M), ER diagrams, 1NF, 2NF, 3NF schema design",
      "Importing Real Data: Ingesting CSV files into tables via COPY command and graphical import wizards",
      "Data Retrieval with SELECT: SELECT columns, FROM table, column aliases (AS) & DISTINCT values",
      "Filtering Rows: WHERE clause, comparison operators (=, !=, <, >, <=, >=) & logical operators (AND, OR, NOT)",
      "Special Operators: BETWEEN ranges, IN lists, LIKE pattern matching (% and _ wildcards) & IS NULL / IS NOT NULL",
      "Sorting & Pagination: ORDER BY column ASC/DESC, multi-column sorting & LIMIT / OFFSET clauses",
      "Data Definition Language (DDL): CREATE TABLE, ALTER TABLE (ADD/DROP/MODIFY COLUMN), DROP TABLE, TRUNCATE",
      "Data Types & Constraints: INT, BIGINT, VARCHAR, TEXT, DATE, TIMESTAMP, DECIMAL, PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, DEFAULT",
      "Data Manipulation Language (DML): INSERT INTO rows, UPDATE ... SET ... WHERE, DELETE FROM ... WHERE",
      "Transactions & ACID: BEGIN, COMMIT, ROLLBACK & Atomicity, Consistency, Isolation, Durability principles",
      "Conditional Logic: CASE WHEN condition THEN val ELSE default END for derived columns & age/sales bucketing",
      "Null Handling Functions: COALESCE(val, default) to replace nulls & NULLIF(a, b) to prevent division by zero",
      "Scalar Functions: String functions (CONCAT, UPPER, SUBSTRING, LENGTH), Date functions (NOW, DATEDIFF, DATE_TRUNC), Math (ROUND, MOD)",
      "Aggregate Functions: COUNT(*), COUNT(DISTINCT col), SUM(), AVG(), MIN(), MAX()",
      "Grouping & Filtering: GROUP BY clause & HAVING clause (filtering groups after aggregation vs WHERE before)",
      "Relational Joins Deep Dive: INNER JOIN, LEFT OUTER JOIN, RIGHT OUTER JOIN, FULL OUTER JOIN",
      "Special Joins: SELF JOIN (hierarchical employee-manager models) & CROSS JOIN Cartesian products",
      "Subqueries (Nested Queries): Scalar subqueries in SELECT, subqueries in WHERE (IN, ANY, ALL) & derived tables in FROM",
      "Set Operators: UNION (distinct rows) vs UNION ALL (preserving duplicates), INTERSECT & EXCEPT",
      "Window Functions (Ranking): ROW_NUMBER(), RANK(), DENSE_RANK() OVER (PARTITION BY ... ORDER BY ...)",
      "Window Functions (Offset): LAG() and LEAD() for comparing values to prior or subsequent periods",
      "Window Functions (Running Calculations): SUM() OVER and AVG() OVER with dynamic ROWS BETWEEN frames",
      "Common Table Expressions (CTEs): The WITH clause for modular, multi-step readable query pipelines",
      "Database Views: CREATE VIEW and MATERIALIZED VIEW for saving complex analytical query results",
      "Performance & Indexing: B-tree indexes, CREATE INDEX, clustered indexes & reading EXPLAIN execution plans",
      "Stored Procedures & Triggers: Stored procedures with IN/OUT parameters & automated event triggers",
      "Practical SQL for Analytics: Date truncation, period-over-period growth, cohort retention funnels & deduplication",
      "Bridging SQL to Python: Pulling database query results directly into Pandas DataFrames using pd.read_sql()"
    ]
  },
  {
    id: 7,
    name: "PHASE 7",
    title: "No-Code Data Mastery (Excel Intelligence + Power BI Prodigy)",
    desc: "Spreadsheet intelligence with Advanced Excel (XLOOKUP, Dynamic Arrays, Pivot Tables, Power Query, What-If Analysis, VBA) and enterprise business intelligence with Power BI (Star Schema, DAX, AI Visuals, RLS, and Fabric).",
    topics: [
      "Excel Fundamentals: Grid navigation, cell referencing (relative, absolute $A$1, mixed), named ranges & data validation",
      "Advanced Formulas: Logical functions (IF, AND, OR, IFS, SWITCH, nested IFs), IFERROR & IFNA error handling",
      "Lookup Mastery: XLOOKUP (bidirectional, exact match, default if not found), INDEX + MATCH vs legacy VLOOKUP",
      "Text & Date Functions: LEFT, RIGHT, MID, TRIM, TEXTJOIN, CONCAT, DATEDIF, WEEKNUM, TODAY, NOW",
      "Dynamic Array Formulas: FILTER(), SORT(), UNIQUE(), SEQUENCE(), RANDARRAY(), and modern LET() & LAMBDA()",
      "Data Organization & Analysis: Multi-level sorting, advanced AutoFilter, conditional formatting rules & color scales",
      "Data Cleaning in Excel: Text-to-Columns, remove duplicates, Flash Fill & structured Excel Tables with Total Rows",
      "What-If Analysis: Goal Seek for reverse calculations, Data Tables for multi-scenario tests & Scenario Manager",
      "Pivot Tables & Pivot Charts: Grouping dates/numbers, slicers, timeline filters, calculated fields & interactive dashboards",
      "Power Query in Excel: Get & Transform, automated ETL steps, merging queries, appending tables & M language basics",
      "Power Pivot & DAX in Excel: Building relational Data Models, creating 1-to-many relationships & calculated DAX measures",
      "Excel Automation & Copilot: Recording macros, VBA editor fundamentals, Office Scripts & Copilot AI formula suggestions",
      "Power BI Foundations: Desktop vs Service vs Mobile, analytical workflow (Prepare → Model → Visualize → Analyze → Share)",
      "Connecting Data Sources: Excel workbooks, CSV folders, PostgreSQL/SQL Server, web APIs, SharePoint, JSON",
      "Power Query Editor (M Engine): Column profiling, unpivoting columns, conditional columns & creating custom Date Tables",
      "Semantic Data Modeling: Star Schema vs Snowflake Schema, Fact tables vs Dimension tables, Primary & Foreign Keys",
      "Relationship Management: Cardinality (1:N, N:M), cross-filter direction & managing inactive relationships with USERELATIONSHIP",
      "DAX Foundations: Calculated Columns vs Calculated Measures, Row Context vs Filter Context & CALCULATE() modifier",
      "Time Intelligence DAX: TOTALYTD(), DATESMTD(), DATEADD(), SAMEPERIODLASTYEAR(), DATESBETWEEN() for growth analysis",
      "Report Design & Visual Types: Bar, Column, Line, Scatter, Treemap, Waterfall, Gauge, KPI Cards, Multi-row cards & Tables",
      "Interactive Dashboard UX: Bookmarks & buttons for storytelling, drill-through pages, sync slicers & custom tooltips",
      "AI Visuals in Power BI: Key Influencers, Decomposition Tree, Smart Narratives & Q&A natural language querying",
      "Advanced Analytics: What-If parameters, forecasting trendlines, clustering & Python script visual integration",
      "Governance & Security: Creating Workspaces, Row-Level Security (RLS) static & dynamic user-filter configuration",
      "Publishing & Sharing: Scheduled dataset refreshes, data gateway configuration, KPI alerts & Microsoft Fabric integration"
    ]
  },
  {
    id: 8,
    name: "PHASE 8",
    title: "Machine Learning Unleashed (Predictive & Unsupervised)",
    desc: "Machine Learning workflow: feature preprocessing with Scikit-Learn pipelines, regression models, classification algorithms (Logistic, Random Forest, XGBoost), clustering (K-Means, DBSCAN), model evaluation, and tuning.",
    topics: [
      "Machine Learning Overview: Supervised vs Unsupervised vs Reinforcement learning & the full ML lifecycle",
      "Feature Preprocessing: StandardScaler, MinMaxScaler for gradient & distance-based algorithm compatibility",
      "Categorical Encoding: OneHotEncoder (nominal) vs OrdinalEncoder (ranked) & handling unknown categories",
      "Advanced Imputation: KNNImputer (nearest-neighbor imputation) vs simple mean/median imputation",
      "Train-Test Splitting: train_test_split() with stratify parameter & preventing data leakage",
      "Scikit-Learn Pipeline: Chaining imputation, scaling, encoding & estimator into a leak-proof Pipeline object",
      "Supervised Regression: Simple & Multiple Linear Regression (Y = mX + c), cost function & Ordinary Least Squares",
      "Regularization: Ridge (L2 penalty), Lasso (L1 feature selection) & ElasticNet to prevent overfitting",
      "Regression Evaluation: Mean Absolute Error (MAE), Mean Squared Error (MSE), RMSE & R² Coefficient of Determination",
      "Polynomial Regression: Fitting non-linear curves using PolynomialFeatures degree expansions",
      "Supervised Classification: Logistic Regression, sigmoid probability curve & decision boundary thresholds",
      "Tree-Based Models: Decision Trees, Gini impurity vs Entropy splits, tree depth pruning & feature importances",
      "Ensemble Learning: Random Forest bagging of decision trees, out-of-bag scoring & variance reduction",
      "Gradient Boosting & XGBoost: Sequential boosting, AdaBoost error reweighting & high-performance XGBoost",
      "Distance & Probabilistic Classifiers: K-Nearest Neighbors (KNN), Support Vector Machines (SVM kernels) & Naive Bayes",
      "Classification Metrics: Confusion Matrix, Accuracy, Precision, Recall, F1-Score & ROC-AUC curves",
      "Imbalanced Data Handling: SMOTE oversampling, majority undersampling & class_weight='balanced' adjustments",
      "Unsupervised Clustering: K-Means clustering algorithm, inertia minimization & Elbow Method for finding optimal K",
      "Cluster Validation: Silhouette Score analysis for evaluating cohesion and separation",
      "Density & Hierarchical Clustering: DBSCAN for irregular shapes/noise & Dendrograms in Agglomerative Clustering",
      "Dimensionality Reduction: Principal Component Analysis (PCA), explained variance ratio & 2D visualization",
      "Model Evaluation & Tuning: K-Fold & Stratified K-Fold cross-validation, GridSearchCV & RandomizedSearchCV",
      "Bias-Variance Tradeoff: Diagnosing underfitting vs overfitting & learning curves",
      "Model Persistence: Saving trained pipelines using joblib and pickle for deployment"
    ]
  },
  {
    id: 9,
    name: "PHASE 9",
    title: "Data Engineering Foundations for Analysts",
    desc: "Understanding how data reaches dashboards: ETL vs ELT pipelines, OLTP vs OLAP, Fact & Dimension tables, Star & Snowflake schemas, Slowly Changing Dimensions (SCD), automated Python pipelines, and cloud warehouses.",
    topics: [
      "ETL vs ELT Paradigms: Extract, Transform, Load vs Extract, Load, Transform in modern cloud warehouses",
      "Data Ingestion Strategies: Full table refresh vs incremental delta loading, batch processing vs streaming data",
      "OLTP vs OLAP Systems: Transactional databases (PostgreSQL, MySQL) vs Analytical warehouses (Snowflake, BigQuery)",
      "Dimensional Modeling: Fact tables (metrics/events) vs Dimension tables (context/attributes) & Grain definition",
      "Data Warehouse Schemas: Star schema simplicity vs Snowflake normalized hierarchies & data marts",
      "Slowly Changing Dimensions (SCD): Handling historical attribute changes (SCD Type 1 overwrite vs SCD Type 2 row versioning)",
      "Data Lineage & Metadata: Tracking where data originates, transformations applied & downstream consumer dependencies",
      "Building an Analytical Pipeline: Python script extracting from API → cleaning & validating → loading into PostgreSQL",
      "Scheduling & Automation: Automated recurring pipeline runs, logging failures & error alerting notifications",
      "Modern Data Tools Awareness: Apache Airflow DAG orchestration, dbt (data build tool) transformations & data tests",
      "Cloud Data Platforms: Overview of AWS Redshift, Google BigQuery, Snowflake & Microsoft Fabric Lakehouse"
    ]
  },
  {
    id: 10,
    name: "PHASE 10",
    title: "Time Series Analytics and Forecasting",
    desc: "Analyzing time-dependent trends, seasonality, stationarity, autocorrelation (ACF/PACF), moving averages, exponential smoothing, Holt-Winters, ARIMA, SARIMA modeling, and walk-forward validation.",
    topics: [
      "Time Series Foundations: Trend, seasonality, cyclical fluctuations, and irregular random noise",
      "Timestamp Mechanics: Frequency intervals, temporal granularity, missing time gaps & forward-fill resampling",
      "Stationarity in Time Series: Constant mean and variance over time, Augmented Dickey-Fuller (ADF) test & differencing",
      "Autocorrelation Analysis: Autocorrelation Function (ACF) & Partial Autocorrelation Function (PACF) plots",
      "Time-Based Splitting: Why random train-test splits break time dependency & setting chronological cutoffs",
      "Baseline Forecasting: Naive forecast, seasonal naive forecast & moving averages",
      "Exponential Smoothing: Simple Exponential Smoothing (SES), Holt's Linear Trend & Holt-Winters Seasonal Smoothing",
      "ARIMA Modeling: AutoRegressive (p), Integrated (d), Moving Average (q) terms & model identification",
      "SARIMA & Seasonal Modeling: Incorporating seasonal order (P, D, Q, s) using statsmodels in Python",
      "Forecast Evaluation Metrics: Mean Absolute Error (MAE), RMSE, Mean Absolute Percentage Error (MAPE) & limitations",
      "Rolling-Origin Validation: Walk-forward validation across expanding historical windows",
      "Communicating Uncertainty: Prediction intervals (80%, 95%) and explaining forecast confidence to business leaders",
      "Practical Forecasting Projects: Monthly retail sales, regional energy consumption & production demand planning"
    ]
  },
  {
    id: 11,
    name: "PHASE 11",
    title: "Analytics Delivery, Deployment & Professional Practice",
    desc: "Reproducible code with Git/GitHub, deploying interactive analytics web apps with Streamlit, FastAPI analytical endpoints, data privacy (PII & GDPR), ethical AI, executive presentation skills, and job readiness.",
    topics: [
      "Reproducible Analytics: Modular project folder structure (data/raw, data/processed, notebooks, src, reports)",
      "Version Control with Git & GitHub: Commits, branching, pull requests, .gitignore & managing large datasets safely",
      "Requirements & Environment Parity: Exporting pinned dependencies with requirements.txt and conda environment files",
      "Interactive Analytics Web Apps: Building quick web apps with Streamlit for stakeholders to tweak parameters",
      "API Delivery with FastAPI: Creating lightweight REST API endpoints to serve analytical calculations and model predictions",
      "Scheduled Dashboards & Automations: Setting automated Power BI gateway refreshes & failure alerts",
      "Data Privacy & Compliance: Personally Identifiable Information (PII), data minimization, GDPR/DPDP basics",
      "Access Control & Security: Least privilege principles, masking sensitive columns & storing API keys in .env variables",
      "Responsible Use of AI: Avoiding data leakage into public LLMs & bias audits in analytical conclusions",
      "Executive Communication: Writing concise 1-page executive memos (Situation → Complication → Resolution)",
      "Presenting to Non-Technical Audiences: Translating statistical metrics into dollars, time saved, and risk mitigated",
      "Job Readiness & Portfolio Building: Documenting GitHub repositories with clean READMEs, architecture diagrams & screenshots",
      "Interview Preparation: SDE/Analyst SQL live coding rounds, business case studies & portfolio walkthrough drills"
    ]
  },
  {
    id: 12,
    name: "PHASE 12",
    title: "Portfolio & 6 End-to-End Industry Capstones",
    desc: "Rigorous portfolio projects across Retail, HR, Finance, Marketing, Operations, and Automated Data Pipelines with complete problem statements, SQL/Python notebooks, Power BI dashboards, and executive presentations.",
    topics: [
      "Capstone 1 (Retail & E-commerce): Sales profitability, customer cohort retention & interactive Power BI dashboard",
      "Capstone 2 (HR & Workforce Analytics): Hiring funnel, employee attrition risk modeling & Row-Level Security (RLS)",
      "Capstone 3 (Finance & Accounting): Budget vs actuals variance, expense analysis & Time Intelligence DAX forecasting",
      "Capstone 4 (Marketing & Growth): Multi-channel campaign ROI, CAC payback, conversion funnels & A/B test evaluation",
      "Capstone 5 (Operations & Engineering): Production yield, machine downtime root-cause & IoT sensor anomaly detection",
      "Capstone 6 (Automated Data Pipeline): Live API ingestion → Python validation → PostgreSQL analytical warehouse → Power BI",
      "Portfolio Deliverables: Problem statement, data dictionary, data cleaning log, SQL scripts, Jupyter notebooks",
      "Executive Presentation: 10 evidence-backed business insights, risk limitations, and final slide-deck presentation"
    ]
  }
];
