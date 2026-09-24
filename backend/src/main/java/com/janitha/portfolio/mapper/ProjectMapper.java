package com.janitha.portfolio.mapper;

import com.janitha.portfolio.dto.ProjectResponseDto;
import com.janitha.portfolio.entity.ProjectEntity;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class ProjectMapper {

    public ProjectResponseDto toDto(ProjectEntity entity) {
        if (entity == null) {
            return null;
        }

        List<String> techList = Collections.emptyList();
        if (entity.getTechnologies() != null && !entity.getTechnologies().isBlank()) {
            techList = Arrays.stream(entity.getTechnologies().split(","))
                    .map(String::trim)
                    .filter(s -> !s.isEmpty())
                    .collect(Collectors.toList());
        }

        return ProjectResponseDto.builder()
                .id(entity.getId())
                .slug(entity.getSlug())
                .title(entity.getTitle())
                .subtitle(entity.getSubtitle())
                .category(entity.getCategory())
                .summary(entity.getSummary())
                .problem(entity.getProblem())
                .solution(entity.getSolution())
                .architecture(entity.getArchitecture())
                .myContribution(entity.getMyContribution())
                .engineeringChallenges(entity.getEngineeringChallenges())
                .businessRequirements(entity.getBusinessRequirements())
                .databaseDesign(entity.getDatabaseDesign())
                .apiDesign(entity.getApiDesign())
                .testingStrategy(entity.getTestingStrategy())
                .deploymentStrategy(entity.getDeploymentStrategy())
                .keyLearnings(entity.getKeyLearnings())
                .technologies(techList)
                .demoUrl(entity.getDemoUrl())
                .githubUrl(entity.getGithubUrl())
                .featured(entity.isFeatured())
                .orderIndex(entity.getOrderIndex())
                .build();
    }
}
