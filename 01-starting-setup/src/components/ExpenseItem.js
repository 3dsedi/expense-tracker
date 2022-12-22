import React ,{ useState} from 'react'
import { Card } from "./Card";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.css";


export const ExpenseItem = (props) => {
  const [title , setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle('updated')
    console.log(title )
  }
 
  return (
    <Card className="expense-item">
     <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler} >click me</button>
    </Card>
  );
};
