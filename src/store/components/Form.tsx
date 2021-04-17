import React, {useState} from "react";
import state from "../state";
import {observer} from "mobx-react-lite";
import {Modal} from "./Modal/Modal";
import './form.scss'

export const Form = observer(() => {

    const [modalActive, setModalActive] = useState(false)
    const [nameDirty, setNameDirty] = useState(false)
    const [surnameDirty, setSurnameDirty] = useState(false)
    const nameError = "Введите Ваше имя"
    const surnameError = "Введите Вашу фамилию"


    const disable = (!(state.name.trim() !== "" && state.surname.trim() !== ""))

    const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        switch (e.currentTarget.name) {
            case 'name':
                if (state.name.trim() === "") {
                    setNameDirty(true)
                } else {
                    setNameDirty(false)
                }
                break
            case 'surname':
                if (state.surname.trim() === "") {
                    setSurnameDirty(true)
                } else {
                    setSurnameDirty(false)
                }
                break

        }
    }

    return (<div>
            <div className='form_container'>
                <input className='input' onBlur={blurHandler} onChange={state.onChange} placeholder={'Имя'}
                       name={"name"}/>
                {(nameDirty) && <div className={'error'}>{nameError}</div>}
                <input className='input' onBlur={blurHandler} onChange={state.onChange} placeholder={'Фамилия'}
                       name={"surname"}/>
                {(surnameDirty) && <div className={'error'}>{surnameError}</div>}
                <button className='button' disabled={disable} onClick={() => setModalActive(true)}>Готово</button>
            </div>
            <Modal active={modalActive} setActive={setModalActive} name={state.name} surname={state.surname}/>
        </div>
    )
})