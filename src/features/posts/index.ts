import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IPost} from "@/interfaces/post";
import {IRequest} from "@/interfaces/request";

export interface IPosts {
    posts: IPost[] | null;
    total: number
}

const initialState: IPosts = {
    posts: null,
    total: 0
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchPosts: (state, action: PayloadAction<IRequest>) => {
            state.posts = action.payload.posts;
            state.total = action.payload.limit;
        },
    },
})

// Action creators are generated for each case reducer function
export const { fetchPosts } = postsSlice.actions

export default postsSlice.reducer