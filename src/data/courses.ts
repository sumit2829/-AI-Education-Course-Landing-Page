export interface CourseItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  shortDescription: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  technologies: string[];
  schedule: string;
  prerequisites: string;
  learningOutcomes: string[];
  modules: {
    title: string;
    description: string;
  }[];
}

export const FEATURED_COURSES: CourseItem[] = [
  {
    id: "python-for-beginners",
    slug: "python-for-beginners",
    title: "Python for Beginners",
    category: "Python Programming",
    thumbnail: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop&q=80",
    shortDescription: "Master core programming concepts, data structures, algorithms, and practical scripting from scratch with interactive coding exercises.",
    duration: "6 Weeks",
    level: "Beginner",
    technologies: ["Python 3", "VS Code", "Data Structures", "OOP", "Git"],
    schedule: "Flexible evening & weekend batches",
    prerequisites: "No prior programming experience required",
    learningOutcomes: [
      "Write clean, idiomatic Python code with proper syntax and styling",
      "Apply object-oriented programming (OOP) principles and data structures",
      "Automate repetitive tasks, file processing, and data transformations",
      "Use Git and GitHub for basic version control and collaboration"
    ],
    modules: [
      { title: "Module 1: Getting Started with Python", description: "Variables, data types, operators, and conditional logic." },
      { title: "Module 2: Collections & Data Structures", description: "Lists, tuples, sets, dictionaries, and list comprehensions." },
      { title: "Module 3: Functions & Modular Programming", description: "Parameters, return values, scope, and built-in modules." },
      { title: "Module 4: Object-Oriented Programming (OOP)", description: "Classes, objects, inheritance, and encapsulation." },
      { title: "Module 5: File Handling & Error Management", description: "Working with files, exception handling, and debugging." },
      { title: "Module 6: Capstone Scripting Project", description: "Build and document a functional command-line utility application." }
    ]
  },
  {
    id: "ai-fundamentals",
    slug: "ai-fundamentals",
    title: "Artificial Intelligence Fundamentals",
    category: "Artificial Intelligence",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
    shortDescription: "Explore the foundational concepts of artificial intelligence, search algorithms, heuristic problem solving, and modern intelligent systems.",
    duration: "8 Weeks",
    level: "Beginner",
    technologies: ["Search Algorithms", "Neural Networks", "NLP Basics", "Computer Vision Basics", "AI Ethics"],
    schedule: "Live weekly lectures + recorded access",
    prerequisites: "Basic computer literacy and high-school math concepts",
    learningOutcomes: [
      "Understand the theoretical foundations and history of AI technologies",
      "Implement classic search and optimization algorithms (A*, minimax)",
      "Understand natural language processing and computer vision workflows",
      "Analyze ethical considerations, bias, and responsible AI governance"
    ],
    modules: [
      { title: "Module 1: Introduction to AI Systems", description: "Defining intelligence, agent environments, and historical milestones." },
      { title: "Module 2: Problem Solving by Search", description: "Uninformed vs. informed search, heuristic evaluation, and game playing." },
      { title: "Module 3: Knowledge Representation & Reasoning", description: "Propositional logic, inference rules, and rule-based expert systems." },
      { title: "Module 4: Introduction to Neural Networks", description: "Perceptrons, activation functions, and gradient descent fundamentals." },
      { title: "Module 5: NLP & Computer Vision Overviews", description: "Tokenization, text classification, image convolution, and features." },
      { title: "Module 6: AI Safety, Ethics & Capstone", description: "Algorithmic bias, fairness, transparency, and capstone proposal." }
    ]
  },
  {
    id: "machine-learning-with-python",
    slug: "machine-learning-with-python",
    title: "Machine Learning with Python",
    category: "Machine Learning",
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=80",
    shortDescription: "Build, train, and evaluate regression, classification, and clustering models using industry-standard Python libraries and realistic datasets.",
    duration: "10 Weeks",
    level: "Intermediate",
    technologies: ["Scikit-Learn", "NumPy", "Pandas", "PyTorch", "Model Evaluation"],
    schedule: "Interactive weekly lab sessions & office hours",
    prerequisites: "Basic Python programming and familiarity with linear algebra basics",
    learningOutcomes: [
      "Prepare, clean, and engineer features from tabular datasets",
      "Train supervised learning algorithms (linear, tree-based, ensemble)",
      "Evaluate models with precision, recall, ROC-AUC, and cross-validation",
      "Deploy trained model weights as accessible inference endpoints"
    ],
    modules: [
      { title: "Module 1: Exploratory Data Analysis & Preprocessing", description: "Missing values, encoding, scaling, and feature correlation." },
      { title: "Module 2: Supervised Learning: Regression", description: "Linear, ridge, lasso, and polynomial regression models." },
      { title: "Module 3: Supervised Learning: Classification", description: "Logistic regression, decision trees, random forests, and SVMs." },
      { title: "Module 4: Unsupervised Learning & Clustering", description: "K-Means, hierarchical clustering, and PCA dimensionality reduction." },
      { title: "Module 5: Intro to Deep Learning with PyTorch", description: "Tensors, autograd, feedforward neural nets, and loss functions." },
      { title: "Module 6: Model Deployment & Portfolio Project", description: "Exporting model artifacts and wrapping endpoints with FastAPI." }
    ]
  },
  {
    id: "generative-ai-prompt-engineering",
    slug: "generative-ai-prompt-engineering",
    title: "Generative AI and Prompt Engineering",
    category: "Generative AI",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    shortDescription: "Learn systematic prompt design, contextual retrieval with RAG, API integration, and building practical GenAI applications.",
    duration: "8 Weeks",
    level: "All Levels",
    technologies: ["Large Language Models", "Prompt Engineering", "LangChain", "Vector DBs", "RAG"],
    schedule: "Weekend hands-on project labs",
    prerequisites: "Basic familiarity with web applications or APIs helpful",
    learningOutcomes: [
      "Master structured prompting techniques (Few-Shot, CoT, ReAct)",
      "Design Retrieval-Augmented Generation (RAG) knowledge systems",
      "Integrate OpenAI, Claude, and open-source models via modern APIs",
      "Implement hallucination mitigation, guardrails, and automated evals"
    ],
    modules: [
      { title: "Module 1: LLM Architecture & Fundamentals", description: "Tokens, context windows, temperature, and foundation model mechanics." },
      { title: "Module 2: Advanced Prompt Engineering", description: "Role prompting, chain-of-thought, output schemas, and delimiters." },
      { title: "Module 3: Embeddings & Vector Search", description: "Semantic vector spaces, distance metrics, and vector database setup." },
      { title: "Module 4: Retrieval-Augmented Generation (RAG)", description: "Document chunking, retrieval strategies, and citation generation." },
      { title: "Module 5: Agentic Loops & Tool Calling", description: "Function calling, external API tool use, and structured outputs." },
      { title: "Module 6: Capstone GenAI Application", description: "Build and deploy an enterprise document question-answering app." }
    ]
  },
  {
    id: "data-science-and-analytics",
    slug: "data-science-and-analytics",
    title: "Data Science and Analytics",
    category: "Data Science",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    shortDescription: "Uncover insights from raw data through advanced SQL querying, data cleaning, statistical analysis, and interactive dashboard creation.",
    duration: "8 Weeks",
    level: "Intermediate",
    technologies: ["SQL", "Pandas", "Power BI", "Data Wrangling", "Exploratory Data Analysis"],
    schedule: "Weekday evening labs + weekend project workshops",
    prerequisites: "Basic computer skills; introductory spreadsheet or SQL knowledge helpful",
    learningOutcomes: [
      "Write complex SQL queries with joins, window functions, and CTEs",
      "Perform exploratory data analysis using Pandas, Matplotlib, and Seaborn",
      "Formulate and test statistical hypotheses to guide decision making",
      "Create interactive business intelligence dashboards in Power BI"
    ],
    modules: [
      { title: "Module 1: SQL for Data Analytics", description: "Aggregations, multi-table joins, subqueries, and window functions." },
      { title: "Module 2: Python Data Wrangling with Pandas", description: "Data ingestion, cleaning messy inputs, filtering, and reshaping." },
      { title: "Module 3: Statistical Methods & Hypothesis Testing", description: "Descriptive statistics, distributions, p-values, and correlation." },
      { title: "Module 4: Data Visualization & Storytelling", description: "Chart selection principles, dashboard layout, and communicating insights." },
      { title: "Module 5: Business Intelligence with Power BI", description: "Data modeling, DAX formulas, interactive slicers, and reporting." },
      { title: "Module 6: End-to-End Analytics Capstone", description: "Deliver an executive business intelligence report from raw data." }
    ]
  },
  {
    id: "full-stack-web-development",
    slug: "full-stack-web-development",
    title: "Full Stack Web Development",
    category: "Web Development",
    thumbnail: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80",
    shortDescription: "Build responsive, modern web applications from frontend user interfaces to backend database architecture and cloud deployment.",
    duration: "12 Weeks",
    level: "Intermediate",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "REST APIs"],
    schedule: "Structured weekend lectures & live code-along clinics",
    prerequisites: "Basic HTML, CSS, and fundamental JavaScript understanding",
    learningOutcomes: [
      "Develop responsive, accessible user interfaces with React and Tailwind CSS",
      "Architect backend REST APIs with Node.js, Express, and Next.js App Router",
      "Design relational schemas and manage databases with PostgreSQL and Prisma",
      "Deploy production applications with continuous deployment (CI/CD)"
    ],
    modules: [
      { title: "Module 1: Modern Frontend with React & Tailwind", description: "Component hierarchy, hooks (useState, useEffect), and responsive CSS." },
      { title: "Module 2: Next.js App Router & Server Components", description: "Server components, client boundaries, routing, and data fetching." },
      { title: "Module 3: Backend Development & REST APIs", description: "HTTP protocols, route handlers, middleware, and request validation." },
      { title: "Module 4: Databases with PostgreSQL & ORMs", description: "Relational schema design, migrations, CRUD operations with Prisma." },
      { title: "Module 5: Authentication & State Management", description: "Session auth, JWTs, protected routes, and persistent user data." },
      { title: "Module 6: Full Stack Deployment & Capstone", description: "Containerization basics, environment config, and cloud deployment." }
    ]
  }
];

export const COURSE_CATEGORIES = [
  "All",
  "Python Programming",
  "Artificial Intelligence",
  "Machine Learning",
  "Generative AI",
  "Data Science",
  "Web Development"
] as const;
