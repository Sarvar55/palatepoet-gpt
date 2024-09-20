package com.palatepoet.gpt.models.properties.security;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Data
@ConfigurationProperties("security")
@Configuration
public class SecurityProperties {
    private JwtData jwt;
}
