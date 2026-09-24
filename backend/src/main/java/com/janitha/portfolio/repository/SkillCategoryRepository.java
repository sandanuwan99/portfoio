package com.janitha.portfolio.repository;

import com.janitha.portfolio.entity.SkillCategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SkillCategoryRepository extends JpaRepository<SkillCategoryEntity, Long> {

    List<SkillCategoryEntity> findAllByOrderByOrderIndexAsc();
}
