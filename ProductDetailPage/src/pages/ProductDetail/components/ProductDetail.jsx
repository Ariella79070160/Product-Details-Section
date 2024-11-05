
import ProductImages from "./ProductImages";
import ProductMetaData from "./ProductMetaData";
import { useProductDetailsContext } from "./ProductDetailsContext";

const ProductDetail = () => {
    const { product } = useProductDetailsContext()

    return (
        <>
            <div>
                <ProductImages />
            </div>
            <div>
                <ProductMetaData />
            </div>
        </>
    )
}

export default ProductDetail