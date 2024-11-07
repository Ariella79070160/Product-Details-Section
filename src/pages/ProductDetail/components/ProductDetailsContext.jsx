import { createContext, useContext, useState, useEffect,useCallback, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import { getUnavailableSizes, getUnavailableColors } from "../utils";

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
        if(!product || !selectedColor){
            return
        }
        const unavSizes = getUnavailableSizes({ product, color: selectedColor})
        const avSizes = [...product.sizes].filter(size => !unavSizes.includes(size))
        if(avSizes.length > 0){
            setSelectedSize(avSizes[0])
        }
    }, [product, selectedColor])


    useEffect(() => {
        fetchProducts()
    }, [fetchProducts])

    const increaseQuant = useCallback(() => {
        setQuantity(prev => (prev + 1))
    }, [])
    const decreaseQuant = useCallback(() => {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1))
    }, [])


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
            increaseQuant,
            decreaseQuant
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