import {FC, memo} from "react";
import { ClassNameAndChildrenTagType} from "../../../typelist/types";


export const FooterTag:FC<ClassNameAndChildrenTagType> = memo((props) =>{

    const {className , children}=props;

    return(

        <footer className={className}>
            {children}
        </footer>
    )
})