import {FC, memo} from "react";
import { ClassNameAndChildrenTagType } from "../../../typelist/types";


export const HeaderTag:FC<ClassNameAndChildrenTagType>= memo((props) =>{

    const {className, children}=props;

    return(

        <header className={className}>
            {children}
        </header>
    )
})