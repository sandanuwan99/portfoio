package com.janitha.portfolio.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "projects", indexes = {
        @Index(name = "IX_projects_slug", columnList = "slug", unique = true),
        @Index(name = "IX_projects_featured_order", columnList = "featured, order_index")
})
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProjectEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 100)
    private String slug;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(length = 300)
    private String subtitle;

    @Column(nullable = false, length = 100)
    private String category;

    @Lob
    @Column(nullable = false, columnDefinition = "NVARCHAR(MAX)")
    private String summary;

    @Lob
    @Column(nullable = false, columnDefinition = "NVARCHAR(MAX)")
    private String problem;

    @Lob
    @Column(nullable = false, columnDefinition = "NVARCHAR(MAX)")
    private String solution;

    @Lob
    @Column(nullable = false, columnDefinition = "NVARCHAR(MAX)")
    private String architecture;

    @Lob
    @Column(name = "my_contribution", nullable = false, columnDefinition = "NVARCHAR(MAX)")
    private String myContribution;

    @Lob
    @Column(name = "engineering_challenges", nullable = false, columnDefinition = "NVARCHAR(MAX)")
    private String engineeringChallenges;

    @Lob
    @Column(name = "business_requirements", columnDefinition = "NVARCHAR(MAX)")
    private String businessRequirements;

    @Lob
    @Column(name = "database_design", columnDefinition = "NVARCHAR(MAX)")
    private String databaseDesign;

    @Lob
    @Column(name = "api_design", columnDefinition = "NVARCHAR(MAX)")
    private String apiDesign;

    @Lob
    @Column(name = "testing_strategy", columnDefinition = "NVARCHAR(MAX)")
    private String testingStrategy;

    @Lob
    @Column(name = "deployment_strategy", columnDefinition = "NVARCHAR(MAX)")
    private String deploymentStrategy;

    @Lob
    @Column(name = "key_learnings", columnDefinition = "NVARCHAR(MAX)")
    private String keyLearnings;

    @Lob
    @Column(nullable = false, columnDefinition = "NVARCHAR(MAX)")
    private String technologies;

    @Column(name = "demo_url", length = 500)
    private String demoUrl;

    @Column(name = "github_url", length = 500)
    private String githubUrl;

    @Column(nullable = false)
    @Builder.Default
    private boolean featured = true;

    @Column(name = "order_index", nullable = false)
    @Builder.Default
    private int orderIndex = 0;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;
}
