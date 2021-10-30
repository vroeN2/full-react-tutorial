import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    
    return (
        <div className="home">
            {/* each line below has separate check - there can be only one of them at a time, due to useFetch construction. */}
            {/* using basic logic, code after '&&' won't even be checked until part before '&&' has value of TRUE. Thanks to that, it is very easy to create conditional content on the page */}
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title='All Blogs!' /> }
        </div>
    );
}
 
export default Home;