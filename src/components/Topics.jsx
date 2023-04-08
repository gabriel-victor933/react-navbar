import styled from "styled-components";

const Topics = () => {

    return (
        <Links>
          <h2>Home</h2>
          <h2>Services</h2>
          <h2>Products</h2>
          <h2>Contact Us</h2>
          <button><h2>sign up</h2></button>
          </Links>
    )
}

export default Topics


const Links = styled.div`
    
    h2 {
        font-size: 18px;
        margin: 0px 15px;
    }

    button {
        height: 35px;
        background-color: blue;
        color: white;
        border: solid 0.5px white;
        border-radius: 10px;
        margin: 0px 20px 0px 30px;
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