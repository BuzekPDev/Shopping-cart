export function urlfragment () {
    
    const url = new URL(window.location.href)
    const urlFragment = url.hash

    if (!urlFragment) return 1

    const fragmentValue = urlFragment.slice(4)

    return Number(fragmentValue)
}