import { Link } from "react-router-dom";


// BlogList shows a blog preview on the main blog page. It maps through all blogs, and takes out a title and an author for each element, then creates a sublink that leads to this particular blog post
const BlogList = ({ blogs, title }) => {

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                </div>
            ))}  
        </div>
     );
}
 
export default BlogList;