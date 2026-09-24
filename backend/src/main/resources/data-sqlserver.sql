-- =====================================================================
-- Janitha Sandanuwan - Production Seed Data (Microsoft SQL Server)
-- =====================================================================

-- Clear existing data if needed during fresh deployment
DELETE FROM skills;
DELETE FROM skill_categories;
DELETE FROM experiences;
DELETE FROM projects;

-- 1. SEED PROJECTS
INSERT INTO projects (
    slug, title, subtitle, category, summary, problem, solution, architecture,
    my_contribution, engineering_challenges, business_requirements, database_design,
    api_design, testing_strategy, deployment_strategy, key_learnings, technologies,
    demo_url, github_url, featured, order_index
) VALUES (
    'insta360-insurance-erp',
    'Insta360 Insurance ERP',
    'Enterprise Insurance Management & Automated Reporting Platform',
    'Enterprise ERP / FinTech',
    'High-volume enterprise insurance platform managing core modules: Underwriting, Policy Lifecycle Management, Claims Processing, Reinsurance, and Financial Accounting with automated mission-critical document pipelines.',
    'Legacy manual underwriting and claims verification processes created severe operational bottlenecks, high turnaround latency for policy issuance, and inconsistencies in financial reconciliation across distributed agencies.',
    'Engineered an enterprise-grade multi-tiered microservice backend using Spring Boot and MS SQL Server paired with a high-performance Next.js/TypeScript frontend. Integrated automated document compilation pipelines using OpenPDF and Apache POI to render complex policies and financial statements instantly.',
    'Clean Layered Microservice Architecture: Next.js Frontend -> API Gateway / Spring Boot REST Controllers -> Stateless Service Layer with declarative transaction boundaries (@Transactional) -> Spring Data JPA / Hibernate & Custom T-SQL Stored Procedures -> Microsoft SQL Server with Clustered Indexing.',
    'Architected core microservices for Underwriting and Policy Management; implemented automated reporting engines with OpenPDF (iText) and Apache POI; wrote optimized T-SQL stored procedures for high-volume financial accounting aggregates; established Azure DevOps CI/CD pipelines.',
    'Handling high concurrency during peak claims processing without transactional deadlocks. Solved by implementing strict isolation levels, optimistic locking mechanisms, and database-level stored procedure optimizations with covering indexes.',
    'Multi-tier role-based access control (RBAC), end-to-end automated policy lifecycle tracking, zero data loss in claims auditing, real-time analytics dashboards for underwriters.',
    'Normalized relational schema in Microsoft SQL Server with audit trails, foreign key constraints, partition-friendly primary keys, and non-clustered indexes on frequently filtered status and date columns.',
    'RESTful APIs adhering to Richardson Maturity Model Level 2/3. Unified ProblemDetail RFC 7807 error responses, standard JSON pagination envelopes, and idempotent request headers for payment settlements.',
    'Unit tests with JUnit 5 and Mockito mocking repository and external services; Spring Boot @DataJpaTest for repository slice validation; Postman regression collections for API contract testing.',
    'Azure DevOps multi-stage pipelines: Git push triggers automated Maven test execution, Docker containerization, security vulnerability scanning, and deployment to staging/production with zero-downtime rolling slots.',
    'Deep practical mastery of database lock escalations in MS SQL Server, enterprise PDF generation memory management with iText/OpenPDF, and maintaining transactional consistency across complex business domains.',
    'Java,Spring Boot,Next.js,React,TypeScript,Microsoft SQL Server,Spring Data JPA,Spring Security,REST APIs,Apache POI,OpenPDF,Azure DevOps,Docker',
    'https://github.com/sandanuwan99',
    'https://github.com/sandanuwan99',
    1,
    1
),
(
    'dynamic-crm',
    'Dynamic CRM',
    'Enterprise Customer Relationship & Workflow Automation Platform',
    'Enterprise Software',
    'Scalable CRM solution engineered for high-velocity sales pipelines, lead conversion tracking, enterprise customer interactions, and centralized audit logging.',
    'Disparate sales communication channels and unmonitored customer pipelines caused lead leakage, delayed response intervals, and lack of accountability across sales divisions.',
    'Built a centralized CRM system with Spring Boot backend services and Next.js responsive UI featuring granular Role-Based Access Control (RBAC), automated stage transitions, and complete event auditing.',
    'Modular Layered Architecture: Next.js client with React Query caching -> RESTful API endpoints -> Spring Boot business services -> Spring Data JPA -> MS SQL Server with audit trigger tables.',
    'Developed core REST APIs for lead management, customer interaction history, and conversion analytics. Implemented Spring Security filters with RBAC and token validation. Created centralized audit log interceptors.',
    'Maintaining reliable audit trails across high-frequency customer interactions without introducing latency into primary user transactions. Solved by offloading audit logging to asynchronous event listeners (@Async) within Spring Boot.',
    'Role-based dashboards for sales executives and managers, automated lead scoring, interaction timeline visualization, exportable performance analytics.',
    'Relational schema centered on Lead, Account, Opportunity, Interaction, and AuditLog tables with foreign keys and compound indexes on (Account_Id, Status).',
    'REST endpoints supporting CRUD with strict DTO validation (Jakarta Validation), nested relationship fetching, and efficient filtering via JPA Specifications.',
    'JUnit 5 service-layer tests verifying state transitions; Mockito tests for permission checking; automated API smoke tests.',
    'Automated containerized deployment using Docker and CI/CD pipelines with environment-specific configuration via environment variables.',
    'Importance of asynchronous decoupled logging for audit compliance, effective JPA relationship fetching strategies (avoiding N+1 queries using JOIN FETCH).',
    'Java,Spring Boot,Next.js,TypeScript,Microsoft SQL Server,Spring Security,REST APIs,Docker,Azure DevOps',
    'https://github.com/sandanuwan99',
    'https://github.com/sandanuwan99',
    1,
    2
),
(
    'org-connect-hrms',
    'Org Connect HRMS',
    'Enterprise Human Resource Management & Workflow Automation',
    'Enterprise Systems',
    'Comprehensive enterprise HR platform that digitized internal organizational workflows, attendance logging, automated payroll calculation, employee self-service, and leave management.',
    'Manual spreadsheet-based employee records, error-prone payroll computations, and paper-based leave requests consumed excessive administrative overhead and resulted in compliance risks.',
    'Architected an integrated HRMS platform with Spring Boot and Next.js, featuring automated payroll engines, self-service portals, attendance validation, and automated managerial approval workflows.',
    'Layered Enterprise Architecture: Next.js Responsive UI -> Spring Boot REST Controller -> Domain Service Engine (Payroll Calculator, Attendance Aggregator) -> Spring Data JPA -> MS SQL Server.',
    'Engineered core business logic for employee lifecycle management, attendance computation, and leave entitlement tracking. Reduced manual operational processing time by 60% through process automation.',
    'Accurately calculating complex tiered tax deductions, allowances, and attendance penalties across multiple employee grades while ensuring complete calculation reproducibility and audit history.',
    'Employee profiles, attendance clock-in integration, dynamic leave approval workflows, automated salary slip generation, departmental reporting.',
    'Temporal table modeling for employee salary histories and grade changes; relational structure linking Employee, AttendanceLog, LeaveRequest, and PayrollLedger.',
    'RESTful endpoints with granular status transitions (PENDING, APPROVED, REJECTED), batch attendance ingestion, and PDF pay-slip retrieval endpoints.',
    'Extensive unit tests with JUnit 5 covering all salary computation edge cases (overtime, unpaid leave, tax brackets); MockMvc integration testing.',
    'Containerized deployment with Docker and automated build validation via CI/CD pipelines.',
    'Strengthened understanding of business domain modeling for HR/Payroll, edge-case validation in date-time arithmetic, and building intuitive self-service workflows.',
    'Spring Boot,Next.js,TypeScript,Microsoft SQL Server,Spring Data JPA,OpenPDF,REST APIs,Azure DevOps',
    'https://github.com/sandanuwan99',
    'https://github.com/sandanuwan99',
    1,
    3
),
(
    'aion-pos-system',
    'AION POS System',
    'Point-of-Sale & Store Inventory Management Platform',
    'Retail / POS',
    'High-reliability point-of-sale system engineered for rapid checkout transactions, multi-method payment settlements, day-end cash reconciliation, inventory deduction, and sales auditing.',
    'High peak-hour transaction volume caused checkout delays, stock discrepancies, and discrepancies between physical cash registers and reported ledger balances.',
    'Developed a responsive point-of-sale management system with Spring Boot microservices and Next.js frontend, featuring real-time barcode lookup, fast basket calculation, automated stock decrements, and cashier shift reconciliation.',
    'Decoupled Service Architecture: Next.js Fast-Checkout Interface -> Spring Boot Transaction Controller -> Order/Payment Service -> Inventory Service -> MS SQL Server with pessimistic locking on stock items.',
    'Implemented backend transaction processing APIs, multi-tender payment logic (Cash, Card, Credit), day-end cashier reconciliation reports, and Excel export routines using Apache POI.',
    'Preventing race conditions where multiple checkout terminals attempt to sell the last remaining inventory item simultaneously. Solved via atomic database updates and pessimistic write locks on inventory items during checkout checkout commit.',
    'Sub-second item scanning and basket updates, split payments, receipts generation, shift opening/closing cash tally, inventory threshold alerts.',
    'Optimized schema with Orders, OrderItems, Products, InventoryBatches, and CashierShifts. Clustered index on order timestamps for fast reporting.',
    'High-throughput REST endpoints with compact JSON payloads, batch item lookups, and idempotent payment processing tokens to prevent accidental double-billing.',
    'Concurrency testing using multi-threaded test scripts to verify inventory deduction safety; Mockito mock tests for payment gateway responses.',
    'Dockerized microservices deployed with automated container health probes.',
    'Techniques for handling race conditions in concurrent retail transactions, fast database writes, and designing rock-solid cashier reconciliation accounting.',
    'Spring Boot,Next.js,Microsoft SQL Server,Apache POI,REST APIs,Docker,TypeScript',
    'https://github.com/sandanuwan99',
    'https://github.com/sandanuwan99',
    1,
    4
),
(
    'cloud-native-hotel-management',
    'Cloud-Native Hotel Management System',
    'Distributed Microservices Architecture with Micro Frontends',
    'Distributed Systems',
    'Fault-tolerant hotel management suite combining Micro Frontends with decoupled Spring Boot microservices for reservations, billing, and room inventory management. Presented at University Tech Symposium.',
    'Monolithic hotel management applications suffered from single-point-of-failure vulnerabilities, rigid deployments where a bug in billing took down the entire reservation desk, and difficult scalability during peak holiday seasons.',
    'Designed and implemented a distributed, event-driven architecture using Java 21, Spring Boot microservices, independent React micro frontends, MySQL/MS SQL Server, and Docker container orchestration with GitHub Actions CI/CD.',
    'Distributed Microservices Architecture: Micro Frontends (Reservations UI, Billing UI, Inventory UI) -> API Gateway -> Spring Boot Microservices (Reservation Service, Billing Service, Inventory Service) -> Decoupled Databases.',
    'Architected the overall system topology, implemented the reservation and billing microservices, configured Docker containerization, and built GitHub Actions continuous integration/deployment pipelines.',
    'Managing distributed transactions across independent reservation and billing services without distributed deadlocks. Solved by implementing the Saga pattern with compensating transactions for failed payment authorizations.',
    'Independent microservice deployability, automated room inventory reservation holds, multi-currency billing, continuous deployment via GitHub Actions.',
    'Decoupled database per microservice pattern, ensuring bounded contexts and zero cross-service direct database dependencies.',
    'RESTful APIs with Swagger/OpenAPI specifications, standardized JSON error models, and health-check endpoints for container orchestrator liveness probes.',
    'End-to-end integration testing using Testcontainers and MockMvc; automated CI test suites running on every pull request.',
    'GitHub Actions CI/CD pipeline building Docker images and publishing to container registries with automated smoke tests.',
    'Hands-on experience with the Saga distributed transaction pattern, event-driven consistency, micro frontend module federation, and cloud-native reliability engineering.',
    'Java 21,Spring Boot,Micro Frontends,React,Docker,GitHub Actions,REST APIs,MySQL,MS SQL Server',
    'https://github.com/sandanuwan99',
    'https://github.com/sandanuwan99',
    1,
    5
);

