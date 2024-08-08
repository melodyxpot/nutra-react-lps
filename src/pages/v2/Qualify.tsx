import { NavBox } from "../../components/checkout";
import { Footer } from "../../components/layout/Footer";
import { OrderForm, Stories } from "../../components/Step1";

export default function Qualify () {
  return <>
    <NavBox active={1} />
    <OrderForm />
    <Stories/>
    <Footer/>
  </>
}