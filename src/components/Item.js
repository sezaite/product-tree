import { Link } from "react-router-dom"
import { useState } from 'react'
import { Children } from './Children'

const Item = ({ name, price, children, sum, id }) => {
    const [expandChildren, setExpandChildren] = useState(false);
    const countSum = (item) => {
        let sum = 0;
        if (item.price) {
            sum += item.price
        }
        if (item.children) {
            countSum(item.children);
        }
        return sum;
    }
    const toggleChildren = () => {
        setExpandChildren(true)
    }

    return (
        <div className="item">
            <h3>{name}</h3>
            {!children && <Link to='/Info' className='edit btn' id={id}>Edit</Link>}
            {sum && <p>Total sales for category: {countSum(item)}</p>}
            {price && <p>Price: {price}</p>}
            {children && <button onClick={() => toggleChildren(e)} className='btn toggle'>{expandChildren ? '+' : '-'}</button>}
            {!price && <Link to='/new' className='btn set' id={id} itemUrl='#' >Add new subcategory</Link>}
            {!children && !price && <Link to='/price' className='btn set' id={id} >Set price</Link>}
            {expandChildren && <Children className='children' data={children} parent={name} />}

        </div >
    )
}

Item.defaultProps = {
    parent: 'list',
    name: 'Product',
    price: null,
    children: null,
    sum: null
}

export default Item
