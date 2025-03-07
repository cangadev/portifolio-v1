import styled,{keyframes} from "styled-components";

const slide= keyframes` 
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
    `
  

export const containerrr = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    div{
        width: 85%;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;

        section{
            width: 280px;
            height: 150px;
            background-color: #202020;
            margin: 1px;
            flex-shrink: 0;
            white-space: nowrap;
            animation: ${slide} 10s linear infinite;
            padding: 10px;
            display: flex;
            justify-content: center;
            align-items: center;

            img{
              width: 150px;
              height: 100%;
            }
    
        }
    }

`