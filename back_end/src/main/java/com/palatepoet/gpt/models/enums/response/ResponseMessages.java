package com.palatepoet.gpt.models.enums.response;

import org.springframework.http.HttpStatus;

public interface ResponseMessages {

    String key();

    String code();

    String message();

    HttpStatus status();

}
