package com.janitha.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ExperienceResponseDto {

    private Long id;
    private String role;
    private String company;
    private String companyUrl;
    private String location;
    private String period;
    private LocalDate startDate;
    private LocalDate endDate;
    private boolean current;
    private String summary;
    private List<String> responsibilities;
    private List<String> technologies;
    private int orderIndex;
}
