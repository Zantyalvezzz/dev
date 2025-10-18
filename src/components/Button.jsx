
function Button({ text, onClick, color= "#1d3769", size = 16 }) {
    const styles = {
        border: "none",
        backgroundColor: color,
        padding: `${size / 2}px ${size}px`,
        fontSize: `${size}px`,
        borderRadius: "5px",
        cursor: "pointer",
        transition: "all 0.3s",
    }

    return (
        <button
            className="btn"
            style={styles}
            onClick={onClick}>
            {text}
        </button>
    );
}

export default Button
