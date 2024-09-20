package com.palatepoet.gpt.models.base;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.palatepoet.gpt.exceptions.BaseException;
import com.palatepoet.gpt.models.enums.exception.ExceptionType;
import com.palatepoet.gpt.models.enums.response.ResponseMessages;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;

@Data
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PRIVATE)
@Builder(access = AccessLevel.PROTECTED)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class BaseResponse<T> {

    T data;
    Meta meta;
    HttpStatus status;

    @Data
    @AllArgsConstructor(access = AccessLevel.PRIVATE)
    @NoArgsConstructor(access = AccessLevel.PRIVATE)
    @Builder(access = AccessLevel.PRIVATE)
    @FieldDefaults(level = AccessLevel.PRIVATE)
    public static class Meta {
        String key;
        String message;

        public static Meta of(String key, String message) {
            return Meta.builder().key(key).message(message).build();
        }

        public static Meta of(ResponseMessages responseMessages) {
            return Meta.of(responseMessages.key(), responseMessages.message());
        }

        public static Meta of(BaseException ex) {
            return ExceptionType.valueOf(ex.getResponseMessage().code()).handle(ex);
        }
    }

    public static <T> BaseResponse<T> success(T data) {
        return BaseResponse.<T>builder().data(data)
                .status(HttpStatus.OK).build();
    }

    public static <T> BaseResponse<T> success() {
        return success(null);
    }

    public static BaseResponse<?> error(BaseException e) {
        return BaseResponse.builder()
                .status(HttpStatus.BAD_REQUEST)
                .meta(Meta.of(e))
                .build();
    }


}
