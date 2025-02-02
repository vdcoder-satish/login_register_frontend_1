import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import { ENDPOINTS } from '../api_endpoints';
export const fetchedUserData=createAsyncThunk('fetch/userdata',async(_,thunkAPI)=>{
  try{
    //  const result=await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log('api end point',`${ENDPOINTS.GET_USER}`)
    const result=await fetch(`${ENDPOINTS.GET_USER}`);

     const data=await result.json();
     return data;
  }catch(error){
   return thunkAPI.rejectWithValue({
      error:error.message
    })
  }
})
const userSlice=createSlice({
  name:'user',
  initialState:{
    userData:[],
    status:'idle',
    error:null
  },
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchedUserData.pending,(state)=>{
      state.status='loading';
    }).addCase(fetchedUserData.fulfilled,(state,action)=>{
      state.status='succeeded';
      state.userData=action.payload;
    }).addCase(fetchedUserData.rejected,(state,action)=>{
      state.status='failed';
      state.error=action.payload.error;
    })
  }
});
export default userSlice.reducer;