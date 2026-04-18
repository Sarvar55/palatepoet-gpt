# Recipe API Documentation

## Overview
The Recipe service provides a RESTful API for managing culinary recipes. It allows users to save, retrieve, and delete recipes, including details such as ingredients, instructions, cooking time, and nutritional macros. This service is designed to work in conjunction with the PalatePoet GPT front-end to provide a seamless recipe management experience.

## API

### 1. Save Recipe
Saves a new recipe to the database.

- **URL:** `/v1/recipe`
- **Method:** `POST`
- **Request Body:** `RecipePayload`
- **Success Response:** `BaseResponse<Void>`

#### Example Request:
```json
{
  "userId": 1,
  "title": "Spaghetti Carbonara",
  "cookingTime": 20,
  "calories": 600,
  "difficulty": "MEDIUM",
  "macros": {
    "protein": 25,
    "fat": 30,
    "carbs": 60
  },
  "ingredients": [
    { "name": "Spaghetti", "amount": "200g" },
    { "name": "Eggs", "amount": "2" }
  ],
  "instructions": [
    { "step": 1, "description": "Boil pasta." },
    { "step": 2, "description": "Mix eggs and cheese." }
  ]
}
```

### 2. Delete Recipe
Deletes a recipe by its ID.

- **URL:** `/v1/recipe/{recipeId}`
- **Method:** `DELETE`
- **Path Parameters:** `recipeId` (Long)
- **Success Response:** `BaseResponse<Void>`

### 3. Get Recipes by User
Retrieves all recipes saved by a specific user.

- **URL:** `/v1/users/{userId}/recipes`
- **Method:** `GET`
- **Path Parameters:** `userId` (Long)
- **Success Response:** `BaseResponse<List<RecipeResponse>>`

## Usage

### Java Client Example (Rest Template)
```java
RecipePayload payload = RecipePayload.builder()
    .userId(1L)
    .title("Omelette")
    .cookingTime(10)
    .build();

BaseResponse<Void> response = restTemplate.postForObject("/v1/recipe", payload, BaseResponse.class);
```

### TypeScript/Next.js Example
```typescript
const fetchRecipes = async (userId: number) => {
  const res = await fetch(`/api/v1/users/${userId}/recipes`);
  const data = await res.json();
  return data.data; // List of RecipeResponse
};
```

## Configuration

The service behavior can be configured in `application.yaml`:

| Property | Default | Description |
|----------|---------|-------------|
| `spring.profiles.active` | `local` | Active Spring profile (local, dev, prod) |
| `mybatis.mapper-locations` | `classpath:mybatis/mappers/*.xml` | Location of MyBatis XML mappers |
| `liquibase.enabled` | `true` | Enables/disables database migrations |

## Error Handling

Standard error responses follow the `BaseResponse` structure:
```json
{
  "status": "BAD_REQUEST",
  "meta": {
    "key": "ERROR_KEY",
    "message": "Human readable error message"
  }
}
```

### Common Errors:
- `404 Not Found`: Occurs when a recipe or user does not exist.
- `400 Bad Request`: Occurs when the `RecipePayload` fails validation (e.g., missing title).
- `401 Unauthorized`: Occurs when the request lacks a valid JWT token (handled by `AuthorizationFilter`).
