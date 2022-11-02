import { FC, memo, useContext } from "react"
import { MenuOpenContext } from "../../../provider/MenuOpenProvider";
import img1 from '../../../../img/header/logo.png';

export const Header:FC = memo(() =>{

    const {menuOpenFlag,setMenuOpenFlag} = useContext(MenuOpenContext)

    const onClickMenuOpen = () =>{

        setMenuOpenFlag(!menuOpenFlag);

    }

    return(
        <>
        <div className="header-btn-box">

            <button onClick={onClickMenuOpen}>
                <div></div>
                <div></div>
                <div></div>
            </button>

        </div>

        <div className="header-nav-box">

            <div className="header-nav-container">


            <div className="header-nav-img-box">
                <img src={img1} alt="" />
            </div>

            <div className="header-nav-text">
                羨む生活を日常に
            </div>

            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Item</a></li>
                    <li><a href="">コンセプト</a></li>
                    <li><a href="">こだわり</a></li>
                    <li><a href="">援助・支援</a></li>
                    <li><a href="">Online Store</a></li>
                </ul>
            </nav>

            </div>
        </div>
        </>
    )
});