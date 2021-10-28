import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('luigi');
        setAge(30);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
 
export default Home;

// react dev tools for chrome and firefox
//
// https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi
//
//  https://addons.mozilla.org/en-GB/firefox/addon/react-devtools/