import React from 'react';
import { useProductDetailsContext } from './ProductDetailsContext';
import Accordion from '../../../component/Accordion';

const ProductInfo = () => {
    const { product } = useProductDetailsContext();

    return (
        <div className="flex flex-col self-stretch">
            {product.info.map((section, index) => (
                <Accordion key={index} title={section.title}>
                    <ul className="list-disc ml-6 space-y-2">
                        {section.description.map((desc, idx) => (
                            <li key={idx} className="text-neutral-700">
                                {desc}
                            </li>
                        ))}
                    </ul>
                </Accordion>
            ))}
        </div>
    );
};

export default ProductInfo;
