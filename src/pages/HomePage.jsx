import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <div>
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <ul>
        {companies.map((company) => (
          <Link to={`/company/${company.slug}`}>
            <li key={company.slug}>
              <img
                style={{
                  width: "100px",
                }}
                src={company.logo}
              />
              {company.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
