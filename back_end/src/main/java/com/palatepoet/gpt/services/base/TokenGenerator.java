package com.palatepoet.gpt.services.base;

public interface TokenGenerator<T> {
    String generate(T obj);
}
