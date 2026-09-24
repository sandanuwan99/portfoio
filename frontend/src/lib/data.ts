import { CaseStudy, Education, EngineeringPrinciple, Experience, Project, SkillCategory } from '@/types/portfolio';

export const DEVELOPER_PROFILE = {
  name: 'Janitha Sandanuwan',
  shortName: 'Janitha',
  role: 'Software Engineer | Full-Stack Developer',
  tagline: 'Building reliable, scalable software systems with Java, Spring Boot, Next.js, and Microsoft SQL Server.',
  location: 'Sri Lanka',
  email: 'janithasandanuwa@gmail.com',
  phone: '+94 78 3008 208',
  phoneFormatted: '+94 78 3008 208 (WhatsApp)',
  github: 'https://github.com/sandanuwan99',
  githubUsername: 'sandanuwan99',
  linkedin: 'https://www.linkedin.com/in/janitha-sandanuwan/',
  linkedinUsername: 'janitha-sandanuwan',
  thecn: 'https://thecn.com/JS3122',
  cvUrl: '/Janitha_Sandanuwan_CV.pdf',
  summary:
    'Results-driven Software Engineer with proven experience designing, developing, and deploying enterprise-grade, cloud-native web applications and RESTful microservices. Proficient in full-stack engineering with Java, Spring Boot, React, Next.js, TypeScript, and SQL databases. Adept at implementing CI/CD deployment pipelines using Azure DevOps, Docker, Kubernetes, and GitHub Actions to ensure high availability and continuous delivery. Strong quantitative foundation in statistical computing, data analysis, and distributed system design.',
  primaryTech: [
    'Java',
    'Spring Boot',
    'Next.js',
    'TypeScript',
    'Microsoft SQL Server',
    'Docker',
    'Azure DevOps',
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'insta360-insurance-erp',
    slug: 'insta360-insurance-erp',
    title: 'Insta360 Insurance ERP',
    subtitle: 'Enterprise Insurance Management & Automated Reporting Platform',
    category: 'Enterprise ERP / FinTech',
    summary:
      'High-volume enterprise insurance platform managing core modules: Underwriting, Policy Lifecycle Management, Claims Processing, Reinsurance, and Financial Accounting with automated mission-critical document pipelines.',
    problem:
      'Legacy manual underwriting and claims verification processes created severe operational bottlenecks, high turnaround latency for policy issuance, and inconsistencies in financial reconciliation across distributed agencies.',
    solution:
      'Engineered an enterprise-grade multi-tiered microservice backend using Spring Boot and MS SQL Server paired with a high-performance Next.js/TypeScript frontend. Integrated automated document compilation pipelines using OpenPDF and Apache POI to render complex policies and financial statements instantly.',
    architecture:
      'Next.js (App Router) -> REST API Gateway -> Spring Boot Controllers -> Service Layer (Declarative @Transactional Boundaries) -> Spring Data JPA / Hibernate + T-SQL Stored Procedures -> Microsoft SQL Server with Clustered Indexing.',
    myContribution:
      'Architected core microservices for Underwriting and Policy Management; implemented automated reporting engines with OpenPDF (iText) and Apache POI; wrote optimized T-SQL stored procedures for high-volume financial accounting aggregates; established Azure DevOps CI/CD pipelines for automated testing and containerized deployments.',
    engineeringChallenges: [
      'Handling high-volume concurrent claims processing without transactional deadlocks or dirty reads during peak batch settlement periods.',
      'Memory and CPU spikes during high-volume server-side generation of 100+ page policy schedules and financial spreadsheets.',
      'Maintaining backward-compatible REST API contracts during schema evolutions across distributed policy modules.',
    ],
    businessRequirements: [
      'Multi-tier role-based access control (RBAC) ensuring underwriters, adjusters, and auditors only access permitted dossiers.',
      'End-to-end automated policy lifecycle tracking with complete immutable audit logging.',
      'Real-time dashboard analytics for underwriters handling transactional records reliably.',
      'Automated batch generation of policy certificates (PDF) and statutory accounting schedules (Excel).',
    ],
    databaseDesign: {
      description:
        'Normalized relational schema in Microsoft SQL Server with audit trails, temporal tracking, clustered indexes on primary business keys, and specialized non-clustered composite indexes on filtering columns.',
      schemaHighlights: [
        'Policies: (id, policy_number, underwriter_id, client_id, premium_amount, status, effective_date, expiry_date)',
        'Claims: (id, claim_number, policy_id, adjuster_id, claimed_amount, approved_amount, status, created_at)',
        'LedgerEntries: (id, reference_type, reference_id, debit_amount, credit_amount, account_code, posted_at)',
        'AuditLogs: (id, entity_name, entity_id, action, performed_by, payload_snapshot, timestamp)',
      ],
      storedProcedures: [
        'sp_GenerateUnderwritingLedgerSummary: Aggregates daily policy revenue and reserves with SQL query hints for lock isolation.',
        'sp_ProcessClaimDisbursement: Atomic stored procedure executing disbursement within a strict database transaction.',
      ],
    },
    apiDesign: {
      pattern: 'RESTful API with RFC 7807 ProblemDetail error envelopes, DTO encapsulation, and idempotency headers.',
      endpoints: [
        { method: 'POST', path: '/api/v1/policies', description: 'Create and submit insurance policy for underwriting validation' },
        { method: 'GET', path: '/api/v1/policies/{policyNumber}', description: 'Retrieve comprehensive policy dossier with endorsements' },
        { method: 'POST', path: '/api/v1/claims', description: 'Initiate claim verification workflow with uploaded evidence' },
        { method: 'POST', path: '/api/v1/reports/policy-schedule', description: 'Stream OpenPDF compiled policy schedule document' },
        { method: 'GET', path: '/api/v1/analytics/underwriting-summary', description: 'Stream Apache POI analytical workbook' },
      ],
    },
    testingStrategy:
      'Unit testing with JUnit 5 and Mockito mocking repository interfaces; Spring Boot @DataJpaTest for repository slice queries; automated Postman Newman API regression suites embedded in Azure DevOps pipelines.',
    deploymentStrategy:
      'Azure DevOps CI/CD pipeline triggering automated Maven builds, Docker multi-stage container compilation, and deployment into containerized environments with zero-downtime rolling slots.',
    keyLearnings: [
      'Mastered database lock escalations and transaction isolation levels in Microsoft SQL Server.',
      'Learned stream-based I/O techniques for OpenPDF and Apache POI to prevent OutOfMemory errors under heavy document workloads.',
      'Discovered the value of strict DTO separation from Hibernate entities to prevent accidental lazy-loading serialization leaks.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Next.js',
      'React',
      'TypeScript',
      'Microsoft SQL Server',
      'Spring Data JPA',
      'Spring Security',
      'REST APIs',
      'Apache POI',
      'OpenPDF (iText)',
      'Azure DevOps',
      'Docker',
    ],
    githubUrl: 'https://github.com/sandanuwan99',
    featured: true,
    orderIndex: 1,
  },
  {
    id: 'dynamic-crm',
    slug: 'dynamic-crm',
    title: 'Dynamic CRM',
    subtitle: 'Enterprise Customer Relationship & Workflow Automation Platform',
    category: 'Enterprise Software',
    summary:
      'Scalable CRM solution engineered for high-velocity sales pipelines, lead conversion tracking, enterprise customer interactions, and centralized audit logging.',
    problem:
      'Disparate sales communication channels and unmonitored customer pipelines caused lead leakage, delayed response intervals, and lack of accountability across sales divisions.',
    solution:
      'Built a centralized CRM system with Spring Boot backend services and Next.js responsive UI featuring granular Role-Based Access Control (RBAC), automated stage transitions, and complete event auditing.',
    architecture:
      'Next.js Client with SWR/React Query caching -> RESTful API Endpoints -> Spring Boot Business Services -> Spring Security (RBAC) -> Spring Data JPA -> MS SQL Server with Audit Trigger Tables.',
    myContribution:
      'Developed core REST APIs for lead management, customer interaction history, and conversion analytics. Implemented Spring Security filters with RBAC and token validation. Created centralized audit log interceptors.',
    engineeringChallenges: [
      'Maintaining reliable audit trails across high-frequency customer interactions without introducing latency into primary user transactions.',
      'Preventing N+1 query performance degradation when fetching complex customer accounts with deeply nested contact histories.',
    ],
    businessRequirements: [
      'Role-based dashboards for sales executives and managers.',
      'Automated lead scoring and stage transition validation.',
      'Interaction timeline visualization across calls, meetings, and emails.',
      'Exportable performance analytics and pipeline forecasting.',
    ],
    databaseDesign: {
      description:
        'Relational schema centered on Lead, Account, Opportunity, Interaction, and AuditLog tables with foreign keys and compound indexes on (Account_Id, Status).',
      schemaHighlights: [
        'Leads: (id, first_name, last_name, email, company, status, score, assigned_rep_id)',
        'Opportunities: (id, lead_id, expected_value, stage, probability, close_date)',
        'Interactions: (id, opportunity_id, rep_id, channel, notes, logged_at)',
      ],
    },
    apiDesign: {
      pattern: 'RESTful API supporting CRUD with strict DTO validation (Jakarta Validation) and JPA Specifications.',
      endpoints: [
        { method: 'GET', path: '/api/v1/leads', description: 'Paginated lead search with dynamic criteria filtering' },
        { method: 'POST', path: '/api/v1/leads', description: 'Create lead with deduplication validation' },
        { method: 'PATCH', path: '/api/v1/leads/{id}/stage', description: 'Update pipeline stage with state-machine verification' },
        { method: 'GET', path: '/api/v1/analytics/pipeline', description: 'Fetch aggregated pipeline conversion metrics' },
      ],
    },
    testingStrategy:
      'JUnit 5 service-layer tests verifying stage state-machine rules; Mockito tests for permission checking; automated API smoke tests.',
    deploymentStrategy:
      'Automated containerized deployment using Docker and CI/CD pipelines with environment-specific configuration via environment variables.',
    keyLearnings: [
      'Utilizing Spring Boot @Async event listeners for non-blocking audit logging to keep response times sub-50ms.',
      'Effective JPA relationship fetching strategies (using JOIN FETCH and entity graphs to eliminate N+1 queries).',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Next.js',
      'TypeScript',
      'Microsoft SQL Server',
      'Spring Security',
      'REST APIs',
      'Docker',
      'Azure DevOps',
    ],
    githubUrl: 'https://github.com/sandanuwan99',
    featured: true,
    orderIndex: 2,
  },
  {
    id: 'org-connect-hrms',
    slug: 'org-connect-hrms',
    title: 'Org Connect HRMS',
    subtitle: 'Enterprise Human Resource Management & Workflow Automation',
    category: 'Enterprise Systems',
    summary:
      'Comprehensive enterprise HR platform that digitized internal organizational workflows, attendance logging, automated payroll calculation, employee self-service, and leave management.',
    problem:
      'Manual spreadsheet-based employee records, error-prone payroll computations, and paper-based leave requests consumed excessive administrative overhead and resulted in compliance risks.',
    solution:
      'Architected an integrated HRMS platform with Spring Boot and Next.js, featuring automated payroll engines, self-service portals, attendance validation, and automated managerial approval workflows.',
    architecture:
      'Next.js Responsive UI -> Spring Boot REST Controller -> Domain Service Engine (Payroll Calculator, Attendance Aggregator) -> Spring Data JPA -> MS SQL Server.',
    myContribution:
      'Engineered core business logic for employee lifecycle management, attendance computation, and leave entitlement tracking. Reduced manual operational processing time by 60% through process automation.',
    engineeringChallenges: [
      'Accurately calculating complex tiered tax deductions, allowances, and attendance penalties across multiple employee grades while ensuring calculation reproducibility.',
      'Handling date-time calculations across payroll cutoff boundaries and multiple employee work shifts without off-by-one errors.',
    ],
    businessRequirements: [
      'Employee master profiles with document attachments and grade levels.',
      'Attendance clock-in integration and shift-based discrepancy flagging.',
      'Dynamic multi-level leave approval hierarchies.',
      'Automated monthly salary slip generation with downloadable PDF exports.',
    ],
    databaseDesign: {
      description:
        'Relational schema modeling employee entities, attendance punches, tiered salary components, and leave balances with foreign key integrity.',
      schemaHighlights: [
        'Employees: (id, emp_code, full_name, department_id, grade_id, join_date, status)',
        'AttendanceLogs: (id, employee_id, clock_in, clock_out, total_hours, status)',
        'PayrollRecords: (id, employee_id, month, year, basic_salary, allowances, deductions, net_salary, generated_at)',
      ],
    },
    apiDesign: {
      pattern: 'RESTful endpoints with granular status transitions (PENDING, APPROVED, REJECTED) and PDF stream responses.',
      endpoints: [
        { method: 'GET', path: '/api/v1/employees', description: 'List active workforce with department filtering' },
        { method: 'POST', path: '/api/v1/leave-requests', description: 'Submit leave request with balance verification' },
        { method: 'POST', path: '/api/v1/payroll/generate', description: 'Trigger monthly batch payroll calculation engine' },
        { method: 'GET', path: '/api/v1/payroll/payslip/{id}', description: 'Download generated PDF salary slip' },
      ],
    },
    testingStrategy:
      'Extensive unit tests with JUnit 5 covering all salary computation edge cases (overtime, unpaid leave, tax brackets); MockMvc integration testing.',
    deploymentStrategy:
      'Containerized deployment with Docker and automated build validation via CI/CD pipelines.',
    keyLearnings: [
      'Domain modeling for payroll accounting using immutable ledger entries.',
      'Creating intuitive self-service UX that minimizes user input friction for non-technical employees.',
    ],
    technologies: [
      'Spring Boot',
      'Next.js',
      'TypeScript',
      'Microsoft SQL Server',
      'Spring Data JPA',
      'OpenPDF',
      'REST APIs',
      'Azure DevOps',
    ],
    githubUrl: 'https://github.com/sandanuwan99',
    featured: true,
    orderIndex: 3,
  },
  {
    id: 'aion-pos-system',
    slug: 'aion-pos-system',
    title: 'AION POS System',
    subtitle: 'Point-of-Sale & Store Inventory Management Platform',
    category: 'Retail / POS',
    summary:
      'High-reliability point-of-sale system engineered for rapid checkout transactions, multi-method payment settlements, day-end cash reconciliation, inventory deduction, and sales auditing.',
    problem:
      'High peak-hour transaction volume caused checkout delays, stock discrepancies, and discrepancies between physical cash registers and reported ledger balances.',
    solution:
      'Developed a responsive point-of-sale management system with Spring Boot microservices and Next.js frontend, featuring real-time barcode lookup, fast basket calculation, automated stock decrements, and cashier shift reconciliation.',
    architecture:
      'Next.js Fast-Checkout Interface -> Spring Boot Transaction Controller -> Order/Payment Service -> Inventory Service -> MS SQL Server with pessimistic locking on stock items.',
    myContribution:
      'Implemented backend transaction processing APIs, multi-tender payment logic (Cash, Card, Credit), day-end cashier reconciliation reports, and Excel export routines using Apache POI.',
    engineeringChallenges: [
      'Preventing race conditions where multiple checkout terminals attempt to sell the last remaining inventory item simultaneously.',
      'Ensuring cashier shift reconciliation arithmetic handles fractional change, card gateway fees, and voided orders accurately.',
    ],
    businessRequirements: [
      'Sub-second item scanning and basket updates.',
      'Split payment support across cash, debit card, and customer store credit.',
      'Shift opening/closing cash tally and supervisor override audit trails.',
      'Automated daily sales reports exported to Excel.',
    ],
    databaseDesign: {
      description:
        'High-write transaction schema with Orders, OrderItems, Products, InventoryBatches, and CashierShifts. Clustered index on order timestamps for fast reporting.',
      schemaHighlights: [
        'Products: (id, sku, barcode, name, unit_price, cost_price, current_stock)',
        'Orders: (id, order_number, cashier_id, shift_id, subtotal, tax, discount, total, status, created_at)',
        'OrderItems: (id, order_id, product_id, quantity, unit_price, line_total)',
        'CashierShifts: (id, cashier_id, starting_cash, ending_cash, variance, opened_at, closed_at)',
      ],
    },
    apiDesign: {
      pattern: 'High-throughput REST endpoints with compact JSON payloads, batch item lookups, and idempotent payment processing tokens.',
      endpoints: [
        { method: 'GET', path: '/api/v1/products/scan/{barcode}', description: 'Ultra-fast barcode lookup with cache' },
        { method: 'POST', path: '/api/v1/orders/checkout', description: 'Atomic order commit with pessimistic inventory decrement' },
        { method: 'POST', path: '/api/v1/shifts/close', description: 'Cashier shift reconciliation submission' },
        { method: 'GET', path: '/api/v1/reports/sales-summary', description: 'Download Apache POI sales breakdown workbook' },
      ],
    },
    testingStrategy:
      'Concurrency testing using multi-threaded test scripts to verify inventory deduction safety; Mockito mock tests for payment gateway responses.',
    deploymentStrategy:
      'Dockerized microservices deployed with automated container health probes.',
    keyLearnings: [
      'Understanding row-level pessimistic locking (`SELECT ... FOR UPDATE` equivalent in JPA) vs optimistic locking for inventory reserves.',
      'Structuring reliable day-end reconciliation balancing formulas.',
    ],
    technologies: [
      'Spring Boot',
      'Next.js',
      'Microsoft SQL Server',
      'Apache POI',
      'REST APIs',
      'Docker',
      'TypeScript',
    ],
    githubUrl: 'https://github.com/sandanuwan99',
    featured: true,
    orderIndex: 4,
  },
  {
    id: 'cloud-native-hotel-management',
    slug: 'cloud-native-hotel-management',
    title: 'Cloud-Native Hotel Management System',
    subtitle: 'Distributed Microservices Architecture with Micro Frontends',
    category: 'Distributed Systems',
    summary:
      'Fault-tolerant hotel management suite combining Micro Frontends with decoupled Spring Boot microservices for reservations, billing, and room inventory management. Presented distributed benchmarks at a university technology symposium.',
    problem:
      'Monolithic hotel management applications suffered from single-point-of-failure vulnerabilities, rigid deployments where a bug in billing took down the entire reservation desk, and difficult scalability during peak holiday seasons.',
    solution:
      'Architected a fault-tolerant hotel management suite combining Micro Frontends with decoupled Spring Boot microservices for reservations, billing, and room inventory, containerized with Docker and GitHub Actions CI/CD.',
    architecture:
      'Micro Frontends (React / Next.js) -> API Gateway -> Decoupled Spring Boot Microservices (Reservation Service, Billing Service, Inventory Service) -> Decoupled Databases -> Docker Containerization.',
    myContribution:
      'Architected the distributed microservices topology, developed decoupled Spring Boot business modules for reservations and billing, configured Docker containerization, and built GitHub Actions continuous integration/deployment pipelines.',
    engineeringChallenges: [
      'Managing distributed transactions across independent reservation and billing services without distributed deadlocks.',
      'Containerizing multiple microservices and maintaining consistent local and cloud runtime environments.',
    ],
    businessRequirements: [
      'Independent deployability for reservations, billing, and inventory services.',
      'Real-time room availability status synchronizations.',
      'Multi-currency billing and automated invoice generation.',
      'Continuous deployment via GitHub Actions.',
    ],
    databaseDesign: {
      description:
        'Database-per-service pattern ensuring service encapsulation and zero cross-service direct database joins.',
      schemaHighlights: [
        'ReservationService DB: (reservations, guest_profiles, room_blocks)',
        'BillingService DB: (invoices, payments, refund_requests)',
        'InventoryService DB: (room_types, rooms, maintenance_schedules)',
      ],
    },
    apiDesign: {
      pattern: 'Standardized RESTful microservice APIs with OpenAPI contracts and correlation ID tracing.',
      endpoints: [
        { method: 'POST', path: '/api/v1/reservations', description: 'Create room reservation with temporary inventory hold' },
        { method: 'POST', path: '/api/v1/billing/settle', description: 'Process payment authorization and confirm booking' },
        { method: 'GET', path: '/api/v1/inventory/availability', description: 'Query real-time room availability across dates' },
      ],
    },
    testingStrategy:
      'Unit testing with JUnit 5; integration testing using MockMvc; automated container image build tests in GitHub Actions.',
    deploymentStrategy:
      'GitHub Actions CI/CD workflows building Docker images and orchestrating deployment across staging environments.',
    keyLearnings: [
      'Implementing the Saga pattern with compensating actions for distributed transaction failures.',
      'Leveraging Micro Frontends for decoupled UI development across engineering teams.',
    ],
    technologies: [
      'Java 21',
      'Spring Boot',
      'Micro Frontends',
      'React',
      'Docker',
      'GitHub Actions',
      'REST APIs',
      'MySQL',
      'MS SQL Server',
    ],
    githubUrl: 'https://github.com/sandanuwan99',
    featured: true,
    orderIndex: 5,
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Associate Software Engineer',
    company: 'ICP Technologies',
    companyUrl: 'https://icptechnologies.lk',
    location: 'Sri Lanka',
    period: 'Feb 2026 – Present',
    startDate: '2026-02-01',
    isCurrent: true,
    summary:
      'Driving enterprise insurance and fintech solutions, focusing on backend microservices architecture, automated document generation pipelines, and high-performance web UIs.',
    responsibilities: [
      'Architected and optimized backend microservices and responsive web UIs for enterprise insurance and fintech solutions using Spring Boot, Next.js, and MS SQL Server.',
      'Engineered core microservice business modules spanning Underwriting, Policy Management, Claims Processing, and Financial Accounting, improving API throughput.',
      'Implemented automated reporting pipelines using OpenPDF (iText) and Apache POI integrated with MS SQL Stored Procedures to generate mission-critical PDF and Excel analytics.',
      'Streamlined build and release workflows via Azure DevOps CI/CD pipelines, automating integration tests and containerized deployments across environments.',
      'Collaborated with cross-functional Agile teams in sprint planning, automated testing, and technical documentation to ensure adherence to industry standards.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Next.js',
      'TypeScript',
      'MS SQL Server',
      'REST APIs',
      'Apache POI',
      'OpenPDF (iText)',
      'Azure DevOps',
      'Docker',
      'Git',
    ],
    orderIndex: 1,
  },
  {
    id: 'exp-2',
    role: 'Software Engineer – Intern',
    company: 'ICP Technologies',
    companyUrl: 'https://icptechnologies.lk',
    location: 'Sri Lanka',
    period: 'Sep 2025 – Feb 2026',
    startDate: '2025-09-01',
    endDate: '2026-02-01',
    isCurrent: false,
    summary:
      'Contributed to large-scale enterprise ERP systems and internal organizational automation platforms.',
    responsibilities: [
      'Contributed to an enterprise Insurance ERP platform covering Reinsurance, Claims Verification, and Policy Lifecycle Management modules.',
      'Developed and consumed RESTful APIs utilizing Spring Boot, React.js, and TypeScript, resulting in enhanced data consistency and reduced UI latency.',
      'Built core components of Org Connect, an automated HR platform that digitized internal workflows and cut manual operational processing time by 60%.',
      'Wrote complex SQL queries, views, and indexes to boost database performance and support data ingestion requirements.',
    ],
    technologies: [
      'Spring Boot',
      'React.js',
      'TypeScript',
      'MS SQL Server',
      'REST APIs',
      'Git',
      'Azure DevOps',
      'SQL Optimization',
    ],
    orderIndex: 2,
  },
  {
    id: 'exp-3',
    role: 'Cloud & DevOps Engineer (AWS Rush Hour Hackathon)',
    company: 'Virtusa & CSUP "Code to Cloud"',
    companyUrl: 'https://virtusa.com',
    location: 'Sri Lanka',
    period: '2024',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    isCurrent: false,
    summary:
      'Completed intensive cloud architecture track and rapid-prototyping hackathon deploying containerized solutions on AWS infrastructure.',
    responsibilities: [
      'Participated in Virtusa & CSUP’s "Code to Cloud" intensive track and completed the rapid-prototyping AWS Rush Hour Hackathon.',
      'Deployed containerized full-stack applications to AWS cloud infrastructure, configuring VPCs, IAM policies, and cloud storage (EC2, S3).',
      'Collaborated under tight hackathon sprint timelines to deliver production-ready cloud architectures.',
    ],
    technologies: [
      'Java 21',
      'Spring Boot',
      'Angular',
      'MySQL',
      'AWS (EC2, S3)',
      'Docker',
      'Cloud Security',
    ],
    orderIndex: 3,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    name: 'Backend Frameworks & Runtime',
    description: 'Enterprise server-side architecture, dependency injection, and REST microservices',
    skills: [
      { name: 'Java 17 / 21', level: 'Advanced' },
      { name: 'Spring Boot 3', level: 'Advanced' },
      { name: 'Spring MVC', level: 'Advanced' },
      { name: 'Spring Security', level: 'Advanced' },
      { name: 'Spring Data JPA', level: 'Advanced' },
      { name: 'Hibernate ORM', level: 'Advanced' },
      { name: 'RESTful APIs', level: 'Advanced' },
      { name: 'Microservices', level: 'Advanced' },
      { name: 'Maven', level: 'Proficient' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend & Web Engineering',
    description: 'Type-safe, component-driven, high-performance responsive web user interfaces',
    skills: [
      { name: 'Next.js (App Router)', level: 'Advanced' },
      { name: 'React.js', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'Material UI', level: 'Proficient' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'HTML5 & Accessible DOM', level: 'Advanced' },
    ],
  },
  {
    id: 'database',
    name: 'Databases & Data Modeling',
    description: 'Relational data modeling, query execution plans, transactions, and indexing',
    skills: [
      { name: 'Microsoft SQL Server', level: 'Advanced' },
      { name: 'T-SQL & Stored Procedures', level: 'Advanced' },
      { name: 'Query Optimization', level: 'Advanced' },
      { name: 'Index Architecture', level: 'Advanced' },
      { name: 'Database Design', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Proficient' },
      { name: 'MySQL', level: 'Proficient' },
    ],
  },
  {
    id: 'architecture',
    name: 'Architecture & System Design',
    description: 'Enterprise structural patterns, clean code, and maintainable boundaries',
    skills: [
      { name: 'Layered Architecture', level: 'Advanced' },
      { name: 'Clean Architecture', level: 'Advanced' },
      { name: 'Domain-Driven Design (DDD)', level: 'Proficient' },
      { name: 'SOLID Principles', level: 'Advanced' },
      { name: 'Design Patterns (GoF)', level: 'Advanced' },
      { name: 'RESTful Architecture', level: 'Advanced' },
      { name: 'Separation of Concerns', level: 'Advanced' },
    ],
  },
  {
    id: 'devops',
    name: 'Cloud, DevOps & CI/CD',
    description: 'Continuous integration, containerized deployments, and cloud infrastructure',
    skills: [
      { name: 'Azure DevOps (Pipelines)', level: 'Advanced' },
      { name: 'Docker & Containerization', level: 'Advanced' },
      { name: 'CI/CD Pipelines', level: 'Advanced' },
      { name: 'Git & GitHub Actions', level: 'Advanced' },
      { name: 'AWS (EC2, S3, IAM)', level: 'Proficient' },
      { name: 'Kubernetes', level: 'Proficient' },
      { name: 'Linux (Ubuntu/Amazon)', level: 'Proficient' },
      { name: 'Bash Scripting', level: 'Proficient' },
    ],
  },
  {
    id: 'testing',
    name: 'Testing & Quality Assurance',
    description: 'Automated testing suites, mock isolation, and regression verification',
    skills: [
      { name: 'JUnit 5', level: 'Advanced' },
      { name: 'Mockito', level: 'Advanced' },
      { name: 'Postman API Testing', level: 'Advanced' },
      { name: 'Integration Testing', level: 'Proficient' },
      { name: 'Test-Driven Patterns', level: 'Proficient' },
    ],
  },
  {
    id: 'reporting',
    name: 'Document & Analytics Engines',
    description: 'Mission-critical automated document compilation and data streaming pipelines',
    skills: [
      { name: 'Apache POI (Excel Automation)', level: 'Advanced' },
      { name: 'OpenPDF / iText (PDF Generation)', level: 'Advanced' },
      { name: 'Stored Procedure Reporting', level: 'Advanced' },
    ],
  },
];

export const PHILOSOPHY_PRINCIPLES: EngineeringPrinciple[] = [
  {
    id: 'clean-code',
    title: 'Clean Code & Maintainability',
    category: 'Code Quality',
    description:
      'Code is read ten times more often than it is written. I prioritize explicit intent, predictable naming, and minimal cognitive overhead over clever one-liners.',
    enterpriseContext:
      'In enterprise software like ERP and HRMS, systems evolve over years across distributed engineering teams. Readability directly reduces defect turnaround time.',
    patterns: ['Self-documenting APIs', 'Strict immutability where possible', 'Small, single-responsibility functions'],
    codeInsight:
      '// Predictable domain operations\npublic PolicyApprovalResult approvePolicy(PolicyId id, UnderwriterCredentials credentials) {\n    Policy policy = policyRepository.findByIdOrThrow(id);\n    policy.validateForApproval(credentials);\n    policy.transitionTo(PolicyStatus.APPROVED);\n    return policyRepository.save(policy);\n}',
  },
  {
    id: 'solid-principles',
    title: 'SOLID Principles in Practice',
    category: 'Object-Oriented Design',
    description:
      'Applying SOLID is not an academic exercise; it is the difference between an agile system and a brittle codebase that breaks on every new requirement.',
    enterpriseContext:
      'Decoupled document generators (OpenPDF for policy schedules, Apache POI for financial workbooks) using interface segregation and dependency inversion.',
    patterns: [
      'Single Responsibility: Separate controllers, domain services, and persistence',
      'Open/Closed: Strategy pattern for payment tenders (Cash, Card, Credit)',
      'Dependency Inversion: Spring Boot interfaces injected via constructor injection',
    ],
    codeInsight:
      '// Strategy pattern allowing new payment methods without modifying checkout service\npublic interface PaymentGatewayStrategy {\n    PaymentReceipt executeDisbursement(DisbursementCommand cmd);\n    boolean supports(PaymentChannel channel);\n}',
  },
  {
    id: 'layered-architecture',
    title: 'Separation of Concerns & Layered Architecture',
    category: 'Architecture',
    description:
      'Strict separation prevents business logic leakage. Controllers handle HTTP contracts; services execute business invariants; repositories query the persistence layer.',
    enterpriseContext:
      'Guarantees that database schema changes or UI rewrites never corrupt core financial calculation or insurance underwriting rules.',
    patterns: [
      'Controller -> DTO Validation -> Service Layer -> Domain Logic -> Repository -> SQL Server',
      'Never expose JPA Entities directly to the API layer',
      'Keep database queries out of service methods by encapsulating them in repositories',
    ],
    codeInsight:
      '@RestController\n@RequestMapping("/api/claims")\npublic class ClaimController {\n    // Controller only validates and maps; business rules belong in ClaimService\n    @PostMapping\n    public ResponseEntity<ApiResponse<ClaimDto>> submit(@Valid @RequestBody CreateClaimRequest request) {\n        ClaimDto response = claimService.processClaimSubmission(request);\n        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.ok(response));\n    }\n}',
  },
  {
    id: 'database-design',
    title: 'Relational Database Integrity & Indexing',
    category: 'Persistence',
    description:
      'Databases outlive applications. I design normalized relational schemas with appropriate indexing, foreign keys, and query execution plan analysis.',
    enterpriseContext:
      'In high-volume insurance and POS systems, unindexed queries cause table locks that freeze checkout lanes and underwriting queues.',
    patterns: [
      'Targeted non-clustered indexes on frequent search predicates',
      'T-SQL Stored Procedures for complex multi-table aggregations',
      'Optimistic locking (@Version) for concurrent edits',
    ],
    codeInsight:
      '-- Specialized covering index preventing costly bookmark lookups\nCREATE NONCLUSTERED INDEX IX_policies_status_created\nON policies (status, created_at)\nINCLUDE (policy_number, underwriter_id, premium_amount);',
  },
  {
    id: 'resilient-apis',
    title: 'Defensive API Design & Predictable Contracts',
    category: 'System Integration',
    description:
      'Enterprise REST APIs must be predictable, idempotent where mutations occur, and communicative in failure scenarios using standard HTTP status codes.',
    enterpriseContext:
      'Clear contracts between Next.js frontends and Spring Boot backends eliminate runtime discrepancies and ensure reliable client-side error handling.',
    patterns: [
      'RFC 7807 ProblemDetail error responses',
      'Idempotency tokens for financial payment settlements',
      'Strict Jakarta validation annotations on all request DTOs',
    ],
    codeInsight:
      '// Standard RFC error payload\n{\n  "success": false,\n  "status": 400,\n  "error": "Bad Request",\n  "message": "Validation failed for one or more fields",\n  "fieldErrors": { "email": "Please provide a valid email address" }\n}',
  },
  {
    id: 'testability-quality',
    title: 'Testability & Verification',
    category: 'Quality Assurance',
    description:
      'Untested code is legacy code from the day it is committed. I design software for testability with unit tests, mocking, and automated CI pipelines.',
    enterpriseContext:
      'Financial payroll engines and insurance quota calculations cannot tolerate regressions. Automated tests provide the safety net for fast iteration.',
    patterns: ['JUnit 5 unit tests with clear Given-When-Then structure', 'Mockito for isolated dependency mocking', 'Automated CI regression gates'],
    codeInsight:
      '@Test\nvoid shouldCalculateOvertimeCorrectly_whenHoursExceedStandardShift() {\n    // Given\n    EmployeeShift shift = new EmployeeShift(Hours.of(12), StandardRate.of(500));\n    // When\n    OvertimeCompensation compensation = payrollCalculator.calculateOvertime(shift);\n    // Then\n    assertThat(compensation.amount()).isEqualTo(Money.of(3000));\n}',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    number: '01',
    title: 'Designing Enterprise REST APIs with Spring Boot & Clean Architecture',
    subtitle: 'Building a maintainable, high-throughput backend for insurance policy lifecycle management',
    tags: ['Spring Boot', 'Clean Architecture', 'REST APIs', 'DTOs'],
    problem:
      'An early iteration of the insurance module suffered from tight coupling where Hibernate JPA entities were directly exposed to the HTTP layer. This caused cyclical serialization exceptions, unintentional database mutations during JSON deserialization, and severe performance regressions due to unintended lazy loading queries.',
    investigation:
      'Profiling HTTP transactions revealed that a simple GET /policies request was triggering dozens of secondary SQL queries (N+1 problem) to serialize linked claims and agent entities that were not needed by the client view.',
    solution:
      'Refactored the architecture to enforce strict layered boundaries. Introduced dedicated Request and Response DTOs, decoupled from entities using structured mappers. Established a unified ApiResponse envelope and @RestControllerAdvice for consistent RFC 7807 error responses.',
    implementation:
      'Implemented clean separation: Controller -> DTO -> Service Layer -> Repository. Enforced compile-time DTO mapping and used Spring Data JPA projection interfaces where read performance was paramount.',
    implementationCode:
      '@RestController\n@RequestMapping("/api/v1/policies")\n@RequiredArgsConstructor\npublic class PolicyController {\n    private final PolicyService policyService;\n\n    @GetMapping("/{id}")\n    public ResponseEntity<ApiResponse<PolicyResponseDto>> getPolicy(@PathVariable Long id) {\n        PolicyResponseDto dto = policyService.getPolicyDetails(id);\n        return ResponseEntity.ok(ApiResponse.ok("Policy retrieved successfully", dto));\n    }\n}',
    codeLanguage: 'java',
    result:
      'Completely eliminated serialization leaks, reduced HTTP response payload sizes by 45%, and established clean API contracts that streamlined frontend Next.js development.',
    lessonsLearned: [
      'Never expose database entities directly across architectural boundaries.',
      'Explicit DTO contracts provide API versioning flexibility without breaking changes.',
      'Centralized exception handlers keep controllers clean and error responses consistent.',
    ],
  },
  {
    id: 'case-2',
    number: '02',
    title: 'Handling Complex SQL Server Reporting & Performance with Stored Procedures',
    subtitle: 'Eliminating query latency in high-volume insurance and accounting analytics',
    tags: ['Microsoft SQL Server', 'T-SQL', 'Stored Procedures', 'Indexes'],
    problem:
      'Monthly financial closing reports and underwriting loss-ratio summaries required aggregating hundreds of thousands of ledger entries across multiple tables. Initial ORM-generated dynamic queries timed out after 30+ seconds during peak hours.',
    investigation:
      'Analyzed SQL Server execution plans using SQL Server Profiler and sys.dm_exec_query_stats. Identified missing composite indexes and excessive table scans caused by dynamic ORM joins across unclustered date and status columns.',
    solution:
      'Moved complex aggregations from the application tier to optimized Microsoft SQL Server Stored Procedures. Created covering non-clustered indexes specifically aligned with the aggregation predicates and utilized table variables for intermediate calculations.',
    implementation:
      'Authored parameterized T-SQL stored procedures utilizing `WITH (NOLOCK)` where business rules permitted dirty reads, and created covering indexes with `INCLUDE` clauses on required aggregate columns.',
    implementationCode:
      'CREATE PROCEDURE dbo.sp_GetMonthlyUnderwritingSummary\n    @StartDate DATE,\n    @EndDate DATE\nAS\nBEGIN\n    SET NOCOUNT ON;\n    SELECT \n        p.category,\n        COUNT(p.id) AS TotalPolicies,\n        SUM(p.premium_amount) AS GrossWrittenPremium,\n        ISNULL(SUM(c.approved_amount), 0) AS TotalClaimsPaid\n    FROM policies p WITH (NOLOCK)\n    LEFT JOIN claims c WITH (NOLOCK) ON p.id = c.policy_id AND c.status = \'DISBURSED\'\n    WHERE p.effective_date >= @StartDate AND p.effective_date <= @EndDate\n    GROUP BY p.category\n    ORDER BY GrossWrittenPremium DESC;\nEND;',
    codeLanguage: 'sql',
    result:
      'Report execution time plummeted from 30+ seconds to under 400 milliseconds, allowing underwriters to generate real-time loss-ratio dashboards without system lag.',
    lessonsLearned: [
      'ORMs are exceptional for transactional OLTP, but database-native stored procedures excel for heavy multi-table OLAP aggregation.',
      'Covering indexes eliminate expensive bookmark lookups on large tables.',
      'Execution plan analysis is the only reliable way to diagnose database query bottlenecks.',
    ],
  },
  {
    id: 'case-3',
    number: '03',
    title: 'Building Enterprise Financial Reports with Apache POI & OpenPDF',
    subtitle: 'Streaming large-scale Excel workbooks and mission-critical PDF schedules without memory crashes',
    tags: ['Apache POI', 'OpenPDF', 'iText', 'Performance'],
    problem:
      'Generating end-of-month financial workbooks with tens of thousands of rows caused JVM Heap OutOfMemoryErrors (OOM) because standard Apache POI `XSSFWorkbook` constructs the entire XML document tree in memory.',
    investigation:
      'Heap dump analysis with VisualVM confirmed that `XSSFRow` and `XSSFCell` objects were consuming several hundred megabytes of memory for a single 50,000-row export, causing the JVM garbage collector to thrash.',
    solution:
      'Switched from DOM-based `XSSFWorkbook` to streaming `SXSSFWorkbook` (Streaming POI), which flushes rows to temporary disk storage once a configured window is reached. For PDFs, implemented stream-piped OpenPDF document writers.',
    implementation:
      'Configured SXSSFWorkbook with a sliding window of 100 rows, streaming directly into the HTTP response OutputStream rather than buffering byte arrays in memory.',
    implementationCode:
      '// Streaming POI prevents OutOfMemory errors on large exports\npublic void streamFinancialWorkbook(HttpServletResponse response, List<LedgerRecord> records) throws IOException {\n    try (SXSSFWorkbook workbook = new SXSSFWorkbook(100)) { // 100 rows in memory\n        SXSSFSheet sheet = workbook.createSheet("Financial Ledger");\n        int rowNum = 0;\n        for (LedgerRecord record : records) {\n            Row row = sheet.createRow(rowNum++);\n            row.createCell(0).setCellValue(record.getId());\n            row.createCell(1).setCellValue(record.getAmount());\n        }\n        workbook.write(response.getOutputStream());\n        workbook.dispose(); // Cleans temp files\n    }\n}',
    codeLanguage: 'java',
    result:
      'Successfully generated 100,000+ row Excel financial workbooks and multi-page policy schedules with flat, predictable JVM memory consumption under 80MB.',
    lessonsLearned: [
      'Always stream large documents directly to the client rather than buffering full byte arrays in RAM.',
      'SXSSFWorkbook requires explicit disposal of temporary files to prevent disk leakages.',
      'Separating document layout styling from data iteration improves reporting engine reusability.',
    ],
  },
  {
    id: 'case-4',
    number: '04',
    title: 'Unified Frontend and Backend Validation Architecture',
    subtitle: 'Ensuring data integrity across Next.js TypeScript forms and Spring Boot Jakarta validation',
    tags: ['TypeScript', 'Jakarta Validation', 'Next.js', 'Spring Boot'],
    problem:
      'Discrepancies between frontend client-side validation rules and backend database constraints caused frustrating user experiences: valid-looking inputs failed at the database tier with cryptic SQL exception messages.',
    investigation:
      'Identified that validation rules (such as policy number formats, date-range bounds, and currency precisions) were maintained in duplicate across Next.js component state and Spring controllers without a synchronized specification.',
    solution:
      'Established a unified validation pattern: TypeScript interfaces and client validators mirrored the exact Jakarta `@NotNull`, `@Size`, `@Pattern`, and `@Digits` constraints defined on the Spring Boot request DTOs.',
    implementation:
      'Created custom Spring `@RestControllerAdvice` that maps `MethodArgumentNotValidException` to a clean key-value map of field errors, which the Next.js form effortlessly binds to specific input fields.',
    implementationCode:
      '// Backend Request DTO with strict validation\npublic class CreatePolicyRequest {\n    @NotBlank(message = "Policy number is required")\n    @Pattern(regexp = "^POL-[0-9]{4}-[A-Z]{3}$", message = "Format must match POL-YYYY-XXX")\n    private String policyNumber;\n\n    @NotNull(message = "Premium amount is required")\n    @DecimalMin(value = "100.00", message = "Minimum premium is 100.00")\n    private BigDecimal premiumAmount;\n}',
    codeLanguage: 'java',
    result:
      'Eliminated unhandled 500 constraint violations and provided users with instant, field-level feedback within milliseconds of typing.',
    lessonsLearned: [
      'Client-side validation improves user experience, but server-side validation is non-negotiable for system security and data integrity.',
      'Consistent error JSON structures dramatically simplify frontend form rendering logic.',
    ],
  },
  {
    id: 'case-5',
    number: '05',
    title: 'High-Volume Transaction Consistency & Concurrency Control',
    subtitle: 'Preventing race conditions and stock decrements in Point of Sale checkout systems',
    tags: ['Concurrency', 'Transactions', 'Locking', 'Data Integrity'],
    problem:
      'During high-volume checkout rushes, multiple checkout cashiers scanning the final units of an inventory item simultaneously resulted in negative stock counts in the POS system.',
    investigation:
      'Examined transaction traces and verified classic "lost update" race conditions: both transactions read inventory count = 1, evaluated that stock was available, and decremented to 0 simultaneously, resulting in double sales.',
    solution:
      'Implemented pessimistic write locking (`LockModeType.PESSIMISTIC_WRITE`) at the JPA repository level on inventory items during the critical checkout commit block, coupled with short transaction timeouts to prevent deadlocks.',
    implementation:
      'Enclosed inventory deductions in tight `@Transactional` service methods where records are locked atomically before deduction.',
    implementationCode:
      '@Repository\npublic interface ProductRepository extends JpaRepository<ProductEntity, Long> {\n    @Lock(LockModeType.PESSIMISTIC_WRITE)\n    @Query("SELECT p FROM ProductEntity p WHERE p.id = :id")\n    Optional<ProductEntity> findByIdWithPessimisticLock(@Param("id") Long id);\n}',
    codeLanguage: 'java',
    result:
      'Zero occurrences of inventory over-selling across concurrent terminal checkouts, with checkout latency maintained under 120 milliseconds.',
    lessonsLearned: [
      'Pessimistic locking is essential when write conflicts are high and compensating actions are costly or unacceptable.',
      'Always keep locked transaction blocks as short as possible to prevent thread pool starvation.',
    ],
  },
];

export const EDUCATION_LIST: Education[] = [
  {
    id: 'edu-1',
    degree: 'BSc (Honours) in Statistics and Operations Research',
    institution: 'University of Peradeniya',
    location: 'Sri Lanka',
    period: '2021 – 2025',
    coursework: [
      'Object-Oriented Programming (Java)',
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Web Programming',
      'Artificial Intelligence & Deep Learning',
      'Linear Algebra & Numerical Methods',
      'Regression Analysis & Time Series',
      'Probability & Stochastic Modeling',
    ],
    highlights: [
      'Strong mathematical foundation in algorithm optimization, complexity analysis, and statistical computing.',
      'Active leadership in university societies and technical workshops.',
    ],
  },
  {
    id: 'edu-2',
    degree: 'Diploma in Software Engineering',
    institution: 'Institute of Developers Stack',
    location: 'Sri Lanka',
    period: '2024',
    coursework: [
      'Web Software Construction',
      'Object-Oriented Programming',
      'Enterprise Databases (SQL/NoSQL)',
      'AWS Cloud Architecture',
      'Docker & Kubernetes',
      'CI/CD Pipelines',
      'Microservices & Event-Driven Architecture',
    ],
    highlights: [
      'Practical enterprise software construction and distributed systems engineering.',
    ],
  },
  {
    id: 'edu-3',
    degree: 'DevOps / TechOps Industrial Expert Masterclass Course',
    institution: 'Institute of Digital Engineering Technology',
    location: 'Sri Lanka',
    period: '2025',
    coursework: [
      'Linux Server Administration',
      'Shell Scripting & Automation',
      'Infrastructure Networking & SSH',
      'Production Monitoring (Grafana / Nagios)',
      'Container Orchestration (Docker / Kubernetes)',
      'Ansible Configuration Management',
    ],
    highlights: [
      'Hands-on system operations, enterprise observability, and infrastructure deployment.',
    ],
  },
  {
    id: 'edu-4',
    degree: 'G.C.E. Advanced Level – Physical Science Stream',
    institution: 'Dharmapala College',
    location: 'Bandarawela, Sri Lanka',
    period: '2019',
    gradeOrRank: 'District Rank: 69',
    coursework: ['Combined Mathematics', 'Physics', 'Chemistry'],
    highlights: [
      'Top-tier academic ranking in competitive national physical science examination.',
    ],
  },
];

export const EXTRACURRICULAR_ACTIVITIES = [
  {
    title: 'Technical Workshop Co-Organizer',
    description:
      'Co-organized a peer-led technical workshop series on Web Development, Mobile Engineering, and Machine Learning at the Department of Computer Engineering.',
    year: '2023 - 2024',
  },
  {
    title: 'Event Organizer – Statistical Society',
    description:
      'Organized academic events, data science seminars, and technical workshops for the Statistical Society, University of Peradeniya.',
    year: '2021 – 2023',
  },
  {
    title: 'Inter-Faculty Wrestling Championship – 2nd Place',
    description:
      'Secured 2nd place in the Inter-Faculty Wrestling Championship (2024); active member of the University Wrestling Team.',
    year: '2024',
  },
  {
    title: 'Community Initiative Sub-Committee Member',
    description:
      'Organized cultural and educational events for Geethanjali (2022) to support the "Nena Sara" student educational initiative.',
    year: '2022',
  },
];

export const REFERENCES = [
  {
    name: 'Prof. Saluka R. Kodituwakku',
    title: 'Senior Professor',
    department: 'Department of Statistics and Computer Science',
    institution: 'University of Peradeniya, Sri Lanka',
    phone: '+94 81 239 4400',
    email: 'salukak@pdn.ac.lk',
  },
  {
    name: 'Mr. Shavinda Dissanayaka',
    title: 'Senior Software Engineer',
    department: 'Engineering Division',
    institution: 'ICP Technologies, Sri Lanka',
    phone: '+94 71 220 5516',
    email: 'shavinda@icptechnologies.lk',
  },
];
