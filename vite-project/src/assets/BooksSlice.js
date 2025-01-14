import booksData from './BooksData';
import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({

    name: "books",
    initialState: booksData,
    reducers: {
        addBook: (state, action) => {
            state.push({...action.payload, id:booksData.length+1 })
        },
    },
}
)

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;