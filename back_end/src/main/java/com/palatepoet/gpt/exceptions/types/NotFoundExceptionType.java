package com.palatepoet.gpt.exceptions.types;

import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Map;

@Data
@EqualsAndHashCode(callSuper = true)
@Builder(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@FieldDefaults(level = AccessLevel.PRIVATE)
public class NotFoundExceptionType extends RuntimeException {
    String target;
    Map<String, Object> fields;

    public static NotFoundExceptionType of(String target, Map<String, Object> fields) {
        return NotFoundExceptionType.builder()
                .target(target)
                .fields(fields)
                .build();
    }
}
