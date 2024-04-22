import cell from '../../assets/img/3.png'
import cat from '../../assets/img/5.png'
import dog from '../../assets/img/4.png'
import us1 from '../../assets/img/u1.png'
import us2 from '../../assets/img/u2.png'
import us3 from '../../assets/img/u3.png'
import './aplicativo.css'

function Aplicativo () 
{
    return(
        <>
    <div className='app-container'>
        <div className="first">   

           <div>
            <h1>Conheça o mais novo app</h1>
            
            <p> 
            Hachipet é um aplicativo destinado a ONG’s e tutores que desejam realizar adoções 
            <br/>ou reunir verbas para ajudar os animais em situação de abandono. 
            <br/>
            
            <br/>
            Ao baixar o aplicativo você pode conferir os animais disponíveis para adotar ou 
            ajuda-los de alguma forma,<br/> basta entrar em contato pelo aplicativo. Você também pode encontrar 
            algumas histórias emocionantes de pets<br/> que venceram o abandono e também conferir algumas 
            dicas e cuidados para cuidar melhor dos seus bichinhos.
            
            </p>
            </div>
            
            <div className='buton'>
                <button>BAIXE AGORA!</button>
            </div>
           
               
        </div>


        <div>
            <img className='cel' src={cell} alt="" />
        </div>

        <div>
            <img className='gato'  src={cat} alt="" />
        </div>

       


    </div>
           
        
    <div className='app-container2'>
            
        <div className='second'>
            <h1>Sobre o App</h1>
            <p>
                O Hachipet foi criado de uma iniciativa  de
                ajudar as ONG’s e tutores a <br/> terem um 
                espaço mais amplo na internet e incentivar 
                a adoção e cuidado dos usuários. <br/>Sua 
                função é indicar os pets disponíveis para 
                adoção e orientar os cuidados com dicas 
                para a vida dos pets. <br/>O app conta também 
                com uma aba de histórias de pets. Ao 
                baixar você terá que fazer um breve 
                <br/>cadastro que irá identificá-lo ao decorrer 
                de sua navegabilidade.
                <br/>
                <br/>
                O nome do aplicativo foi criado a partir 
                do  nome do cachorro Hachiko, o cão 
                mais fiel do mundo, <br/>que ficou ao lado de 
                seu dono até o fim. Sua interface foi 
                pensada para trazer o máximo de 
                conforto e dinamismo<br/> na hora de adotar 
                e ajudar um bichinho. A logo do nosso 
                aplicativo foi elaborada a trazer a sensação 
                de<br/> um lugar de muito amor 
                para os bichinhos. Os bichinhos contam 
                com seu amor, e nesse aplicativo <br/> você 
                poderá ter essa oportunidade de apoiar 
                essa causa animal. 
                
                </p>  
                <div className='buton2'>

                <button>BAIXE AGORA!</button>

                </div> 

        </div>

        <div>
            <img className='cao' src={dog} alt="" />
        </div>

    </div>

    <div className='app-container3'>
        <div className='third'>
            <h1>Depoimentos de usuários</h1>
                <div className='users'>
                    <div className='user1'>
                    <img src={us1} width="150px" alt="" />
                        <p>
                        “Eu encontrei meu melhor amigo nesse <br/> aplicativo, ele é muito amigável.”

                        <br/><strong>Jonas</strong>
                        </p>
                    </div>

                    <div className='user2'>
                        <img src={us2} width="150px" alt="" />
                            <p>
                            “Eu amei as dicas que tem no aplicativo, <br/>passei a cuidar melhor do meu gatinho.”

                            <br/><strong>Ana</strong>
                            </p>
                    </div>

                    <div className='user3'>
                        <img src={us3} width="150px" alt="" />
                            <p>
                            “Sempre que posso eu ajudo algumas ONG’s <br/>financeiramente, mesmo não podendo ter animais.”

                            <br/><strong>Vânia</strong>
                            </p>

                    </div>
                </div>
                
                <div className='buton3'>

                <button>BAIXE AGORA!</button>

                </div> 

        </div>
    </div>
        </>
    )

}

export default Aplicativo