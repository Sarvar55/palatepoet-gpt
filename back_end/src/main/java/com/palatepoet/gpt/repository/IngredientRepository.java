package com.palatepoet.gpt.repository;

import com.palatepoet.gpt.models.mybatis.ingredient.Ingredient;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface IngredientRepository {
    void insert(Ingredient ingredient);
}
