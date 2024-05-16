export function urlquery () {
    
    const url = new URL(window.location.href)
    const queryParams = url.searchParams
    const queryString = queryParams.get('q')

    return queryString
}