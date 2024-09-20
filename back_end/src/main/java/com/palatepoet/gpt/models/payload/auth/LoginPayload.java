package com.palatepoet.gpt.models.payload.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class LoginPayload {
    @Email(message = "Please Enter Valid Email")
    String email;
    @Size(min = 6,max = 17)
    String password;

    boolean rememberMe;
}
