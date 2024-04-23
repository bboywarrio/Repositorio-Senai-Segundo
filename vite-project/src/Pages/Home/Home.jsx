import './Home.css'
import Carosel from '../Carrosel'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function home() {
    const[valor,setValor] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/produtos")
        .then(resp => setValor(resp.data))
        .catch(err => console.log(err)),[]
    })
    
    return(<>
    
    
    
    <section className="welcome">
    <div className="featured_apresentation">
        <h2 className='home-title'>Olá, somos da Hachi Pet</h2>
        <p>Bem-vindo ao Hachi Pet, o seu destino online para tudo relacionado a cuidados e amor pelos nossos amigos de quatro patas. Aqui, no coração digital da comunidade pet, você encontrará uma variedade de recursos, desde dicas úteis de saúde e bem-estar até produtos exclusivos para atender às necessidades do seu companheiro peludo. Prepare-se para explorar um mundo onde cada latido, ronronado ou sibilo é celebrado! </p>
    </div>
    </section>
    

    <section className='home-featured welcome'>
        <Carosel/>

        <div>
            <h3>Veja nossos produtos</h3>
            <div>
                
            </div>
        </div>
        <div>
            <h3>Quem somos</h3>
            <p>No Hachi Pet, somos uma equipe apaixonada por animais de estimação, dedicada a fornecer as melhores informações, produtos e serviços para fortalecer o vínculo entre humanos e seus bichinhos queridos. Nossa jornada começou com uma simples missão: tornar a vida dos animais de estimação mais feliz e saudável, e desde então, temos trabalhado incansavelmente para alcançar esse objetivo. Com especialistas em cuidados veterinários, amantes de animais e entusiastas da tecnologia, estamos aqui para ajudar você e seu peludo a desfrutarem de uma vida cheia de alegria, saúde e amor.</p>
        </div>
    </section>
    </>)
}
export default home