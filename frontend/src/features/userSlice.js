import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email:"",
    image:"",
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{

    }
})



export default userSlice.reducer;