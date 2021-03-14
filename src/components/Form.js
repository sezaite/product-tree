import Button from './Button'
import { useState } from 'react';

const Form = ({ category, buttonValue, buttonStyle, formStyle, placeholder, onAdd }) => {
    const [text, setText] = useState('');
    return (
        <form className={formStyle}>
            <label>Category name: {category && category} </label>
            <input
                type="text"
                placeholder={"Enter " + placeholder}
                value={text} onChange={(e) => setText(e.target.value)}
            />
            <Button buttonValue={buttonValue} buttonStyle={buttonStyle} onAdd={onAdd} />
        </form>
    )

}

Form.defaultProps = {
    category: null,
}

export default Form