import React, { useState } from 'react';
import Modal from 'react-modal';
import './style.css';
import { deliveryStatus, departments } from '../../utils/utils';


const AddDeliveryModal = ({ isOpen, closeModal }) => {
  const [department, setDepartment] = useState('');
  const [status, setStatus] = useState('');

  const handleChangeDepartment = (e) => {
    setDepartment(e.target.value);
  };

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel='Adicionar Entrega' className="add-delivery-modal" >
      <h2>Adicionar Entrega</h2>
      <form onSubmit={handleSubmit}>
        <select id='deliveryDepartment' value={department} onChange={handleChangeDepartment}>
          <option value=''>Selecione o setor/escola</option>
          {departments.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
        <select id='deliveryOptions' value={status} onChange={handleChangeStatus}>
          <option value=''>Status da entrega</option>
          {deliveryStatus.map((option) => (
            <option key={option.statusId} value={option.status}>
              {option.status}
            </option>
          ))}
        </select>
        <div className="btn-area">
          <button type='submit' className='submit-btn'>Salvar</button>
          <button type='button' onClick={closeModal} className='close-btn'>
            Fechar
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddDeliveryModal;