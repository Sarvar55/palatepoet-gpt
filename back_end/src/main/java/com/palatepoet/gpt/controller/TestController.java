package com.palatepoet.gpt.controller;

import com.palatepoet.gpt.exceptions.BaseException;
import com.palatepoet.gpt.models.base.BaseResponse;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequestMapping("/v1/api")
public class TestController {

    @GetMapping("/success")
    public BaseResponse<?> success() {
        throw BaseException.notFound("deneme","dekeke","sdkfnsjkdf");
    }
}
