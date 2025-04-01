import "./App.scss"
import {Header} from "./components/header/";
import {FirstScreen} from "./components/first-screen";
import {CardsScreen} from "./components/cards-screen";
import {SeeMore} from "./components/see-more";
import {Footer} from "./components/footer";

function App() {

  return (
    <>
      <Header />
      <FirstScreen />
      <CardsScreen />
      <SeeMore />
      <Footer />
    </>
  )
}

export default App
