import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const Dialogitem = (props) => {
    let path = '/dialogs' + props.id;
    return <div>
        <img src='https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg'></img>
        <NavLink to={path}
            style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : 'normal',
                    color: isActive ? "gold" : 'white',
                };
            }}>
            {props.name}
        </NavLink>
    </div>
}

const Message = (props) => {
    return <div>{props.message}</div>
}

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogData.map((el) => <Dialogitem id={el.id} name={el.name}/>);

    let messagesElements = props.state.messageData.map((el) => <Message message={el.message}/>);

    return <div className={s.dialog}>
        <div className={s.item}>
            {dialogsElements}
        </div>

        <div className={s.message}>
            <textarea onclick={()=>{{return messagesElements}}}></textarea>

        </div>
    </div>
}
 
export default Dialogs;