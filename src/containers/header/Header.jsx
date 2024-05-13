import Logo from "../../components/logo/Logo";
import Search from "../../components/search/Search";
import "./Header.css";

const Header = ({ onInputChange }) => {
  return (
    <>
      <div className="header">
        <Logo />
        <Search onInputChange={onInputChange} />
      </div>
    </>
  );
};

export default Header;
