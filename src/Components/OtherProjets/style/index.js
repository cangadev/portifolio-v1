import styled from "styled-components";

export const containerMyProject = styled.div`
    width: 100%;
    padding: 40px 0px;
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;

    .section-title {
        width: 85%;
        margin-bottom: 60px;
    }
    
    .section-title h2 {
        font-size: 30px;
        color: #fff;
        font-weight: 700;
        position: relative;
    }
    
    .section-title h2::before {
        content: '';
        height: 4px;
        width: 50px;
        background-color: rgb(101, 209, 241);
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 15px;
    }
    
    .section-title h2::after {
        content: '';
        height: 4px;
        width: 25px;
        background-color: rgb(101, 209, 241);
        position: absolute;
        top: 100%;
        left: 0;
        margin-top: 25px;
    }
`;
export const contentMyProject = styled.div`
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-radius: 10px;
    padding: 20px 0px;
    background-color: #050505;

    @media(max-width: 535px){
        display: flex;
        flex-direction: column;
        background-color: #101010;
    }
`;
export const Card = styled.div`
    width: 200px;
    height: 200px;
    background-size: cover;
    border-radius: 10px;
    margin: 10px;

    @media(max-width: 535px){
    width: 90%;
    height: 250px;
    margin-bottom: 50px;
    }

    a{
    height: 200px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    @media(max-width: 535px){
        width: 100%;
        height: 250px;
        background-color: black;

        p{
        display: flex;
        color: silver;
        margin-top: 10px;
    }
    }

    video{
      width: 100%;
    height: 200px;
      border-radius: 10px;

      @media(max-width: 535px){
        height: 250px;
    }
    }
   
    }
    
    h4{
        margin-bottom: 5px 0px;
        background-color: #252525;
    }
    p{
        font-size: 15px;
        display: none;
    }
`;