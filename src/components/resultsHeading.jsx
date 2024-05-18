

export function ResultsHeading({ categoryId, queryString, sortHandler }) {

    return (
        <h1 className="mb-4 text-xl font-medium flex sm:flex-col justify-between">
            {categoryId.startsWith('search') ?
                <span>
                    Search results for: {queryString}
                </span>
                :
                <span className=" capitalize">
                    {categoryId.replaceAll('-', ' ')}
                </span>}

            <label className="text-base">Sort by: 
                <select defaultValue='added-desc' name="sort-order" onChange={(e) => sortHandler(e.target.value)} className="outline-none ml-2 border-2 border-neutral-300">
                    <option value='added-asc'>Added date (asc)</option>
                    <option value='added-desc'>Added date (desc)</option>
                    <option value='alphabetical-asc'>Name (A-Z)</option>
                    <option value='alphabetical-desc'>Name (Z-A)</option>
                    <option value='price-asc'>Price (asc)</option>
                    <option value='price-desc'>Price (desc)</option>
                </select>
            </label>
        </h1>
    )
}