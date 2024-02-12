import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firebase/database'

export const shopApi = createApi({

    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    tagTypes:["image","location","order"],
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
        //Método para 
        postOrders: builder.mutation({
            query: ({localId,order}) => ({
                url:`orders/${localId}.json`,
                method:"POST",
                body:order,
            }),
            invalidatesTags:["order"]
        }),
        getOrders: builder.query({
            query: (localId) => `orders/${localId}.json`,
            transformResponse:(response) => {
                if(!response) return []
                const data = Object.keys(response).map(key => ({id:key,...response[key]})) 
                return data
            },
            providesTags:["order"]
        }),
        //Método para guardar la foto de perfil
        postProfileImage: builder.mutation({
            query: ({localId,image}) => ({
                url:`profileImage/${localId}.json`,
                method:"PUT",
                body:{image}
            }),
            invalidatesTags: ["image"]
        }),
        //Método para traer la foto de perfil
        getProfileImagen: builder.query({
            query: (localId) => `profileImage/${localId}.json`,
            providesTags:["image"]
        }),
        //Método para guardar la localización
        postUserLocation: builder.mutation({
            query: ({localId,locationFormatted}) => ({
                url:`userLocation/${localId}.json`,
                method:"PUT",
                body: locationFormatted
            }),
            invalidatesTags:["location"]
        }),
        //Método traer localización
        getUserLocation: builder.query({
            query: (localId) => `userLocation/${localId}.json`,
            providesTags:["location"]
        })
    })
})

export const {   
                useGetProductQuery, 
                useGetProductsQuery, 
                useGetCategoriesQuery, 
                usePostOrdersMutation,
                useGetOrdersQuery, 
                usePostProfileImageMutation,
                useGetProfileImagenQuery,
                usePostUserLocationMutation,
                useGetUserLocationQuery,
            } = shopApi