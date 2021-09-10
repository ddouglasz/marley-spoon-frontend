import { contentfulClient } from '../api/contentfulApiConfig'


export const getRecipes = async () => {
    try {
        const recipesResponse = await contentfulClient.getEntries()
        const recipes = recipesResponse.items.filter((recipe: any) => recipe.fields.description)
        return recipes
    } catch (error) {
        return error.data
    }
}

export const getRecipe = async (recipeId: string) => {
    try {
        const recipeResponse = await contentfulClient.getEntry(recipeId)

        return recipeResponse
    } catch (error) {
        return error.data
    }
}


