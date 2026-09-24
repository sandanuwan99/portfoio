package com.janitha.portfolio.service.impl;

import com.janitha.portfolio.dto.ExperienceResponseDto;
import com.janitha.portfolio.mapper.ExperienceMapper;
import com.janitha.portfolio.repository.ExperienceRepository;
import com.janitha.portfolio.service.ExperienceService;
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
public class ExperienceServiceImpl implements ExperienceService {

    private final ExperienceRepository experienceRepository;
    private final ExperienceMapper experienceMapper;

    @Override
    public List<ExperienceResponseDto> getAllExperiences() {
        log.debug("Fetching all professional experiences");
        return experienceRepository.findAllByOrderByOrderIndexAsc()
                .stream()
                .map(experienceMapper::toDto)
                .collect(Collectors.toList());
    }
}
