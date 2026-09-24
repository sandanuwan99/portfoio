package com.janitha.portfolio.controller;

import com.janitha.portfolio.dto.ApiResponse;
import com.janitha.portfolio.dto.SkillCategoryDto;
import com.janitha.portfolio.service.SkillService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/skills")
@RequiredArgsConstructor
@Tag(name = "Skills", description = "Endpoints for retrieving categorized technical competencies (Backend, Frontend, Database, Architecture, DevOps, Reporting)")
public class SkillController {

    private final SkillService skillService;

    @GetMapping
    @Operation(summary = "List technical skill categories", description = "Retrieve categorized enterprise skills with proficiency levels")
    public ResponseEntity<ApiResponse<List<SkillCategoryDto>>> getSkills() {
        List<SkillCategoryDto> skillCategories = skillService.getAllSkillCategories();
        return ResponseEntity.ok(ApiResponse.ok(skillCategories));
    }
}
