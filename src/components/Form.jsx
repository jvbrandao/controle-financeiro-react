import React, { useState } from 'react';
import Grid from './Grid';
import './Form.css'

const Form = ({handleAdd, transactionList, setTransactionsList}) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const generateID = () => Math.round(Math.random() * 1000)

    const handleSave = () => {
        if(!desc || !amount){
            alert("Informe a descrição e o valor!");
            return;
        }else if(amount < 1){
            alert("O valor tem que ser positivo!");
            return;
        }

        const transaction = {
            id: generateID(),
            desc: desc,
            amount: amount,
            expense: isExpense,
        }

        handleAdd(transaction)

        setDesc("")
        setAmount("")
    }

    return ( 
        <>
        <div className="container-form">
            <div className="input-content-form">
                <div className="label-form">Descricao</div>
                <input className="input-form" value={desc} onChange={(e) => setDesc(e.target.value)}/>
            </div>
        
            <div className="input-content-form">
                <div className="label-form">Valor</div>
                <input className="input-form" value={amount} type="number" onChange={(e) => setAmount(e.target.value)}/>
            </div>
            <div className="radio-group-form">
                <div >
                    <input className="input-form" type="radio" id="rIncome" defaultChecked name="group1" onChange={() => setExpense(!isExpense)}/>
                    <div className="label-form radio-form" htmlfor="rIncome">Entrada</div>
                </div>

                <div>
                    <input className="input-form" type="radio" id="rExpenses"  name="group1" onChange={() => setExpense(!isExpense)}/>
                    <div className="label-form radio-form"  htmlfor="rExpenses">Saída</div>
                </div>


            </div>
            <div className="input-content-form">
                <div className="button-form"  onClick={handleSave}>Adicionar</div>
            </div>
        </div>
        <Grid itens={transactionList} setItens={setTransactionsList}/>
        </>
     );
}
 
export default Form;