import { VscGithubInverted } from 'react-icons/vsc';

import styles from "./styles.module.scss";//lib sass - muda a forma de chamar o css

export function LoginBox() {
    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href="#" className={styles.signInWithGithub}>
                <VscGithubInverted size="24" />
                Entrar com Github
            </a>
        </div>
    )
}