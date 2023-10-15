import {useState, useEffect} from 'react';

export default function useJsonFetch(url, opts) {
    const [data, setData] = useState();
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(null);
    useEffect(() => {
        setLoading(true);
        fetch(url, opts)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    return [{data, isLoading, hasError}];
}