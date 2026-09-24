package com.janitha.portfolio.service;

import com.janitha.portfolio.dto.ContactRequestDto;
import com.janitha.portfolio.dto.ContactResponseDto;

public interface ContactService {

    ContactResponseDto processContactMessage(ContactRequestDto request, String clientIp);
}
