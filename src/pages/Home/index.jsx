import { useEffect, useState } from "react";
import DeliveryCard from "../../components/DeliveryCard";
import { deliveryTeste } from "../../utils/utils";
import './style.css';

const Home = ({locals}) => {
   return (
    <div className="container">
      <div className="delivery-cards">
        {locals && locals?.map((item, index) => {
          return (
            <DeliveryCard key={index} deliveryPlace={item.descricao} deliveryStatus={item.resultado} />
          )
        })}
      </div>
    </div>
  )
}

export default Home;   