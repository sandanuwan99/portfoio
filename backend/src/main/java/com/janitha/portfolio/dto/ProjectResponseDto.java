package com.janitha.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectResponseDto {

    private Long id;
    private String slug;
    private String title;
    private String subtitle;
    private String category;
    private String summary;
    private String problem;
    private String solution;
    private String architecture;
    private String myContribution;
    private String engineeringChallenges;
    private String businessRequirements;
    private String databaseDesign;
    private String apiDesign;
    private String testingStrategy;
    private String deploymentStrategy;
    private String keyLearnings;
    private List<String> technologies;
    private String demoUrl;
    private String githubUrl;
    private boolean featured;
    private int orderIndex;
}
