package com.janitha.portfolio.service.impl;

import com.janitha.portfolio.dto.ContactRequestDto;
import com.janitha.portfolio.dto.ContactResponseDto;
import com.janitha.portfolio.entity.ContactMessageEntity;
import com.janitha.portfolio.repository.ContactMessageRepository;
import com.janitha.portfolio.service.ContactService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements ContactService {

    private final ContactMessageRepository contactMessageRepository;

    @Value("${portfolio.contact.email-notifications-enabled:false}")
    private boolean emailNotificationsEnabled;

    @Override
    @Transactional
    public ContactResponseDto processContactMessage(ContactRequestDto request, String clientIp) {
        log.info("Received new contact message from {} ({})", request.getName(), request.getEmail());

        ContactMessageEntity messageEntity = ContactMessageEntity.builder()
                .name(request.getName().trim())
                .email(request.getEmail().trim().toLowerCase())
                .subject(request.getSubject() != null ? request.getSubject().trim() : "General Engineering Inquiry")
                .message(request.getMessage().trim())
                .clientIp(clientIp)
                .read(false)
                .build();

        ContactMessageEntity saved = contactMessageRepository.save(messageEntity);
        log.info("Persisted contact message ID {} to MS SQL Server", saved.getId());

        // Clean hook for SMTP / SendGrid / Azure Communication Services
        if (emailNotificationsEnabled) {
            sendNotificationEmail(saved);
        } else {
            log.info("Email notification dispatch disabled. Message stored safely in MS SQL Server.");
        }

        return ContactResponseDto.builder()
                .id(saved.getId())
                .name(saved.getName())
                .email(saved.getEmail())
                .subject(saved.getSubject())
                .status("RECEIVED")
                .receivedAt(saved.getCreatedAt())
                .build();
    }

    private void sendNotificationEmail(ContactMessageEntity message) {
        // Production hook for JavaMailSender or Azure Communication Services
        log.debug("Dispatching email notification for message ID {}", message.getId());
    }
}
