import clsx from "clsx";
import Star from "../../../component/Star";

import { useState } from "react";

const Ratings = ({value, max = 5, onChange}) => {
    const [hoverIndex, setHoverIndex] = useState(null)

    const readOnly = !onChange

    return(
        <div className="flex items-center gap-1 pr-2">
            {Array.from({ length: max }).map((_, index) => (
                <span
                    key={index}
                    onMouseEnter={() => !readOnly && setHoverIndex(index)}
                    onMouseLeave={() => !readOnly && setHoverIndex(null)}
                    onClick={() => onChange?.(index + 1)}>
                    <Star 
                        filled={ hoverIndex != null ? index <= hoverIndex : value >= index + 1}
                        halfFilled={value < index + 1 && value > index}/>
                </span>
            ))}
        </div>
    )
}

export default Ratings