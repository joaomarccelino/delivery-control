import './style.css';
const DeliveryStatus = ({ pending, delivered, finished, filterLocals }) => {

  return (
    <div className="container delivery-status-bar">
      <div className="delivery-status-item">
        <button className='ds-title' onClick={(() => filterLocals('pending'))}>Pendentes</button>
        <span className='ds-value'>{pending}</span>
      </div>
      <div className="delivery-status-item">
        <button className='ds-title' onClick={(() => filterLocals('delivered'))}>Entregues</button>
        <span className='ds-value'>{delivered}</span>
      </div>
      <div className="delivery-status-item">
        <button className='ds-title' onClick={(() => filterLocals('finished'))}>Finalizados</button>
        <span className='ds-value'>{finished}</span>
      </div>
    </div>
  )
}

export default DeliveryStatus