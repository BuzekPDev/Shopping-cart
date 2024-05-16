

export function salePercentage (item) {
    const currentPrice = Number(item.price)
    const originalPrice = Number(item.originalPrice)

    const difference = originalPrice - currentPrice
    const avarage = (originalPrice + currentPrice)/2
    const percentage = Math.floor((difference/avarage)*100)

    return percentage
}