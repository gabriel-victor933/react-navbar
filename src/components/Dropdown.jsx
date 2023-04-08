import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import { useState } from "react"
import styled, {keyframes,css} from "styled-components"


const Drowdown = () => {

    const [isClicked, setIsClicked] = useState(false)
    const [animation, setAnimation] = useState(false)

    function handleClose(){

        setAnimation(!animation)

        setTimeout(()=>{
            setIsClicked(!isClicked)
        },500)
    }

    function handleOpen(){

        setAnimation(!animation)
        setIsClicked(!isClicked)
    }



    return (
        <div>

            {isClicked ? <AiOutlineClose style={{fontSize: "40px"}} onClick={handleClose}/>:<AiOutlineMenu style={{fontSize: "40px"}} onClick={handleOpen}/>}
            {isClicked && <Menumobile open={animation}>
                <h2>Home</h2>
                <h2>Services</h2>
                <h2>Products</h2>
                <h2>Contact Us</h2>
                <button><h2>sign up</h2></button>
            </Menumobile>}
        </div>
    )
}

export default Drowdown

const Entrada = keyframes`
  
  0% {
    
            transform: scaleY(0);
    
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    
            transform: scaleY(1);
   
            transform-origin: 100% 0%;
    opacity: 1;
  }
`;

const Saida = keyframes`

0% {
    transform: scaleY(1);
    transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    transform: scaleY(0);
    transform-origin: 100% 0%;
    opacity: 1;
  }

`;

const Animein = css`
    animation: ${Entrada} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`;

const Animeout = css`
    animation: ${Saida} 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
`;

const  Menumobile = styled.div`

    position: absolute;
    width: 100%;
    left: 0px;
    top: 80px;
    background-color: blueviolet;
    display: flex;
    flex-direction: column;
    z-index: 1;
    ${props => (!props.open ? Animeout : Animein)}
    


    h2 {
        font-size: 30px;
        margin: 20px;

        &:last-child{
            margin: 0px;
        }
    }

    button {
        margin-top: 20px;
        margin-bottom: 30px;
        width: 80%;
        height: 60px;
        border: solid 0.5px white;
        border-radius: 10px;
        background-color: blue;
        color: white;   
    }

    button:hover {
        background-color: blueviolet;
    }

    button:active {
        background-color: white;
        border: solid 0.5px black;
        color: black;
    }

    
`;