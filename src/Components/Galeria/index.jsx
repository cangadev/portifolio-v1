import React from "react";
import * as S from "./style";
import * as A from "../MyProjects/style";
import { data } from "./data";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Galeria(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <>
    <A.containerMyProject>
             <section className="section-title">
                   <h2>Minha Galeria</h2>
             </section>
    </A.containerMyProject>
    <S.Land>
      <div>
    <Carousel responsive={responsive} id="Subcontainer">
    {
            data.map( (item, index)=>(
            <section key={index} id="lol">
                <img src={item.pathimg} alt="erro ao processar img" />
                <section>
                    <h4>{item.title}</h4>
                    <span>{item.date}</span>
                    <p>{item.describe}</p>
                </section>
            </section>
                ) )
            }
</Carousel>
</div>
</S.Land>
    </>
    )
}
export default Galeria; 