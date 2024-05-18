

export function ProductInfo({ item }) {


    return (
        <div className="p-2 flex mt-4 flex-col items-center lg:items-start">
           { item.description &&
           <>
            <div className="flex flex-col lg:w-full">
                <div className="lg:w-full flex justify-between flex-col lg:flex-row">
                    <div>
                        <h1 className="text-xl font-medium max-w-[30rem] mb-4 lg:max-w-[40rem]">{item.description.heading}</h1>
                        <p className="max-w-[30rem] lg:max-w-[40rem]">{item.description.body}</p>
                    </div>
                </div>
                <ul className="r-auto">
                {item.description.cardlist.length ? (
                    <>
                    <h3 className="text-lg font-medium mt-4">Deck List:</h3>
                    {item.description.cardlist.map(self => (
                        <li className=" list-disc mx-5">{self}</li>))
                    }
                    </>
                ) : (
                <></>
                )}
                <div className="px-8 w-fit flex flex-col justify-center py-10 mt-8 rounded-lg bg-neutral-200">
                        
                        <h2 className="text-lg font-medium mb-4">Additional info:</h2>
                        <span className="block">Edition: {item.edition}</span>
                        <span className="block">Expansion: {item.expansion}</span>
                    
                </div>
            </ul>
            </div>
            
           </>
           }
        </div>
    )
}