import clsx from "clsx"

import { useState } from "react"
import { useProductDetailsContext } from "./ProductDetailsContext"
import { getSpecificInventoryData } from "../utils"

import ColorSelector from "./ColorSelector"
import SizeSelector from "./SizeSelector"

const ProductMetaData = () => {
    const { product, selectedColor, selectedSize, quantity } = useProductDetailsContext()
    const pdName = product.name
    const pdInventory = getSpecificInventoryData({ product, color:selectedColor, size: selectedSize})
    const hasDiscount = pdInventory.discount_percentage !== 0 && pdInventory.list_price !== pdInventory.sale_price;
  


    return(
        <div>
            <section className="name-price-ratings-description">
                <h1>{pdName}</h1>
                <div className="price-and-discount">
                    <span className="sale_price">
                        {pdInventory.sale_price}
                    </span>
                    {hasDiscount && (
                        <span className="list_price">
                            {pdInventory.list_price}
                        </span>
                    )}
                </div>
                {hasDiscount && (
                    <div className="badge">
                        {`${pdInventory.discount_percentage}% OFF`}
                    </div>
                )}

                <div className="ratings-reviews">

                </div>

                <p className="description">{product.description}</p>
            </section>

            <section className="color-size-quantity">
                <div>
                    <ColorSelector />
                </div>
                <div>
                    <SizeSelector />
                </div>
            </section>

            {/* <allInfo/> */}
        </div>
    )
}

export default ProductMetaData