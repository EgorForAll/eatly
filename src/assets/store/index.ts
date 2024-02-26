import { configureStore } from '@reduxjs/toolkit'
import postsReducer from "@/features/posts/posts";
import commentsReducer from "@/features/comments/comments"

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch