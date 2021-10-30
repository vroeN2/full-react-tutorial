import { useParams } from "react-router";
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    // fetching blog details for clicked item 
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

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
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;