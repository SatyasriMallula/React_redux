import { Outlet, Link } from "react-router-dom";

export const Products = () => {
  return (
    <>
      <nav>
        <Link to="/products/featured" style={styles}>
          Featured
        </Link>
        <Link to="New" style={styles}>
          New
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

const styles = {
  padding: "20px",
  margin: "20px",
};
