import { FC, memo } from "react";
import { ChildrenType } from "../../../typelist/types";



export const ArticleTag:FC<ChildrenType>= memo((props) =>{

    const { children } =props; 

    return (

        <article>
            {children}
        </article>

    )
})