import { Content } from "./components/Content";
import { SideBar } from "./components/SideBar/SideBar";
import { ContainerBody, GlobalStyle } from "./styles/global";



export function App() {
  return (
    <ContainerBody>
      <SideBar />
      <Content />

      <GlobalStyle />
    </ContainerBody>
  )
}

