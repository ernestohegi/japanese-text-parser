const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="flex justify-center fixed bottom-0 p-4 text-sm left-0 right-0 bg-black text-white">
      {CURRENT_YEAR} &copy; Ernesto Hegi
    </footer>
  );
};

export default Footer;
