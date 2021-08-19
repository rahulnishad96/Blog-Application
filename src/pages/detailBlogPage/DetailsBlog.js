import React,{useEffect} from 'react'
import { useHistory,useParams } from 'react-router-dom';
import {deleteBlogs, getSingleBlogs} from '../../redux/actions';
import {useDispatch, useSelector} from "react-redux";
import './DetailsBlog.css';
function DetailsBlog() {

    let {id}=useParams();
    const {blog} = useSelector(state => (state.data));
    const history = useHistory();
    const dispatch = useDispatch();
    const {title,description,status}=blog;

    useEffect(() => {
        dispatch(getSingleBlogs(id));
    },[]);
    
    const deleteHandler = id => {
        if(window.confirm("Are you sure wanted to delete this Blog"))
        {
            dispatch(deleteBlogs(id));
            history.push("/");
        }
    }

    return (
        <div className="detailsBlog-outer-div">
            <h1>Deatails Page</h1>
            <div className="button-div">
                <button className="home" onClick = {() => history.push(`/`)}>Home</button>
                <button className="delete" onClick = {() => deleteHandler(id)}>Delete</button>
                <button className="edit" onClick = {() => history.push(`/editblog/${id}`)}>Edit</button>
            </div>
            <h1>{title}({status})</h1>
            <p>{description}</p>
            
        </div>
    )
}

export default DetailsBlog
