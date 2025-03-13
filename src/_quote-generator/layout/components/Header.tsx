import ThemeToggle from "../../helpers/ui/DarkMode";

const Header = () => {
    return <>
        <header className="bg-wihte dark:bg-primary dark:text-white text-primary py-4 shadow-md">
            <div className="md:container px-4 mx-auto flex md:justify-around justify-between items-center">
                <h1 className="text-xl font-bold">QuoteGem | JustShop</h1>

                {/*Dark Mode*/}
                <ThemeToggle/>
            </div>

        </header>
    </>
}

export default Header;