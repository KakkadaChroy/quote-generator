import {pathItems} from "../../assets/ts/contants";
import {Link, useLocation} from "react-router-dom";


const Footer = () => {
    const location = useLocation();

    return <>
        <footer className="bg-white shadow-lg py-3 fixed bottom-0 z-50 w-full border-t border-gray-200">
            <div className="md:container md:px-48 mx-auto flex justify-around">
                {
                    pathItems.map((item) => (
                        <Link
                            className="flex flex-col items-center text-[#1c1c22]"
                            to={item.link}
                            key={item.id}
                        >
                            <item.icon size={`${location.pathname === item.link ? '25' : '22'}`}/>
                            <span className="text-xs mt-1">{item.pathName}</span>
                        </Link>
                    ))
                }
            </div>
        </footer>
    </>
}

export default Footer;