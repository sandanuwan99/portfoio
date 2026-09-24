package com.janitha.portfolio.controller;

import com.janitha.portfolio.dto.ApiResponse;
import com.janitha.portfolio.dto.ContactRequestDto;
import com.janitha.portfolio.dto.ContactResponseDto;
import com.janitha.portfolio.service.ContactService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
@Tag(name = "Contact", description = "Endpoints for transmitting inquiries, validating contact payloads, and persisting into Microsoft SQL Server")
public class ContactController {

    private final ContactService contactService;

    @PostMapping
    @Operation(summary = "Submit contact message", description = "Validates the sender name, email format, and message length before persisting to Microsoft SQL Server")
    @ApiResponses(value = {
            @io.swagger.v3.oas.annotations.responses.ApiResponse(responseCode = "201", description = "Message successfully validated and stored"),
            @io.swagger.v3.oas.annotations.responses.ApiResponse(responseCode = "400", description = "Validation failed for one or more fields")
    })
    public ResponseEntity<ApiResponse<ContactResponseDto>> submitContactMessage(
            @Valid @RequestBody ContactRequestDto requestDto,
            HttpServletRequest request) {

        String clientIp = request.getHeader("X-Forwarded-For");
        if (clientIp == null || clientIp.isBlank()) {
            clientIp = request.getRemoteAddr();
        }

        ContactResponseDto response = contactService.processContactMessage(requestDto, clientIp);
        return new ResponseEntity<>(
                ApiResponse.created("Your message has been safely received. Janitha will respond shortly.", response),
                HttpStatus.CREATED
        );
    }
}
