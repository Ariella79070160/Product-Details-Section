import { createContext, useContext, useState } from "react";

const ProductDetailsContext = createContext()

export const useProductDetailsContext = () => useContext(ProductDetailsContext)

const ProductDetailsContextProvider = ({ children }) => {
    const [product, setProduct] = useState(null)

    return(
        <ProductDetailsContext.Provider>
            {children}
        </ProductDetailsContext.Provider>
    )
}

export default ProductDetailsContextProvider