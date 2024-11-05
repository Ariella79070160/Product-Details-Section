export const getSelectedColorImages = ({ product, color }) => {
    const images = product.images?.filter((image) => image.color === color);
    return images;
};