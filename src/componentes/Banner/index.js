import styles from './Banner.module.css';
import minhaFoto from 'assets/minha_foto.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                Tecnologia move o mundo!
                </h1>

                <p className={styles.paragrafo}>
                Eu sou Pedro La Serra e seja muito bem vindo(a) em minha página pessoal!
                Sou Desenvolvedor Web e aqui compartilho conhecimento e curiosidades sobre tecnologia.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto de Pedro La Serra"
                />
            </div>
        </div>
    )
}