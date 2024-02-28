import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {IPost} from "@/interfaces/post";
import {IRequest} from "@/interfaces/request";

export interface IPosts {
    posts: IPost[] | null;
    total: number;
    currentPost: IPost | null
}

const initialState: IPosts = {
    posts: null,
    total: 0,
    currentPost: null
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchPosts: (state, action: PayloadAction<IRequest>) => {
            state.posts = action.payload.posts;
            state.total = action.payload.limit;
        },
        setCurrentPost: (state, action: PayloadAction<IPost | null>) => {
            state.currentPost = action.payload
        }
    }
})


export const {fetchPosts, setCurrentPost} = postsSlice.actions

export default postsSlice.reducer