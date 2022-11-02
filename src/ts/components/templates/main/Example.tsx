import { FC } from "react"

export const Example:FC = () =>{

    return(
        <>
        <div className="bg-img-box">
        <div className="bg-img"></div>
        </div>
       

        <div className="example-box">

            <div className="example-flex-box">

                <div className="content-box">

                    <img src="https://source.unsplash.com/DuVeft7JZdU" alt="" />
                    <div>コンセプト</div>

                </div>

                <div className="content-box">

                    <img src="https://source.unsplash.com/eAzLO5tr2_c" alt="" />
                    <div>こだわり</div>

                </div>

                <div className="content-box">

                    <img src="https://source.unsplash.com/Xljjxi__VQM" alt="" />
                    <div>Online Store</div>

                </div>

            </div>

            <div>

            </div>

            <div>

            </div>

        </div>
        </>
    )
}