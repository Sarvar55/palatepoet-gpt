package com.palatepoet.gpt.services.user;

import com.palatepoet.gpt.models.mybatis.user.User;

public interface UserService {

    void insert(User user);

    User findByEmail(String email);

    User findById(Long userId);
}
