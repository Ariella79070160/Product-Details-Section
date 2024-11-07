import clsx from "clsx";
import { useProductDetailsContext } from "./ProductDetailsContext"
import { getSelectedColorImages } from "../utils";
import { useState, useMemo, useEffect } from "react";


const ProductImages = () => {
    const {product, selectedColor} = useProductDetailsContext();
    const [selectedImage, setSelectedImage] = useState(0)


    const images = useMemo(() => (
        getSelectedColorImages({product, color: selectedColor})
    ), [product, selectedImage])

    return(
        <div className="flex flex-col gap-6">
            <img 
                src={images[selectedImage].image_url}
                className="h-[400px] w-full rounded-lg object-cover md:h-[800px]"
                alt="First image"
                loading="lazy">    
            </img>

            <div className="flex gap-4 overflow-x-auto">
            {images.map((image, index) => (
                <img
                    key={image.image_url + index}
                    src={image.image_url}
                    alt={`Preview ${index + 1}`}
                    className={clsx(
                        'block shrink-0 rounded-lg',
                        'h-[120px] w-20 object-cover md:h-[190px] md:w-[188px] lg:w-40',
                        'cursor-pointer',
                        index === selectedImage && 'border-[3px] border-indigo-600',
                    )}
                    loading="lazy"
                    onClick={()=>setSelectedImage(index)}
                    >
                </img>
            ))}
            </div>
        </div>
    )

}

export default ProductImages 
