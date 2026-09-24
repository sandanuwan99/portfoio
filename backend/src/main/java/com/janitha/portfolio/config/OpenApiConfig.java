package com.janitha.portfolio.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class OpenApiConfig {

    @Value("${server.port:8080}")
    private String serverPort;

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Janitha Sandanuwan — Enterprise Portfolio REST APIs")
                        .version("1.0.0")
                        .description("Production-ready Spring Boot 3 & Microsoft SQL Server REST API documentation for Janitha Sandanuwan's software engineering portfolio.")
                        .contact(new Contact()
                                .name("Janitha Sandanuwan")
                                .email("janithasandanuwa@gmail.com")
                                .url("https://github.com/sandanuwan99"))
                        .license(new License()
                                .name("Apache 2.0")
                                .url("https://www.apache.org/licenses/LICENSE-2.0.html")))
                .servers(List.of(
                        new Server().url("http://localhost:" + serverPort).description("Local Development Server"),
                        new Server().url("https://api.janitha-sandanuwan.dev").description("Production Server")
                ));
    }
}
