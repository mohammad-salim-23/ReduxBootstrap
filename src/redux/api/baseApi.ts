import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
//http://localhost:5000/api
const baseApi = createApi({
     reducerPath:"baseApi",
     baseQuery: fetchBaseQuery ({baseUrl:"http://localhost:5000/api"}),
    endpoints: (builder)=>({
        getTasks: builder.query(
            {
                query:()=> "/tasks"
            }
        )
    })
})