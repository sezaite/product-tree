const Button = ({ type, value, color }) => {
    return (
        <button type={{ type }} className="btn" style={{ backgroundColor: color }}>
            {value}
        </button>
    )
}

export default Button
