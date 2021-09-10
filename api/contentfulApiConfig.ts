import { createClient } from 'contentful'


export const contentfulClient = createClient({
    //@ts-ignore
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    //@ts-ignore
    space: process.env.NEXT_PUBLIC_SPACE
})