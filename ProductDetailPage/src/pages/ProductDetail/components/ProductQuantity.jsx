import { useProductDetailsContext } from "./ProductDetailsContext"

import ChangeQuantity from "../../../component/ChangeQuantity"

const ProductQuantity = ({avaStock}) => {
    const {quantity, increaseQuant, decreaseQuant} = useProductDetailsContext()

    return(
        <div className="flex flex-col gap-4 self-stretch pb-5">
            <legend className="font-normal text-sm text-neutral-500">Quantity</legend>
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