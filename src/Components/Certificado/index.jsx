import React from "react";
import * as S from "./style/style.js"
import Img1 from "../../assets/certificado/c1.png"
import Img2 from "../../assets/certificado/c2.png"
import Img3 from "../../assets/certificado/c3.png"
import Img4 from "../../assets/certificado/c4.png"
import Img5 from "../../assets/certificado/c5.png"

function Certificado(){

    return(
        <>
        <S.containerrr>
            <div>
                <section>
                    <img src={Img5} alt="img" />
                </section>
                <section>
                    <img src={Img3} alt="img" />
                </section>
                <section>
                    <img src={Img2} alt="img" />
                </section>
                <section>
                    <img src={Img1} alt="img" />
                </section>
                <section>
                <img src={Img4} alt="img" />
                </section>
            </div>
        </S.containerrr>
        </>
    )
}
export default Certificado;