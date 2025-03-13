import {pathItems} from "../../assets/ts/contants";
import {Link, useLocation} from "react-router-dom";


const Footer = () => {
    const location = useLocation();
    const isActive = location.pathname;

    return <>
        <footer className="bg-white dark:bg-primary shadow-lg py-3 fixed bottom-0 z-50 w-full border-t border-gray-200">
            <div className="md:container md:px-48 mx-auto flex justify-around">
                {
                    pathItems.map((item) => (
                        <Link
                            className={`flex flex-col items-center text-[#1c1c22] dark:text-white ${item.pathName === "Setting" ? "cursor-not-allowed text-gray-400" : ""}`}
                            title={item.pathName === "Setting" ? "Not Available" : undefined}
                            to={item.link}
                            key={item.id}
                        >
                            <item.icon
                                className={`${isActive === item.link ? 'font-semibold text-rose-500 transition-all duration-500' : ''}`}
                                size={`${isActive === item.link ? '25 ' : '22'}`}
                            />
                            <span
                                className={`text-xs mt-1 ${isActive === item.link ? 'text-rose-500 font-semibold' : ''}`}
                            >
                                {item.pathName}
                            </span>
                        </Link>
                    ))
                }
            </div>
        </footer>
    </>
}

export default Footer;