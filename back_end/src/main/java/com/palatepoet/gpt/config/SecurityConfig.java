package com.palatepoet.gpt.config;

import com.palatepoet.gpt.filters.AuthorizationFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfigurationSource;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
@RequiredArgsConstructor
public class SecurityConfig {

    private final CorsConfigurationSource corsConfigurationSource;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http,
                                                   final AuthorizationFilter authorizationFilter) throws Exception {
        return http
                .cors(cors -> cors.configurationSource(corsConfigurationSource))
                .addFilterBefore(authorizationFilter, UsernamePasswordAuthenticationFilter.class)
                .csrf(AbstractHttpConfigurer::disable)
                .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(
                        request -> {
                            request.requestMatchers("/swagger-ui/**", "/api-docs/**").permitAll();
                            request.requestMatchers("/success", "/error").permitAll();
                            request.requestMatchers("/v1/auth/**").permitAll();
                            request.requestMatchers("/v1/auth/logout").authenticated();
                            request.requestMatchers("/v1/users/**").permitAll();
                            request.requestMatchers("/**").authenticated();
                        }
                ).build();

    }
}
