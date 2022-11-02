
import { Dispatch, ReactNode, SetStateAction } from "react"

export type ChildrenType = {
    children : ReactNode
}

export type MenuOpenFlgType = {

    menuOpenFlag : boolean ,
    setMenuOpenFlag :Dispatch<SetStateAction<boolean>> 
    
}

export type ClassNameAndChildrenTagType ={

    className : string ,
    children :ReactNode

}
