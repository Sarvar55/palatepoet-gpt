package com.palatepoet.gpt.models.enums.exception;

import com.palatepoet.gpt.exceptions.BaseException;
import com.palatepoet.gpt.exceptions.types.NotFoundExceptionType;
import com.palatepoet.gpt.models.base.BaseResponse;

public enum ExceptionType {
    NOT_FOUND {
        @Override
        public BaseResponse.Meta handle(BaseException e) {
            NotFoundExceptionType notFoundData = e.getNotFoundData();
            return BaseResponse.Meta.of(
                    String.format(e.getResponseMessage().key(), notFoundData.getTarget().toLowerCase()),
                    String.format(e.getResponseMessage().message(), notFoundData.getTarget(), notFoundData.getFields().toString())
            );
        }
    },
    DEFAULT {
        @Override
        public BaseResponse.Meta handle(BaseException e) {
            return BaseResponse.Meta.of(e.getResponseMessage());
        }
    };

    public abstract BaseResponse.Meta handle(BaseException e);
}
