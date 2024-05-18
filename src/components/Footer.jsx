

export function Footer () {


    return (
        <footer className="bg-neutral-800 text-sm w-full h-fit p-16 justify-center flex gap-12 text-white">
            <div className="max-w-[1420px] flex sm:flex-col gap-8">
                <div className="flex gap-8 xs:flex-col">
                    <div className="">
                        <h4 className="text-teal-500 pb-2 cursor-default underline font-medium text-xl">Contact</h4>
                        <p className="pb-1">pokestore@email.com</p>
                        <p className="">+420 123 456 789</p>
                    </div>
                    <div className="">
                        <h4 className="text-teal-500 pb-2 cursor-default underline font-medium text-xl">Opening hours</h4>
                        <h5 className="font-medium text-base">Mon - Fri</h5>
                        <p className="pb-1">12:00 - 19:00 h</p>
                        <h5 className="font-medium text-base">Sat - Sun</h5>
                        <p className="">10:00 - 19:00 h</p>
                    </div>
                </div>
                <div className="flex gap-8 xs:flex-col">
                    <div className="">
                        <h4 className="text-teal-500 pb-2 cursor-default underline font-medium text-xl">About PokéStore</h4>
                        <p className="pb-1 hover:underline cursor-pointer">Contact </p>
                        <p className="pb-1 hover:underline cursor-pointer">Work with us</p>
                        <p className="hover:underline cursor-pointer">Play club</p>
                    </div>
                    <div className="">
                        <h4 className="text-teal-500 pb-2 cursor-default underline font-medium text-xl">How to shop</h4>
                        <p className="pb-1 hover:underline cursor-pointer">Gift ideas</p>
                        <p className="pb-1 hover:underline cursor-pointer">Shipping methods</p>
                        <p className="pb-1 hover:underline cursor-pointer">Payment methods</p>
                        <p className="pb-1 hover:underline cursor-pointer">Terms and conditions</p>
                        <p className="pb-1 hover:underline cursor-pointer">Complaints</p>
                        <p className="pb-1 hover:underline cursor-pointer">Privacy policy</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}