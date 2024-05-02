import { useEffect, useState } from 'react'
import './App.css'
import AddDeliveryModal from './components/AddDeliveryModal'
import Footer from './components/Footer'
import Header from './components/Header'
import MonthSelection from './components/MonthSelection'
import Home from './pages/Home'
import DeliveryStatus from './components/DeliveryStatus'

function App() {
  const [locals, setLocals] = useState([]);
  const [month, setMonth] = useState('4');
  const [pending, setPending] = useState(0)
  const [delivered, setDelivered] = useState(0)
  const [finished, setFinished] = useState(0)

  function countResults(items) {
    items.forEach(item => {
      switch (item.resultado) {
        case 0:
          setPending(pending => pending+1);
          break;
        case 1:
          setDelivered(delivered => delivered +1);
          break;
        case 2:
          setDelivered(delivered => delivered +1);
          break;
        case 3:
          setPending(pending => pending+1);
          break;
        case 4:
          setDelivered(delivered => delivered +1);
          break;
        case 5:
          setFinished(finished => finished+1);
          break;
        default:
          break;
      }
    });

  }

  const getLocals = () => {
    const formdata = new FormData();
    formdata.append("token", "4E9E3C19EB1C474054FC45DF4CC1EAB24AAC48162B40FE6A18F9C96C5DE2576DBEC1D494E75ACE4BA14FFD8EE8A9A82ADCCE6F9A885D35D5E48C389604302AAD");
    formdata.append("ano", "2024");
    formdata.append("mes", month);
    formdata.append("empresa_id", "1");

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    fetch("https://prefplus.com/api_rec_humanos/api/dashboard/APIObterLocais.php", requestOptions)
      .then((response) => response.json())
      .then((result) => { countResults(result); setLocals(result) })
      .catch((error) => console.error(error));
  }


  useEffect(() => {
    getLocals();
  }, [])




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
      <MonthSelection month={month} />
      <DeliveryStatus pending={pending} delivered={delivered} finished={finished} />
      <Home locals={locals} />
      <AddDeliveryModal isOpen={isModalOpen} closeModal={closeModal} />
      <Footer openModal={openModal} />
    </>
  )
}

export default App
