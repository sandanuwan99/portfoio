package com.janitha.portfolio.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "skills", indexes = {
        @Index(name = "IX_skills_category", columnList = "category_id, order_index")
})
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SkillEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private SkillCategoryEntity category;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, length = 50)
    @Builder.Default
    private String level = "Production";

    @Column(name = "order_index", nullable = false)
    @Builder.Default
    private int orderIndex = 0;
}
