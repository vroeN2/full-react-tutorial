import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    // fetching blog details for clicked item 
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    //redirection to the homepage again - with useHistory!
    const history = useHistory();

    const handleClick = () => {
        // delete opened blog post from the db
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            // push user to the homepage
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {/* conditional display of loading message */}
            { isPending && <div>Loading...</div>}
            {/* conditional display of error with short info about it */}
            { error && <div>{ error }</div> }
            {/* after fetching is done, and with no errors, code below shows details about selected blog post */}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;