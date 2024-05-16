

export function ResultsHeading({ categoryId, queryString }) {

    return (
        <h1 className="mb-4 text-xl font-medium">
            {categoryId.startsWith('search') ?
                <span>
                    Search results for: {queryString}
                </span>
                :
                <span className=" capitalize">
                    {categoryId.replaceAll('-', ' ')}
                </span>}
        </h1>
    )
}