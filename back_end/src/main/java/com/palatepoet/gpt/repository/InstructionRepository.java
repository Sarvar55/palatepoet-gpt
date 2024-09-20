package com.palatepoet.gpt.repository;

import com.palatepoet.gpt.models.mybatis.instruction.Instruction;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface InstructionRepository {
    void insert(Instruction instruction);

}
