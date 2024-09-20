package com.palatepoet.gpt.repository;

import com.palatepoet.gpt.models.mybatis.user.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.security.core.parameters.P;

import java.util.Optional;

@Mapper
public interface UserRepository {

    void insert(User user);

    Optional<User> findByEmail(@Param("email") String email);

    Optional<User> findById(@Param("userId") Long userId);
}
