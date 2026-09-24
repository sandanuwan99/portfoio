package com.janitha.portfolio.service.impl;

import com.janitha.portfolio.dto.ProjectResponseDto;
import com.janitha.portfolio.entity.ProjectEntity;
import com.janitha.portfolio.exception.ResourceNotFoundException;
import com.janitha.portfolio.mapper.ProjectMapper;
import com.janitha.portfolio.repository.ProjectRepository;
import com.janitha.portfolio.service.ProjectService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;
    private final ProjectMapper projectMapper;

    @Override
    public List<ProjectResponseDto> getAllProjects() {
        log.debug("Fetching all projects ordered by orderIndex");
        return projectRepository.findAllByOrderByOrderIndexAsc()
                .stream()
                .map(projectMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public List<ProjectResponseDto> getFeaturedProjects() {
        log.debug("Fetching featured projects");
        return projectRepository.findByFeaturedTrueOrderByOrderIndexAsc()
                .stream()
                .map(projectMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public ProjectResponseDto getProjectBySlug(String slug) {
        log.debug("Fetching project by slug: {}", slug);
        ProjectEntity project = projectRepository.findBySlug(slug)
                .orElseThrow(() -> new ResourceNotFoundException("Project", "slug", slug));
        return projectMapper.toDto(project);
    }

    @Override
    public ProjectResponseDto getProjectById(Long id) {
        log.debug("Fetching project by id: {}", id);
        ProjectEntity project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project", "id", id));
        return projectMapper.toDto(project);
    }
}
