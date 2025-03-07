import React, { useState, useEffect }  from "react";
import * as S from "./style"
import Img from "../../assets/images/12l.png"
import Img02 from "../../assets/images/qwerty.jpg"
import Img03 from "../../assets/images/my.png";

function Banner() {
  //===Carroussel

  const images= [
    Img,
    Img02,
    Img03,
]; 
const[currentIndex, setCurrentIndex]=useState(0);

const nextSlide=()=>{
    setCurrentIndex((prevIndex)=>(prevIndex + 1)%images.length);
};

useEffect(()=>{
    const interval=setInterval(nextSlide,3000);
    return()=>clearInterval(interval);
},[]);

//===============

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Desenvolvedor de software e formador <⚡>"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(1000 - Math.random() * 1000);
  const period = 1000;

  useEffect(() => {
      let ticker = setInterval(() => {
          tick();
      },delta)

      return () => { clearInterval(ticker) };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2)
      }

      if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true)
          setDelta(period);
      } else if(isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setDelta(500);
  }
};

const phoneNumber = "+244941378131";

  return (
    <>
      <S.containerBanner>
        <S.contentBanner>
            <div>
                <h4>Olá! sou <span>Lúcio José</span></h4>
                <span className="wrap">{text}</span>
                <a href={`tel:${phoneNumber}`}><button>Contactar</button></a>
            </div>
            <section>
                <img src={images[currentIndex]} alt="img" />
            </section>
        </S.contentBanner> 
      </S.containerBanner>
    </> 
  );
}

export default Banner;
