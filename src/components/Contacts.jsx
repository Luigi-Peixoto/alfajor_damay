import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = ({ icon, text }) => {
  return (
    <div className="basis 1/3 flex items-center space-x-2">
      <FontAwesomeIcon icon={icon} className="text-lg" />
      <p className="text-white">{text}</p>
    </div>
  );
};

const Contacts = () => {
  return (
    <nav className="w-full h-5 bg-darkBrown text-white p-4 flex justify-center space-x-20">
      <Contact icon={faPhone} text={"(84) 99614-5132"} />
      <Contact icon={faInstagram} text={"alfajor_damay"} />
    </nav>
  );
};

export default Contacts;
