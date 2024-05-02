import './style.css';

const DeliveryCard = ({deliveryPlace, deliveryStatus}) => {

  const cardColor = () => {
    switch (deliveryStatus) {
      case 1:
        return 'success'
      case 2:
        return 'almost-success'
      case 3:
        return 'warning'
      case 4: 
        return 'not-success'
      default:
        break;
    }
  }

  const status = () => {
    switch (deliveryStatus) {
      case 1:
        return 'Conferido'
      case 2:
        return 'Entrega Parcial'
      case 3:
        return 'Entregue'
      case 4: 
        return 'Não Entregue'
      default:
        break;
    }
  }

  return (
    <div className={`delivery-card ${cardColor()}`}>
      <p className="delivery-place">Local: {deliveryPlace}</p>
      <p className="delivery-status">{status()}</p>
    </div>
  )
}

export default DeliveryCard;