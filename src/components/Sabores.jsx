import alfajorImage from "../images/alfajores.png";

const ItemsSabor = ({ items }) => {
  return (
    <ul className="mt-6 text-darkBrown text-lg leading-relaxed space-y-2">
      {items.map((item, index) => (
        <li key={index} className="font-nunito font-semibold">
          <strong>{item.sabor}</strong> - {item.descricao}
        </li>
      ))}
    </ul>
  );
};

const Sabores = () => {
  const items = [
    {
      sabor: "Brigadeiro",
      descricao:
        "Um clássico recheado com o sabor intenso do brigadeiro, coberto com uma camada de chocolate que derrete na boca.",
    },
    {
      sabor: "Doce de Leite",
      descricao:
        "Inspirado na tradição argentina, com recheio cremoso e suave, coberto por uma generosa camada de chocolate.",
    },
    ,
  ];
  return (
    <section
      id="sabores"
      className="w-full bg-logoYellow py-8 border-b-2 border-darkBrownUnderlineHeader"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around p-3">
        <div className="flex flex-col text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-5xl font-lobster font-bold text-darkBrown mb-4">
            Sabores
          </h1>
          <p className="text-darkBrown text-lg leading-relaxed max-w-lg font-semibold font-nunito">
            Nosso alfajor é feito com carinho e atenção aos detalhes,
            proporcionando uma experiência única a cada mordida. Explore nossos
            sabores irresistíveis:
          </p>
          <ItemsSabor items={items} />
        </div>
        <img
          src={alfajorImage}
          alt="Alfajores"
          className="h-72 w-72 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default Sabores;
