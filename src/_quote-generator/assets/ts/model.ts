import {LucideIcon} from "lucide-react";

export type ID = number| null | undefined | string;

export interface PathItemModel {
    id: ID;
    pathName: string;
    link: string;
    icon: LucideIcon;
}