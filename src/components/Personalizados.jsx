import alfajorImage from "../images/alfajorPersonalizado.png";

const Personalizados = () => {
  return (
    <section
      id="personalizados"
      className="w-full bg-darkBrown p-3 border-b-2 border-darkBrownUnderlineHeader"
    >
      <div className="p-3 container mx-auto flex flex-col-reverse md:flex-row items-center justify-around ">
        <img
          src={alfajorImage}
          alt="Alfajores Personalizados"
          className="h-72 w-72 rounded-full object-cover shadow-lg mt-6 mb-6 md:mb-0 md:mr-6"
        />
        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-5xl font-lobster font-bold text-logoYellow mb-4">
            Personalizados
          </h1>
          <p className="text-logoYellow text-lg leading-relaxed max-w-lg font-semibold font-nunito">
            Quer algo exclusivo? Nossos alfajores personalizados são feitos sob
            medida para você! Escolha entre nossos sabores e adicione um toque
            pessoal para tornar sua experiência ainda mais especial.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Personalizados;
