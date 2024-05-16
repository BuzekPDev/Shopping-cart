

export function ProductInfo({ item }) {


    return (
        <div className="p-2 flex mt-4 flex-col items-center lg:items-start">
           { item.description &&
           <>
            <h1 className="text-xl font-medium max-w-[30rem] mb-4 lg:max-w-[40rem]">{item.description.heading}</h1>
            <p className="max-w-[30rem] lg:max-w-[40rem]">{item.description.body}</p>
           </>
           }
        </div>
    )
}