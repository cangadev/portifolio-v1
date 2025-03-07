import React from "react";
import * as S from "./style/style.js"
import Img1 from "../../assets/images/marcas/LOGO-PNG-1000x1024-removebg-preview.png"
import Img2 from "../../assets/images/marcas/Design_sem_nome__2_-removebg-preview.png"
import Img3 from "../../assets/images/marcas/30Sep24_Anis_Online_Store_Free_Upload__2_-removebg-preview.png"
import Img4 from "../../assets/images/marcas/logo2-removebg-preview.png"

function Parceiros(){

    return(
        <>
        <S.containerrr>
            <div>
                <section>
                    <img src={Img2} alt="img" />
                </section>
                <section>
                    <img src={Img3} alt="img" />
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
export default Parceiros;