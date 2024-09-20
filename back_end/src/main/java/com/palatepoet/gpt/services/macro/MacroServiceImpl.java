package com.palatepoet.gpt.services.macro;

import com.palatepoet.gpt.models.mybatis.macro.Macro;
import com.palatepoet.gpt.repository.MacroRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class MacroServiceImpl implements MacroService {
    private final MacroRepository macroRepository;

    @Override
    public void insert(Macro macro) {
        macroRepository.insert(macro);
    }
}
