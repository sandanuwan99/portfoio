-- =====================================================================
-- Janitha Sandanuwan - Portfolio Enterprise Database Schema
-- Target Engine: Microsoft SQL Server 2019 / 2022 / Azure SQL
-- =====================================================================

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'projects')
BEGIN
    CREATE TABLE projects (
        id BIGINT IDENTITY(1,1) PRIMARY KEY,
        slug NVARCHAR(100) NOT NULL UNIQUE,
        title NVARCHAR(200) NOT NULL,
        subtitle NVARCHAR(300) NULL,
        category NVARCHAR(100) NOT NULL,
        summary NVARCHAR(MAX) NOT NULL,
        problem NVARCHAR(MAX) NOT NULL,
        solution NVARCHAR(MAX) NOT NULL,
        architecture NVARCHAR(MAX) NOT NULL,
        my_contribution NVARCHAR(MAX) NOT NULL,
        engineering_challenges NVARCHAR(MAX) NOT NULL,
        business_requirements NVARCHAR(MAX) NULL,
        database_design NVARCHAR(MAX) NULL,
        api_design NVARCHAR(MAX) NULL,
        testing_strategy NVARCHAR(MAX) NULL,
        deployment_strategy NVARCHAR(MAX) NULL,
        key_learnings NVARCHAR(MAX) NULL,
        technologies NVARCHAR(MAX) NOT NULL, -- Comma-separated or JSON array
        demo_url NVARCHAR(500) NULL,
        github_url NVARCHAR(500) NULL,
        featured BIT NOT NULL DEFAULT 1,
        order_index INT NOT NULL DEFAULT 0,
        created_at DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
        updated_at DATETIME2 NOT NULL DEFAULT GETUTCDATE()
    );

    CREATE NONCLUSTERED INDEX IX_projects_slug ON projects (slug);
    CREATE NONCLUSTERED INDEX IX_projects_featured_order ON projects (featured, order_index);
END
GO

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'experiences')
BEGIN
    CREATE TABLE experiences (
        id BIGINT IDENTITY(1,1) PRIMARY KEY,
        role NVARCHAR(150) NOT NULL,
        company NVARCHAR(150) NOT NULL,
        company_url NVARCHAR(250) NULL,
        location NVARCHAR(100) NOT NULL,
        period NVARCHAR(100) NOT NULL,
        start_date DATE NOT NULL,
        end_date DATE NULL,
        is_current BIT NOT NULL DEFAULT 0,
        summary NVARCHAR(MAX) NULL,
        responsibilities NVARCHAR(MAX) NOT NULL, -- JSON or pipe-delimited list
        technologies NVARCHAR(MAX) NOT NULL,
        order_index INT NOT NULL DEFAULT 0,
        created_at DATETIME2 NOT NULL DEFAULT GETUTCDATE()
    );

    CREATE NONCLUSTERED INDEX IX_experiences_order ON experiences (order_index);
END
GO

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'skill_categories')
BEGIN
    CREATE TABLE skill_categories (
        id BIGINT IDENTITY(1,1) PRIMARY KEY,
        name NVARCHAR(100) NOT NULL,
        slug NVARCHAR(100) NOT NULL UNIQUE,
        description NVARCHAR(500) NULL,
        order_index INT NOT NULL DEFAULT 0
    );
END
GO

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'skills')
BEGIN
    CREATE TABLE skills (
        id BIGINT IDENTITY(1,1) PRIMARY KEY,
        category_id BIGINT NOT NULL,
        name NVARCHAR(100) NOT NULL,
        level NVARCHAR(50) NOT NULL DEFAULT 'Production',
        order_index INT NOT NULL DEFAULT 0,
        FOREIGN KEY (category_id) REFERENCES skill_categories(id) ON DELETE CASCADE
    );

    CREATE NONCLUSTERED INDEX IX_skills_category ON skills (category_id, order_index);
END
GO

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'contact_messages')
BEGIN
    CREATE TABLE contact_messages (
        id BIGINT IDENTITY(1,1) PRIMARY KEY,
        name NVARCHAR(150) NOT NULL,
        email NVARCHAR(200) NOT NULL,
        subject NVARCHAR(200) NULL,
        message NVARCHAR(MAX) NOT NULL,
        client_ip NVARCHAR(50) NULL,
        is_read BIT NOT NULL DEFAULT 0,
        created_at DATETIME2 NOT NULL DEFAULT GETUTCDATE()
    );

    CREATE NONCLUSTERED INDEX IX_contact_created_at ON contact_messages (created_at DESC);
END
GO
