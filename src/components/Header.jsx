import React from 'react'
import './Header.css'
import logo_dp from '../img/logo_dp.png'

const Header = () => {
    return ( 
        <>
            <div className="container-header">
                <div className="header" >
                    <div className="div-logo">
                        <img src={logo_dp}/>
                        <h1>Dark Panda.io</h1>
                    </div>
                    <h1 className="title">
                        FINANÇAS
                    </h1>
                </div>

            </div>
        </>
     );
}
 
export default Header;