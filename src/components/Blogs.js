import React from 'react'
import {searchIt} from '../services/search';
import BlogItem from './BlogItem'
import PropTypes from 'prop-types'

const Blogs  = (props) => {
    return (
        <div>
            {props.blogs.filter(searchIt(props.searchTerm)).map((blog,i)=>{
				return(
                    <BlogItem 
                    onDelete={props.onDelete} 
                    blog={blog} 
                    key={blog._id} 
                    onUpdate={props.onUpdate} />
                    
					// <div key={objectId} className="ui card" style={{width:"75%", padding:'20px'}}>
					// 	<div className="content">
					// 		<div className="header">{title}</div>
                    //         {/* <p>Index: {i + 1 } objectId: {objectId}</p> */}
					// 		<br/>
					// 		<div className="meta">Author: {author}</div>
					// 		<div className="meta">Subject: {subject}</div>
					// 		<hr/>
					// 		<div className="description">{article}
					// 		</div>
                    //         <button 
                    //         className="ui primary button"
                    //         style={{ margin: '10px 15px'}}
                    //         onClick={() => {
                    //             return props.onDelete(objectId);
                    //         }}
                    //         >
                    //             Delete
                    //         </button>
					// 	</div>
					// </div>
				)
			})}
        </div>
    )
}
Blogs.propTypes = {
    toggle: PropTypes.bool,
    onDelete: PropTypes.func,
    blogs: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string.isRequired,
            subject: PropTypes.string.isRequired,
            article: PropTypes.string.isRequired,
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired

        })
    )
}

export default Blogs