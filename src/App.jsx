import { useEffect, useState } from 'react'
import './App.css'
import AddDeliveryModal from './components/AddDeliveryModal'
import Footer from './components/Footer'
import Header from './components/Header'
import MonthSelection from './components/MonthSelection'
import Home from './pages/Home'
import DeliveryStatus from './components/DeliveryStatus'

function App() {
  const currentDate = new Date();
  const [locals, setLocals] = useState([]);
  const [month, setMonth] = useState((currentDate.getMonth() + 1).toString());
  const [year, setYear] = useState((currentDate.getFullYear()).toString());
  const [isFiltered, setIsFiltered] = useState(false);
  const [pending, setPending] = useState(0)
  const [delivered, setDelivered] = useState(0)
  const [finished, setFinished] = useState(0)

  const nextMonth = () => {
    if (month < 12) {
      setMonth(month => (+month + 1).toString());
    } else {
      setMonth('1');
      setYear(year => (+year + 1).toString());
    }
  }

  const previousMonth = () => {
    if (month > 1) {
      setMonth(month => (+month - 1).toString());
    } else {
      setMonth('12');
      setYear(year => (+year - 1).toString());
    }
  }

  function countResults(items) {
    setPending(0);
    setDelivered(0);
    setFinished(0);
    items.forEach(item => {
      switch (item.resultado) {
        case 0:
          setPending(pending => pending + 1);
          break;
        case 1:
          setDelivered(delivered => delivered + 1);
          break;
        case 2:
          setDelivered(delivered => delivered + 1);
          break;
        case 3:
          setPending(pending => pending + 1);
          break;
        case 4:
          setDelivered(delivered => delivered + 1);
          break;
        case 5:
          setFinished(finished => finished + 1);
          break;
        default:
          break;
      }
    });
  }

  const applyfilter = (filter) => {
    setIsFiltered(true);
    let filterValues = []
    let filteredLocals = []
    switch (filter) {
      case 'pending':
        filterValues = [0, 3];
        filteredLocals = locals.filter(local => filterValues.includes(local.resultado));
        setLocals(filteredLocals);
        break;
      case 'delivered':
        filterValues = [1, 2, 4];
        filteredLocals = locals.filter(local => filterValues.includes(local.resultado));
        setLocals(filteredLocals);
        break;
      case 'finished':
        filterValues = [5];
        filteredLocals = locals.filter(local => filterValues.includes(local.resultado));
        setLocals(filteredLocals);
        break;
      default:
        break;
    }
  }

  const removeFilter = () => {
    setIsFiltered(false);
    getLocals();
  }

  const getLocals = () => {
    const formdata = new FormData();
    formdata.append("token", "4E9E3C19EB1C474054FC45DF4CC1EAB24AAC48162B40FE6A18F9C96C5DE2576DBEC1D494E75ACE4BA14FFD8EE8A9A82ADCCE6F9A885D35D5E48C389604302AAD");
    formdata.append("ano", year);
    formdata.append("mes", month);
    formdata.append("empresa_id", "1");

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    fetch("https://prefplus.com/api_rec_humanos/api/dashboard/APIObterLocais.php", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (Array.isArray(result)) {
          countResults(result);
          setLocals(result);
        } else {
          setLocals([]);
          setPending(0);
          setDelivered(0);
          setFinished(0);
        }
      })
      .catch((error) => console.error(error));
  }


  useEffect(() => {
    getLocals();
  }, [month])




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
      <MonthSelection month={month} nextMonth={nextMonth} previousMonth={previousMonth}/>
      <DeliveryStatus pending={pending} delivered={delivered} finished={finished} filterLocals={isFiltered ? removeFilter : applyfilter} />
      <Home locals={locals} />
      <AddDeliveryModal isOpen={isModalOpen} closeModal={closeModal} />
      <Footer openModal={openModal} />
    </>
  )
}

export default App
