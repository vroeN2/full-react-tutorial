import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    // Create loading message while our blog is being send to the db    
    const [isPending, setIsPending] = useState(false);

    // function to prevent auto refresh form on submit. It also creates a new blog entry that will be added to the blog db
    const handleSubmit = e => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);
        
        // post freshly created blog post to our db
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
        })
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={e => handleSubmit(e)}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required 
                    // each field of this form is controlled - it's value is stored in state, each has onChange function that updates the value with no downtime, and it is immediately shown on the position
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={e => setBody(e.target.value)}
                ></textarea>
                <label>Blog author</label>
                <select
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Add blog</button> }
                { isPending && <button disabled>Adding blog...</button> }
            </form>
        </div>
    );
}
 
export default Create;