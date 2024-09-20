package com.palatepoet.gpt.services.user;

import com.palatepoet.gpt.models.mybatis.user.User;
import com.palatepoet.gpt.models.security.LoggedInUserDetails;
import com.palatepoet.gpt.repository.UserRepository;
import lombok.RequiredArgsConstructor;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

    private final UserService userService;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userService.findByEmail(email);
        return new LoggedInUserDetails(
                user.getPassword(),
                user.getUsername(),
                new ArrayList<>()
        );
    }
}
