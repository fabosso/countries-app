import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
export const NotFound = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1>Page Not found</h1>
      <div>
        <p>
          Back <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  );
};
