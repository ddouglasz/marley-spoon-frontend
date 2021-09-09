export interface ISys {
    id: string
    linkType: string
    type: string
}

export interface IcontentType {
    sys: ISys
    createdAt: string
}

export interface IEnvironment {
    sys: ISys
    id: string
    locale: string
    revision: number
}

export interface ISpace {
    sys: ISys
    type: string
    updatedAt: string
}

export interface ITags {
    fields: {
        name: string
    },
    metadata: IMetadata
    sys: {
        contentType: IcontentType
        createdAt: string
        environment: IEnvironment
        id: string
        locale: string
        revision: number
        space: ISpace
        type: string
        updatedAt: string
    }
}

export interface IMetadata {
    tags: ISys[]
}
export interface IDetails {
    image: {
        height: number
        width: number
    }
    size: number
    fileName: string
    url: string
}

interface IFile {
    contentType: string
    details: IDetails
    url: string
}

export interface IPhoto {
    fields: {
        file: IFile
        title: string
    }
    metadata: IMetadata
    sys: {
        createdAt: string
        environment: IEnvironment
        space: ISpace
    }
}

interface IChef {
    fields: {
        name: string
    }
    metadata: IMetadata
    sys: ISys
}

export interface IRecipe {
    fields: {
        calories: number
        chef: IChef
        description: string
        photo: IPhoto
        tags: ITags[]
        title: string
    }
    metadata: IMetadata
    sys: {
        createdAt: string
        contentType: IcontentType
        environment: IEnvironment
        id: string
        locale: string
        revision: number
        space: ISpace
        type: string
        updatedAt: string
    }
}
