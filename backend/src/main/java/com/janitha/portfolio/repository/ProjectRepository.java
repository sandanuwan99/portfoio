package com.janitha.portfolio.repository;

import com.janitha.portfolio.entity.ProjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectEntity, Long> {

    List<ProjectEntity> findAllByOrderByOrderIndexAsc();

    List<ProjectEntity> findByFeaturedTrueOrderByOrderIndexAsc();

    Optional<ProjectEntity> findBySlug(String slug);
}
