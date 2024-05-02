import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './style.css';

const MonthSelection = ({ month }) => {
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  return (
    <div className="month-selection-bg">
      <div className="month-selection container">
        <button className="icon-btn">
          <IoIosArrowBack size={32} />
        </button>
        <span className="month">
          {months[month-1]}
        </span>
        <button className="icon-btn">
          <IoIosArrowForward size={32} />
        </button>
      </div>
    </div>
  )
}

export default MonthSelection;