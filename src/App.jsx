import { DiReact } from "react-icons/di";

import styled from "styled-components"
import { useMediaQuery } from 'react-responsive'
import Topics from "./components/Topics";
import Dropdown from "./components/Dropdown"


function App() {

  const isMobile = useMediaQuery({ query: '(max-width: 800px)' })

    return (
      <>
      <Navbar>
        <div>
          <h1>React</h1>
          <DiReact style={{fontSize: "50px"}}></DiReact>
        </div>

        {!isMobile && <Topics />}
        {isMobile && <Dropdown />}
      </Navbar>
      </>
    )
}

export default App

const Navbar = styled.div`

    display: flex;
    width: 100%;
    height: 80px;
    background-color: blueviolet;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 20px;
    color: white;
    position: relative;

    div {
      display: flex;
      align-items: center;
    }

    h1 {
        font-size: 30px;
    }

    

`;