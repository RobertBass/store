export const totalOrder = (object) => {
    let total = 0;
    object.forEach(item => total += item.subtotal);
    total = Number(total.toFixed(2));
    return total
}