import clsx from "clsx"

const ColorOption = ({ color, selectedColor, onClick, outofStock}) => {
    return(
        <label
            key={color}
            aria-label={color}>
            <input
                type="radio"
                value={color}
                onChange={onClick}
                disabled={outofStock}
                checked={color === selectedColor}
            />
        </label>
    )
}

export default ColorOption