import styles from './SobreMim.module.css'

import PostModelo from "componentes/PostModelo/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>Olá, eu sou Pedro</h3>
            <img
                src={fotoSobreMim}
                alt="foto do Pedro"
                className={styles.fotoSobreMim}

            />

<p className={styles.paragrafo}>Tudo bem?</p>


<p className={styles.paragrafo}>Tenho 27 anos, cresci no interior Paulista, na cidade de Tupã, aos 18 anos após 1 ano todo de etapas a do concurso da PMESP, tomava posse desse cargo público tão sonhado por mim na época, cargo o qual estou até o presente momento.</p>


<p className={styles.paragrafo}>Todos esses anos na Polícia Militar de São Paulo fui notando o quanto segurança pública e tecnologia precisam andar de mãos dadas, sendo que por diversas vezes a prisão em flagrante ou até mesmo, de forma posterior, a condenação de criminosos só foi possível após a utilização de algum software, seja por radares inteligentes, aplicativos de pesquisa em banco de dados e etc.</p>

<p className={styles.paragrafo}>Com isso a minha curiosidade pela tecnologia foi crescendo a ponto que em 2022, após incentivo de amigos da área, comecei a estudar Desenvolvimento Web pela Alura, consequentemente no início de 2023 iniciei a cursar Análise e Desenvolvimento de Sistemas pela UNINOVE, polo Alphaville.</p>


<p className={styles.paragrafo}>Desde então me identifiquei com o Front-End, focando os estudos em HTML, CSS, JavaScript e React.</p>

<p className={styles.paragrafo}>Fico a disposição de cada um de vocês para que possamos partilhar conhecimentos adquiridos e aprendermos juntos!</p>
        </PostModelo>
    )
}
