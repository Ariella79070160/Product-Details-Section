import clsx from "clsx"

import { useState } from "react"
import { useProductDetailsContext } from "./ProductDetailsContext"
import { getSpecificInventoryData } from "../utils"

import ColorSelector from "./ColorSelector"
import SizeSelector from "./SizeSelector"
import Ratings from "./Ratings"
import ProductQuantity from "./ProductQuantity"
import ProductInfo from "./ProductInfo"

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
                    <h1 className="font-semibold text-5xl text-neutral-900 pb-5">{pdName}</h1>
                    <div className="flex flex-col gap-3 self-stretch pb-3">
                        <div className="inline-flex items-end gap-2">
                            <span className="text-3xl font-medium text-neutral-600">
                                ${hasDiscount ? 
                                    (<span class="font-medium text-3xl text-neutral-600">{pdInventory.sale_price}</span>)
                                 :  (<span class="font-medium text-lg strikethrough text-neutral-400">{pdInventory.list_price}</span>)
                                }
                            </span>
                            <div className="flex flex-col gap-3 self-stretch">

                            </div>
                            {hasDiscount && (
                                <span className="text-lg font-medium text-neutral-400 line-through">
                                ${pdInventory.list_price}
                                </span>
                            )}
                        </div>
                    </div>
                    {hasDiscount && (
                        <div 
                            className={clsx(
                                'flex items-center gap-2',
                                'flex items-center bg-amber-50 px-2.5 py-1 rounded-full border border-solid border-amber-200',
                                'font-normal text-sm text-center text-amber-700'
                            )}>
                                
                            {`${pdInventory.discount_percentage}% OFF`}
                        </div>
                    )}

                    <div className={clsx('flex flex-wrap items-center gap-2', 'mt-3')}>
                        <div className="flex justify-center items-center px-0.5 text-neutral-900">
                            <div className="font-normal text-xl text-neutral-900 pr-2">{roundedRating ?? 0}</div>
                            <Ratings value={roundedRating ?? 0} />
                            {pdReviews > 0 ? (
                                <button className="font-medium text-sm text-indigo-700">
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
                

                <p className="font-normal text-base text-neutral-600 pt-4">{pdDescription}</p>
            </section>

            <section className="mt-8 flex flex-col gap-8 self-stretch">
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
                    <div 
                        className="flex justify-center items-center gap-2.5 self-stretch bg-indigo-700 px-6 py-4 pt-5 rounded">
                            <div 
                                className="flex justify-center items-center px-0.5">
                                    <button 
                                        className="font-medium text-lg text-white"
                                        disabled={quantity===0||pdInventory.stock===0}>
                                        Add to Cart
                                    </button>
                                    
                            </div>
                    
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-5 self-stretch">
                <ProductInfo />
            </section>
        </div>
    )
}

export default ProductMetaData