import {  FC, memo, useContext } from "react";
import { MenuOpenContext } from "../../../provider/MenuOpenProvider";
import { ChildrenType } from "../../../typelist/types";



export const GlobalContainerTag:FC<ChildrenType> = memo((props) =>{

    const {menuOpenFlag}=useContext(MenuOpenContext);

    const { children } =props;


    return (

        <div id="global-container" className={ menuOpenFlag ? "menu-open" : "" }> 
            {children}
        </div>

    )
})