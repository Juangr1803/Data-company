import { useState, useEffect } from 'react';
import axios from 'axios';

const URL_API = 'http://localhost:8000/api/company/';

const useCompany = () => {
  const [companies, setCompanies] = useState({
    data: [],
    loading: false,
    error: null,
  });

  const getAllCompanies = () => {
    setCompanies({
      loading: true,
      error: false,
    });
    axios
      .get(URL_API)
      .then((res) => {
        console.log(res);
        setCompanies({
          data: res.data.reverse(),
          loading: false,
        });
      })
      .catch((err) =>
        setCompanies({
          loading: false,
          error: true,
        })
      );
  };

  const createdCompany = ({ name, address, nit, phone }) => {
    axios
      .post(`${URL_API}`, {
        name,
        address,
        nit: parseInt(nit),
        phone: parseInt(phone),
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const updatedCompany = (id, { name, address, nit, phone }) => {
    axios
      .put(`${URL_API}${id}/`, {
        name,
        address,
        nit: parseInt(nit),
        phone: parseInt(phone),
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const deletedCompany = (id) => {
    axios
      .delete(`${URL_API}${id}/`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return {
    getAllCompanies,
    createdCompany,
    updatedCompany,
    deletedCompany,
    companies,
  };
};

export default useCompany;
