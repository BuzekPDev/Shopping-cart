

export function total (cart) {

    return cart.reduce((total, item) => 
        total+Number(item.price)*item.qty, 0)
}