

export function filter (products, params, filters, stock, released, sale, minPrice, maxPrice) {
    
    let filteredList = products

    if (params !== 'search')
        filteredList = filteredList.filter(product => product.type === params)

    if (filters.length)
        filteredList = expansionMatch(filteredList, filters)

    if (stock)
        filteredList = stockMatch(filteredList)

    if (released)
        filteredList = releasedMatch(filteredList)

    if (sale)
        filteredList = saleMatch(filteredList)

    filteredList = priceMatch(filteredList, minPrice, maxPrice)

    return filteredList
}

function expansionMatch (products, filters) {

    const filteredList = products.filter(product => filters.includes(product.expansion))

    return filteredList

}

function stockMatch (products) {

    const filteredList = products.filter(product => product.stock>0)

    return filteredList
}

function releasedMatch (products) {

    const filteredList = products.filter(product => product.released)

    return filteredList
}

function saleMatch (products) {

    const filteredList = products.filter(product => product.onSale)

    return filteredList
}

function priceMatch (products, minPrice, maxPrice) {

    const filteredList = products.filter(product => product.price >= minPrice && product.price <= maxPrice)

    return filteredList
}


