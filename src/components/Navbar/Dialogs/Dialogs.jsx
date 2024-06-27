import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const Dialogitem = (props) => {
    let path = '/dialogs' + props.id;
    return <div>
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

const Dialogs = () => {
    let dialogData = [
        { id: 1, name: 'Уля' },
        { id: 2, name: 'Паша' },
        { id: 3, name: 'Ксюша' }];

    let dialogsElements = dialogData.map((el) => <Dialogitem id={el.id} name={el.name}/>);

    let messageData = [
            { id: 1, message: 'Привет' },
            { id: 2, message: 'Как дела?' },
            { id: 3, message: 'А?' }];

    let messagesElements = messageData.map((el) => <Message message={el.message}/>);

    return <div className={s.dialog}>
        <div className={s.item}>
            {dialogsElements}
        </div>

        <div className={s.message}>
            {messagesElements}
        </div>
    </div>
}

export default Dialogs;