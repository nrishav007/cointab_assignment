import * as types from "./ActionTypes"
import axios from "axios";
const api=process.env.REACT_APP_API;
export const getReq = (url) =>(dispatch)=>{
    dispatch({type:types.GET_REQUEST});
    return axios.get(url)
    .then((res)=>{
        dispatch({type:types.GET_SUCCESS,payload:res.data})
    })
    .catch(()=>{
        dispatch({type:types.GET_FAILURE})
    })
}

export const postReq = (url) =>(dispatch)=>{
    dispatch({type:types.POST_REQUEST});
    return axios.get(api)
    .then((res)=>{
        return axios.post(url,res.data.results)
        .then((r)=>{
            dispatch({type:types.POST_SUCCESS,payload:r.data})
        })
        .catch(()=>{
            dispatch({type:types.POST_FAILURE})
        })
    })
    .catch(()=>{
        dispatch({type:types.POST_FAILURE})
    })
}

export const delReq = (url) =>(dispatch)=>{
    dispatch({type:types.DELETE_REQUEST});
    return axios.delete(url)
    .then(()=>{
        dispatch({type:types.DELETE_SUCCESS})
    })
    .catch(()=>{
        dispatch({type:types.DELETE_FAILURE})
    })
}

