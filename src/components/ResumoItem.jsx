import React from 'react'
import './ResumoItem.css'

const ResumoItem = ({Title, Value}) => {
    return ( 
        <>
            <div className="container-resumo-item">
                <div className="header-resumo-item">
                    <div className="header-title-resumo-item">{Title}</div>
                </div>
                <div className="total">
                    <h1>
                        {Value}
                    </h1>
                </div>
                    
                
            </div>
        </>
     );
}
 
export default ResumoItem;