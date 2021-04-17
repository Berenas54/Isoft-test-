import React, {Dispatch, FC, SetStateAction} from "react";
import './modal.scss'

type ModalPropsType = {
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>,
    name: string,
    surname: string
}

export const Modal: FC<ModalPropsType> = ({active, setActive, surname, name}) => {
    const onClick = () => setActive(false);
    return (
        active ? <div className={'container active'}>
            <div className={'modal active'} onClick={e => e.stopPropagation()}>
                <p>Здравствуйте, {name} {surname}!</p>
                <button onClick={onClick}>ОК</button>
            </div>
        </div> : <></>
    )
}