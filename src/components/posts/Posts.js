import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../redux/reducers/postsReducer";
import {getCommets} from "../../redux/reducers/commetsReducer";
import Components from "../comments/Components";

const Posts = () => {
    const dispatch = useDispatch()
    const {posts} = useSelector(state => state.posts)
    const {com} = useSelector(state => state.comment)
    const [show, setShow] = useState(false)

    const getPost = () => dispatch(getPosts())

    const getComment = (id) => {
        setShow(!show)
        dispatch(getCommets(id))
    }


    return (
        <div>
            <button onClick={getPost}>click</button>
            <ul>
                {
                    posts.map(i => <li key={i?.id}>
                        <button onClick={() => getComment(i?.id)}>{i?.title}</button>
                        {
                            show && <Components com={com}/>
                        }
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Posts;