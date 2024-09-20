package com.palatepoet.gpt.exceptions;

import com.palatepoet.gpt.exceptions.types.NotFoundExceptionType;
import com.palatepoet.gpt.models.enums.response.ErrorResponseMessages;
import com.palatepoet.gpt.models.enums.response.ResponseMessages;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Map;

import static com.palatepoet.gpt.models.enums.response.ErrorResponseMessages.NOT_FOUND;
import static com.palatepoet.gpt.models.enums.response.ErrorResponseMessages.UNEXPECTED;

@Data
@EqualsAndHashCode(callSuper = true)
@Builder(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BaseException extends RuntimeException {

    ResponseMessages responseMessage;
    NotFoundExceptionType notFoundData;

    @Override
    public String getMessage() {
        return responseMessage.message();
    }

    public static BaseException of(ResponseMessages responseMessages) {
        return BaseException.builder().responseMessage(responseMessages)
                .build();
    }


    public static BaseException notFound(String target, String field, String value) {
        return BaseException.builder().responseMessage(NOT_FOUND)
                .notFoundData(NotFoundExceptionType.of(target, Map.of(field, value)))
                .build();
    }

    public static BaseException unexpected() {
        return of(UNEXPECTED);
    }

}
