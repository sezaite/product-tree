const Button = ({ buttonValue, buttonStyle }) => {
    return (
        <button type='submit' className={buttonStyle}>
            {buttonValue}
        </button>
    )
}

export default Button