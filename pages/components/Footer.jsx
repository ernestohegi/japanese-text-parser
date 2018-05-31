const CURRENT_YEAR = (new Date()).getFullYear();

const footerStyle = {
  marginTop: '15px'
};

const Footer = () => (
  <footer style={footerStyle}>
    {`The Yochimu team ${CURRENT_YEAR}`}
  </footer>
);

export default Footer;
