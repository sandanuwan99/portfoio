package com.janitha.portfolio.mapper;

import com.janitha.portfolio.dto.ExperienceResponseDto;
import com.janitha.portfolio.entity.ExperienceEntity;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class ExperienceMapper {

    public ExperienceResponseDto toDto(ExperienceEntity entity) {
        if (entity == null) {
            return null;
        }

        List<String> respList = Collections.emptyList();
        if (entity.getResponsibilities() != null && !entity.getResponsibilities().isBlank()) {
            respList = Arrays.stream(entity.getResponsibilities().split("\\|"))
                    .map(String::trim)
                    .filter(s -> !s.isEmpty())
                    .collect(Collectors.toList());
        }

        List<String> techList = Collections.emptyList();
        if (entity.getTechnologies() != null && !entity.getTechnologies().isBlank()) {
            techList = Arrays.stream(entity.getTechnologies().split(","))
                    .map(String::trim)
                    .filter(s -> !s.isEmpty())
                    .collect(Collectors.toList());
        }

        return ExperienceResponseDto.builder()
                .id(entity.getId())
                .role(entity.getRole())
                .company(entity.getCompany())
                .companyUrl(entity.getCompanyUrl())
                .location(entity.getLocation())
                .period(entity.getPeriod())
                .startDate(entity.getStartDate())
                .endDate(entity.getEndDate())
                .current(entity.isCurrent())
                .summary(entity.getSummary())
                .responsibilities(respList)
                .technologies(techList)
                .orderIndex(entity.getOrderIndex())
                .build();
    }
}
