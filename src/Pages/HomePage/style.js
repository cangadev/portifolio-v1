import styled from "styled-components";

export const Slider = styled.div`

position: relative;
    width: 100%;
    height: 370px;
    overflow: hidden;

    .item{
    position: absolute;
    width: 200px;
    height: 320px;
    text-align: justify;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    transition: 0.5s;
    left: calc(50% - 110px);
    top: 0;
}
#next, #prev{
    position: absolute;
    top: 40%;
    color: #fff;
    background-color: transparent;
    border: none;
    font-size: xxx-large;
    font-family: monospace;
    font-weight: bold;
    left: 400px;
}
#next{
    left: unset;
    right: 400px;
}
    
    `
    /*
body{
    background-image: 
        linear-gradient(
            to top right, #8B5CF6, #EC4899
        );
    min-height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: monospace;
}*/
