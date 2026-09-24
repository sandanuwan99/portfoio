package com.janitha.portfolio.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "experiences", indexes = {
        @Index(name = "IX_experiences_order", columnList = "order_index")
})
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ExperienceEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String role;

    @Column(nullable = false, length = 150)
    private String company;

    @Column(name = "company_url", length = 250)
    private String companyUrl;

    @Column(nullable = false, length = 100)
    private String location;

    @Column(nullable = false, length = 100)
    private String period;

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(name = "is_current", nullable = false)
    @Builder.Default
    private boolean current = false;

    @Lob
    @Column(columnDefinition = "NVARCHAR(MAX)")
    private String summary;

    @Lob
    @Column(nullable = false, columnDefinition = "NVARCHAR(MAX)")
    private String responsibilities; // pipe-separated or newline-separated

    @Lob
    @Column(nullable = false, columnDefinition = "NVARCHAR(MAX)")
    private String technologies;

    @Column(name = "order_index", nullable = false)
    @Builder.Default
    private int orderIndex = 0;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;
}
