package com.palatepoet.gpt.services.instruction;

import com.palatepoet.gpt.models.mybatis.instruction.Instruction;

public interface InstructionService {
    void insert(Instruction instruction);
}
