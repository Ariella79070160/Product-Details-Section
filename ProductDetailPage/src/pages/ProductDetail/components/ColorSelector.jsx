import { useProductDetailsContext } from "./ProductDetailsContext";
import { useMemo } from "react";
import { getUnavailableColors } from "../utils";
import ColorOption from "../../../component/ColorOption";
import { COLORS } from "../../../constant";


const ColorSelector = () => {
    const { product, selectedColor, setSelectedColor } = useProductDetailsContext()
    const pdColors = product.colors
    const unavailableColors = useMemo(()=>getUnavailableColors({product}), [product])

    return (
        <fieldset className="all-colors">
            <legend>Available Colors</legend>
            <div>
                {pdColors.map((color) => (
                    <ColorOption 
                        key={color}
                        color={COLORS[color].value}
                        selectedColor={COLORS[selectedColor].value}
                        onClick={()=>setSelectedColor(color)}
                        outofStock={unavailableColors.includes(color)}/>
                ))}
            </div>
        </fieldset>
    )



}

export default ColorSelector