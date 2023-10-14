import React from "react";
import { Link, useParams } from "react-router-dom";

function CompanyPage({ companies }) {
  const params = useParams();
  console.log(params.companySlug);
  const oneCompany = companies.find(
    (element) => params.companySlug === element.slug
  );

  return (
    <div>
      <h1>{oneCompany.name} Profile</h1>
      <img style={{ width: "100px" }} src={oneCompany.logo} />
      <p>
        {oneCompany.name}
        {oneCompany.website}
        {oneCompany.description}
      </p>
      <div>
        {oneCompany.techStack.map((oneTech) => {
          <div key={oneTech.slug}>
            <Link to={`/tech/${oneTech.slug}?toto=${companySlug}`}>
              {oneTech.name}
            </Link>
          </div>;
        })}
      </div>
    </div>
  );
}

export default CompanyPage;
