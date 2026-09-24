package com.janitha.portfolio.controller;

import com.janitha.portfolio.dto.ApiResponse;
import com.janitha.portfolio.dto.ExperienceResponseDto;
import com.janitha.portfolio.service.ExperienceService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/experiences")
@RequiredArgsConstructor
@Tag(name = "Experiences", description = "Endpoints for retrieving professional engineering experience and commercial milestones")
public class ExperienceController {

    private final ExperienceService experienceService;

    @GetMapping
    @Operation(summary = "List professional experiences", description = "Retrieve commercial timeline items including ICP Technologies roles, responsibilities, and systems delivered")
    public ResponseEntity<ApiResponse<List<ExperienceResponseDto>>> getExperiences() {
        List<ExperienceResponseDto> experiences = experienceService.getAllExperiences();
        return ResponseEntity.ok(ApiResponse.ok(experiences));
    }
}
