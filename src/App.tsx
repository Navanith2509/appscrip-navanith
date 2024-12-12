import { CiGrid42 } from "react-icons/ci";
import "./styles.css";
import Navbar from "./components/Navbar/";
import Head from "./components/Head";
import Foot from "./components/Footer";
import Product from "./components/Product";

export default function App() {
  return (
    <>
      <Navbar />
      <Head />
      <Product />
      <Foot />
    </>
  );
}
