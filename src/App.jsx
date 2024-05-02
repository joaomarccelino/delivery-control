import { useEffect, useState } from 'react'
import './App.css'
import AddDeliveryModal from './components/AddDeliveryModal'
import Footer from './components/Footer'
import Header from './components/Header'
import MonthSelection from './components/MonthSelection'
import Home from './pages/Home'
import DeliveryStatus from './components/DeliveryStatus'
import api from './services/api'

function App() {
  const [locais, setLocais] = useState([]);

  // useEffect(() => {
  //   api.post("https://prefplus.com/api_rec_humanos/api/dashboard/APIObterLocais.php", {
  //     token: '4E9E3C19EB1C474054FC45DF4CC1EAB24AAC48162B40FE6A18F9C96C5DE2576DBEC1D494E75ACE4BA14FFD8EE8A9A82ADCCE6F9A885D35D5E48C389604302AAD',
  //     ano:2024,
  //     mes:4,
  //     empresa_id: 1
  //   }).then((response) => console.log(response.data))
  //     .catch((err) => {
  //       console.error("ops! ocorreu um erro" + err);
  //     });
  // }, [])

  

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <MonthSelection month={"Julho"} />
      <DeliveryStatus pending={3} delivered={4} finished={3} />
      <Home />
      <AddDeliveryModal isOpen={isModalOpen} closeModal={closeModal} />
      <Footer openModal={openModal} />
    </>
  )
}

export default App
