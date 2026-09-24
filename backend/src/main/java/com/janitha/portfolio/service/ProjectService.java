package com.janitha.portfolio.service;

import com.janitha.portfolio.dto.ProjectResponseDto;

import java.util.List;

public interface ProjectService {

    List<ProjectResponseDto> getAllProjects();

    List<ProjectResponseDto> getFeaturedProjects();

    ProjectResponseDto getProjectBySlug(String slug);

    ProjectResponseDto getProjectById(Long id);
}
