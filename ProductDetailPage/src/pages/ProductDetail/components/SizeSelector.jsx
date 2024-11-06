import { useProductDetailsContext } from './ProductDetailsContext';
import { SIZE_MAP } from '../../../constant';
import { useMemo } from 'react';
import { getUnavailableSizes } from '../utils';
import SizeOption from '../../../component/SizeOption';

const SizeSelector = () => {
    const { product, selectedColor, selectedSize, setSelectedSize } = useProductDetailsContext();
    const pdSizes = product.sizes
    const unavailableSizes = useMemo(
        () => getUnavailableSizes({ product, color:selectedColor}),
        [product, selectedColor]
    )


    return (
        <fieldset className="size-selector">
            <legend>Available Sizes</legend>
            <div className="size-options">
                {pdSizes.map((size) => (
                    <SizeOption 
                        key={size}
                        onClick={()=>setSelectedSize(size)}
                        outofStock={unavailableSizes.includes(size)}
                        selectedSize={selectedSize}
                        size={size}/>
                ))}
            </div>
        </fieldset>
    );
};

export default SizeSelector;