package com.palatepoet.gpt.services.ingredient;

import com.palatepoet.gpt.models.mybatis.ingredient.Ingredient;
import com.palatepoet.gpt.repository.IngredientRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class IngredientServiceImpl implements IngredientService {
    private final IngredientRepository ingredientRepository;

    @Override
    public void insert(Ingredient ingredient) {
        ingredientRepository.insert(ingredient);
    }
}
