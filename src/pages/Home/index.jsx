import { useEffect, useState } from "react";
import DeliveryCard from "../../components/DeliveryCard";
import { deliveryTeste } from "../../utils/utils";
import './style.css';

const Home = () => {
  const [locals, setLocals] = useState([]);

  const getLocals = () => {
    const formdata = new FormData();
    formdata.append("token", "4E9E3C19EB1C474054FC45DF4CC1EAB24AAC48162B40FE6A18F9C96C5DE2576DBEC1D494E75ACE4BA14FFD8EE8A9A82ADCCE6F9A885D35D5E48C389604302AAD");
    formdata.append("ano", "2024");
    formdata.append("mes", "4");
    formdata.append("empresa_id", "1");
  
    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };
  
    fetch("https://prefplus.com/api_rec_humanos/api/dashboard/APIObterLocais.php", requestOptions)
      .then((response) => response.json())
      .then((result) => {console.log(result); setLocals(result)})
      .catch((error) => console.error(error));
  }


  useEffect(() => {
    getLocals();
  }, [])
  

  return (
    <div className="container">
      <div className="delivery-cards">
        {locals?.map((item) => {
          return (
            <DeliveryCard deliveryPlace={item.descricao} deliveryStatus={item.resultado} />
          )
        })}
      </div>
    </div>
  )
}

export default Home;   