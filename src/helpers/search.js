export function search (product, query) {
    
    let valid = false

    const name = product.productName.toLowerCase()
    const category = product.type.toLowerCase() 
    const edition = product.edition.toLowerCase()
    const expansion = product.expansion.toLowerCase()

    const data = [name, category, edition, expansion]

    for (let i in data) {
        if (data[i].includes(query.toLowerCase())) {
            valid=true
            break
        }
    }
    return valid
}

// old way of handling search, keeping it here in case 
    // I decide to use it again for some reason

    // const arr = Object.values(product)
    

    // arr.forEach(value => {
    //     const string = value.toString().toLowerCase()
    //     if (string.includes(query.toLowerCase())) {
    //         valid = true
    //     }
    // })