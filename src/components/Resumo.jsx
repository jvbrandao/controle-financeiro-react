import React from 'react'
import './Resumo.css'
import ResumoItem from './ResumoItem'


const Resumo = ({Income, Expense, Total}) => {
    return ( 
        <>
            <div className="container-resumo">
            <ResumoItem Title="Entradas" Value={Income}/>
            <ResumoItem Title="Saídas" Value={Expense} />
            <ResumoItem Title="Total" Value={Total} />

            </div>
        </>
     );
}
 
export default Resumo;