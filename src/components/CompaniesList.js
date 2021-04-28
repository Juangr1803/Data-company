import React from 'react';

import CompanyItem from './CompanyItem';

const CompaniesList = ({ companies, handleUpdateCompany }) => {
  console.log(companies);
  return (
    <section className="companies">
      {!companies.loading && (
        <div className="companies__container">
          {companies.data.map((company) => (
            <CompanyItem
              key={company.id}
              {...company}
              handleUpdateCompany={handleUpdateCompany}
            />
          ))}
        </div>
      )}
      {companies.loading && <h2>Loading...</h2>}
    </section>
  );
};

export default CompaniesList;
