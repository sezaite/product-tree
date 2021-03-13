import { useEffect, useState } from 'react';
import List from './List'

const Home = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await fetchCats();
            setCategories(data);
        }
        getData();
    }, [])

    const fetchCats = async () => {
        const resp = await fetch('http://localhost:8000/items');
        const data = await resp.json();
        return data;
    }

    return (
        <div className='product-tree'>
            <h2>List of categories:</h2>
            <List data={categories} className="list" />
        </div>
    )
}

export default Home
