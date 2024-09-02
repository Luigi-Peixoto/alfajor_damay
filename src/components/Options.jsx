import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faCookie, faPen } from "@fortawesome/free-solid-svg-icons";

const Item = ({ icon, title, href }) => {
  return (
    <a
      href={`#${href}`}
      className="flex flex-col items-center space-y-2 bg-white p-4 rounded-lg shadow-lg w-1/3 hover:bg-gray-100"
    >
      <FontAwesomeIcon icon={icon} className="text-2xl text-darkBrown" />
      <h2 className="text-2xl font-bold text-darkBrown font-nunito">{title}</h2>
    </a>
  );
};

const Options = () => {
  const items = [
    { icon: faCookie, title: "Sabores", href: "sabores" },
    { icon: faPen, title: "Personalize", href: "personalizados" },
    { icon: faComment, title: "Feedbacks", href: "feedbacks" },
  ];
  return (
    <section className="flex justify-between space-x-4 p-2 bg-background">
      {items.map((item, index) => (
        <Item
          key={index}
          icon={item.icon}
          title={item.title}
          href={item.href}
        />
      ))}
    </section>
  );
};

export default Options;
