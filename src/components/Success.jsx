import useJsonFetch from '../hooks/useJsonFetch';

const Success = () => {
    const url = 'http://localhost:7070/data';
    const opts = {"method" : "GET"}
    const [data, loading, error] = useJsonFetch(url, opts);
}

export default Success