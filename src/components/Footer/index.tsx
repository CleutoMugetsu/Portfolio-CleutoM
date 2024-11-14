import style from "./styles.module.scss"
import { user } from "../../data/user";

export const Footer = () => {
    return(
        <footer className={style.container}>
            <div className={style.container_division}>
                    <div className={style.thanks}>
                        <img src="/obrigado.png" alt="Obrigado por acessar!"/>
                        <p className={style.paragragh}>Obrigado por acessar!</p>
                    </div>
                        <span className={style.paragragh}>
                            &copy; Todos os direitos reservados - <p className={style.name_user}>{user}</p>
                        </span>
                    
            </div>
        </footer>
    )
}
