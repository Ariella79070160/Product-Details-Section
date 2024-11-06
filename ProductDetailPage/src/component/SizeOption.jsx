
const SizeOption = ({ outofStock, onClick, selectedSize,size}) => {

    return (
        <label
            key={size}
            aria-label={size}>
            <input
                type="radio"
                name="size-choice"
                value={size}
                disabled={outofStock}
                aria-checked={selectedSize === size}
                onChange={onClick}
            />
        </label>
    )
}

export default SizeOption