-- 2. SEED EXPERIENCES
INSERT INTO experiences (
    role, company, company_url, location, period, start_date, end_date, is_current,
    summary, responsibilities, technologies, order_index
) VALUES (
    'Associate Software Engineer',
    'ICP Technologies',
    'https://icptechnologies.lk',
    'Sri Lanka',
    'Feb 2026 – Present',
    '2026-02-01',
    NULL,
    1,
    'Driving enterprise insurance and fintech solutions, focusing on backend microservices architecture, automated document generation pipelines, and high-performance web UIs.',
    'Architected and optimized backend microservices and responsive web UIs for enterprise insurance and fintech solutions using Spring Boot, Next.js, and MS SQL Server.|Engineered core microservice business modules spanning Underwriting, Policy Management, Claims Processing, and Financial Accounting, improving API throughput.|Implemented automated reporting pipelines using OpenPDF (iText) and Apache POI integrated with MS SQL Stored Procedures to generate mission-critical PDF and Excel analytics.|Streamlined build and release workflows via Azure DevOps CI/CD pipelines, automating integration tests and containerized deployments across environments.|Collaborated with cross-functional Agile teams in sprint planning, automated testing, and technical documentation to ensure adherence to industry standards.',
    'Java,Spring Boot,Next.js,TypeScript,MS SQL Server,REST APIs,Apache POI,OpenPDF (iText),Azure DevOps,Docker,Git',
    1
),
(
    'Software Engineer – Intern',
    'ICP Technologies',
    'https://icptechnologies.lk',
    'Sri Lanka',
    'Sep 2025 – Feb 2026',
    '2025-09-01',
    '2026-02-01',
    0,
    'Contributed to large-scale enterprise ERP systems and internal organizational automation platforms.',
    'Contributed to an enterprise Insurance ERP platform covering Reinsurance, Claims Verification, and Policy Lifecycle Management modules.|Developed and consumed RESTful APIs utilizing Spring Boot, React.js, and TypeScript, resulting in enhanced data consistency and reduced UI latency.|Built core components of Org Connect, an automated HR platform that digitized internal workflows and cut manual operational processing time by 60%.|Wrote complex SQL queries, views, and indexes to boost database performance and support data ingestion requirements.',
    'Spring Boot,React.js,TypeScript,MS SQL Server,REST APIs,Git,Azure DevOps,SQL Optimization',
    2
),
(
    'Cloud & DevOps Engineer (AWS Rush Hour Hackathon)',
    'Virtusa & CSUP "Code to Cloud"',
    'https://virtusa.com',
    'Sri Lanka',
    '2024',
    '2024-01-01',
    '2024-12-31',
    0,
    'Completed intensive cloud architecture track and rapid-prototyping hackathon deploying containerized solutions on AWS infrastructure.',
    'Participated in Virtusa & CSUP’s "Code to Cloud" intensive track and completed the rapid-prototyping AWS Rush Hour Hackathon.|Deployed containerized full-stack applications to AWS cloud infrastructure, configuring VPCs, IAM policies, and cloud storage (EC2, S3).|Collaborated under tight hackathon sprint timelines to deliver production-ready cloud architectures.',
    'Java 21,Spring Boot,Angular,MySQL,AWS (EC2, S3),Docker,Cloud Security',
    3
);

