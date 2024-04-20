import imagemDev from "../src/img/coerapa.png"
import iconeGithub from "../src/img/github.png"
import iconeLinkedin from "../src/img/linkedin.png"

function App() {
  return(
    <main>
      <section>
       <p>Olá Seja Bem-vindo </p>
       <p>
        Eu Sou Formado em <span>Engenharia da Computação</span> e um Dev <span>Front-End</span>
       </p>
       <div id="redes-sociais">
        <a href="https://github.com/bboywarrio" target="_blank">
        <img src={iconeGithub} alt="icone github" srcset=""/>
        </a>
        <a href="https://www.linkedin.com/in/victor-miguel-da-silva-28923b242/ " target="_blank">
          <img src={iconeLinkedin} alt="icone linkedin" srcset="" />

        </a>

       </div>
       <a href="#sobreMin">
        <button>Conheça mais Sobre Mim</button>
       </a>
      </section>
      <section>
      <img id="imagemDev" src={imagemDev} alt="Imagem do desenvolvedor" />
      </section>
    </main>
  )
}

export default App
