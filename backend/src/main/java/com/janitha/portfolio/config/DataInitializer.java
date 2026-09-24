package com.janitha.portfolio.config;

import com.janitha.portfolio.entity.ExperienceEntity;
import com.janitha.portfolio.entity.ProjectEntity;
import com.janitha.portfolio.entity.SkillCategoryEntity;
import com.janitha.portfolio.entity.SkillEntity;
import com.janitha.portfolio.repository.ExperienceRepository;
import com.janitha.portfolio.repository.ProjectRepository;
import com.janitha.portfolio.repository.SkillCategoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final ProjectRepository projectRepository;
    private final ExperienceRepository experienceRepository;
    private final SkillCategoryRepository skillCategoryRepository;

    @Override
    public void run(String... args) {
        if (projectRepository.count() > 0) {
            log.info("Database already seeded with projects. Skipping initialization.");
            return;
        }

        log.info("Seeding initial enterprise portfolio data into database...");

        // 1. Seed Projects
        List<ProjectEntity> projects = List.of(
                ProjectEntity.builder()
                        .slug("insta360-insurance-erp")
                        .title("Insta360 Insurance ERP")
                        .subtitle("Enterprise Insurance Management & Automated Reporting Platform")
                        .category("Enterprise ERP / FinTech")
                        .summary("High-volume enterprise insurance platform managing core modules: Underwriting, Policy Lifecycle Management, Claims Processing, Reinsurance, and Financial Accounting with automated mission-critical document pipelines.")
                        .problem("Legacy manual underwriting and claims verification processes created severe operational bottlenecks, high turnaround latency for policy issuance, and inconsistencies in financial reconciliation across distributed agencies.")
                        .solution("Engineered an enterprise-grade multi-tiered microservice backend using Spring Boot and MS SQL Server paired with a high-performance Next.js/TypeScript frontend. Integrated automated document compilation pipelines using OpenPDF and Apache POI to render complex policies and financial statements instantly.")
                        .architecture("Next.js (App Router) -> REST API Gateway -> Spring Boot Controllers -> Service Layer (Declarative @Transactional Boundaries) -> Spring Data JPA / Hibernate & Custom T-SQL Stored Procedures -> Microsoft SQL Server with Clustered Indexing.")
                        .myContribution("Architected core microservices for Underwriting and Policy Management; implemented automated reporting engines with OpenPDF (iText) and Apache POI; wrote optimized T-SQL stored procedures for high-volume financial accounting aggregates; established Azure DevOps CI/CD pipelines.")
                        .engineeringChallenges("Handling high concurrency during peak claims processing without transactional deadlocks. Solved by implementing strict isolation levels, optimistic locking mechanisms, and database-level stored procedure optimizations with covering indexes.")
                        .businessRequirements("Multi-tier role-based access control (RBAC), end-to-end automated policy lifecycle tracking, zero data loss in claims auditing, real-time analytics dashboards for underwriters.")
                        .databaseDesign("Normalized relational schema in Microsoft SQL Server with audit trails, foreign key constraints, partition-friendly primary keys, and non-clustered indexes on frequently filtered status and date columns.")
                        .apiDesign("RESTful APIs adhering to Richardson Maturity Model Level 2/3. Unified ProblemDetail RFC 7807 error responses, standard JSON pagination envelopes, and idempotent request headers for payment settlements.")
                        .testingStrategy("Unit tests with JUnit 5 and Mockito mocking repository and external services; Spring Boot @DataJpaTest for repository slice validation; Postman regression collections for API contract testing.")
                        .deploymentStrategy("Azure DevOps multi-stage pipelines: Git push triggers automated Maven test execution, Docker containerization, security vulnerability scanning, and deployment to staging/production with zero-downtime rolling slots.")
                        .keyLearnings("Deep practical mastery of database lock escalations in MS SQL Server, enterprise PDF generation memory management with iText/OpenPDF, and maintaining transactional consistency across complex business domains.")
                        .technologies("Java,Spring Boot,Next.js,React,TypeScript,Microsoft SQL Server,Spring Data JPA,Spring Security,REST APIs,Apache POI,OpenPDF,Azure DevOps,Docker")
                        .githubUrl("https://github.com/sandanuwan99")
                        .featured(true)
                        .orderIndex(1)
                        .build(),

                ProjectEntity.builder()
                        .slug("dynamic-crm")
                        .title("Dynamic CRM")
                        .subtitle("Enterprise Customer Relationship & Workflow Automation Platform")
                        .category("Enterprise Software")
                        .summary("Scalable CRM solution engineered for high-velocity sales pipelines, lead conversion tracking, enterprise customer interactions, and centralized audit logging.")
                        .problem("Disparate sales communication channels and unmonitored customer pipelines caused lead leakage, delayed response intervals, and lack of accountability across sales divisions.")
                        .solution("Built a centralized CRM system with Spring Boot backend services and Next.js responsive UI featuring granular Role-Based Access Control (RBAC), automated stage transitions, and complete event auditing.")
                        .architecture("Modular Layered Architecture: Next.js client with React Query caching -> RESTful API endpoints -> Spring Boot business services -> Spring Data JPA -> MS SQL Server with audit trigger tables.")
                        .myContribution("Developed core REST APIs for lead management, customer interaction history, and conversion analytics. Implemented Spring Security filters with RBAC and token validation. Created centralized audit log interceptors.")
                        .engineeringChallenges("Maintaining reliable audit trails across high-frequency customer interactions without introducing latency into primary user transactions. Solved by offloading audit logging to asynchronous event listeners (@Async) within Spring Boot.")
                        .businessRequirements("Role-based dashboards for sales executives and managers, automated lead scoring, interaction timeline visualization, exportable performance analytics.")
                        .databaseDesign("Relational schema centered on Lead, Account, Opportunity, Interaction, and AuditLog tables with foreign keys and compound indexes on (Account_Id, Status).")
                        .apiDesign("REST endpoints supporting CRUD with strict DTO validation (Jakarta Validation), nested relationship fetching, and efficient filtering via JPA Specifications.")
                        .testingStrategy("JUnit 5 service-layer tests verifying state transitions; Mockito tests for permission checking; automated API smoke tests.")
                        .deploymentStrategy("Automated containerized deployment using Docker and CI/CD pipelines with environment-specific configuration via environment variables.")
                        .keyLearnings("Importance of asynchronous decoupled logging for audit compliance, effective JPA relationship fetching strategies (avoiding N+1 queries using JOIN FETCH).")
                        .technologies("Java,Spring Boot,Next.js,TypeScript,Microsoft SQL Server,Spring Security,REST APIs,Docker,Azure DevOps")
                        .githubUrl("https://github.com/sandanuwan99")
                        .featured(true)
                        .orderIndex(2)
                        .build(),

                ProjectEntity.builder()
                        .slug("org-connect-hrms")
                        .title("Org Connect HRMS")
                        .subtitle("Enterprise Human Resource Management & Workflow Automation")
                        .category("Enterprise Systems")
                        .summary("Comprehensive enterprise HR platform that digitized internal organizational workflows, attendance logging, automated payroll calculation, employee self-service, and leave management.")
                        .problem("Manual spreadsheet-based employee records, error-prone payroll computations, and paper-based leave requests consumed excessive administrative overhead and resulted in compliance risks.")
                        .solution("Architected an integrated HRMS platform with Spring Boot and Next.js, featuring automated payroll engines, self-service portals, attendance validation, and automated managerial approval workflows.")
                        .architecture("Layered Enterprise Architecture: Next.js Responsive UI -> Spring Boot REST Controller -> Domain Service Engine (Payroll Calculator, Attendance Aggregator) -> Spring Data JPA -> MS SQL Server.")
                        .myContribution("Engineered core business logic for employee lifecycle management, attendance computation, and leave entitlement tracking. Reduced manual operational processing time by 60% through process automation.")
                        .engineeringChallenges("Accurately calculating complex tiered tax deductions, allowances, and attendance penalties across multiple employee grades while ensuring complete calculation reproducibility and audit history.")
                        .businessRequirements("Employee profiles, attendance clock-in integration, dynamic leave approval workflows, automated salary slip generation, departmental reporting.")
                        .databaseDesign("Temporal table modeling for employee salary histories and grade changes; relational structure linking Employee, AttendanceLog, LeaveRequest, and PayrollLedger.")
                        .apiDesign("RESTful endpoints with granular status transitions (PENDING, APPROVED, REJECTED), batch attendance ingestion, and PDF pay-slip retrieval endpoints.")
                        .testingStrategy("Extensive unit tests with JUnit 5 covering all salary computation edge cases (overtime, unpaid leave, tax brackets); MockMvc integration testing.")
                        .deploymentStrategy("Containerized deployment with Docker and automated build validation via CI/CD pipelines.")
                        .keyLearnings("Domain modeling for payroll accounting using immutable ledger entries. Edge-case validation in date-time arithmetic.")
                        .technologies("Spring Boot,Next.js,TypeScript,Microsoft SQL Server,Spring Data JPA,OpenPDF,REST APIs,Azure DevOps")
                        .githubUrl("https://github.com/sandanuwan99")
                        .featured(true)
                        .orderIndex(3)
                        .build(),

                ProjectEntity.builder()
                        .slug("aion-pos-system")
                        .title("AION POS System")
                        .subtitle("Point-of-Sale & Store Inventory Management Platform")
                        .category("Retail / POS")
                        .summary("High-reliability point-of-sale system engineered for rapid checkout transactions, multi-method payment settlements, day-end cash reconciliation, inventory deduction, and sales auditing.")
                        .problem("High peak-hour transaction volume caused checkout delays, stock discrepancies, and discrepancies between physical cash registers and reported ledger balances.")
                        .solution("Developed a responsive point-of-sale management system with Spring Boot microservices and Next.js frontend, featuring real-time barcode lookup, fast basket calculation, automated stock decrements, and cashier shift reconciliation.")
                        .architecture("Decoupled Service Architecture: Next.js Fast-Checkout Interface -> Spring Boot Transaction Controller -> Order/Payment Service -> Inventory Service -> MS SQL Server with pessimistic locking on stock items.")
                        .myContribution("Implemented backend transaction processing APIs, multi-tender payment logic (Cash, Card, Credit), day-end cashier reconciliation reports, and Excel export routines using Apache POI.")
                        .engineeringChallenges("Preventing race conditions where multiple checkout terminals attempt to sell the last remaining inventory item simultaneously. Solved via atomic database updates and pessimistic write locks on inventory items.")
                        .businessRequirements("Sub-second item scanning and basket updates, split payments, receipts generation, shift opening/closing cash tally, inventory threshold alerts.")
                        .databaseDesign("Optimized schema with Orders, OrderItems, Products, InventoryBatches, and CashierShifts. Clustered index on order timestamps for fast reporting.")
                        .apiDesign("High-throughput REST endpoints with compact JSON payloads, batch item lookups, and idempotent payment processing tokens.")
                        .testingStrategy("Concurrency testing using multi-threaded test scripts to verify inventory deduction safety; Mockito mock tests for payment gateway responses.")
                        .deploymentStrategy("Dockerized microservices deployed with automated container health probes.")
                        .keyLearnings("Row-level pessimistic locking vs optimistic locking for inventory reserves. Designing rock-solid cashier reconciliation accounting.")
                        .technologies("Spring Boot,Next.js,Microsoft SQL Server,Apache POI,REST APIs,Docker,TypeScript")
                        .githubUrl("https://github.com/sandanuwan99")
                        .featured(true)
                        .orderIndex(4)
                        .build(),

                ProjectEntity.builder()
                        .slug("cloud-native-hotel-management")
                        .title("Cloud-Native Hotel Management System")
                        .subtitle("Distributed Microservices Architecture with Micro Frontends")
                        .category("Distributed Systems")
                        .summary("Fault-tolerant hotel management suite combining Micro Frontends with decoupled Spring Boot microservices for reservations, billing, and room inventory management. Presented at University Tech Symposium.")
                        .problem("Monolithic hotel management applications suffered from single-point-of-failure vulnerabilities and difficult scalability during peak holiday seasons.")
                        .solution("Designed and implemented a distributed, event-driven architecture using Java 21, Spring Boot microservices, independent React micro frontends, MySQL/MS SQL Server, and Docker container orchestration.")
                        .architecture("Distributed Microservices Architecture: Micro Frontends -> API Gateway -> Decoupled Spring Boot Microservices -> Decoupled Databases -> Docker Containerization.")
                        .myContribution("Architected the distributed microservices topology, developed decoupled Spring Boot business modules for reservations and billing, configured Docker containerization, and built GitHub Actions CI/CD pipelines.")
                        .engineeringChallenges("Managing distributed transactions across independent reservation and billing services without distributed deadlocks. Solved by implementing the Saga pattern with compensating transactions.")
                        .businessRequirements("Independent deployability, real-time room availability synchronizations, multi-currency billing, continuous deployment.")
                        .databaseDesign("Database-per-service pattern ensuring service encapsulation and zero cross-service direct database joins.")
                        .apiDesign("Standardized RESTful microservice APIs with OpenAPI contracts and correlation ID tracing.")
                        .testingStrategy("Unit testing with JUnit 5; integration testing using MockMvc; automated container image build tests in GitHub Actions.")
                        .deploymentStrategy("GitHub Actions CI/CD workflows building Docker images and orchestrating deployment across staging environments.")
                        .keyLearnings("Implementing the Saga pattern with compensating actions for distributed transaction failures.")
                        .technologies("Java 21,Spring Boot,Micro Frontends,React,Docker,GitHub Actions,REST APIs,MySQL,MS SQL Server")
                        .githubUrl("https://github.com/sandanuwan99")
                        .featured(true)
                        .orderIndex(5)
                        .build()
        );
        projectRepository.saveAll(projects);

        // 2. Seed Experiences
        List<ExperienceEntity> experiences = List.of(
                ExperienceEntity.builder()
                        .role("Associate Software Engineer")
                        .company("ICP Technologies")
                        .companyUrl("https://icptechnologies.lk")
                        .location("Sri Lanka")
                        .period("Feb 2026 – Present")
                        .startDate(LocalDate.of(2026, 2, 1))
                        .current(true)
                        .summary("Driving enterprise insurance and fintech solutions, focusing on backend microservices architecture, automated document generation pipelines, and high-performance web UIs.")
                        .responsibilities("Architected and optimized backend microservices and responsive web UIs for enterprise insurance and fintech solutions using Spring Boot, Next.js, and MS SQL Server.|Engineered core microservice business modules spanning Underwriting, Policy Management, Claims Processing, and Financial Accounting, improving API throughput.|Implemented automated reporting pipelines using OpenPDF (iText) and Apache POI integrated with MS SQL Stored Procedures to generate mission-critical PDF and Excel analytics.|Streamlined build and release workflows via Azure DevOps CI/CD pipelines, automating integration tests and containerized deployments across environments.|Collaborated with cross-functional Agile teams in sprint planning, automated testing, and technical documentation to ensure adherence to industry standards.")
                        .technologies("Java,Spring Boot,Next.js,TypeScript,MS SQL Server,REST APIs,Apache POI,OpenPDF (iText),Azure DevOps,Docker,Git")
                        .orderIndex(1)
                        .build(),

                ExperienceEntity.builder()
                        .role("Software Engineer – Intern")
                        .company("ICP Technologies")
                        .companyUrl("https://icptechnologies.lk")
                        .location("Sri Lanka")
                        .period("Sep 2025 – Feb 2026")
                        .startDate(LocalDate.of(2025, 9, 1))
                        .endDate(LocalDate.of(2026, 2, 1))
                        .current(false)
                        .summary("Contributed to large-scale enterprise ERP systems and internal organizational automation platforms.")
                        .responsibilities("Contributed to an enterprise Insurance ERP platform covering Reinsurance, Claims Verification, and Policy Lifecycle Management modules.|Developed and consumed RESTful APIs utilizing Spring Boot, React.js, and TypeScript, resulting in enhanced data consistency and reduced UI latency.|Built core components of Org Connect, an automated HR platform that digitized internal workflows and cut manual operational processing time by 60%.|Wrote complex SQL queries, views, and indexes to boost database performance and support data ingestion requirements.")
                        .technologies("Spring Boot,React.js,TypeScript,MS SQL Server,REST APIs,Git,Azure DevOps,SQL Optimization")
                        .orderIndex(2)
                        .build()
        );
        experienceRepository.saveAll(experiences);

        // 3. Seed Skill Categories & Skills
        SkillCategoryEntity backendCat = SkillCategoryEntity.builder()
                .name("Backend Frameworks & Runtime")
                .slug("backend")
                .description("Core enterprise server-side engineering with Java and Spring ecosystem")
                .orderIndex(1)
                .skills(new ArrayList<>())
                .build();
        backendCat.getSkills().add(SkillEntity.builder().name("Java 17 / 21").level("Advanced").orderIndex(1).category(backendCat).build());
        backendCat.getSkills().add(SkillEntity.builder().name("Spring Boot 3").level("Advanced").orderIndex(2).category(backendCat).build());
        backendCat.getSkills().add(SkillEntity.builder().name("Spring Security").level("Advanced").orderIndex(3).category(backendCat).build());
        backendCat.getSkills().add(SkillEntity.builder().name("Spring Data JPA / Hibernate").level("Advanced").orderIndex(4).category(backendCat).build());
        backendCat.getSkills().add(SkillEntity.builder().name("RESTful Microservices").level("Advanced").orderIndex(5).category(backendCat).build());

        SkillCategoryEntity dbCat = SkillCategoryEntity.builder()
                .name("Databases & Data Modeling")
                .slug("databases")
                .description("Relational database architecture, T-SQL, and performance tuning")
                .orderIndex(2)
                .skills(new ArrayList<>())
                .build();
        dbCat.getSkills().add(SkillEntity.builder().name("Microsoft SQL Server").level("Advanced").orderIndex(1).category(dbCat).build());
        dbCat.getSkills().add(SkillEntity.builder().name("T-SQL & Stored Procedures").level("Advanced").orderIndex(2).category(dbCat).build());
        dbCat.getSkills().add(SkillEntity.builder().name("Index Optimization").level("Advanced").orderIndex(3).category(dbCat).build());

        skillCategoryRepository.saveAll(List.of(backendCat, dbCat));

        log.info("Database seeding completed successfully with all enterprise entities!");
    }
}