-- 3. SEED SKILL CATEGORIES
INSERT INTO skill_categories (name, slug, description, order_index) VALUES
('Backend Frameworks & Runtime', 'backend', 'Core enterprise server-side engineering with Java and Spring ecosystem', 1),
('Frontend & Web Engineering', 'frontend', 'Modern, type-safe, component-driven user interfaces', 2),
('Databases & Data Modeling', 'databases', 'Relational database architecture, T-SQL, and performance tuning', 3),
('Architecture & System Design', 'architecture', 'Enterprise structural patterns, DDD, and clean code principles', 4),
('Cloud, DevOps & CI/CD', 'devops', 'Automated pipelines, containerization, and cloud infrastructure', 5),
('Testing & Quality Assurance', 'testing', 'Unit testing, mocking, and automated API regression verification', 6),
('Document & Analytics Engines', 'reporting', 'Enterprise automated PDF and Excel document generation pipelines', 7);

-- 4. SEED SKILLS
DECLARE @BackendId BIGINT = (SELECT id FROM skill_categories WHERE slug = 'backend');
DECLARE @FrontendId BIGINT = (SELECT id FROM skill_categories WHERE slug = 'frontend');
DECLARE @DbId BIGINT = (SELECT id FROM skill_categories WHERE slug = 'databases');
DECLARE @ArchId BIGINT = (SELECT id FROM skill_categories WHERE slug = 'architecture');
DECLARE @DevOpsId BIGINT = (SELECT id FROM skill_categories WHERE slug = 'devops');
DECLARE @TestingId BIGINT = (SELECT id FROM skill_categories WHERE slug = 'testing');
DECLARE @ReportingId BIGINT = (SELECT id FROM skill_categories WHERE slug = 'reporting');

