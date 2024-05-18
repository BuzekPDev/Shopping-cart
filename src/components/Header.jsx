import { Link, useNavigate } from "react-router-dom"
import { Fragment, useContext } from "react"
import CartContext from "../context/CartContext"

export function Header() {

    const navigate = useNavigate()

    const [cart] = useContext(CartContext)

    console.log("Cart header: " + cart)

    const navItems = ['Elite Trainer Boxes', 'Tins & Chests', 'Blisters', 'Boosters', 'Boxes', 'Collections', 'Theme Decks']
    const refs = ['elite-trainer-boxes', 'tins-&-chests', 'blisters', 'boosters', 'boxes', 'collections', 'theme-decks']

    function openSide(e) {
        if (e.currentTarget !== e.target) return

        e.stopPropagation()
        const body = document.querySelector('body')
        const close = document.querySelector('.close')
        body.style.overflow = 'hidden'
        setTimeout(() => {
            close.classList.add('slide')
            close.style.pointerEvents = 'initial'
        }, 200)
        e.target.firstChild.className = 'top-0 z-[9999] transition-transform translate-x-[0] left-0 w-full duration-200 flex h-full fixed'

    }

    function closeSide(e) {
        // if (e.currentTarget !== e.target) return
        const body = document.querySelector('body')
        const close = document.querySelector('.close')
        close.classList.remove('slide')
        close.style.pointerEvents = 'none'
        setTimeout(() => {
            e.target.parentElement.parentElement.className = 'top-0 z-[9999] transition-transform translate-x-[-100%] left-0 w-full duration-200 h-full flex fixed'
            body.style.overflow = 'visible'
        }, 150)
    }

    function submitHandler(e) {
        e.preventDefault()

        const query = e.target.firstChild.value
        const url = `/products/search?q=${query}`

        e.target.firstChild.value = ''

        navigate(url)
    }

    return (
        <header className="flex flex-col fixed top-0 items-center z-20 h-fit bg-black w-full">
            <div className="flex justify-between w-full md:w-[673px] lg:w-[785.5px] p-4 sm:px-2 sm:flex-col" >
                <div className="flex justify-between md:hidden xs:px-2 sm:px-3">
                    <div className="flex md:hidden">
                        <button type="button" className="md:h-0 md:w-0 md:hidden sm:h-10 sm:w-10 relative text-left mr-3 group" onClick={openSide}>
                            <div className="top-0 transition-transform translate-x-[-100%] left-0 w-full [z-index:9999] fixed" >
                                <div className="bg-slate-50 w-[calc(100%-3.5rem)]">
                                    <div className="w-full h-[3.5rem] bg-neutral-800"></div>
                                    {refs.map((self, id) => (
                                        <Fragment key={'mobile' + self} >
                                            <Link onClick={closeSide} to={`/products/${self}`} className="w-full py-2  h-fit block px-4 z-[9999] text-[1.5rem]">
                                                {navItems[id]}
                                            </Link>
                                            <hr key={`hr${id}`} />
                                        </Fragment>
                                    ))}
                                </div>
                                <div>
                                    <div className="w-14 h-14 flex justify-center items-center box-border bg-red-600 transition-transform duration-150 close translate-y-[-100%]" onClick={closeSide}>
                                        {/* <svg className="w-4 h-4 fill-white transition-colors duration-150 pointer-events-none" width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" ></path></g></svg> */}
                                        <svg className="w-6 h-6 fill-wh transition-colors duration-150 pointer-events-none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Close_Circle"> <path id="Vector" d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-evenly items-center pointer-events-none p-1 absolute top-0 left-0 w-full h-full bg-whi">
                                <div className="w-[26px] h-[4px]  bg-white rounded-[2px]"></div>
                                <div className="w-[26px] h-[4px]  bg-white rounded-[2px]"></div>
                                <div className="w-[26px] h-[4px]  bg-white rounded-[2px]"></div>
                            </div>
                        </button>
                        <Link className="flex items-center" to='/'>
                            <svg className="md:hidden h-6 text-left fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="76.72 198.46 199.86 30.61">                         <defs></defs>                         <path d="M 88.42 229.69 L 93.86 229.69 L 93.86 221.44 L 99.86 221.44 C 105.37 221.44 109.44 217.89 109.44 212.85 C 109.44 207.82 105.37 204.27 99.86 204.27 L 88.42 204.27 Z M 93.86 216.44 L 93.86 209.26 L 99.27 209.26 C 101.97 209.26 103.82 210.67 103.82 212.85 C 103.82 215.04 101.97 216.44 99.27 216.44 Z M 121.59 230.13 C 127.25 230.13 131.99 225.54 131.99 220.11 C 131.99 214.67 127.25 210.12 121.59 210.12 C 115.9 210.12 111.12 214.67 111.12 220.11 C 111.12 225.54 115.9 230.13 121.59 230.13 Z M 121.59 225.58 C 118.71 225.58 116.3 223.07 116.3 220.11 C 116.3 217.15 118.71 214.67 121.59 214.67 C 124.44 214.67 126.85 217.15 126.85 220.11 C 126.85 223.07 124.44 225.58 121.59 225.58 Z M 153.76 210.56 L 147.54 210.56 L 140.44 218.81 L 140.44 203.83 L 135.04 203.83 L 135.04 229.69 L 140.44 229.69 L 140.44 224.99 L 142.73 222.51 L 147.47 229.69 L 153.68 229.69 L 146.32 219.03 Z M 169.88 203.53 L 165.03 202.64 L 160.74 208.41 L 164.4 208.41 Z M 164.81 225.36 C 162.55 225.36 160.88 223.95 160.26 221.88 L 174.06 221.88 C 174.06 214.67 170.54 210.12 164.55 210.12 C 158.96 210.12 154.71 214.3 154.71 220.07 C 154.71 225.95 159.15 230.13 164.84 230.13 C 167.66 230.13 170.95 228.95 172.65 227.17 L 169.21 223.66 C 168.17 224.66 166.32 225.36 164.81 225.36 Z M 164.77 214.89 C 166.95 214.89 168.36 216.11 168.88 218 L 160.33 218 C 161.03 216.07 162.73 214.89 164.77 214.89 Z M 186.99 230.13 C 193.21 230.13 196.87 226.91 196.87 222.07 C 196.87 217.37 193.24 215.74 187.77 214.52 C 183.84 213.63 182.33 213.04 182.33 211.19 C 182.33 209.67 183.73 208.45 186.06 208.45 C 188.51 208.45 191.06 209.45 193.32 211.26 L 196.17 207.34 C 193.58 205.12 190.36 203.83 186.21 203.83 C 180.66 203.83 176.81 207.04 176.81 211.74 C 176.81 216.66 180.63 218.18 185.99 219.4 C 189.88 220.29 191.36 220.85 191.36 222.66 C 191.36 224.25 189.95 225.51 187.21 225.51 C 183.99 225.51 181.25 224.25 178.85 222.18 L 175.7 225.91 C 178.66 228.65 182.59 230.13 186.99 230.13 Z M 210.19 224.95 C 209.82 225.32 209.08 225.58 208.34 225.58 C 207.34 225.58 206.53 224.69 206.53 223.44 L 206.53 214.93 L 210.67 214.93 L 210.67 210.56 L 206.53 210.56 L 206.53 205.31 L 201.35 205.31 L 201.35 210.56 L 198.72 210.56 L 198.72 214.93 L 201.35 214.93 L 201.35 224.29 C 201.35 227.73 203.72 230.13 207.09 230.13 C 208.64 230.13 210.38 229.47 211.49 228.47 Z M 223.76 230.13 C 229.42 230.13 234.15 225.54 234.15 220.11 C 234.15 214.67 229.42 210.12 223.76 210.12 C 218.06 210.12 213.29 214.67 213.29 220.11 C 213.29 225.54 218.06 230.13 223.76 230.13 Z M 223.76 225.58 C 220.87 225.58 218.47 223.07 218.47 220.11 C 218.47 217.15 220.87 214.67 223.76 214.67 C 226.61 214.67 229.01 217.15 229.01 220.11 C 229.01 223.07 226.61 225.58 223.76 225.58 Z M 242.73 214.11 L 242.73 210.56 L 237.32 210.56 L 237.32 229.69 L 242.73 229.69 L 242.73 220.55 C 242.73 216.96 245.28 214.67 249.28 214.67 L 249.28 210.12 C 246.35 210.12 243.98 211.63 242.73 214.11 Z M 260.91 225.36 C 258.65 225.36 256.99 223.95 256.36 221.88 L 270.16 221.88 C 270.16 214.67 266.64 210.12 260.65 210.12 C 255.06 210.12 250.81 214.3 250.81 220.07 C 250.81 225.95 255.25 230.13 260.95 230.13 C 263.76 230.13 267.05 228.95 268.75 227.17 L 265.31 223.66 C 264.28 224.66 262.43 225.36 260.91 225.36 Z M 260.87 214.89 C 263.05 214.89 264.46 216.11 264.98 218 L 256.43 218 C 257.13 216.07 258.84 214.89 260.87 214.89 Z" transform="matrix(1.098204, 0.002301, 0.009823, 1.098228, -22.371609, -24.288935)"></path></svg>

                        </Link>
                    </div>
                    <Link to='/checkout' className="relative my-auto">
                        <svg className="size-8 md:hidden hover:fill-teal-600 transition-colors duration-150" fill="#FFFFFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 902.86 902.86" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path> <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path> </g> </g> </g></svg>
                        <div className="flex justify-center items-center md:hidden h-4 w-4 rounded-full absolute bg-red-600 text-white -top-1 -left-1">
                            <span className="text-xs">{cart.length}</span>
                        </div>
                    </Link>
                </div>
                <Link className="flex items-center" to='/'>
                    <svg className="sm:hidden h-6 text-left fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="76.72 198.46 199.86 30.61">                         <defs></defs>                         <path d="M 88.42 229.69 L 93.86 229.69 L 93.86 221.44 L 99.86 221.44 C 105.37 221.44 109.44 217.89 109.44 212.85 C 109.44 207.82 105.37 204.27 99.86 204.27 L 88.42 204.27 Z M 93.86 216.44 L 93.86 209.26 L 99.27 209.26 C 101.97 209.26 103.82 210.67 103.82 212.85 C 103.82 215.04 101.97 216.44 99.27 216.44 Z M 121.59 230.13 C 127.25 230.13 131.99 225.54 131.99 220.11 C 131.99 214.67 127.25 210.12 121.59 210.12 C 115.9 210.12 111.12 214.67 111.12 220.11 C 111.12 225.54 115.9 230.13 121.59 230.13 Z M 121.59 225.58 C 118.71 225.58 116.3 223.07 116.3 220.11 C 116.3 217.15 118.71 214.67 121.59 214.67 C 124.44 214.67 126.85 217.15 126.85 220.11 C 126.85 223.07 124.44 225.58 121.59 225.58 Z M 153.76 210.56 L 147.54 210.56 L 140.44 218.81 L 140.44 203.83 L 135.04 203.83 L 135.04 229.69 L 140.44 229.69 L 140.44 224.99 L 142.73 222.51 L 147.47 229.69 L 153.68 229.69 L 146.32 219.03 Z M 169.88 203.53 L 165.03 202.64 L 160.74 208.41 L 164.4 208.41 Z M 164.81 225.36 C 162.55 225.36 160.88 223.95 160.26 221.88 L 174.06 221.88 C 174.06 214.67 170.54 210.12 164.55 210.12 C 158.96 210.12 154.71 214.3 154.71 220.07 C 154.71 225.95 159.15 230.13 164.84 230.13 C 167.66 230.13 170.95 228.95 172.65 227.17 L 169.21 223.66 C 168.17 224.66 166.32 225.36 164.81 225.36 Z M 164.77 214.89 C 166.95 214.89 168.36 216.11 168.88 218 L 160.33 218 C 161.03 216.07 162.73 214.89 164.77 214.89 Z M 186.99 230.13 C 193.21 230.13 196.87 226.91 196.87 222.07 C 196.87 217.37 193.24 215.74 187.77 214.52 C 183.84 213.63 182.33 213.04 182.33 211.19 C 182.33 209.67 183.73 208.45 186.06 208.45 C 188.51 208.45 191.06 209.45 193.32 211.26 L 196.17 207.34 C 193.58 205.12 190.36 203.83 186.21 203.83 C 180.66 203.83 176.81 207.04 176.81 211.74 C 176.81 216.66 180.63 218.18 185.99 219.4 C 189.88 220.29 191.36 220.85 191.36 222.66 C 191.36 224.25 189.95 225.51 187.21 225.51 C 183.99 225.51 181.25 224.25 178.85 222.18 L 175.7 225.91 C 178.66 228.65 182.59 230.13 186.99 230.13 Z M 210.19 224.95 C 209.82 225.32 209.08 225.58 208.34 225.58 C 207.34 225.58 206.53 224.69 206.53 223.44 L 206.53 214.93 L 210.67 214.93 L 210.67 210.56 L 206.53 210.56 L 206.53 205.31 L 201.35 205.31 L 201.35 210.56 L 198.72 210.56 L 198.72 214.93 L 201.35 214.93 L 201.35 224.29 C 201.35 227.73 203.72 230.13 207.09 230.13 C 208.64 230.13 210.38 229.47 211.49 228.47 Z M 223.76 230.13 C 229.42 230.13 234.15 225.54 234.15 220.11 C 234.15 214.67 229.42 210.12 223.76 210.12 C 218.06 210.12 213.29 214.67 213.29 220.11 C 213.29 225.54 218.06 230.13 223.76 230.13 Z M 223.76 225.58 C 220.87 225.58 218.47 223.07 218.47 220.11 C 218.47 217.15 220.87 214.67 223.76 214.67 C 226.61 214.67 229.01 217.15 229.01 220.11 C 229.01 223.07 226.61 225.58 223.76 225.58 Z M 242.73 214.11 L 242.73 210.56 L 237.32 210.56 L 237.32 229.69 L 242.73 229.69 L 242.73 220.55 C 242.73 216.96 245.28 214.67 249.28 214.67 L 249.28 210.12 C 246.35 210.12 243.98 211.63 242.73 214.11 Z M 260.91 225.36 C 258.65 225.36 256.99 223.95 256.36 221.88 L 270.16 221.88 C 270.16 214.67 266.64 210.12 260.65 210.12 C 255.06 210.12 250.81 214.3 250.81 220.07 C 250.81 225.95 255.25 230.13 260.95 230.13 C 263.76 230.13 267.05 228.95 268.75 227.17 L 265.31 223.66 C 264.28 224.66 262.43 225.36 260.91 225.36 Z M 260.87 214.89 C 263.05 214.89 264.46 216.11 264.98 218 L 256.43 218 C 257.13 216.07 258.84 214.89 260.87 214.89 Z" transform="matrix(1.098204, 0.002301, 0.009823, 1.098228, -22.371609, -24.288935)"></path></svg>
                </Link>
                <form className="flex my-auto h-full w-full px-16 sm:px-3 xs:px-3 justify-center items-center" onSubmit={submitHandler}>
                    <input placeholder="Search by name, expansion or product type" className="h-9 w-full box-border outline-none border-r-0 bg-neutral-700 border-2 border-neutral-400 text-white px-4"></input>
                    <button className="h-9 w-9 bg-neutral-700 border-2 border-neutral-400 border-l-0" type='submit'>
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </button>
                </form>
                <Link className="relative h-fit my-auto" to='/checkout'>
                    <svg className="size-8 sm:hidden transition-colors duration-150 hover:fill-teal-600" fill="#FFFFFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 902.86 902.86" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path> <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path> </g> </g> </g></svg>
                    <div className="flex justify-center items-center sm:hidden h-4 w-4 rounded-full absolute bg-red-600 text-white -top-1 -left-1">
                        <span className="text-xs">{cart.length}</span>
                    </div>
                </Link>
            </div>
            <nav className="flex justify-center sm:hidden bg-black md:[transform:scaleY(100%)] group-hover:[transform:scaleY(100%)] md:flex-row sm:[transform:scaleY(0)]">
                {navItems.map((self, id) => (
                    <Link key={self} to={`/products/${refs[id]}`} className="group inline-block text-center px-4 pt-2 bg-black hover:text-yellow-500 transition-color duration-300 text-white md:text-[0.8rem] lg:text-base text-xl font-medium  ">
                        {self}
                        <div key={id} className="mt-2 h-[3px] bg-yellow-500 [transform:rotateY(90deg)] group-hover:[transform:rotateY(0deg)] duration-300"></div>
                    </Link>
                ))}
            </nav>

        </header>
    )
}