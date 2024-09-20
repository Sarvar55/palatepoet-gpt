package com.palatepoet.gpt.services.base;

public interface TokenReader<T> {
    T read(String token);
}
