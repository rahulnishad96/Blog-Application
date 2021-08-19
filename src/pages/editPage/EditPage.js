import React,{useEffect, useState} from 'react'
import { useHistory,useParams } from 'react-router-dom';
import {getSingleBlogs, updateBlogs } from '../../redux/actions';
import {useDispatch, useSelector} from "react-redux";

function EditPage() {

    const [state, setstate] = useState({
        title:"",
        description:"",
        status:"",
    });
    const [error, setError] = useState("");
    let {id}=useParams();
    const {blog} = useSelector(state => (state.data));
    const history = useHistory();
    const dispatch = useDispatch();
    const {title,description,status}=state;

    useEffect(() => {
        dispatch(getSingleBlogs(id));
    },[]);

    useEffect(() => {
        if(blog){
            setstate({...blog});
        }
    },[blog]);

    const inputChangeHandler = (e) => {
        let {name,value} = e.target;
        setstate({
            ...state,
            [name]: value
        })
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submited");
        
        if(!title || !description || !status ){
            console.log("fill ");
            setError("Please fill all input Feild");
        }
        else
        {
            dispatch(updateBlogs(state,id));
            history.push("/");
            setError("");
        }
    };

    return (
        <div className="add-page">
            <h1>Edit Page</h1>
            {error && <h2 style={{color:"red"}}>{error}</h2>}
            <form onSubmit={submitHandler}>
                <label for="title">Title : </label>
                <input className="title" type="text" placeholder="Enter Title..." name="title" value={title || ""} onChange={inputChangeHandler} /><br/>
                <label for="description">Description : </label>
                <input className="description" type="textarea" placeholder="Enter Description..." name="description" value={description || ""} onChange={inputChangeHandler} /><br/>
                <label for="status">Choose Blog Status : </label>
                <select className="status" name="status" onChange={inputChangeHandler} value={status || ""}>
                    <option value="Comming">Comming</option>
                    <option value="Procesing">Procesing</option>
                    <option value="Ended">Ended</option>
                </select><br/>

                <button type="submit" >Update Blog</button>
            </form>
        </div>
    )
}

export default EditPage
