
const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="text-clr-light bg-gray-500 py-8 text-center sm:pl-[250px] xl:pl-[300px]">
      © Joakim Nøhr Olsen {year}
    </footer>
  );
};

export default Footer;
