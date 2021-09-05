import { contentfulClient } from '../../utils/contentfulApi'


export const getRecipes = async () => {
    try {
        const recipesResponse = await contentfulClient.getEntries()

        const recipes = await recipesResponse.items.filter((recipe: any) => recipe.fields.description)
        return recipes
    } catch (error) {
        return error.data
    }
}


