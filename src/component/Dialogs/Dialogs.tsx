import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItems} from "./DialogItem/DialogItem";
import {Messages} from "./Message/Message";
import {RootStoreType, sendMessageAC, updateNewMessageTextAC} from "../../redux/state";
//
// export type DialogType = {
//     id: number
//     name: string
// }
//
// export  type MessageType = {
//     id: number
//     message: string
// }
//
export type DialogsProps = {
    store: RootStoreType
}
export const Dialogs = (props: DialogsProps) => {
    let state = props.store._state

    let dialogsElement = state.dialogPage.dialogs.map((d) => <DialogItems name={d.name} id={d.id}/>)
    let messagesElement = state.dialogPage.messages.map((m) => <Messages message={m.message}/>)
    let newMessage = state.dialogPage.newMessage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())

    }

let onUpdateNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        newMessage = e.currentTarget.value
    props.store.dispatch(updateNewMessageTextAC(newMessage))
}
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea placeholder='Enter text' value={newMessage } onChange={onUpdateNewMessageChange}> </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
