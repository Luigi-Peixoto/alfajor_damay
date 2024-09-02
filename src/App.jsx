import Feedbacks from "./components/Feedbacks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Options from "./components/Options";
import Personalizados from "./components/Personalizados";
import Sabores from "./components/Sabores";
import feedbackData from "./feedbacks.json";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Options />
      <Sabores />
      <Personalizados />
      <Feedbacks feedbacks={feedbackData} />
      <Footer />
    </>
  );
}

export default App;
