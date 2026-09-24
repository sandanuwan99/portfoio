package com.janitha.portfolio.repository;

import com.janitha.portfolio.entity.ExperienceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExperienceRepository extends JpaRepository<ExperienceEntity, Long> {

    List<ExperienceEntity> findAllByOrderByOrderIndexAsc();
}
