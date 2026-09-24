# Janitha Sandanuwan — Software Engineer Portfolio

Enterprise Software Engineer & Full-Stack Developer portfolio featuring clean separation between the Next.js frontend and the Spring Boot backend.

```text
portfolio/
├── frontend/                        # Frontend Application (Next.js 16, TypeScript, Tailwind CSS)
│   ├── public/                      # Static assets & Janitha_Sandanuwan_CV.pdf
│   ├── src/
│   │   ├── app/                     # App Router, Layout, SSG/SSR pages & API proxies
│   │   ├── components/              # Modular UI components, modals, diagrams & badges
│   │   ├── sections/                # All 12 portfolio sections
│   │   ├── types/                   # TypeScript interfaces
│   │   ├── lib/                     # Authoritative data store & utilities
│   │   └── services/                # API client services
│   ├── package.json
│   └── tsconfig.json
│
└── backend/                         # Backend Application (Java 17/21, Spring Boot 3, MS SQL Server)
    ├── pom.xml                      # Maven configuration
    ├── README.md                    # Backend setup & architecture guide
    └── src/main/
        ├── resources/
        │   ├── application.yml      # MS SQL Server HikariCP datasource settings
        │   ├── schema-sqlserver.sql # Production DDL with clustered & non-clustered indexes
        │   └── data-sqlserver.sql   # Real seed data for projects, experience & skills
        └── java/com/janitha/portfolio/
            ├── PortfolioApplication.java
            ├── config/              # SecurityConfig, CorsConfig
            ├── controller/          # RestControllers (/api/projects, /api/contact, etc.)
            ├── service/             # Domain business logic & transaction boundaries
            ├── repository/          # Spring Data JPA repositories
            ├── entity/              # JPA entities mapped to SQL Server tables
            ├── dto/                 # Request & Response DTOs with Jakarta Validation
            ├── mapper/              # Entity to DTO mappers
            └── exception/           # GlobalExceptionHandler & RFC 7807 ErrorResponse
```

---

## 🚀 Quick Start

### 1. Run Frontend
From the root directory:
```bash
npm run dev
```
Or directly within the `frontend/` folder:
```bash
cd frontend
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### 2. Build Frontend
```bash
npm run build
```

### 3. Run Backend (Spring Boot & Microsoft SQL Server)
From the root directory:
```bash
npm run backend:run
```
Or within the `backend/` folder:
```bash
cd backend
mvn spring-boot:run
```
The backend REST APIs will be available at [http://localhost:8080](http://localhost:8080).

---

## 📄 Official Curriculum Vitae
- Located at: `frontend/public/Janitha_Sandanuwan_CV.pdf` (and alias `cv.pdf`)
- Inspectable online in the browser via the interactive modal or downloadable directly from any CV action button.

## 🔗 Profiles & Contact
- **GitHub**: [github.com/sandanuwan99](https://github.com/sandanuwan99)
- **LinkedIn**: [linkedin.com/in/janitha-sandanuwan](https://www.linkedin.com/in/janitha-sandanuwan/)
- **Email**: [janithasandanuwa@gmail.com](mailto:janithasandanuwa@gmail.com)
- **WhatsApp**: +94 78 3008 208
