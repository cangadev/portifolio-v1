import React from "react";
import * as S from "./style";

function Myselfie() {
  return (
    <>
      <S.containerMyselfie>
        <S.contentMyselfie>
            <section className="section-title" id="Perfil">
               <h2>Meu perfil</h2>
            </section>
            <div className="container-description">
            <div className="description-first-side">
              <h3>Meu nome é Lúcio José, <span>sou desenvolvedor de software e formador</span></h3>
              <p>
                Nascido em Angola-Luanda. Gosto muito da área de tecnologia e estou sempre estudando pra ficar por dentro do que há de novo.
                Sou Desenvolvedor de Software com mais de 4 anos de experiência, especializado em desenvolvimento de soluções web e mobile 
                utilizando as mais recentes tecnologias, como JavaScript, React, Node.js, entre outras. Ao longo da minha carreira, tive a 
                oportunidade de trabalhar em diversos projetos, desenvolvendo aplicações escaláveis e dinâmicas que atendem a necessidades específicas de clientes e usuários finais.
              </p>
            </div>
            <div className="description-second-side">
              <h3>Meus dados pessoais</h3>
              <div>
                <section>
                  <span><h5>Dt-Nascimento : </h5> 07 / 07 / 200#</span>
                  <span><h5>Nacionalidade : </h5> Angola</span>
                  <span><h5>Ccp : </h5> 327/2024</span> 
                </section>
                <section>
                  <span><h5>Atual morada : </h5> Angola</span>
                  <span><h5>Cidade : </h5> Luanda</span>
                  <span><h5>E-mail : </h5> cangadev7@gmail.com</span>
                </section>
              </div>
              <section className="second-side-btns">
                <a href="/LUCIO2024.pdf" download="Lucio_CV">                
                  <button>Download CV</button>
                </a>
                <button>Enviar messagem</button>
              </section>
              </div>
            </div>
        </S.contentMyselfie>
      </S.containerMyselfie>
    </>
  );
}

export default Myselfie;
