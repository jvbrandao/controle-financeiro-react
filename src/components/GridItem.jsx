import React from "react";
import './GridItem.css'
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  return (
    <>
      <tr className="tr-griditem">
        <td className="td-griditem descricao-griditem" >{item.desc}</td>
        <td className="td-griditem valor-griditem">{item.amount}</td>
        <td className="td-griditem tipo-griditem">{item.expense ? (
            <FaRegArrowAltCircleDown color="red" />
          ) : (
            <FaRegArrowAltCircleUp color="green" />
          )}
        </td>
        <td className="td-griditem lixeira-griditem">
            <FaTrash onClick={() => onDelete(item.id)} />
        </td>
      </tr>
    </>

  );
};

export default GridItem;