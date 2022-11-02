import { FC, memo } from "react";
import { ChildrenType } from "../../../typelist/types";

export const MainTag:FC<ChildrenType> = memo((props) =>{

    const { children } =props; 

    return (

        <main>
            {children}
        </main>
        

    )
})