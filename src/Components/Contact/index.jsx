import React from "react";
import * as S from "./style"
import { Link } from "react-router-dom";
import Facebooklogo from "../../assets/images/facebook.png"
import instalogo from "../../assets/images/instagram.png"
import linkedin from "../../assets/images/linkedin.png"
import githublogo from "../../assets/images/github-sign.png"
import Myprofile from "../../assets/images/lucioj.png"

function Contact() {
  return (
    <>
      <S.containerContact>
        <S.contentContact>
            <S.contentSideLeft>
              <h3>Envie uma mensagem:</h3>
              <div>
                <form action="">
                  <section>
                  <input type="text" required name="" id="" placeholder="name"/>
                  <input type="email" required name="" id="" placeholder="email"/>
                  </section>
                  <input type="text" required name="" id="inputmsg" placeholder="Description"/>
                  <button onClick={function mensagem(){alert("mensagem enviada com sucesso!")}}>Enviar</button>
                </form>
              </div>
            </S.contentSideLeft>
            <S.contentSideRight>
              <h3>My Social media:</h3>
              <div>
                <section>
                    <Link to="https://www.linkedin.com/in/lucio-jose7/">
                        <img src={linkedin} alt="LinkedIn" />
                    </Link>
                </section>
                <section>
                   <Link  to="https://www.instagram.com/lucio_jose7/">
                      <img src={instalogo} alt="instagram" />
                    </Link>
                </section>
                <section>
                   <Link  to="https://github.com/cangadev">
                        <img src={githublogo} alt="GitHub" />
                    </Link>
                </section>
                <section>
                    <Link  to="https://www.facebook.com/profile.php?id=100072983093051">
                        <img src={Facebooklogo} alt="Facebook" />
                    </Link>
                </section>
                <section>
                   <Link>
                      <img src={Myprofile} alt="Facebook" />
                   </Link>
                </section>
              </div>
            </S.contentSideRight>
        </S.contentContact>
      </S.containerContact>
    </>
  );
}

export default Contact;
