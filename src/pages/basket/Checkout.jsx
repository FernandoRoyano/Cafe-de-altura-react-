import { useContext, useEffect } from "react";
import { ApiContext } from "../../context/ApiContext";
import getAllCoffeesAPI from "../../services/coffees";
import Header from './component/Header';
import NavBar  from './component/NavBar';
import Footer from '../../components/Footer';
import Formpay from './component_checkout/Formpay';
import Formdirection from "./component_checkout/Formdirection";
import { Link } from "react-router-dom";





export default function HomePage() {
    const { setCoffees } = useContext(ApiContext)
  
    useEffect(() => {
      async function fetchCoffees() {
        const fetchedCoffees = await getAllCoffeesAPI()
        setCoffees(fetchedCoffees.products)
      }
      fetchCoffees()
    }, [setCoffees])

return (

    <>
    <Header />
    <Formpay/>
    <Formdirection/>
    <Footer />
    </>)
}

