import { createSlice } from '@reduxjs/toolkit'

export enum Theme {
  LIGHT,
  DARK
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: Theme.LIGHT
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload.theme
    }
  }
})

export const { setTheme } = themeSlice.actions
export const themeReducer = themeSlice.reducer
