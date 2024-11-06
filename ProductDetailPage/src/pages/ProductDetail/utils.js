export const getSelectedColorImages = ({ product, color }) => {
    const images = product.images?.filter((image) => image.color === color);
    return images;
};

export const getSpecificInventoryData = ({ product, color, size}) => {
    let data = {}
    product.inventory.forEach((inve) => {
        if(inve.color === color && inve.size === size){
            data = inve
        }
    })
    return data
}

export const getUnavailableColors = ({ product }) => {
    const availableColor = new Set()
    console.log('product', product)
    const allColor = new Set(product.colors)

    product.inventory.forEach((inve) => {
        if(inve.stock > 0){
            availableColor.add(inve.color)
        }
    })

    const unAvailableColors = [...allColor].filter((color) => !availableColor.has(color))
    return unAvailableColors
}

export const getUnavailableSizes = ({ product, color}) => {
    const availableSize = new Set()
    const allSizes = new Set(product.sizes)

    product.inventory.forEach((inve) => {
        if(inve.stock > 0 && inve.color === color){
            availableSize.add(inve.size)
        }
    })

    const unAvailableSizes = [...allSizes].filter((size) => !availableSize.has(size))
    return unAvailableSizes
}