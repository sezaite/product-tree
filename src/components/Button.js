const Button = ({ buttonValue, buttonStyle, addNew }) => {
    return (
        <button type='submit' className={buttonStyle} onClick={() => { addNew }}>
            {buttonValue}
        </button>
    )
}

export default Button