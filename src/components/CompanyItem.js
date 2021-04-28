import React, { useState, useEffect } from 'react';

// Components

// Hooks
import useCompany from '../hooks/useCompany.hook';

//Styles
import '../styles/components/CompanyItem.css';

const CompanyItem = ({
  id,
  name,
  address,
  nit,
  phone,
  handleUpdateCompany,
}) => {
  const { getAllCompanies, deletedCompany } = useCompany();

  const handleClickDelete = () => {
    deletedCompany(id);
    getAllCompanies();
  };

  return (
    <div className="company">
      <h3>{name}</h3>
      <p>{address}</p>
      <p>{nit}</p>
      <p>{phone}</p>
      <button onClick={() => handleUpdateCompany(id)}>Update</button>
      <button onClick={handleClickDelete}>Delete</button>
    </div>
  );
};

export default CompanyItem;
