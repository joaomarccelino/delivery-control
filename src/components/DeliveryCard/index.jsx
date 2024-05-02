import './style.css';

const DeliveryCard = ({ deliveryPlace, deliveryStatus }) => {

  const cardColor = () => {
    switch (deliveryStatus) {
      case 0:
        return 'not-success'
      case 1:
        return 'almost-success'
      case 2:
        return 'warning'
      case 3:
        return 'not-success'
      case 4:
        return 'almost-succes'
      case 5:
        return 'success'
      default:
        break;
    }
  }

  const status = () => {
    switch (deliveryStatus) {
      case 0:
        return 'Não Entregue'
      case 1:
        return 'Entrega Parcial'
      case 2:
        return 'Aguardando Análise'
      case 3:
        return 'Devolvido'
      case 4:
        return 'Devolvido Parcial'
      case 5:
        return 'Conferido'
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