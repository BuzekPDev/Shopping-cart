import previous from '../assets/icons/previous-arrow.svg'
import next from '../assets/icons/next-arrow.svg'

export function ImageSlider({item, selected, selectedHandler}) {

    const imageCount = item.image ? Object.keys(item.image).length : 0


    return (
        <div className="flex flex-col md:w-full lg:w-fit">
            <div className="relative h-fit max-h-[30rem] md:w-full lg:w-[35rem] overflow-hidden md:h-[35rem] border-black flex justify-center">
                <div className="w-full h-fit max-w-[30rem] max-h-[30rem] justify-center items-center box-border overflow-hidden border-black relative flex flex-1" >
                    {item.image &&
                        <div className=" w-fit h-fit transition-all duration-300 flex" style={{ transform: `translateX(-${100 * selected}%)` }}> { //style={{left:`-${100*selected}%`}}> {// wrap in another container } //style={{transform:`translateX(-${20*selected}rem)`}}
                        }
                            {Object.values(item.image).map((image, id) =>
                                <img key={image} className='w-full h-auto max-h-[30rem] max-w-[30rem] transition-all block' src={image.replace('..', '')+'.webp'} />
                            )}
                        </div>
                    }
                </div>
                {selected > 0 &&
                    <button type="button" className=" absolute left-0 top-[calc(50%-1rem)] w-8 h-8" onClick={() => selectedHandler(selected - 1)}>
                        <img src={previous}/>
                    </button>
                }
                {selected < imageCount - 1 &&
                    <button type="button" className=" absolute right-0 top-[calc(50%-1rem)] w-8 h-8" onClick={() => selectedHandler(selected + 1)}>
                        <img src={next}/>
                    </button>
                }
            </div>
            <div className="flex justify-center items-center">
                {item.image &&
                    Object.values(item.image).map((image, id) => (
                        <div key={id} className="flex justify-center items-center w-8 h-8">
                            <div className={`bg-neutral-300 transition-all duration-200 w-4 h-4 tra rounded-full tra inline-block ${selected === id && 'selected-image'}`} onClick={() => selectedHandler(id)}></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}