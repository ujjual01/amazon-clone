import Image from "next/image"
import { 
    MenuIcon, 
    SearchIcon, 
    ShoppingCartIcon
} from '@heroicons/react/outline';


const Header = () => {
    return (
        <header>
        <div  className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
            {/* logo */}
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                  <Image 
                   src="https://links.papareact.com/f90"
                   width={150}
                   height={40}
                   objectFit="contain"
                   className="cursor-pointer"
                   />
            </div>
            {/* search */}
        <div  className="hidden relative items-center flex-grow cursor-pointer rounded-md h-10 bg-yellow-400 sm:flex hover:bg-yellow-500">
            <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" type="text"/>
            <SearchIcon className="h-12 p-4"/>
        </div>
        {/* right */}
        <div className="text-white flex items-center text-xs  space-x-6 mx-6 whitespace-nowrap">
        <div className="link">
        <p>HI itens me</p>
        <p className="font-extrabold md:text-sm">Accounts & Lists </p>
        </div>

        <div className="link">
        <p>Returns</p>
        <p className="font-extrabold md:text-sm">Order</p>
        </div>

        <div className=" relative flex items-center link">
        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full  text-black font-bold">4</span>
        <ShoppingCartIcon className="h-10"/>
        <p className="hidden md:inline font-extrabold md:text-sm ">Basket</p>
        </div>
      </div>
    </div>

    {/* bottom */}
    <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
    <p className="link flex items-center">
    <MenuIcon className="h-6 mr-1"/>
    All
    </p>
    <p className="link">Prime Video</p>
    <p className="link">Amazon Bussiness</p>
    <p className="link">Today's Deals</p>
    <p className="link hidden lg:inline-flex">Electronics</p>
    <p className="link hidden lg:inline-flex">Food & Grocery</p>
    <p className="link hidden lg:inline-flex">Electronics</p>
    <p className="link hidden lg:inline-flex">Prime</p>
    <p className="link hidden lg:inline-flex">Buy again</p>
    <p className="link hidden lg:inline-flex">Shopping Toolkit</p>

    </div>
        </header>
    )
}

export default Header
