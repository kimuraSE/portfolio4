import {FC, memo} from "react";
import { ClassNameAndChildrenTagType } from "../../../typelist/types";


export const SectionTag:FC<ClassNameAndChildrenTagType> = memo((props) =>{

    const {className , children}=props;

    return(

        <section className={className}>
            {children}
        </section>
    )
})