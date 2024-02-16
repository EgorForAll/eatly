import {IPost} from "@/interfaces/post";
export interface IRequest {
    limit: number;
    skip: number;
    total: number;
    posts: IPost[]
}