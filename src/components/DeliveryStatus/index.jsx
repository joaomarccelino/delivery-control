import './style.css';
const DeliveryStatus = ({pending, delivered, finished}) => {
  return (
    <div className="container delivery-status-bar">
      <div className="delivery-status-item">
        <span className='ds-title'>Pendentes</span>
        <span className='ds-value'>{pending}</span>
      </div>
      <div className="delivery-status-item">
        <span className='ds-title'>Entregues</span>
        <span className='ds-value'>{delivered}</span>
      </div>
      <div className="delivery-status-item">
        <span className='ds-title'>Finalizados</span>
        <span className='ds-value'>{finished}</span>
      </div>
    </div>
  )
}

export default DeliveryStatus