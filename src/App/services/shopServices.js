import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firebase/database'

export const shopApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
        }),
        getProduct: builder.query({
            query: (id) => `products/${id}.json`
        }),
        getCategories: builder.query({
            query: () => "categories.json"
        }),
        postOrders: builder.mutation({
            query: (order) => ({
                url:"orders.json",
                method:"POST",
                body:order,
            })
        })
    })
})

export const {   
    useGetProductQuery, useGetProductsQuery, useGetCategoriesQuery, usePostOrdersMutation 
} = shopApi