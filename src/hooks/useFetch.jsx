import { useState, useEffect } from 'react';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const randomPage = Math.floor(Math.random() * 42) + 1;

        fetch(`https://rickandmortyapi.com/api/character/?page=${randomPage}`)
            .then(response => {
                if (!response.ok) { throw new Error(response.statusText); }
                return response.json();
            })
            .then(data => {
                setData(data.results);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setIsLoading(false);
            });
    }, []);

    return { data, isLoading, error };
};

export default useFetch;
