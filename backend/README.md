# Janitha Sandanuwan - Portfolio Enterprise Backend

**Architecture**: Java 17/21 • Spring Boot 3.3.4 • Spring Data JPA • Spring Security • Microsoft SQL Server • Swagger / OpenAPI 3 • Docker

## System Architecture

```text
HTTP Clients (Next.js / Swagger UI)
            │
            ▼
┌─────────────────────────┐
│ Spring Security Filter  │ (CORS, CSRF disabled for stateless REST, Actuator & Swagger permitted)
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  REST Controller Layer  │ (ProjectController, ExperienceController, SkillController, ContactController)
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│ Service Layer (Business)│ (ProjectService, ExperienceService, SkillService, ContactService)
│ + DTO Mappers           │ (Transactions @Transactional, Logging SLF4J, Validation)
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│   Repository Layer      │ (Spring Data JPA, Hibernate, QueryDSL)
└───────────┬─────────────┘
            ▼
┌─────────────────────────┐
│  Microsoft SQL Server   │ (Normalized Schema, Indexes, Stored Procedures)
└─────────────────────────┘
```

## 📖 Swagger / OpenAPI 3 Interactive Documentation

Once the backend is running (`mvn spring-boot:run`), open:

- **Swagger UI Interactive Tester**: [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html) (or `http://localhost:8080/swagger-ui/index.html`)
- **OpenAPI 3 JSON Spec**: [http://localhost:8080/v3/api-docs](http://localhost:8080/v3/api-docs)

You can use the **"Try it out"** button directly inside Swagger to test all endpoints!

---

## REST API Endpoints

| Method | Endpoint | Description | Swagger Tag |
|---|---|---|---|
| `GET` | `/api/projects` | List all projects (supports `?featured=true`) | Projects |
| `GET` | `/api/projects/{id}` | Get full project technical detail by ID | Projects |
| `GET` | `/api/projects/slug/{slug}` | Get project detail by URL slug | Projects |
| `GET` | `/api/experiences` | List professional experience timeline | Experiences |
| `GET` | `/api/skills` | List categorized skills | Skills |
| `POST` | `/api/contact` | Submit contact message (validated & stored in SQL Server) | Contact |
| `GET` | `/api/health` | Health and liveness probe | Health & System |

---

## Quick Start (Local Development)

### 1. Database Configuration
Ensure Microsoft SQL Server is running (or Docker container):
```bash
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=YourStrong@Password123" \
   -p 1433:1433 --name sqlserver -d \
   mcr.microsoft.com/mssql/server:2022-latest
```

Execute `src/main/resources/schema-sqlserver.sql` and `src/main/resources/data-sqlserver.sql` to initialize tables and seed data.

### 2. Run with Maven
```bash
cd backend
mvn spring-boot:run
```

Or pass custom environment variables:
```bash
DATASOURCE_URL="jdbc:sqlserver://localhost:1433;databaseName=portfolio_db;encrypt=true;trustServerCertificate=true" \
DB_USERNAME=sa \
DB_PASSWORD=YourStrong@Password123 \
mvn spring-boot:run
```
