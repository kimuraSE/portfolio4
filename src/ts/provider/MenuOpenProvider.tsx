import { createContext, FC, memo,useState } from "react"
import { ChildrenType, MenuOpenFlgType } from "../typelist/types"


export const MenuOpenContext = createContext( {} as MenuOpenFlgType);

export const MenuOpenProvider:FC<ChildrenType>= memo(( props ) =>{

    const { children } = props;

    const [menuOpenFlag,setMenuOpenFlag]=useState(false);

    return (
        <MenuOpenContext.Provider value={{ menuOpenFlag,setMenuOpenFlag }}>
            {children}
        </MenuOpenContext.Provider>

    )
})