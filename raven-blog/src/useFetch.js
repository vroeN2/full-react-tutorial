import { useEffect, useState } from "react";

// useFetch is a custom hook created to fetch data from the provided link. It catches errors (and displays it), has loading placeholder and can be used whenever it is required to fetch API data.

const useFetch = url => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 1000);

        return () => abortCont.abort();
    },[url]);

    // data - fetched data from source link
    // isPending - variable responsible for fetch loading time placeholder.
    // error - if true, shows an error that happened
    return { data, isPending, error };
}
 
export default useFetch;