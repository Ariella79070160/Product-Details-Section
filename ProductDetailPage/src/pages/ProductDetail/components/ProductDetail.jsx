import clsx from "clsx";
import ProductImages from "./ProductImages";
import ProductMetaData from "./ProductMetaData";
import { useProductDetailsContext } from "./ProductDetailsContext";

const ProductDetail = () => {
    const { product, isProductLoading } = useProductDetailsContext()

    if(isProductLoading || !product){
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="col-span-4 md:col-span-6">
                <ProductImages />
            </div>

            <div>
                <ProductMetaData />
            </div>
        </>
    )
}

export default ProductDetail