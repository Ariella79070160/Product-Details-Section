import { useProductDetailsContext } from "./ProductDetailsContext"

import ChangeQuantity from "../../../component/ChangeQuantity"

const ProductQuantity = ({avaStock}) => {
    const {quantity, increaseQuant, decreaseQuant} = useProductDetailsContext()

    return(
        <div>
            <legend>Quantity</legend>
            <div>
                <ChangeQuantity 
                    quantity={quantity}
                    increment={increaseQuant}
                    decrement={decreaseQuant}
                    availableStock={avaStock}/>
            </div>
        </div>
    )
}

export default ProductQuantity