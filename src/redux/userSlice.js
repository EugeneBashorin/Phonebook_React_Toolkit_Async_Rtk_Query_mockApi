import {createSlice} from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { nanoid } from "nanoid";

export const usersApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://64a03db3ed3c41bdd7a720ce.mockapi.io' }),
    endpoints: (builder) => ({
      getUsers: builder.query({
        query: () => `/contacts`,
      }),

    }),
  });

export const { useGetUsersQuery } = usersApi;

const userInitialState = [];

const userSlice = createSlice(
    {
        name:"user",
        initialState: userInitialState,
        reducers:{
            addUser:{
                reducer(state, action){
                    if(state.find(contact => contact.name.toLowerCase() === action.payload.name.toLowerCase())){  
                        alert(`${action.payload.name} is already in contacts.`)
                        return;
                    }
                         state.push(action.payload)
                },
                prepare({name, phoneNumber,favorites}){
                    return{
                        payload:{
                            id: nanoid(),
                            name,
                            phoneNumber,
                            favorites,
                        }
                    }
                },
        },
            deleteUser(state, action){
                const index = state.findIndex(state => state.id === action.payload);
                state.splice(index, 1);
            },
            editFavorite(state, action){
                for(let user of state){
                    if(user.id === action.payload){
                        user.favorites = !user.favorites;
                        break;
                    }
                }
            }
        }
    }
)

export const {addUser, deleteUser, editFavorite} = userSlice.actions;
export const userReducer = userSlice.reducer;