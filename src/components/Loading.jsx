import useJsonFetch from '../hooks/useJsonFetch';

const Loading = () => {
    const url = 'http://localhost:7070/loading';
    const opts = {"method" : "GET"}
    const [data, loading, error] = useJsonFetch(url, opts);
}

export default Loading