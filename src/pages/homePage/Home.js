import React,{useEffect, useState} from 'react'
import {useDispatch,useSelector} from "react-redux";
import { loadBlogs} from '../../redux/actions';
import { useHistory } from 'react-router-dom';
import './Home.css';

function Home() {
    let dispatch = useDispatch();
    let {blogs} = useSelector(state => state.data);
    let history = useHistory();
    const [searchValue, setSearchValue] = useState("");
    const [showMatch,setShowMatching] = useState(false);
    
    useEffect (()=> {
        dispatch(loadBlogs());
    },[]);


    const SearchHandler = (e) =>{
        e.preventDefault();
        blogs.map((blog) => {
          if(blog.title === searchValue)
          {
            history.push(`/detailsblog/${blog.id}`); 
          }
        });
        setShowMatching(true);
        setSearchValue("");
    };

    const list = blogs.map( (blog) => {
        return <div key={blog.id} className="blog-outer-div">
                    <h2>{blog.title}</h2>
                    <button onClick = {() => history.push(`/detailsblog/${blog.id}`)}>Details</button>
            	</div>
    });


    return (
        <div>
            <h1>Home Page</h1>
            <div className="blog-inner-div">
                <form>
                    <input placeholder="Search By Title" value ={searchValue}  onChange={(e) => {setSearchValue(e.target.value)}} required/>
                    <button type="submit" onClick={SearchHandler}>Search</button>
                </form>
                <button className="creat-button" type="submit" onClick={() => {history.push("/addblog")}}>Create New Blog</button>
            </div>
            {showMatch && <h2 className="match-text">Match not found</h2>}
            {list}
        </div>
    )
}

export default Home
