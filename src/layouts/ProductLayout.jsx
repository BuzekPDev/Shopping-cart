import { useNavigate, useParams } from "react-router"
import { useEffect, useState } from "react"
import ReactPaginate from 'react-paginate'
import { Sidebar } from "../components/Sidebar"
import { Product } from "../components/Product"
import { filter } from "../helpers/filter"
import { search } from '../helpers/search'
import { paginate } from "../helpers/paginate"
import { urlquery } from '../helpers/urlquery'
import { paginateUrl } from "../helpers/paginateUrl"
import { urlfragment } from "../helpers/urlfragment"
import { ResultsHeading } from "../components/resultsHeading"
import { Timeline } from "../components/Timeline"

export function ProductLayout({ param }) {

    const navitage = useNavigate()
    const { categoryId } = useParams()
    const [localParam, setLocalParam] = useState(categoryId)
    const [products, setProducts] = useState([])
    const [filters, setFilters] = useState([])
    const [stockCheck, setStockCheck] = useState(false)
    const [releasedCheck, setReleasedCheck] = useState(false)
    const [saleCheck, setSaleCheck] = useState(false)
    const [min, setMin] = useState(50)
    const [max, setMax] = useState(9950)
    const [sort, setSort] = useState('added-desc')

    const urlFragment = urlfragment()
    const page = urlFragment ? urlFragment : 0

    useEffect(() => {
        let ignore = false
        const url = '/data/products.json'

        if (!ignore) {
            fetch(url)
                .then(res => res.json())
                .then(json => setProducts(json))
        }
        return () => { ignore = true }
    }, [categoryId])

    // using 2 seperate param states kinda fixes screen
    // flashing with previous page's render
    // I'd like to do it another way but I'm very tired right now
    if (param !== localParam) {
        setFilters([])
        setMin(0)
        setMax(9950)
        setStockCheck(false)
        setReleasedCheck(false)
        setSaleCheck(false)
        setLocalParam(param)
    }

    if (categoryId === 'search') {
        document.title = 'Search results | PokéStore'
    } else {
        const arr = categoryId.split('-')
        for (let i in arr) {
            const char = arr[i][0].toLocaleUpperCase()
            const word = arr[i].replace(arr[i][0], char)
            arr[i] = word
        }
        const prettyText = arr.join(' ')
        document.title = prettyText + ' | PokéStore'
    }

    function checkBox(e, val) {
        const tempFilters = structuredClone(filters)

        if (e.target.checked) {
            tempFilters.push(val)
            setFilters(tempFilters)
        } else {
            const index = tempFilters.indexOf(val)
            tempFilters.splice(index, 1)
            setFilters(tempFilters)
        }
    }

    function stockCheckHandler(e) {
        setStockCheck(e.target.checked)
    }

    function releasedCheckHandler(e) {
        setReleasedCheck(e.target.checked)
    }

    function saleCheckHandler(e) {
        setSaleCheck(e.target.checked)
    }

    function minHandler(e) {
        const num = Number(e.target.value)
        num < max && setMin(num)
    }

    function maxHandler(e) {
        const num = Number(e.target.value)
        num > min && setMax(num)
    }

    function minInputHandler(e) {
        const num = Number(e.target.value)
        num <= max ? setMin(num) : setMin(max)
    }

    function maxInputHandler(e) {
        const num = Number(e.target.value)
        num >= min ? setMax(num) : setMax(min)
    }

    function paginationNavigationBecausePaginationAnchorsRefuseToHandleInputEvenThoughHrefIsValid(value) {
        const url = paginateUrl(categoryId, value)
        console.log(url)
        navitage(url)
    }

    function sortHandler (val) {
        setSort(val)
    }

    function sorted (products) {
        let sortedProducts = []

        switch (sort) {
            case 'added-asc':
                sortedProducts = products.reverse()
                break;

            case 'added-desc':
                sortedProducts = products
                break;

            case 'alphabetical-asc':
                sortedProducts = products.sort((productA, productB) => {
                    if (productA.productName > productB.productName) {
                        return 1
                    }
                    if (productA.productName < productB.productName) {
                        return -1
                    }
                    return 0
                })
                break;

            case 'alphabetical-desc':
                sortedProducts =products.sort((productA, productB) => {
                    if (productA.productName > productB.productName) {
                        return -1
                    }
                    if (productA.productName < productB.productName) {
                        return 1
                    }
                    return 0
                })
                break;

            case 'price-asc':
                sortedProducts = products.sort((productA, productB) => {
                    if (Number(productA.price) > Number(productB.price)) {
                        return 1
                    }
                    if (Number(productA.price) < Number(productB.price)) {
                        return -1
                    }
                    return 0
                })
                break;

            case 'price-desc':
                sortedProducts = products.sort((productA, productB) => {
                    if (Number(productA.price) > Number(productB.price)) {
                        return -1
                    }
                    if (Number(productA.price) < Number(productB.price)) {
                        return 1
                    }
                    return 0
                })
            break;
        }
        return sortedProducts
    }

    let validProducts = products
    let queryString = ''

    if (categoryId === 'search') {
        console.log(categoryId)
        queryString = urlquery()

        const filteredList = products.filter(product =>
            search(product, queryString)
        )

        validProducts = filteredList
    }

    const fragment = urlfragment()

    // memoize the filter calc and send to first page if valid
    // products change in length
    validProducts = filter(validProducts, categoryId, filters, stockCheck, releasedCheck, saleCheck, min, max)
    const sortedProducts = sorted(validProducts)
    const pageLength = 9
    const maxPage = Math.ceil(validProducts.length / pageLength)
    const shownProducts = paginate(sortedProducts, pageLength, page)

    return (
        <div className="flex justify-center h-fit w-full">
            <main className="flex flex-col max-w-[1420px] flex-1 sm:p-4 md:p-12">
                <Timeline />
                <div className="flex max-w-[1420px] w-full h-fit gap-4 justify-center sm:flex-col">
                    <Sidebar
                        stockCheck={stockCheck}
                        releasedCheck={releasedCheck}
                        saleCheck={saleCheck}
                        min={min}
                        max={max}
                        filters={filters}
                        checkBox={checkBox}
                        stockCheckHandler={stockCheckHandler}
                        releasedCheckHandler={releasedCheckHandler}
                        saleCheckHandler={saleCheckHandler}
                        minHandler={minHandler}
                        maxHandler={maxHandler}
                        minInputHandler={minInputHandler}
                        maxInputHandler={maxInputHandler}
                    />
                    <div className="w-full flex flex-col sm:mt-4">
                        <ResultsHeading categoryId={categoryId} queryString={queryString} sortHandler={sortHandler}/>
                        {shownProducts.length ?
                            <div className="grid w-full lg:grid-cols-3 h-fit md:grid-cols-2 sm:grid-cols-2 xs:flex flex-col gap-4">
                                <Product products={shownProducts} />
                            </div>
                            :
                            <div className="flex flex-1 justify-center items-center h-full w-full font-medium text-2xl">
                                <h1>No products found</h1>
                            </div>
                        }
                        <ReactPaginate
                            breakLabel='...'
                            nextLabel=''
                            previousLabel='<'
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={1}
                            pageCount={maxPage > 0 ? maxPage : 0}
                            onPageChange={(e) => paginationNavigationBecausePaginationAnchorsRefuseToHandleInputEvenThoughHrefIsValid(e.selected + 1)}
                            renderOnZeroPageCount={undefined}
                            hrefBuilder={(page) => paginateUrl(categoryId, page)}
                            className="flex justify-center items-center mt-4 gap-1 "
                            pageClassName="bg-transparent text-center hover:bg-teal-200 transition-color duration-200 font-medium w-8 h-8 flex justify-center items-center rounded-full"
                            nextClassName="flex justify-center items-center w-8 h-8"
                            nextLinkClassName="next-btn"
                            previousClassName="flex justify-center items-center w-8 h-8"
                            previousLinkClassName="previous-btn"
                            disabledLinkClassName="disabled"
                            forcePage={maxPage > 0 ? fragment-1 : -1}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}