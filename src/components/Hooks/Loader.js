import {useState, useEffect} from 'react';

const Loader = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadData = async () => {
            await new Promise((r) => setTimeout(r, 1000));
            setLoading((loading) => !loading);  
        };
        loadData();
    }, []);

    return loading;
};

export default Loader;