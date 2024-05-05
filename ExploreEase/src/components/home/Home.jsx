import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import image from "./img1.jpg";
import Footer from "../Footer";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <Hero
    image={image}
    head={"Make Memories On Your Next Trip"}
    text={"Let's make a plan for your vacation"}
    click={"Learn more >"}
    navigate={navigate}
    />
    <Footer/>
    </>
  );
};
export default Home;
