import axios from 'axios'

export const getData=({page, limit, sort, order})=>{
    return axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`,{ 
        params:{
            page:page,
            limit: limit,
            sort: sort,
            order: order,
        }
    })
}




export const fetchData=({page, limit, sort, order})=>{
    return axios.get(`http://localhost:8080/toys?_page=${page}&_limit=${limit}`,{ 
        params:{
            page:page,
            limit: limit,
            sort: sort,
            order: order,
        }
    })
}