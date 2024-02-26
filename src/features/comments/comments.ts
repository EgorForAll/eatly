import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {IComment} from "@/interfaces/comment";

interface InitialStateInterface {
    comments: IComment[] | null
}

interface IRequest {
    comments: IComment[];
    total: number;
    limit: number;
    skip: number;
}

const initialState: InitialStateInterface = {
    comments: null
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        fetchComments: (state, action: PayloadAction<IRequest>) => {
            state.comments = action.payload.comments;
        },
        addComment: (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload
        },
        resetComments: (state) => {
            state.comments = null
        }
    },
})

export const { fetchComments, addComment, resetComments} = commentsSlice.actions

export default commentsSlice.reducer;