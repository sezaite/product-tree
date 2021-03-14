import { Link } from "react-router-dom"
import { useState } from 'react'
import List from './List'

const Item = ({ name, price, children, id }) => {
    console.log(children);
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
    const toggleChildren = (e) => {
        setExpandChildren(!expandChildren)
    }

    return (
        <div>
            <div className="item">
                <h3>{name}</h3>
                {!children && <Link to='/Info' className='edit btn' id={id}>Edit</Link>}
                {!price && <p>Total sales for category: {countSum(Item)}</p>}
                {price && <p>Price: {price}</p>}
                {children && <button onClick={(e) => toggleChildren(e)} className='btn toggle'>{expandChildren ? '-' : '+'}</button>}
                {!price && <Link to='/new' className='btn set' id={id} >Add new subcategory</Link>}
                {!children && !price && <Link to='/price' className='btn set' id={id} >Set price</Link>}
            </div>
            <div>
                {expandChildren && children && <List data={children} className='list subList' />}
            </div>
        </div>
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
