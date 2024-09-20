package com.palatepoet.gpt.services.user;

import com.palatepoet.gpt.exceptions.BaseException;
import com.palatepoet.gpt.models.mybatis.user.User;
import com.palatepoet.gpt.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public void insert(User user) {
        userRepository.insert(user);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(
                        () -> BaseException.notFound(User.class.getSimpleName(), "Email", email)
                );
    }

    @Override
    public User findById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(
                        () -> BaseException.notFound(User.class.getSimpleName(), "userId", String.valueOf(userId))
                );
    }
}
