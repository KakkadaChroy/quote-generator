import {PathItemModel} from "./model";
import {Heart, Home, Settings} from "lucide-react";

export const pathItems: PathItemModel[] = [
    {
        id: 1,
        pathName: "Home",
        link: "/home",
        icon: Home
    },
    {
        id: 2,
        pathName: "Favorites",
        link: "/favorites",
        icon: Heart
    },
    {
        id: 3,
        pathName: "Setting",
        link: "/",
        icon: Settings
    },
]