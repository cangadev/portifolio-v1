import React from "react";
import * as S from "./style";
import { data } from "./data/index";
import { Link } from "react-router-dom";

function MyProject() {

  return (
    <> 
      <S.containerMyProject>
         <section className="section-title" id="Projects">
               <h2>Projectos realizados</h2>
         </section>
        <S.contentMyProject>
          {
          data.map((item, index)=>( 

          <S.Card key={index} className="card">
            <Link key={index} to={item.path}>
            <video key={index} src={item.videopath} autoPlay muted loop></video>
            <p key={index}> {item.describe} </p>
            </Link>
          </S.Card>
          ))
        }
        </S.contentMyProject>
      </S.containerMyProject>
    </>
  );
}

export default MyProject;
