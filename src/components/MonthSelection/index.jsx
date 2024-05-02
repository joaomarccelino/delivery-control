import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './style.css';

const MonthSelection = ({ month }) => {
  return (
    <div className="month-selection-bg">
      <div className="month-selection container">
        <button className="icon-btn">
          <IoIosArrowBack size={32} />
        </button>
        <span className="month">
          {month}
        </span>
        <button className="icon-btn">
          <IoIosArrowForward size={32} />
        </button>
      </div>
    </div>
  )
}

export default MonthSelection;