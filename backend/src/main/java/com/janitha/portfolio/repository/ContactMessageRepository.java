package com.janitha.portfolio.repository;

import com.janitha.portfolio.entity.ContactMessageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactMessageRepository extends JpaRepository<ContactMessageEntity, Long> {

    List<ContactMessageEntity> findAllByOrderByCreatedAtDesc();
}
