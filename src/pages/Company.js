import React, { useEffect, useState } from 'react';

// Components
import FormCompany from '../components/FormCompany';
import CompaniesList from '../components/CompaniesList';
// Hooks
import useCompany from '../hooks/useCompany.hook';

const Company = () => {
  const { getAllCompanies, companies } = useCompany();

  const [updateCompany, setUpdateCompany] = useState('');

  const handleUpdateCompany = (id) => {
    setUpdateCompany(id);
  };

  useEffect(() => {
    getAllCompanies();
  }, []);

  return (
    <>
      <FormCompany updateCompany={updateCompany} />
      <CompaniesList
        companies={companies}
        handleUpdateCompany={handleUpdateCompany}
      />
    </>
  );
};

export default Company;
