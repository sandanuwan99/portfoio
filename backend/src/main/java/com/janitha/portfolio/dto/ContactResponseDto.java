package com.janitha.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ContactResponseDto {

    private Long id;
    private String name;
    private String email;
    private String subject;
    private String status;
    private LocalDateTime receivedAt;
}