INSERT INTO skills (category_id, name, level, order_index) VALUES
(@BackendId, 'Java 17 / 21', 'Advanced', 1),
(@BackendId, 'Spring Boot 3', 'Advanced', 2),
(@BackendId, 'Spring Security', 'Advanced', 3),
(@BackendId, 'Spring Data JPA / Hibernate', 'Advanced', 4),
(@BackendId, 'Spring MVC', 'Advanced', 5),
(@BackendId, 'RESTful Microservices', 'Advanced', 6),
(@BackendId, 'Maven', 'Proficient', 7),

(@FrontendId, 'Next.js (App Router)', 'Advanced', 1),
(@FrontendId, 'React.js', 'Advanced', 2),
(@FrontendId, 'TypeScript', 'Advanced', 3),
(@FrontendId, 'Material UI', 'Proficient', 4),
(@FrontendId, 'Tailwind CSS', 'Advanced', 5),
(@FrontendId, 'JavaScript (ES6+)', 'Advanced', 6),

(@DbId, 'Microsoft SQL Server', 'Advanced', 1),
(@DbId, 'T-SQL & Stored Procedures', 'Advanced', 2),
(@DbId, 'Query & Index Optimization', 'Advanced', 3),
(@DbId, 'Relational Database Design', 'Advanced', 4),
(@DbId, 'PostgreSQL', 'Proficient', 5),
(@DbId, 'MySQL', 'Proficient', 6),

