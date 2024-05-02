import DeliveryCard from "../../components/DeliveryCard";
import { deliveryTeste } from "../../utils/utils";
import './style.css';

const Home = () => {
  return (
    <div className="container">
      <div className="delivery-cards">
        {deliveryTeste.map((item) => {
          return (
            <DeliveryCard deliveryPlace={item.descricao} deliveryStatus={item.entrega_id} />
          )
        })}
      </div>
    </div>
  )
}

export default Home;   