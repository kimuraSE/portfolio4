import icon1 from "../../../../img/products/icon1.png";

export const Products = () =>{

    return (

        <div className="products-box">

            <div className="interior-box">

                <div className="interior-img-box">

                    <div className="img">
                        <img src="https://source.unsplash.com/BayIzHKkjM4" alt="" />
                    </div>

                    <div className="icon">
                        <img src={icon1} alt="" />
                    </div>

                </div>

                <div className="intterior-text-box">
                Intterior
                </div>

                <div className="interior-img-box">

                <div className="img">
                        <img src="https://source.unsplash.com/vGNVhp3HyCY" alt="" />
                    </div>

                    <div className="icon">
                        <img src={icon1} alt="" />
                    </div>

                </div>

            </div>

            <div className="goods-box">

            <div className="goods-img-box">

                    <div className="img">
                        <img src="https://source.unsplash.com/uzmlG1_tbXg" alt="" />
                    </div>

                    <div className="icon">
                        <img src={icon1} alt="" />
                    </div>

            </div>


            <div className="goods-text-box">Goods</div>


            <div className="goods-img-box">

                    <div className="img">
                        <img src="https://source.unsplash.com/oWpOOkrfNWQ" alt="" />
                    </div>

                    <div className="icon">
                        <img src={icon1} alt="" />
                    </div>

            </div>

        </div>

        </div>
    )
}