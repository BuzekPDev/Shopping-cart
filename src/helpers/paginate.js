export function paginate (products, pageLength, pageCount) {

    console.log(pageCount)
    if (!products.length || pageCount<1 ) return []

    const minLength = products.length >= pageLength*pageCount ? pageLength*pageCount : products.length
    const startPoint = pageLength*(pageCount-1)

    let page = []

    for (let i=startPoint; i<minLength; i++) {
        page.push(products[i])
    }

    return page
}