import Item from './Item'

const List = ({ data }) => {

    return (
        <div className='list'>
            {
                data.map((item) => (
                    <Item key={item.id} name={item.name} price={item.price} children={item.children} sum={item.sum} />
                ))
            }
        </div>
    )
}

export default List
