import { Link, useParams } from "react-router-dom"
import { useState, useEffectm, useMemo } from "react"
import { filter } from "../helpers/filter"

export function Sidebar({ 
    stockCheck,
    releasedCheck,
    saleCheck,
    min,
    max,
    filters,
    checkBox,
    stockCheckHandler, 
    releasedCheckHandler, 
    saleCheckHandler, 
    minHandler,
    maxHandler,
    minInputHandler,
    maxInputHandler,
}) {

    const expansions = ['Twilight Masquarade', 'Temporal Forces', 'Paldean Fates', 'Paradox Rift', '151', 'Obsidian Flames', 'Paldea Evolved', 'Scarlet & Violet', 'Crown Zenith', 'Silver Tempest', 'Lost Origin', 'Pokémon GO', 'Astral Radiance']
    const miscellaneous = ['In stock', 'Released', 'On sale',]
    const miscStates = [stockCheck, releasedCheck, saleCheck]
    const handlers = [stockCheckHandler, releasedCheckHandler, saleCheckHandler]

    function filterToggle() {
        const filterBar = document.querySelector('.filters')


        if (filterBar.classList.contains('shown')) {
            filterBar.classList.replace('shown', 'not-shown')
        } else if (filterBar.classList.contains('not-shown')) {
            filterBar.classList.replace('not-shown', 'shown')
        } else {
            filterBar.classList.add('shown')
        }

        filterBar.style.transform = 'translateY(-20px)'
        setTimeout(() => filterBar.style.transform = 'translateY(0%)', 1)
    }

    return (
        <>
            <div className="md:hidden w-full px-4" onClick={filterToggle}><div className="w-full text-center bg-teal-600 text-white font-medium text-lg py-2">Filters</div></div>
            <div className="p-4 box-border not-shown transition-transform duration-200 filters md:w-[20rem] sm:w-full border-black border-">
                <div className="font-medium text-lg mb-6">
                    <div className="w-full rounded-xl px-4 py-1 mb-2 text-black box-border bg-neutral-300">Availability</div>
                    {
                        miscellaneous.map((self, id) => (
                            <label className="flex flex-row-reverse justify-end text-lg font-normal">
                                {self}
                                <input key={self} type="checkbox" checked={miscStates[id]} onChange={handlers[id]}></input>
                            </label>
                        ))
                    }
                </div>
                <div className="font-medium text-lg mb-6">
                    <div className="text-base w-full rounded-xl px-4 py-1 mb-2 text-black box-border bg-neutral-300">Price range</div>
                    <div className="relative flex justify-center items-center h-4">
                        <div className=" bg-slate-500 w-[calc(100%-10px)] h-1"></div>
                        <input min='0' max='10000' value={min} id="min" onChange={minHandler} step='100' className="absolute top-0 left-0 slider appearance-none w-full" type="range" />
                        <input min='0' max='10000' value={max} id='max' onChange={maxHandler} step='100' className="absolute top-0 left-0 slider appearance-none w-full" type="range" />
                    </div>
                    <div className="flex md:justify-between mt-2 gap-10">
                        <label className="sm:mt-2 mt-1 text-base">
                            Min
                            <input type="number" placeholder={min} onChange={minInputHandler} className="text- w-[4rem] py-1 px-1 xs:ml-0 xs:block sm:ml-2 bg-neutral-200 border-black border-"></input>
                        </label>
                        <label className="sm:mt-2 mt-1 text-base">
                            Max
                            <input type="number" placeholder={max} onChange={maxInputHandler} className="w-[4rem] xs:ml-0 py-1 px-1 xs:block sm:ml-2 bg-neutral-200 border-black border-"></input>
                        </label>
                    </div>
                </div>
                <div className="font-medium mb-6">
                    <div className="text-base w-full rounded-xl px-4 py-1 mb-2 text-black box-border bg-neutral-300">Expansions</div>
                    {
                        expansions.map((self, id) => (
                            <label className="flex flex-row-reverse justify-end text-lg font-normal">
                                {self}
                                <input key={self} type="checkbox" checked={filters.includes(self)} onChange={(e) => checkBox(e, self)}></input>
                            </label>
                        ))
                    }
                </div>
            </div>
        </>
    )
}