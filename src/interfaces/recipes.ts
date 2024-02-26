export interface IRecipes {
    id?: number;
    image: string;
    tags: string[];
    name: string;
    rating: number;
    cookTimeMinutes: number;
}

export interface  IRequest {
    recipes: IRecipes[];
    total: number;
    skip: number;
    limit: number;
}