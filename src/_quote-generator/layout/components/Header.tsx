import {Menu} from "lucide-react";

const Header = () => {
    return <>
        <header className="bg-wihte text-primary py-4 shadow-md">
            <div className="md:container px-4 mx-auto flex md:justify-around justify-between items-center">
                <h1 className="text-xl font-bold">QuoteGem</h1>
                <button className="p-1 rounded-md hover:bg-gray-800 transition-colors">
                    <Menu size={24}/>
                </button>
            </div>
        </header>
    </>
}

export default Header;