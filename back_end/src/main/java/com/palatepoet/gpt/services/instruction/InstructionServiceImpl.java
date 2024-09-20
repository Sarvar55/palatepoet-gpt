package com.palatepoet.gpt.services.instruction;

import com.palatepoet.gpt.models.mybatis.instruction.Instruction;
import com.palatepoet.gpt.repository.InstructionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class InstructionServiceImpl implements InstructionService {
    private final InstructionRepository instructionRepository;

    @Override
    public void insert(Instruction instruction) {
        instructionRepository.insert(instruction);
    }
}
