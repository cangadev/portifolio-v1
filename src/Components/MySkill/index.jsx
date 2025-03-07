import React from "react";
import * as S from "./style";
import data from "./data/index";

function MySkill() {
  return (
    <> 
      <S.containerMySkill>
         <section className="section-title" id="Habilidades">
               <h2 id="Myskill">Habilidades</h2>
         </section>
        <S.contentMySkill>
          {data.map((item, index)=>(
            <S.Card key={index}>
            <div key={index}>
              <img key={index} src={item.Logo} alt="imgLogo" />
            </div>
            <h4 key={index}> {item.title} </h4>
            <p key={index}> {item.describe} </p>
        </S.Card>
          ))}
        </S.contentMySkill>
      </S.containerMySkill>
    </>
  );
}

export default MySkill;
