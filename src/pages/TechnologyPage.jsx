import React from "react";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

function TechnologyPage({ technologies }) {
  const { techSlug } = useParams();
  const previousCompany = searchParams.get("toto");
  const technology = technologies.find((tech) => tech.slug === techSlug);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Technology Details</h1>

      <ul>
        {technologies.map((tech) => (
          <Link to={`/tech/${tech.slug}`}>
            <li style={{ width: "80px" }} key={tech.slug}>
              <img src={tech.image} />
              {tech.name}
            </li>
            <button onClick={() => navigate(`/company/${previousCompany}`, -1)}>
              Back
            </button>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default TechnologyPage;
