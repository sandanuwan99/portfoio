package com.janitha.portfolio.service.impl;

import com.janitha.portfolio.dto.SkillCategoryDto;
import com.janitha.portfolio.mapper.SkillMapper;
import com.janitha.portfolio.repository.SkillCategoryRepository;
import com.janitha.portfolio.service.SkillService;
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
public class SkillServiceImpl implements SkillService {

    private final SkillCategoryRepository skillCategoryRepository;
    private final SkillMapper skillMapper;

    @Override
    public List<SkillCategoryDto> getAllSkillCategories() {
        log.debug("Fetching all skill categories");
        return skillCategoryRepository.findAllByOrderByOrderIndexAsc()
                .stream()
                .map(skillMapper::toCategoryDto)
                .collect(Collectors.toList());
    }
}
