import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';

type Message = {
    
}

export function MessageList() {
    const message = useState([]);

    useEffect(() => {
        api.get('messages/last3').then(response => {
            console.log(response.data)
        })
    }, [])

    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>messagem recebia vai ser aqui, e por enquato, vamos deixar essa messagem de exemplo aqui !!</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/diego3g.png" alt="Diego Fernandes" />
                        </div>
                        <span>Vinicius Lira</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>messagem recebia vai ser aqui, e por enquato, vamos deixar essa messagem de exemplo aqui !!</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/diego3g.png" alt="Diego Fernandes" />
                        </div>
                        <span>Vinicius Lira</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>messagem recebia vai ser aqui, e por enquato, vamos deixar essa messagem de exemplo aqui !!</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/diego3g.png" alt="Diego Fernandes" />
                        </div>
                        <span>Vinicius Lira</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}