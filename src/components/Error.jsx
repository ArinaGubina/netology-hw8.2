import useJsonFetch from '../hooks/useJsonFetch';

const Error = () => {
    const url = 'http://localhost:7070/error';
    const opts = {"method" : "GET"}
    const [data, loading, error] = useJsonFetch(url, opts);
}

export default Error