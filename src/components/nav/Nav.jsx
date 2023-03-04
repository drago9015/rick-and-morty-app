import SearchBar from "../searchbar/SearchBar";
import styles from "./Nav.module.css";

function Nav({ onSearch, info }) {
  return (
      <nav className={styles.nav}>
        <SearchBar onSearch={onSearch} info={info} />
      </nav>
  );
}
export default Nav;
