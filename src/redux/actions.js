import axios from "axios";
import * as types from "./actionTypes";

const getBlogs  = blogs => ({
    type:types.GET_BLOGS,
    payload:blogs,
});

const deletedBlogs  = () => ({
    type:types.DELETE_BLOGS,
});

const addedBlogs  = () => ({
    type:types.ADD_BLOGS,
});

const updatedBlogs  = () => ({
    type:types.UPDATE_BLOG,
});

const editBlogs  = (blog) => ({
    type:types.GET_SINGLE_BLOG,
    payload:blog,
});

export const loadBlogs = () => {
    console.log("LoadBlog called");
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`)
        .then((resp) => {
            console.log("responce : ",resp);
            dispatch(getBlogs(resp.data));
        })
        .catch(error => console.log("error : ",error));
    }
}

export const deleteBlogs = (id) => {
    return function (dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/${id}`)
        .then((resp) => {
            console.log("responce : ",resp);
            dispatch(deletedBlogs());
            dispatch(loadBlogs());
        })
        .catch(error => console.log(error));
    }
}

export const addBlogs = (blog) => {
    return function (dispatch) {
        axios.post(`${process.env.REACT_APP_API}`,blog)
        .then((resp) => {
            console.log("responce : ",resp);
            dispatch(addedBlogs());
            dispatch(loadBlogs());
        })
        .catch(error => console.log(error));
    }
}

export const getSingleBlogs = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/${id}`)
        .then((resp) => {
            console.log("responce : ",resp);
            dispatch(editBlogs(resp.data));
            
        })
        .catch(error => console.log(error));
    }
}

export const updateBlogs = (blog,id) => {
    return function (dispatch) {
        axios.put(`${process.env.REACT_APP_API}/${id}`,blog)
        .then((resp) => {
            console.log("responce : ",resp);
            dispatch(updatedBlogs(resp.data));
            dispatch(loadBlogs());
            
        })
        .catch(error => console.log(error));
    }
}