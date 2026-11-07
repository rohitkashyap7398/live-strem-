export interface DsaProblem {
  id: number;
  problem: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  pattern: string;
}

export interface DsaTopicModule {
  id: number;
  title: string;
  badge: string;
  concepts: string[];
  problems: DsaProblem[];
}

export interface DsaJavaCohort {
  title: string;
  subtitle: string;
  overviewHighlights: string[];
  bonusSheets: string[];
  stats: {
    videoSolutions: string;
    patternsCovered: string;
    mcqsCount: string;
    assignmentsCount: string;
    liveWeekly: string;
    discordSupport: string;
  };
  topics: DsaTopicModule[];
}

export const IGNITE2_DSA_JAVA: DsaJavaCohort = {
  title: "Data Structures & Algorithms in Java | Cohort 3.0",
  subtitle: "Complete Coding Journey – From Basics to Placement Level Mastery",
  overviewHighlights: [
    "350+ recorded video solutions covering important placement problems",
    "25+ coding patterns covered (problem-solving focused)",
    "Advanced DSA concepts: Graphs, DP, Trees, Trie, Heaps & Sliding Window",
    "300 MCQs for rock-solid concept clarity and speed drills",
    "100+ assignment questions for rigorous hands-on practice",
    "One live interactive masterclass every week with Rohit Sir",
    "Dedicated 24/7 mentor doubt resolution on Discord",
    "Complete interview guidance, resume building & mock drills",
    "Curated handwritten notes & visual memory maps",
    "Weekly online coding contests & leaderboard challenges"
  ],
  bonusSheets: [
    "Company-focused interview question sheets (Google, Amazon, Microsoft, Walmart)",
    "Service-based & product-based top 100 repeated question sets"
  ],
  stats: {
    videoSolutions: "350+ Video Solutions",
    patternsCovered: "25+ Coding Patterns",
    mcqsCount: "300 Concept MCQs",
    assignmentsCount: "100+ Assignments",
    liveWeekly: "Weekly Live Labs",
    discordSupport: "24/7 Doubt Desk"
  },
  topics: [
    {
      id: 1,
      title: "Basics of Programming",
      badge: "MODULE 1",
      concepts: ["Variables, Data Types", "Input/Output (Scanner, Print)", "Operators", "Expressions & Formulas", "Math API"],
      problems: [
        { id: 1, problem: "Sum of two integers", difficulty: "Easy", pattern: "Input → Process → Output" },
        { id: 2, problem: "Print message with values and sum", difficulty: "Easy", pattern: "Expression Evaluation" },
        { id: 3, problem: "Accept two integers and print sum", difficulty: "Easy", pattern: "Input → Process → Output" },
        { id: 4, problem: "Accept name, age and print formatted output", difficulty: "Easy", pattern: "Input → Output Formatting" },
        { id: 5, problem: "Increment & Decrement operator practice", difficulty: "Easy", pattern: "Variable Manipulation" },
        { id: 6, problem: "Swap two numbers (with & without 3rd variable)", difficulty: "Easy", pattern: "Swap Pattern" },
        { id: 7, problem: "Rectangle area & perimeter calculation", difficulty: "Easy", pattern: "Formula Based" },
        { id: 8, problem: "Compound Interest calculation", difficulty: "Easy", pattern: "Mathematical Simulation" },
        { id: 9, problem: "Triangle area using Heron's formula", difficulty: "Medium", pattern: "Formula + Multi-step Calculation" }
      ]
    },
    {
      id: 2,
      title: "Control Flow Statements",
      badge: "MODULE 2",
      concepts: ["if, if-else", "Nested conditions", "Ternary operator", "Type casting"],
      problems: [
        { id: 10, problem: "Greatest between two numbers", difficulty: "Easy", pattern: "Comparison" },
        { id: 11, problem: "Gender-based greeting message", difficulty: "Easy", pattern: "Conditional Mapping" },
        { id: 12, problem: "Handle wrong gender input + validation", difficulty: "Easy", pattern: "Input Validation" },
        { id: 13, problem: "Check even or odd", difficulty: "Easy", pattern: "Modulo Check" },
        { id: 14, problem: "Voter eligibility check (+ years left)", difficulty: "Medium", pattern: "Conditional + Calculation" },
        { id: 15, problem: "Day name from number (1–7)", difficulty: "Easy", pattern: "Mapping / Conditional" },
        { id: 16, problem: "Greatest among three numbers", difficulty: "Easy", pattern: "Nested Comparison" },
        { id: 17, problem: "Leap year check", difficulty: "Easy", pattern: "Mathematical Condition" },
        { id: 18, problem: "Shop discount calculation", difficulty: "Medium", pattern: "Conditional + Formula" },
        { id: 19, problem: "Electricity bill calculation", difficulty: "Medium", pattern: "Slab Based Calculation" }
      ]
    },
    {
      id: 3,
      title: "Loops & Switch Statement (Pattern Programming)",
      badge: "MODULE 3",
      concepts: ["for, while, do-while", "Nested loops", "break, continue", "switch statement", "Pattern printing (nested loops)"],
      problems: [
        { id: 20, problem: "Print 'Hello World' n times", difficulty: "Easy", pattern: "Iteration" },
        { id: 21, problem: "Print natural numbers up to n", difficulty: "Easy", pattern: "Iteration" },
        { id: 22, problem: "Print n to 1 (reverse loop)", difficulty: "Easy", pattern: "Reverse Iteration" },
        { id: 23, problem: "Multiplication table of a number", difficulty: "Easy", pattern: "Iteration + Formula" },
        { id: 24, problem: "Sum up to n terms", difficulty: "Easy", pattern: "Accumulation" },
        { id: 25, problem: "Sum of even & odd numbers separately", difficulty: "Easy", pattern: "Conditional + Accumulation" },
        { id: 26, problem: "Print all factors of a number", difficulty: "Medium", pattern: "Factor Pattern" },
        { id: 27, problem: "Sum of all factors", difficulty: "Medium", pattern: "Factor + Accumulation" },
        { id: 28, problem: "Prime number check", difficulty: "Medium", pattern: "Factor Pattern" },
        { id: 29, problem: "Power of a number (a^b)", difficulty: "Medium", pattern: "Repeated Multiplication" },
        { id: 30, problem: "Print each digit of a number", difficulty: "Medium", pattern: "Digit Extraction" },
        { id: 31, problem: "Sum of digits", difficulty: "Medium", pattern: "Digit Extraction + Accumulation" },
        { id: 32, problem: "Reverse a number", difficulty: "Medium", pattern: "Digit Manipulation" },
        { id: 33, problem: "Palindrome number check", difficulty: "Medium", pattern: "Digit Manipulation" },
        { id: 34, problem: "Strong number check", difficulty: "Medium", pattern: "Digit + Factorial" },
        { id: 35, problem: "Automorphic number", difficulty: "Medium", pattern: "Mathematical Pattern" },
        { id: 36, problem: "Print 'Hello' until wrong input (do-while)", difficulty: "Easy", pattern: "Sentinel Loop" },
        { id: 37, problem: "Menu-driven calculator (do-while)", difficulty: "Medium", pattern: "Menu Loop" },
        { id: 38, problem: "Print weekday using switch", difficulty: "Easy", pattern: "Mapping (Switch)" },
        { id: 39, problem: "Check vowel/consonant using switch", difficulty: "Easy", pattern: "Character Mapping" },
        { id: 40, problem: "Project - Guess Game", difficulty: "Medium", pattern: "Simulation + Loop" },
        { id: 41, problem: "Right Triangle - Star Pattern", difficulty: "Easy", pattern: "Nested Loop Pattern" },
        { id: 42, problem: "Right Triangle - Number Pattern", difficulty: "Easy", pattern: "Nested Loop Pattern" },
        { id: 43, problem: "Right Triangle - Alphabet Pattern", difficulty: "Easy", pattern: "Nested Loop Pattern" },
        { id: 44, problem: "Inverted Right Triangle Pattern", difficulty: "Medium", pattern: "Nested Loop Pattern" },
        { id: 45, problem: "Mirrored Right Triangle Pattern", difficulty: "Medium", pattern: "Nested Loop Pattern" },
        { id: 46, problem: "Triangle Pattern", difficulty: "Medium", pattern: "Nested Loop Pattern" },
        { id: 47, problem: "V Pattern", difficulty: "Medium", pattern: "Pattern Logic" },
        { id: 48, problem: "X Pattern", difficulty: "Medium", pattern: "Pattern Logic" }
      ]
    },
    {
      id: 4,
      title: "Methods & Arguments",
      badge: "MODULE 4",
      concepts: ["Method Signature, Static & Non-Static Methods", "Factory Method", "Method Invocation using Object Reference", "Pass-by-value semantics"],
      problems: [
        { id: 481, problem: "Design Math Utilities Class with static methods", difficulty: "Easy", pattern: "Method Design" },
        { id: 482, problem: "Overloaded area calculation methods", difficulty: "Easy", pattern: "Method Overloading" }
      ]
    },
    {
      id: 5,
      title: "Array Data Structures (Level - 1)",
      badge: "MODULE 5",
      concepts: ["Arrays (1D), indexing", "Traversal", "Reversal, Rotation", "Basic array operations"],
      problems: [
        { id: 49, problem: "Sum & average of array elements", difficulty: "Easy", pattern: "Traversal + Accumulation" },
        { id: 50, problem: "Find greatest element", difficulty: "Easy", pattern: "Max Tracking" },
        { id: 51, problem: "Find second greatest element", difficulty: "Medium", pattern: "Max Tracking" },
        { id: 52, problem: "Check if array is sorted", difficulty: "Easy", pattern: "Traversal + Comparison" },
        { id: 53, problem: "Reverse copy of array", difficulty: "Easy", pattern: "Traversal + Reverse" },
        { id: 54, problem: "Left rotation by 1", difficulty: "Easy", pattern: "Rotation" },
        { id: 55, problem: "Left rotation by K", difficulty: "Medium", pattern: "Rotation" },
        { id: 56, problem: "Reverse array without extra space", difficulty: "Easy", pattern: "Two Pointer" },
        { id: 57, problem: "Move negatives to left, positives to right", difficulty: "Medium", pattern: "Partition / Two Pointer" },
        { id: 58, problem: "Count subarrays with given sum", difficulty: "Medium", pattern: "Prefix Sum" }
      ]
    },
    {
      id: 6,
      title: "Searching Algorithms",
      badge: "MODULE 6",
      concepts: ["Linear Search", "Binary Search Foundations", "Search Space Analysis"],
      problems: [
        { id: 581, problem: "Linear Search with occurrence count", difficulty: "Easy", pattern: "Linear Scan" },
        { id: 582, problem: "Binary search on sorted array", difficulty: "Easy", pattern: "Divide & Conquer" }
      ]
    },
    {
      id: 7,
      title: "Sorting Algorithms (Elementary)",
      badge: "MODULE 7",
      concepts: ["Stable vs Unstable Sort", "Comparison-based sorting", "In-place sorting"],
      problems: [
        { id: 59, problem: "Bubble Sort", difficulty: "Easy", pattern: "Comparison + Swapping" },
        { id: 60, problem: "Insertion Sort", difficulty: "Easy", pattern: "Insertion + Shifting" },
        { id: 61, problem: "Selection Sort", difficulty: "Easy", pattern: "Selection + Swapping" }
      ]
    },
    {
      id: 8,
      title: "Matrix (2D Arrays)",
      badge: "MODULE 8",
      concepts: ["2D Arrays, Jagged Arrays", "Matrix traversal", "Index handling & exceptions"],
      problems: [
        { id: 62, problem: "Matrix Diagonal Sum", difficulty: "Easy", pattern: "Traversal" },
        { id: 63, problem: "Transpose Matrix", difficulty: "Easy", pattern: "Index Transformation" },
        { id: 64, problem: "Flipping an Image", difficulty: "Easy", pattern: "Two Pointer (Row-wise)" },
        { id: 65, problem: "Rotate Image (90 degrees)", difficulty: "Medium", pattern: "Transpose + Reverse" },
        { id: 66, problem: "Search a 2D Matrix", difficulty: "Medium", pattern: "Binary Search" },
        { id: 67, problem: "Set Matrix Zeroes", difficulty: "Medium", pattern: "Marking / In-place" }
      ]
    },
    {
      id: 9,
      title: "Time & Space Complexity",
      badge: "MODULE 9",
      concepts: ["Time Complexity (Big-O, Omega, Theta)", "Space Complexity", "Complexity equations", "TLE (Time Limit Exceeded)", "Constraints & judge rules"],
      problems: [
        { id: 671, problem: "Calculate Big-O of nested loop snippets", difficulty: "Easy", pattern: "Asymptotic Analysis" },
        { id: 672, problem: "Space optimization in recursive Fibonacci", difficulty: "Medium", pattern: "Space Reduction" }
      ]
    },
    {
      id: 10,
      title: "OOPS Introduction",
      badge: "MODULE 10",
      concepts: ["Class, Object", "Constructor", "'this' keyword", "Encapsulation (basics)"],
      problems: [
        { id: 68, problem: "Design Private Cab Service", difficulty: "Medium", pattern: "Object Modeling" },
        { id: 69, problem: "Design Railway Ticket Class", difficulty: "Easy", pattern: "Class Design" }
      ]
    },
    {
      id: 11,
      title: "String & Character Manipulation",
      badge: "MODULE 11",
      concepts: ["String literals, immutability", "String methods & StringBuilder", "Character operations", "Traversal & manipulation"],
      problems: [
        { id: 70, problem: "Print each character of string", difficulty: "Easy", pattern: "Traversal" },
        { id: 71, problem: "Reverse a string", difficulty: "Easy", pattern: "Two Pointer" },
        { id: 72, problem: "Palindrome using method (Two Pointer)", difficulty: "Easy", pattern: "Two Pointer" },
        { id: 73, problem: "Count vowels and consonants", difficulty: "Easy", pattern: "Character Classification" },
        { id: 74, problem: "Toggle each alphabet", difficulty: "Medium", pattern: "Character Manipulation" },
        { id: 75, problem: "Count strings with given prefix", difficulty: "Medium", pattern: "Prefix Matching" },
        { id: 76, problem: "Capitalize first & last character of each word", difficulty: "Medium", pattern: "String Manipulation" },
        { id: 77, problem: "Maximum number of words in sentences", difficulty: "Easy", pattern: "String Parsing" },
        { id: 78, problem: "Frequency of each character", difficulty: "Medium", pattern: "Hashing" },
        { id: 79, problem: "Check anagram strings", difficulty: "Medium", pattern: "Hashing / Sorting" },
        { id: 80, problem: "Sort words in a sentence", difficulty: "Medium", pattern: "Sorting + Parsing" },
        { id: 81, problem: "Rotate string", difficulty: "Medium", pattern: "String Manipulation" }
      ]
    },
    {
      id: 12,
      title: "Java Collections Framework",
      badge: "MODULE 12",
      concepts: ["Collections vs Collection", "ArrayList, HashSet, HashMap, TreeMap", "Dynamic data structures", "Hashing basics"],
      problems: [
        { id: 82, problem: "Print unique elements in array", difficulty: "Easy", pattern: "HashSet" },
        { id: 83, problem: "Frequency of elements in array", difficulty: "Easy", pattern: "HashMap (Hashing)" },
        { id: 84, problem: "Jewels and Stones", difficulty: "Easy", pattern: "Hashing" },
        { id: 85, problem: "Check if sentence is pangram", difficulty: "Easy", pattern: "HashSet" },
        { id: 86, problem: "First letter to appear twice", difficulty: "Easy", pattern: "Hashing" },
        { id: 87, problem: "Sum of unique elements", difficulty: "Easy", pattern: "HashSet + Traversal" },
        { id: 88, problem: "Sort the People", difficulty: "Medium", pattern: "HashMap + Sorting" },
        { id: 89, problem: "Most Frequent Even Element", difficulty: "Medium", pattern: "HashMap + Frequency" }
      ]
    },
    {
      id: 13,
      title: "Memory Areas & Recursion - I",
      badge: "MODULE 13",
      concepts: ["Stack memory, stack frames", "Recursion basics", "Base case & recursive calls"],
      problems: [
        { id: 90, problem: "Print name N times", difficulty: "Easy", pattern: "Recursion (Linear)" },
        { id: 91, problem: "Print 1 to N", difficulty: "Easy", pattern: "Recursion (Forward)" },
        { id: 92, problem: "Print N to 1", difficulty: "Easy", pattern: "Recursion (Backward)" },
        { id: 93, problem: "Sum of first N numbers", difficulty: "Easy", pattern: "Recursion (Accumulation)" },
        { id: 94, problem: "Factorial of a number", difficulty: "Easy", pattern: "Recursion (Multiplicative)" },
        { id: 95, problem: "Reverse an array", difficulty: "Easy", pattern: "Recursion + Two Pointer" },
        { id: 96, problem: "Check palindrome string", difficulty: "Easy", pattern: "Recursion + Two Pointer" },
        { id: 97, problem: "Fibonacci number", difficulty: "Easy", pattern: "Recursion (Tree)" }
      ]
    },
    {
      id: 14,
      title: "Mathematics for Programming",
      badge: "MODULE 14",
      concepts: ["GCD, LCM", "Prime numbers, factors", "Logarithmic operations", "Sieve technique", "Fast exponentiation"],
      problems: [
        { id: 98, problem: "GCD / HCF of two numbers", difficulty: "Easy", pattern: "Euclidean Algorithm" },
        { id: 99, problem: "GCD of array", difficulty: "Medium", pattern: "GCD Reduction" },
        { id: 100, problem: "LCM of two numbers", difficulty: "Easy", pattern: "GCD + Formula" },
        { id: 101, problem: "Count digits of a number", difficulty: "Easy", pattern: "Logarithmic Trick" },
        { id: 102, problem: "Median of data", difficulty: "Easy", pattern: "Sorting / Logic" },
        { id: 103, problem: "Palindromic number", difficulty: "Easy", pattern: "Digit Manipulation" },
        { id: 104, problem: "Factors of a number", difficulty: "Easy", pattern: "Factor Pattern (√n)" },
        { id: 105, problem: "Prime number check", difficulty: "Easy", pattern: "Factor Pattern (√n)" },
        { id: 106, problem: "Count primes (Sieve of Eratosthenes)", difficulty: "Medium", pattern: "Sieve Technique" },
        { id: 107, problem: "Kth factor of n", difficulty: "Medium", pattern: "Factor Traversal" },
        { id: 108, problem: "Square root (Integer)", difficulty: "Medium", pattern: "Binary Search" },
        { id: 109, problem: "Power (x^n)", difficulty: "Medium", pattern: "Fast Exponentiation" },
        { id: 110, problem: "Power of Two", difficulty: "Easy", pattern: "Bit Manipulation" }
      ]
    },
    {
      id: 15,
      title: "Arrays & ArrayList Problems (Level - 2)",
      badge: "MODULE 15",
      concepts: ["ArrayList basics", "Two Pointer", "Prefix Sum", "Sliding Window", "Greedy / Kadane's Algorithm"],
      problems: [
        { id: 111, problem: "Max Consecutive Ones", difficulty: "Easy", pattern: "Sliding Window" },
        { id: 112, problem: "Merge Sorted Array", difficulty: "Easy", pattern: "Two Pointer" },
        { id: 113, problem: "Remove Duplicates from Sorted Array", difficulty: "Easy", pattern: "Two Pointer" },
        { id: 114, problem: "Duplicate Zeros", difficulty: "Easy", pattern: "Simulation" },
        { id: 115, problem: "Valid Mountain Array", difficulty: "Easy", pattern: "Traversal" },
        { id: 116, problem: "Replace Elements with Greatest on Right", difficulty: "Easy", pattern: "Reverse Traversal" },
        { id: 117, problem: "Squares of a Sorted Array", difficulty: "Easy", pattern: "Two Pointer" },
        { id: 118, problem: "Move Zeroes", difficulty: "Easy", pattern: "Two Pointer" },
        { id: 119, problem: "Sort Array By Parity", difficulty: "Easy", pattern: "Partition / Two Pointer" },
        { id: 120, problem: "Fibonacci Number (Space Optimized)", difficulty: "Easy", pattern: "DP / Iteration" },
        { id: 121, problem: "Two Sum", difficulty: "Easy", pattern: "Hashing" },
        { id: 122, problem: "Running Sum of 1D Array", difficulty: "Easy", pattern: "Prefix Sum" },
        { id: 123, problem: "Find Pivot Index", difficulty: "Easy", pattern: "Prefix Sum" },
        { id: 124, problem: "Product of Array Except Self", difficulty: "Medium", pattern: "Prefix + Suffix" },
        { id: 125, problem: "Maximum Subarray (Kadane's Algo)", difficulty: "Medium", pattern: "Kadane" },
        { id: 126, problem: "Majority Element (Boyer Moore)", difficulty: "Medium", pattern: "Voting Algorithm" },
        { id: 127, problem: "3Sum", difficulty: "Medium", pattern: "Sorting + Two Pointer" },
        { id: 128, problem: "Best Time to Buy & Sell Stock", difficulty: "Easy", pattern: "Kadane / Greedy" },
        { id: 129, problem: "Best Time to Buy & Sell Stock II", difficulty: "Medium", pattern: "Greedy" },
        { id: 130, problem: "Trapping Rain Water", difficulty: "Hard", pattern: "Two Pointer" },
        { id: 131, problem: "Container With Most Water", difficulty: "Medium", pattern: "Two Pointer" }
      ]
    },
    {
      id: 16,
      title: "Advanced Sorting Algorithms & Cyclic Sort",
      badge: "MODULE 16",
      concepts: ["Merge Sort", "Quick Sort", "Cyclic Sort Pattern (1 to N array range)"],
      problems: [
        { id: 132, problem: "Missing Number", difficulty: "Easy", pattern: "Cyclic Sort" },
        { id: 133, problem: "Find All Numbers Disappeared in an Array", difficulty: "Easy", pattern: "Cyclic Sort" },
        { id: 134, problem: "Set Mismatch", difficulty: "Easy", pattern: "Cyclic Sort" },
        { id: 135, problem: "Find All Duplicates in an Array", difficulty: "Medium", pattern: "Cyclic Sort" },
        { id: 136, problem: "Find the Duplicate Number", difficulty: "Medium", pattern: "Cycle Detection" },
        { id: 137, problem: "First Missing Positive", difficulty: "Hard", pattern: "Cyclic Sort" }
      ]
    },
    {
      id: 17,
      title: "Binary Search Mastery (Level 1 & Binary Search on Answer)",
      badge: "MODULE 17",
      concepts: ["Binary Search (Iterative, Recursive)", "Search space reduction", "Order Agnostic BS", "Binary Search on Answer"],
      problems: [
        { id: 138, problem: "Binary Search on descending array", difficulty: "Easy", pattern: "Binary Search" },
        { id: 139, problem: "Order Agnostic Binary Search", difficulty: "Easy", pattern: "Binary Search" },
        { id: 140, problem: "Guess Number Higher or Lower", difficulty: "Easy", pattern: "Binary Search" },
        { id: 141, problem: "Search Insert Position", difficulty: "Easy", pattern: "Binary Search" },
        { id: 142, problem: "Ceiling of a number", difficulty: "Easy", pattern: "Binary Search" },
        { id: 143, problem: "Floor of a number", difficulty: "Easy", pattern: "Binary Search" },
        { id: 144, problem: "Smallest letter greater than target", difficulty: "Easy", pattern: "Binary Search" },
        { id: 145, problem: "Valid Perfect Square", difficulty: "Easy", pattern: "Binary Search" },
        { id: 146, problem: "First Bad Version", difficulty: "Easy", pattern: "Binary Search" },
        { id: 147, problem: "First and Last Position in Sorted Array", difficulty: "Medium", pattern: "Binary Search" },
        { id: 148, problem: "Count of element in sorted array", difficulty: "Medium", pattern: "Binary Search" },
        { id: 149, problem: "Peak in Mountain / Bitonic array", difficulty: "Medium", pattern: "Binary Search" },
        { id: 150, problem: "Search in Mountain / Bitonic array", difficulty: "Medium", pattern: "Binary Search" },
        { id: 151, problem: "Minimum in Rotated Sorted Array", difficulty: "Medium", pattern: "Binary Search" },
        { id: 152, problem: "Search in Rotated Sorted Array", difficulty: "Medium", pattern: "Binary Search" },
        { id: 153, problem: "Search in Infinite Sorted Array", difficulty: "Medium", pattern: "Binary Search" },
        { id: 154, problem: "Book Allocation Problem", difficulty: "Hard", pattern: "Binary Search on Answer" },
        { id: 155, problem: "Capacity to Ship Packages", difficulty: "Hard", pattern: "Binary Search on Answer" },
        { id: 156, problem: "Minimum Days to Make Bouquets", difficulty: "Hard", pattern: "Binary Search on Answer" },
        { id: 157, problem: "Smallest Divisor Given Threshold", difficulty: "Hard", pattern: "Binary Search on Answer" },
        { id: 158, problem: "Koko Eating Bananas", difficulty: "Hard", pattern: "Binary Search on Answer" },
        { id: 159, problem: "Split Array Largest Sum", difficulty: "Hard", pattern: "Binary Search on Answer" },
        { id: 160, problem: "Aggressive Cows", difficulty: "Hard", pattern: "Binary Search on Answer" }
      ]
    },
    {
      id: 18,
      title: "Hashing (Level - 2)",
      badge: "MODULE 18",
      concepts: ["Hashing fundamentals", "Collision handling (Chaining, Open Addressing)", "HashMap / HashSet usage", "Prefix Sum with Hashing"],
      problems: [
        { id: 161, problem: "Intersection of Two Arrays", difficulty: "Easy", pattern: "HashSet" },
        { id: 162, problem: "Intersection of Two Arrays II", difficulty: "Easy", pattern: "HashMap" },
        { id: 163, problem: "Subarray Sum Equals K (Positive)", difficulty: "Easy", pattern: "Sliding Window" },
        { id: 164, problem: "Subarray Sum Equals K", difficulty: "Medium", pattern: "Prefix Sum + HashMap" },
        { id: 165, problem: "Subarray with 0 Sum", difficulty: "Medium", pattern: "Prefix Sum + HashSet" },
        { id: 166, problem: "Longest Subarray with Sum K", difficulty: "Medium", pattern: "Prefix Sum + HashMap" },
        { id: 167, problem: "Contiguous Array", difficulty: "Medium", pattern: "Prefix Sum + HashMap" },
        { id: 168, problem: "Longest Consecutive Sequence", difficulty: "Medium", pattern: "HashSet" },
        { id: 169, problem: "Count distinct elements in every window", difficulty: "Medium", pattern: "Sliding Window + HashMap" },
        { id: 170, problem: "Insert Delete GetRandom O(1)", difficulty: "Hard", pattern: "HashMap + Design" }
      ]
    },
    {
      id: 19,
      title: "Linked List (Singly, Doubly & Circular)",
      badge: "MODULE 19",
      concepts: ["Linked List implementation", "Dynamic memory allocation", "Types of Linked List", "Two Pointer technique (Tortoise & Hare)"],
      problems: [
        { id: 171, problem: "Design Linked List", difficulty: "Easy", pattern: "Implementation" },
        { id: 172, problem: "Middle of Linked List", difficulty: "Easy", pattern: "Two Pointer (Tortoise & Hare)" },
        { id: 173, problem: "Merge Two Sorted Lists", difficulty: "Easy", pattern: "Two Pointer" },
        { id: 174, problem: "Linked List Cycle", difficulty: "Easy", pattern: "Cycle Detection (Floyd's)" },
        { id: 175, problem: "Linked List Cycle II", difficulty: "Medium", pattern: "Cycle Detection" },
        { id: 176, problem: "Reverse Linked List", difficulty: "Easy", pattern: "Iterative / Recursion" },
        { id: 177, problem: "Convert Binary LL to Integer", difficulty: "Easy", pattern: "Traversal" },
        { id: 178, problem: "Merge K Sorted Lists", difficulty: "Hard", pattern: "Heap / Divide & Conquer" },
        { id: 179, problem: "Remove Duplicates from Sorted List", difficulty: "Easy", pattern: "Traversal" },
        { id: 180, problem: "Remove Duplicates II", difficulty: "Medium", pattern: "Traversal" },
        { id: 181, problem: "Intersection of Two Linked Lists", difficulty: "Easy", pattern: "Two Pointer" },
        { id: 182, problem: "Remove Linked List Elements", difficulty: "Easy", pattern: "Traversal" },
        { id: 183, problem: "Palindrome Linked List", difficulty: "Easy", pattern: "Two Pointer" },
        { id: 184, problem: "Delete Node in Linked List", difficulty: "Easy", pattern: "Pointer Manipulation" },
        { id: 185, problem: "Reverse Nodes in K Group", difficulty: "Hard", pattern: "Linked List Manipulation" },
        { id: 186, problem: "Swap Nodes in Pairs", difficulty: "Medium", pattern: "Pointer Manipulation" },
        { id: 187, problem: "Remove Nth Node From End", difficulty: "Medium", pattern: "Two Pointer" },
        { id: 188, problem: "Add Two Numbers", difficulty: "Medium", pattern: "Simulation" },
        { id: 189, problem: "Copy List with Random Pointer", difficulty: "Hard", pattern: "HashMap / Cloning" },
        { id: 190, problem: "Flattening a Linked List", difficulty: "Hard", pattern: "Recursion / Divide & Conquer" }
      ]
    },
    {
      id: 20,
      title: "Stack & Queue (Monotonic Stack & Expressions)",
      badge: "MODULE 20",
      concepts: ["Stack, Queue, Deque", "Implementation using arrays/collections", "Expression evaluation (Infix, Prefix, Postfix)", "Monotonic Stack Pattern"],
      problems: [
        { id: 191, problem: "Implement Queue using Stacks", difficulty: "Easy", pattern: "Simulation" },
        { id: 192, problem: "Implement Stack using Queues", difficulty: "Easy", pattern: "Simulation" },
        { id: 193, problem: "Infix to Postfix Conversion", difficulty: "Medium", pattern: "Stack (Expression)" },
        { id: 194, problem: "Prefix to Infix Conversion", difficulty: "Medium", pattern: "Stack (Expression)" },
        { id: 195, problem: "Prefix to Postfix Conversion", difficulty: "Medium", pattern: "Stack (Expression)" },
        { id: 196, problem: "Postfix to Prefix Conversion", difficulty: "Medium", pattern: "Stack (Expression)" },
        { id: 197, problem: "Postfix to Infix Conversion", difficulty: "Easy", pattern: "Stack (Expression)" },
        { id: 198, problem: "Infix to Prefix Conversion", difficulty: "Medium", pattern: "Stack (Expression)" },
        { id: 199, problem: "Next Larger Element", difficulty: "Easy", pattern: "Monotonic Stack" },
        { id: 200, problem: "Smaller on Left", difficulty: "Easy", pattern: "Monotonic Stack" },
        { id: 201, problem: "Next Greater Element I", difficulty: "Easy", pattern: "Monotonic Stack" },
        { id: 202, problem: "Smallest number on left", difficulty: "Easy", pattern: "Monotonic Stack" },
        { id: 203, problem: "Next Smaller Element", difficulty: "Easy", pattern: "Monotonic Stack" },
        { id: 204, problem: "Backspace String Compare", difficulty: "Medium", pattern: "Stack / Two Pointer" },
        { id: 205, problem: "Stock Span Problem", difficulty: "Medium", pattern: "Monotonic Stack" },
        { id: 206, problem: "Online Stock Span", difficulty: "Medium", pattern: "Monotonic Stack" },
        { id: 207, problem: "Min Stack", difficulty: "Medium", pattern: "Stack Design" },
        { id: 208, problem: "Largest Rectangle in Histogram", difficulty: "Hard", pattern: "Monotonic Stack" },
        { id: 209, problem: "Maximal Rectangle", difficulty: "Hard", pattern: "Stack + Matrix" },
        { id: 210, problem: "Celebrity Problem", difficulty: "Medium", pattern: "Stack / Two Pointer" },
        { id: 211, problem: "LRU Cache", difficulty: "Hard", pattern: "HashMap + DLL" },
        { id: 212, problem: "LFU Cache", difficulty: "Hard", pattern: "HashMap + Design" }
      ]
    },
    {
      id: 21,
      title: "Bit Manipulation & Number System",
      badge: "MODULE 21",
      concepts: ["Bitwise operators (&, |, ^, ~, <<, >>)", "Bit manipulation techniques", "Masking & Power Sets"],
      problems: [
        { id: 213, problem: "Introduction to Bits and Tricks", difficulty: "Easy", pattern: "Bit Basics" },
        { id: 214, problem: "Check if i-th bit is set or not", difficulty: "Easy", pattern: "Bit Masking" },
        { id: 215, problem: "Check if number is odd or not", difficulty: "Easy", pattern: "Bit Check" },
        { id: 216, problem: "Check if number is power of 2", difficulty: "Easy", pattern: "Bit Trick" },
        { id: 217, problem: "Count number of set bits", difficulty: "Easy", pattern: "Bit Counting" },
        { id: 218, problem: "Set/Unset rightmost unset bit", difficulty: "Easy", pattern: "Bit Manipulation" },
        { id: 219, problem: "Swap two numbers without 3rd variable", difficulty: "Easy", pattern: "XOR Trick" },
        { id: 220, problem: "Divide two numbers without * and /", difficulty: "Medium", pattern: "Bit Manipulation" },
        { id: 221, problem: "Minimum bit flips to convert number", difficulty: "Medium", pattern: "XOR" },
        { id: 222, problem: "Single Number - I", difficulty: "Medium", pattern: "XOR" },
        { id: 223, problem: "Power Set (Bit Manipulation)", difficulty: "Medium", pattern: "Bit Masking" },
        { id: 224, problem: "XOR of numbers in a range", difficulty: "Medium", pattern: "Pattern + XOR" },
        { id: 226, problem: "Single Number - III", difficulty: "Medium", pattern: "XOR + Bit Masking" }
      ]
    },
    {
      id: 22,
      title: "Greedy Approach & Interval Problems",
      badge: "MODULE 22",
      concepts: ["Greedy choice property", "Local vs global optimum", "Sorting + selection strategy", "Interval scheduling"],
      problems: [
        { id: 227, problem: "Assign Cookies", difficulty: "Easy", pattern: "Greedy + Sorting" },
        { id: 228, problem: "Fractional Knapsack", difficulty: "Medium", pattern: "Greedy (Ratio Based)" },
        { id: 229, problem: "Lemonade Change", difficulty: "Easy", pattern: "Greedy (Simulation)" },
        { id: 230, problem: "Valid Parenthesis Checker", difficulty: "Hard", pattern: "Stack (Validation)" },
        { id: 231, problem: "N Meetings in One Room", difficulty: "Medium", pattern: "Greedy (Activity Selection)" },
        { id: 232, problem: "Jump Game I", difficulty: "Easy", pattern: "Greedy" },
        { id: 233, problem: "Jump Game II", difficulty: "Medium", pattern: "Greedy" },
        { id: 234, problem: "Minimum Platforms", difficulty: "Medium", pattern: "Greedy + Sorting" },
        { id: 235, problem: "Job Sequencing Problem", difficulty: "Medium", pattern: "Greedy + Heap" },
        { id: 236, problem: "Candy", difficulty: "Hard", pattern: "Greedy" },
        { id: 237, problem: "Shortest Job First", difficulty: "Medium", pattern: "Greedy (Scheduling)" },
        { id: 238, problem: "LRU Page Replacement", difficulty: "Medium", pattern: "Greedy / Simulation" },
        { id: 239, problem: "Insert Interval", difficulty: "Medium", pattern: "Greedy + Intervals" },
        { id: 240, problem: "Merge Intervals", difficulty: "Medium", pattern: "Greedy + Sorting" }
      ]
    },
    {
      id: 23,
      title: "Recursion & Backtracking - Advanced",
      badge: "MODULE 23",
      concepts: ["Tail & Head Recursion", "Backtracking state restoration", "Recursion decision tree pruning"],
      problems: [
        { id: 241, problem: "K-th Symbol in Grammar", difficulty: "Medium", pattern: "Recursion" },
        { id: 242, problem: "Tower of Hanoi", difficulty: "Medium", pattern: "Recursion" },
        { id: 243, problem: "Josephus Problem", difficulty: "Medium", pattern: "Recursion" },
        { id: 244, problem: "Find Winner of Circular Game", difficulty: "Medium", pattern: "Simulation / Recursion" },
        { id: 245, problem: "Sort List / Stack (Recursive)", difficulty: "Medium", pattern: "Recursion" },
        { id: 246, problem: "Power Set", difficulty: "Medium", pattern: "Backtracking" },
        { id: 247, problem: "Subsets", difficulty: "Medium", pattern: "Backtracking" },
        { id: 248, problem: "Permutations", difficulty: "Medium", pattern: "Backtracking" },
        { id: 249, problem: "Subsets II (Duplicate Handling)", difficulty: "Medium", pattern: "Backtracking" },
        { id: 250, problem: "Letter Combinations of Phone Number", difficulty: "Medium", pattern: "Backtracking" },
        { id: 251, problem: "Combination Sum", difficulty: "Medium", pattern: "Backtracking" },
        { id: 252, problem: "Combination Sum III", difficulty: "Medium", pattern: "Backtracking" },
        { id: 253, problem: "Rat in a Maze", difficulty: "Medium", pattern: "Backtracking" },
        { id: 254, problem: "Sudoku Solver", difficulty: "Hard", pattern: "Backtracking" },
        { id: 255, problem: "N-Queens", difficulty: "Hard", pattern: "Backtracking" },
        { id: 256, problem: "Word Search", difficulty: "Medium", pattern: "Backtracking" },
        { id: 257, problem: "Permutation Sequence", difficulty: "Hard", pattern: "Backtracking + Math" }
      ]
    },
    {
      id: 24,
      title: "Binary Tree (DFS & BFS Traversals)",
      badge: "MODULE 24",
      concepts: ["Tree basics & terminology", "Traversals (Inorder, Preorder, Postorder, Level-Order)", "Recursive tree processing & boundary checks"],
      problems: [
        { id: 258, problem: "Inorder Traversal", difficulty: "Easy", pattern: "DFS" },
        { id: 259, problem: "Preorder Traversal", difficulty: "Easy", pattern: "DFS" },
        { id: 260, problem: "Postorder Traversal", difficulty: "Easy", pattern: "DFS" },
        { id: 261, problem: "Maximum Depth of Binary Tree", difficulty: "Easy", pattern: "DFS" },
        { id: 262, problem: "Level Order Traversal", difficulty: "Easy", pattern: "BFS" },
        { id: 263, problem: "Level Order Traversal II", difficulty: "Easy", pattern: "BFS" },
        { id: 264, problem: "Symmetric Tree", difficulty: "Easy", pattern: "DFS" },
        { id: 265, problem: "Path Sum", difficulty: "Easy", pattern: "DFS" },
        { id: 266, problem: "Populate Next Right Pointers", difficulty: "Medium", pattern: "BFS" },
        { id: 267, problem: "Diameter of Binary Tree", difficulty: "Medium", pattern: "DFS" },
        { id: 268, problem: "Balanced Binary Tree", difficulty: "Easy", pattern: "DFS" },
        { id: 269, problem: "Same Tree", difficulty: "Easy", pattern: "DFS" },
        { id: 270, problem: "Zigzag Level Order Traversal", difficulty: "Medium", pattern: "BFS" },
        { id: 271, problem: "Left View of Binary Tree", difficulty: "Medium", pattern: "BFS/DFS" },
        { id: 272, problem: "Right View of Binary Tree", difficulty: "Medium", pattern: "BFS/DFS" },
        { id: 273, problem: "Top View of Binary Tree", difficulty: "Medium", pattern: "BFS + Map" },
        { id: 274, problem: "Bottom View of Binary Tree", difficulty: "Medium", pattern: "BFS + Map" },
        { id: 275, problem: "Vertical Order Traversal", difficulty: "Hard", pattern: "BFS + Map" },
        { id: 276, problem: "Sum of Longest Bloodline", difficulty: "Medium", pattern: "DFS" },
        { id: 277, problem: "Lowest Common Ancestor (LCA)", difficulty: "Medium", pattern: "DFS" },
        { id: 278, problem: "Path Sum II", difficulty: "Medium", pattern: "DFS + Backtracking" },
        { id: 279, problem: "Path Sum III", difficulty: "Medium", pattern: "Prefix Sum + DFS" },
        { id: 280, problem: "Construct Tree (Preorder + Inorder)", difficulty: "Medium", pattern: "Recursion" },
        { id: 281, problem: "Burning Tree", difficulty: "Hard", pattern: "BFS + Mapping" },
        { id: 282, problem: "Morris Traversal (O(1) Space)", difficulty: "Hard", pattern: "Threaded Tree" }
      ]
    },
    {
      id: 25,
      title: "Binary Search Tree (BST) & Balanced Trees",
      badge: "MODULE 25",
      concepts: ["BST properties & invariant", "Search, insert, delete in BST", "Inorder traversal sorted property", "AVL Tree balancing & Red-Black Tree concepts"],
      problems: [
        { id: 283, problem: "Validate Binary Search Tree", difficulty: "Medium", pattern: "DFS (Bounds Check)" },
        { id: 284, problem: "Search in BST", difficulty: "Easy", pattern: "BST Traversal" },
        { id: 285, problem: "Kth Smallest in BST", difficulty: "Medium", pattern: "Inorder Traversal" },
        { id: 286, problem: "Floor and Ceil in BST", difficulty: "Medium", pattern: "BST Traversal" },
        { id: 287, problem: "Delete Node in BST", difficulty: "Medium", pattern: "BST Manipulation" },
        { id: 288, problem: "Predecessor and Successor", difficulty: "Medium", pattern: "BST Traversal" },
        { id: 289, problem: "Lowest Common Ancestor in BST", difficulty: "Easy", pattern: "BST Property" },
        { id: 290, problem: "Two Sum IV (BST)", difficulty: "Easy", pattern: "Hashing / Inorder" },
        { id: 291, problem: "Convert Sorted Array to BST", difficulty: "Easy", pattern: "Divide & Conquer" }
      ]
    },
    {
      id: 26,
      title: "Binary Heap & Priority Queue",
      badge: "MODULE 26",
      concepts: ["Min Heap, Max Heap", "Heapify, HeapSort", "PriorityQueue in Java", "Comparator vs Comparable custom sorting"],
      problems: [
        { id: 292, problem: "Last Stone Weight", difficulty: "Easy", pattern: "Max Heap" },
        { id: 293, problem: "Kth Largest Element in Array", difficulty: "Medium", pattern: "Heap" },
        { id: 294, problem: "K Closest Points to Origin", difficulty: "Medium", pattern: "Heap" },
        { id: 295, problem: "Top K Frequent Elements", difficulty: "Medium", pattern: "Heap + Hashing" },
        { id: 296, problem: "Top K Frequent Words", difficulty: "Medium", pattern: "Heap + Sorting" },
        { id: 297, problem: "Sort Characters By Frequency", difficulty: "Medium", pattern: "Heap + Hashing" }
      ]
    },
    {
      id: 27,
      title: "Sliding Window Technique",
      badge: "MODULE 27",
      concepts: ["Fixed & variable window", "Two Pointer (expand/shrink)", "Window optimization with HashMaps"],
      problems: [
        { id: 298, problem: "Max Sum Subarray of size K", difficulty: "Easy", pattern: "Fixed Window" },
        { id: 299, problem: "Maximum Points You Can Obtain", difficulty: "Medium", pattern: "Sliding Window" },
        { id: 300, problem: "Count Occurrence of Anagram", difficulty: "Medium", pattern: "Sliding Window + Hashing" },
        { id: 301, problem: "Largest Subarray with Sum K", difficulty: "Medium", pattern: "Variable Window" },
        { id: 302, problem: "Pick Toys", difficulty: "Medium", pattern: "Variable Window" },
        { id: 303, problem: "Longest Substring Without Repeating Characters", difficulty: "Medium", pattern: "Sliding Window + Hashing" },
        { id: 304, problem: "Minimum Window Substring", difficulty: "Hard", pattern: "Sliding Window + Hashing" }
      ]
    },
    {
      id: 28,
      title: "Graph Data Structure & Algorithms",
      badge: "MODULE 28",
      concepts: ["Adjacency List & Matrix", "BFS, DFS", "Cycle detection (Directed & Undirected)", "Topological sort (DFS & Kahn's Algorithm)", "Dijkstra, Bellman-Ford, Prim's, Kruskal, Floyd-Warshall"],
      problems: [
        { id: 305, problem: "BFS Traversal", difficulty: "Easy", pattern: "BFS" },
        { id: 306, problem: "DFS Traversal", difficulty: "Easy", pattern: "DFS" },
        { id: 307, problem: "Cycle Detection (Undirected)", difficulty: "Medium", pattern: "BFS/DFS" },
        { id: 308, problem: "Cycle Detection (Directed)", difficulty: "Medium", pattern: "DFS" },
        { id: 309, problem: "Topological Sort (DFS)", difficulty: "Medium", pattern: "DFS" },
        { id: 310, problem: "Kahn's Algorithm (BFS Topo)", difficulty: "Medium", pattern: "BFS" },
        { id: 311, problem: "Topological Sort (Kahn's)", difficulty: "Medium", pattern: "BFS" },
        { id: 312, problem: "Cycle Detection (Kahn's)", difficulty: "Medium", pattern: "BFS" },
        { id: 313, problem: "Keys and Rooms", difficulty: "Medium", pattern: "DFS" },
        { id: 314, problem: "All Paths from Source to Target", difficulty: "Medium", pattern: "DFS" },
        { id: 315, problem: "Number of Islands", difficulty: "Medium", pattern: "DFS/BFS" },
        { id: 316, problem: "Dijkstra Algorithm", difficulty: "Medium", pattern: "Shortest Path" },
        { id: 317, problem: "Bellman Ford Algorithm", difficulty: "Medium", pattern: "Shortest Path" },
        { id: 318, problem: "Prim's Algorithm", difficulty: "Medium", pattern: "MST" },
        { id: 319, problem: "Kruskal Algorithm", difficulty: "Medium", pattern: "MST" },
        { id: 320, problem: "Floyd Warshall Algorithm", difficulty: "Hard", pattern: "All-Pairs Shortest Path" },
        { id: 321, problem: "Find City with Smallest Neighbors", difficulty: "Medium", pattern: "Graph + Shortest Path" },
        { id: 322, problem: "Flood Fill", difficulty: "Easy", pattern: "BFS/DFS" },
        { id: 323, problem: "Clone Graph", difficulty: "Medium", pattern: "DFS/BFS" },
        { id: 324, problem: "Number of Provinces", difficulty: "Medium", pattern: "DFS/BFS" },
        { id: 325, problem: "Course Schedule", difficulty: "Medium", pattern: "Topological Sort" },
        { id: 326, problem: "Cheapest Flights Within K Stops", difficulty: "Hard", pattern: "BFS / Dijkstra" }
      ]
    },
    {
      id: 29,
      title: "Dynamic Programming (DP)",
      badge: "MODULE 29",
      concepts: ["Memoization (Top-Down) vs Tabulation (Bottom-Up)", "1D DP & 2D Grid DP", "0/1 Knapsack & Unbounded Knapsack", "String DP (LCS, Edit Distance)", "Partition DP"],
      problems: [
        { id: 327, problem: "Fibonacci Number", difficulty: "Easy", pattern: "DP (1D)" },
        { id: 328, problem: "Climbing Stairs", difficulty: "Easy", pattern: "DP (1D)" },
        { id: 329, problem: "Min Cost Climbing Stairs", difficulty: "Easy", pattern: "DP (1D)" },
        { id: 330, problem: "Jump Game", difficulty: "Medium", pattern: "Greedy / DP" },
        { id: 331, problem: "0/1 Knapsack", difficulty: "Medium", pattern: "DP (Knapsack)" },
        { id: 332, problem: "Subset Sum Problem", difficulty: "Medium", pattern: "DP (Subset)" },
        { id: 333, problem: "Partition Equal Subset Sum", difficulty: "Medium", pattern: "DP (Subset)" },
        { id: 334, problem: "Perfect Sum Problem", difficulty: "Medium", pattern: "DP (Count Subsets)" },
        { id: 335, problem: "Unbounded Knapsack", difficulty: "Medium", pattern: "DP (Knapsack)" },
        { id: 336, problem: "Rod Cutting", difficulty: "Medium", pattern: "DP (Unbounded Knapsack)" },
        { id: 337, problem: "Coin Change II", difficulty: "Medium", pattern: "DP (Count Ways)" },
        { id: 338, problem: "Coin Change", difficulty: "Medium", pattern: "DP (Min Coins)" },
        { id: 339, problem: "Longest Common Subsequence (LCS)", difficulty: "Medium", pattern: "DP (Strings)" },
        { id: 340, problem: "Longest Common Substring", difficulty: "Medium", pattern: "DP (Strings)" },
        { id: 341, problem: "Print Longest Common Subsequence", difficulty: "Medium", pattern: "DP (Reconstruction)" },
        { id: 342, problem: "Shortest Common Supersequence", difficulty: "Medium", pattern: "DP (Strings)" },
        { id: 343, problem: "Print Shortest Common Supersequence", difficulty: "Medium", pattern: "DP (Reconstruction)" },
        { id: 344, problem: "Longest Palindromic Subsequence", difficulty: "Medium", pattern: "DP (Strings)" },
        { id: 345, problem: "Minimum Deletions to Make String Palindrome", difficulty: "Medium", pattern: "DP (Strings)" },
        { id: 346, problem: "Matrix Chain Multiplication (MCM)", difficulty: "Hard", pattern: "DP (Partition)" },
        { id: 347, problem: "Palindrome Partitioning", difficulty: "Hard", pattern: "DP (Partition)" },
        { id: 348, problem: "Longest Palindromic Substring", difficulty: "Medium", pattern: "DP / Expand" },
        { id: 349, problem: "Egg Dropping Puzzle", difficulty: "Hard", pattern: "DP (Partition)" },
        { id: 350, problem: "Scramble String", difficulty: "Hard", pattern: "DP (Strings)" }
      ]
    },
    {
      id: 30,
      title: "Trie (Prefix Tree)",
      badge: "MODULE 30",
      concepts: ["Trie data structure & node design", "Insertion, search, prefix startsWith", "Prefix-based operations & Bit Manipulation Trie"],
      problems: [
        { id: 351, problem: "Implement Trie (Prefix Tree)", difficulty: "Medium", pattern: "Trie" },
        { id: 352, problem: "Longest Common Prefix", difficulty: "Easy", pattern: "Trie / String" },
        { id: 353, problem: "Word Break", difficulty: "Medium", pattern: "Trie + DP" },
        { id: 354, problem: "Word Search II", difficulty: "Hard", pattern: "Trie + Backtracking" },
        { id: 355, problem: "Maximum XOR of Two Numbers in Array", difficulty: "Medium", pattern: "Trie (Bit Manipulation)" }
      ]
    }
  ]
};