(@ArchId, 'Clean Architecture', 'Advanced', 1),
(@ArchId, 'Layered Architecture', 'Advanced', 2),
(@ArchId, 'Domain-Driven Design (DDD)', 'Proficient', 3),
(@ArchId, 'SOLID Principles', 'Advanced', 4),
(@ArchId, 'Design Patterns (GoF)', 'Advanced', 5),
(@ArchId, 'RESTful Architecture', 'Advanced', 6),

(@DevOpsId, 'Azure DevOps (Pipelines & Boards)', 'Advanced', 1),
(@DevOpsId, 'Docker & Containerization', 'Advanced', 2),
(@DevOpsId, 'CI/CD Automation', 'Advanced', 3),
(@DevOpsId, 'Git & GitHub Actions', 'Advanced', 4),
(@DevOpsId, 'Kubernetes Basics', 'Familiar', 5),
(@DevOpsId, 'AWS (EC2, S3, IAM)', 'Proficient', 6),
(@DevOpsId, 'Linux Server Administration', 'Proficient', 7),

(@TestingId, 'JUnit 5', 'Advanced', 1),
(@TestingId, 'Mockito', 'Advanced', 2),
(@TestingId, 'Postman API Testing', 'Advanced', 3),
(@TestingId, 'Integration Testing', 'Proficient', 4),

(@ReportingId, 'Apache POI (Excel Automation)', 'Advanced', 1),
(@ReportingId, 'OpenPDF / iText (Mission-Critical PDFs)', 'Advanced', 2);
