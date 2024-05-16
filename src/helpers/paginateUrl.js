
import { urlquery } from "./urlquery"

export function paginateUrl (categoryId, page) {

    const base = `/products/${categoryId}`
    const queryString = categoryId === 'search' ? `?q=${urlquery()}` : ''
    const fragment = `#pg=${page}`

    return base + queryString + fragment
}