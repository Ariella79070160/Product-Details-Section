import clsx from "clsx"

import { useState } from "react"
import { useProductDetailsContext } from "./ProductDetailsContext"
import { getSpecificInventoryData } from "../utils"

import ColorSelector from "./ColorSelector"
import SizeSelector from "./SizeSelector"
import Ratings from "./Ratings"
import ProductQuantity from "./ProductQuantity"

const ProductMetaData = () => {
    const { product, selectedColor, selectedSize, quantity } = useProductDetailsContext()
    const { name: pdName, rating: pdRatings, reviews: pdReviews, description: pdDescription } = product;

    const pdInventory = getSpecificInventoryData({ product, color:selectedColor, size: selectedSize})
    const hasDiscount = pdInventory.discount_percentage !== 0 && pdInventory.list_price !== pdInventory.sale_price;
    const roundedRating = Math.round(pdRatings * 10) / 10


    return(
        <div>
            <section className="name-price-ratings-description">
                <div  className="flex flex-col items-start">
                    <h1 className="text-3xl font-semibold md:text-5xl">{pdName}</h1>
                    <div className="inline-flex items-end gap-2">
                        <span className="text-3xl font-medium text-neutral-600">
                            {pdInventory.sale_price}
                        </span>
                        {hasDiscount && (
                            <span className="text-lg font-medium text-neutral-400 line-through">
                                {pdInventory.list_price}
                            </span>
                        )}
                    </div>
                    {hasDiscount && (
                        <div className={clsx('rounded-full text-center border bg-indigo-50 border-indigo-200 text-indigo-700')}>
                            {`${pdInventory.discount_percentage}% OFF`}
                        </div>
                    )}

                    <div className={clsx('flex flex-wrap items-center gap-2', 'mt-3')}>
                        <div className="text-xl text-neutral-900">
                            <Ratings value={roundedRating ?? 0}/>
                            {pdReviews > 0 ? (
                                <button>
                                    <a href='#'>See all reviews</a>
                                </button>
                            ) : (
                                <div className="flex gap-[2px]">
                                    <span className="text-sm text-neutral-900">No reviews yet</span>
                                    <button><a href='#'>Be the first</a></button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                

                <p className="description">{pdDescription}</p>
            </section>

            <section className="mt-8">
                <div className="flex flex-col gap-8">
                    <ColorSelector />
                </div>
                <div>
                    <SizeSelector />
                </div>
                <div>
                    <ProductQuantity avaStock={pdInventory.stock}/>
                    {pdInventory.stock === 0 && (
                        <div>
                            Sorry, this item is out of stock
                        </div>
                    )}
                    <button disabled={quantity===0||pdInventory.stock===0}>Add to Cart</button>
                </div>
            </section>

            {/* <allInfo/> */}
        </div>
    )
}

export default ProductMetaData