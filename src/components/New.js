import Form from './Form'
import List from './List'

const New = ({ itemUrl }) => {


    const addCat = async (cat) => {
        setIsPending(true)
        const resp = await fetch('http://localhost:8000/items', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(cat)
        })
    }

    return (
        <div>
            <List />
            <h1>{formHeader}</h1>
            <Form category='#' buttonValue='Submit' buttonStyle='btn add' formStyle='new-form' placeholder='a new category name' />
        </div>
    )
}

export default New
