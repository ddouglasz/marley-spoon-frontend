## MS RECIPE APP 

- A simple app that consumes a contentful Api to display a list of recipes and recipe details. This application is built using React (Nextjs Framework).


## GETTING STARTED

**_1. Environmental variables:_**

- Start by checking the `.env.example` for the keys to each of the .env settings needed.

- Create a `.env.local` and add the expected keys and provide their respective values to start up the app

**_2. Install all dependencies:_** To install all dependencies, run `Yarn`

**_3. Start App:_** run `yarn dev` to start the development server and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**_4. Tests:_** to run tests, run `yarn test`.



### THINGS TO IMPROVE/TODO

- Write more tests.

- Improve on adding types to my methods and jsx. Leaving types on `any` or `//@ts-ignore` is not good practice.

- Add CI/CD functionality.


## FOLDER STRUCTURE TO NOTE

***api***

-`api/recipes.ts:` This contains the logic that connects to contentful to get all entries, single entry and also filter data for needed data to display. 
This file carries two methods: `getRecipes - get all recipes` and `getRecipe - get single recipe details`. 


***components***

Folder consists of reusable components listed below:

```
- components/Card.tsx
- components/Error.tsx
- components/Footer.tsx
- components/Header.tsx
- components/Layout.tsx
- components/Loading.tsx
```


***pages***

- `pages/index.tsx:` this is the homepage of the app where all recipes are listed.

- `pages/recipe-details/[recipe_id].tsx:` this is the page where the recipe details are displayed. The page naming is deliberately made dynamic to accomodate the given recipe_id to be navigated to.

***styles***

- This folder carries all the styles. It includes:

```
- styles/card.module.css
- styles/error.module.css
- styles/footer.module.css
- styles/globals.module.css
- styles/header.module.css
- styles/index.module.css
- styles/layout.module.css
- styles/loading.module.css
- styles/recipe.module.css
```

***tests***

- This folder contains all tests for the project

***types***

- `types/recipes.types.ts:` this has the types needed for the `recipes` object and other fields needed.

***utils***

- `utils/contentfulApi.ts:` this is where the setup to connect to contentful api is configured and then exported to the `api/recipes.ts` where it is used to make requests to contentful.

- `utils/formatString:` this is meant to contains any reusable function that returns a processed string depending on our use case



## BRANCHES

```
- main
- development
- initial-app-layout
- feat/data-fetching
- feat/styling
- feat/tests
```
