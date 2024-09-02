import Contacts from "./Contacts";
import logo from "../images/logo.png";

const Logo = ({ logo }) => {
  return (
    <div className="flex justify-end pl-44 items-center">
      <img src={logo} alt="Logo" className="h-auto" />
    </div>
  );
};

const Button = ({ href }) => {
  return (
    <div className="mr-14">
      <a href={href} target="_blank">
        <button className="bg-darkBrown text-white font-bold py-2 px-4 rounded font-nunito hover:bg-amber-900 hover:scale-105 hover:shadow-xl transform transition duration-300 ease-in-out">
          Peça Agora!
        </button>
      </a>
    </div>
  );
};

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center border-b-2 border-darkBrownUnderlineHeader">
      <Contacts />
      <div className="w-full flex items-center justify-between p-4 bg-logoYellow">
        <div></div>
        <Logo logo={logo} />
        <Button
          href={
            "https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D5584996145132&e=AT02FBRDQJDmZeDsAHFZWwumszeG0811bgqMswK-1uU_zWDBFYyM_kfIrLOmg699yAaXKNgbGwspuwavt7SlprHBb7xOVsJeAny32Q"
          }
        />
      </div>
    </header>
  );
};

export default Header;
