import { createContext, useContext, useState, useEffect,useCallback, useMemo } from "react";
import { useNavigate } from 'react-router-dom';

const ProductDetailsContext = createContext()

export const useProductDetailsContext = () => useContext(ProductDetailsContext)

const ProductDetailsContextProvider = ({ children }) => {
    const navigate = useNavigate()
    const [product, setProduct] = useState(null)
    const [isProductLoading, setIsProductLoading] = useState(false)
    const [selectedColor, setSelectedColor] = useState(null)
    const [selectedSize, setSelectedSize] = useState(null)
    const [quantity, setQuantity] = useState(1)

    const fetchProducts = useCallback(async () => {
        setIsProductLoading(true)
        const response = await fetch('https://www.greatfrontend.com/api/projects/challenges/e-commerce/products/voyager-hoodie')
        const data = await response.json()

        if(!data.error){
            setProduct(data)
            setSelectedColor(data.colors[0])     
        }else{
            navigate('/not-found')
        }
        setIsProductLoading(false)
    },[navigate])

    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])


    const value = useMemo(() => {
        return{
            product,
            setProduct,
            isProductLoading,
            selectedColor,
            setSelectedColor,
            selectedSize,
            setSelectedSize,
            quantity,
            setQuantity,

        }
    }, [
        product,
        setProduct,
        isProductLoading,
        selectedColor,
        setSelectedColor,
        selectedSize,
        setSelectedSize,
        quantity,
        setQuantity,
    ])

    

    return(
        <ProductDetailsContext.Provider value={value}>
            {children}
        </ProductDetailsContext.Provider>
    )
}

export default ProductDetailsContextProvider