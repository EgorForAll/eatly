import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IPost} from "@/interfaces/post";

export interface IPosts {
    posts: IPost[] | null
}

const initialState: IPosts = {
    posts: null,
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        fetchPosts: (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { fetchPosts } = postsSlice.actions

export default postsSlice.reducer