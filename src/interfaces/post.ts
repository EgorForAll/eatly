export interface IPost {
    id: number,
    body: string;
    title: string;
    tags: string[],
    reactions: number
}