import { Link } from 'react-router-dom'

const Info = ({ price }) => {
    return (
        <div>
            {price && <div><p>Product price is: {price}</p><Link to='/price' formHeader='Set the price'>Edit price</Link></div>}
            {!price && <Link to='/new' formHeader='Add new category'>Add subcategory</Link>}
        </div>
    )
}

export default Info
