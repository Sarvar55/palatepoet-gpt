package com.palatepoet.gpt.repository;

import com.palatepoet.gpt.models.mybatis.instruction.Instruction;
import com.palatepoet.gpt.models.mybatis.macro.Macro;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MacroRepository {
    void insert(Macro macro);
}
