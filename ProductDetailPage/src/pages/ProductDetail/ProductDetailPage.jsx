import clsx from 'clsx';

import ProductDetailsContextProvider from './components/ProductDetailsContext';
import ProductDetail from './components/ProductDetail';

const ProductDetailPage = () => {
    return(
        <main>
            <div>
                <ProductDetailsContextProvider>
                    <ProductDetail></ProductDetail>
                </ProductDetailsContextProvider>
            </div>
        </main>
    )
}

export default ProductDetailPage