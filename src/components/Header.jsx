import { Link, useParams } from "react-router-dom"
import { Fragment, useEffect, useState } from "react"

export function Header() {

    const { categoryId } = useParams()
    const categories = ['Elite Trainer Boxes', 'Tins', 'Blisters', 'Booster packs']

    const navItems = ['Elite Trainer Boxes', 'Tins & Chests', 'Blisters', 'Boosters', 'Boxes', 'Collections', 'Theme Decks']
    const refs = ['elite-trainer-boxes', 'tins-chests', 'blisters', 'boosters', 'boxes', 'collections', 'theme-decks']

    function openSide(e) {
        if (e.currentTarget !== e.target) return

        e.stopPropagation()
        const body = document.querySelector('body')
        const close = document.querySelector('.close')
        body.style.overflow = 'hidden'
        setTimeout(() => close.classList.add('slide'), 300)
        e.target.firstChild.className = 'fixed flex left-0 translate-x-[0%] transition-transform duration-300 h-full z-20 w-full'
        
    }

    function closeSide(e) {
        // if (e.currentTarget !== e.target) return
        const body = document.querySelector('body')
        const close = document.querySelector('.close')
        close.classList.remove('slide')
        setTimeout(() => {
            e.target.parentElement.parentElement.className = 'fixed flex left-0 translate-x-[-100%] w-full h-full z-20 transition-all duration-300'
            body.style.overflow = 'visible'
        }, 150)
    }

    return (
        <header className="flex flex-col sticky top-0 z-20 h-fit bg-stone-500 w-full">
            <div className="flex justify-center  sm:flex-col" >
                <div className="flex justify-between px-12 xs:px-4 sm:px-8">
                    <div className="flex ">
                        <div className="md:h-0 md:w-0  md:hidden sm:h-12 sm:w-12 bg-red-500 group" onClick={openSide}>
                            <div className="transition-transform translate-x-[-100%] left-0 w-full fixed" >
                                <div className="bg-slate-50 w-[calc(100%-4rem)]">
                                    <div className="w-full h-[4rem] bg-slate-900"></div>
                                    {refs.map((self, id) => (
                                        <Fragment key={'mobile'+self} >
                                            <Link onClick={closeSide} to={`/products/${self}`} className="w-full py-2  h-fit block text-[2rem] z-50">
                                                {navItems[id]}
                                            </Link>
                                            <hr key={`hr${id}`}/>
                                        </Fragment>
                                    ))}
                                </div>
                                <div>
                                    <div className="w-16 h-16 flex justify-center items-center box-border bg-red-400 transition-transform duration-150 close translate-y-[-100%]" onClick={closeSide}>X</div>
                                </div>
                            </div>
                        </div>
                        <Link to='/'>
                            <svg className="hidden sm:block" width="169" height="40" viewBox="0 0 169 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.0148 2.5V40H0V2.5H10.0148Z" fill="#283841"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.0222 2.5H36.3037C43.2175 2.5 48.8222 8.09644 48.8222 15C48.8222 21.9036 43.2175 27.5 36.3037 27.5H25.037V40H15.0222V2.5ZM25.037 17.5H36.3037C37.6865 17.5 38.8074 16.3807 38.8074 15C38.8074 13.6193 37.6865 12.5 36.3037 12.5H25.037V17.5Z" fill="#283841"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M86.3778 2.5V21.875C86.3778 26.3623 90.0208 30 94.5148 30C99.0088 30 102.652 26.3623 102.652 21.875V2.5H112.667V21.875C112.667 31.8852 104.54 40 94.5148 40C84.4898 40 76.363 31.8852 76.363 21.875V2.5H86.3778Z" fill="#283841"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M52.5778 20C52.5778 10.335 60.4244 2.5 70.1037 2.5H72.6074V12.5H70.1037C65.9554 12.5 62.5926 15.8579 62.5926 20V21.25C62.5926 31.6053 54.1855 40 43.8148 40H42.563V30H43.8148C48.6545 30 52.5778 26.0825 52.5778 21.25V20Z" fill="#283841"></path>
                                <path d="M169 3.75C169 5.82107 167.319 7.5 165.244 7.5C163.17 7.5 161.489 5.82107 161.489 3.75C161.489 1.67893 163.17 0 165.244 0C167.319 0 169 1.67893 169 3.75Z" fill="#283841"></path>
                                <path d="M123.42 40L128.199 20.0181L131.752 32.0393C133.87 39.2091 144.041 39.2091 146.16 32.0393L149.712 20.0181L154.491 40H164.787L157.273 8.57949C155.486 1.10744 144.941 0.830781 142.763 8.19891L138.956 21.0833L135.148 8.19892C132.971 0.830824 122.425 1.1074 120.638 8.57948L113.124 40H123.42Z" fill="#283841"></path>
                            </svg>
                        </Link>
                    </div>
                    <svg className="size-8 md:hidden" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 902.86 902.86" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path> <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path> </g> </g> </g></svg>
                </div>
                <Link to='/'>
                    <svg className="sm:hidden" width="169" height="40" viewBox="0 0 169 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.0148 2.5V40H0V2.5H10.0148Z" fill="#283841"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.0222 2.5H36.3037C43.2175 2.5 48.8222 8.09644 48.8222 15C48.8222 21.9036 43.2175 27.5 36.3037 27.5H25.037V40H15.0222V2.5ZM25.037 17.5H36.3037C37.6865 17.5 38.8074 16.3807 38.8074 15C38.8074 13.6193 37.6865 12.5 36.3037 12.5H25.037V17.5Z" fill="#283841"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M86.3778 2.5V21.875C86.3778 26.3623 90.0208 30 94.5148 30C99.0088 30 102.652 26.3623 102.652 21.875V2.5H112.667V21.875C112.667 31.8852 104.54 40 94.5148 40C84.4898 40 76.363 31.8852 76.363 21.875V2.5H86.3778Z" fill="#283841"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M52.5778 20C52.5778 10.335 60.4244 2.5 70.1037 2.5H72.6074V12.5H70.1037C65.9554 12.5 62.5926 15.8579 62.5926 20V21.25C62.5926 31.6053 54.1855 40 43.8148 40H42.563V30H43.8148C48.6545 30 52.5778 26.0825 52.5778 21.25V20Z" fill="#283841"></path>
                        <path d="M169 3.75C169 5.82107 167.319 7.5 165.244 7.5C163.17 7.5 161.489 5.82107 161.489 3.75C161.489 1.67893 163.17 0 165.244 0C167.319 0 169 1.67893 169 3.75Z" fill="#283841"></path>
                        <path d="M123.42 40L128.199 20.0181L131.752 32.0393C133.87 39.2091 144.041 39.2091 146.16 32.0393L149.712 20.0181L154.491 40H164.787L157.273 8.57949C155.486 1.10744 144.941 0.830781 142.763 8.19891L138.956 21.0833L135.148 8.19892C132.971 0.830824 122.425 1.1074 120.638 8.57948L113.124 40H123.42Z" fill="#283841"></path>
                    </svg>
                </Link>
                <input className=" box-border"></input>
                <svg className="size-8 sm:hidden" fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 902.86 902.86" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"></path> <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z"></path> </g> </g> </g></svg>
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