package com.palatepoet.gpt.controller;

import com.palatepoet.gpt.models.base.BaseResponse;
import com.palatepoet.gpt.models.mybatis.user.User;
import com.palatepoet.gpt.services.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/users/{userId}")
    public BaseResponse<User> getUserById(@PathVariable Long userId) {
        return BaseResponse.success(
                userService.findById(userId)
        );
    }
}
