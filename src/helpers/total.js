

export function total (cart) {

    let total = 0

    for (let i in cart) {
        const price = cart[i].price * cart[i].qty
        total+=price 
    }

    return total
}