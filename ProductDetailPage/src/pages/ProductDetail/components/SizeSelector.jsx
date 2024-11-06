import clsx from 'clsx';
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
            <legend className="text-sm text-neutral-500">Available Sizes</legend>
            <div className={clsx('mt-4', 'flex flex-wrap gap-4')}>
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