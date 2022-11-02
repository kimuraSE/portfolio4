import {FC, memo} from "react";
import { ChildrenType } from "../../../typelist/types";


export const Container:FC<ChildrenType>=  memo((props)=>{

    const { children } = props;

    return (
        <div id="container">
            {children}
        </div>
    )

})