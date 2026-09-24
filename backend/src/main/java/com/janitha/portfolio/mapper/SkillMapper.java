package com.janitha.portfolio.mapper;

import com.janitha.portfolio.dto.SkillCategoryDto;
import com.janitha.portfolio.dto.SkillDto;
import com.janitha.portfolio.entity.SkillCategoryEntity;
import com.janitha.portfolio.entity.SkillEntity;
import org.springframework.stereotype.Component;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class SkillMapper {

    public SkillDto toSkillDto(SkillEntity entity) {
        if (entity == null) {
            return null;
        }

        return SkillDto.builder()
                .id(entity.getId())
                .name(entity.getName())
                .level(entity.getLevel())
                .orderIndex(entity.getOrderIndex())
                .build();
    }

    public SkillCategoryDto toCategoryDto(SkillCategoryEntity entity) {
        if (entity == null) {
            return null;
        }

        List<SkillDto> skillDtos = Collections.emptyList();
        if (entity.getSkills() != null) {
            skillDtos = entity.getSkills().stream()
                    .map(this::toSkillDto)
                    .collect(Collectors.toList());
        }

        return SkillCategoryDto.builder()
                .id(entity.getId())
                .name(entity.getName())
                .slug(entity.getSlug())
                .description(entity.getDescription())
                .orderIndex(entity.getOrderIndex())
                .skills(skillDtos)
                .build();
    }
}
