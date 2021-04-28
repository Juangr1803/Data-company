import React, { useState, useEffect } from 'react';

// Components

// Hooks
import useCompany from '../hooks/useCompany.hook';

//Styles
import '../styles/components/FormCompany.css';

const FormCompany = ({ updateCompany }) => {
  const { getAllCompanies, createdCompany, updatedCompany } = useCompany();

  const [company, setCompany] = useState({
    name: '',
    address: '',
    nit: 0,
    phone: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!updateCompany) {
      createdCompany(company);
    } else {
      updatedCompany(updateCompany, company);
    }
    setCompany({
      name: '',
      address: '',
      nit: 0,
      phone: 0,
    });
    getAllCompanies();
  };
  const handleChange = (e) => {
    setCompany({
      ...company,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-container__input">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={handleChange} />
      </div>
      <div className="form-container__input">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          id="address"
          onChange={handleChange}
        />
      </div>
      <div className="form-container__input">
        <label htmlFor="nit">Nit</label>
        <input type="number" name="nit" id="nit" onChange={handleChange} />
      </div>
      <div className="form-container__input">
        <label htmlFor="phone">Phone</label>
        <input type="number" name="phone" id="phone" onChange={handleChange} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default FormCompany;
