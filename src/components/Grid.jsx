import React from "react"
import GridItem from "./GridItem"
import './Grid.css'
// import Table from 'react-bootstrap/Table';

const Grid = ({ itens, setItens }) => {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <>      
      <table className="table">
        <thead className="thead-grid">
          <tr className="tr-grid">
            <th className="th-grid descricao-grid">Descrição</th>
            <th className="th-grid valor-grid">Valor</th>
            <th className="th-grid tipo-grid">Tipo</th>
            <th className="th-grid lixeira-grid"></th>
          </tr>
        </thead>
        <tbody className="tbody-grid">
          {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}

              </tbody>
      </table>
    </>
  );
};

export default Grid;