const CURRENT_YEAR = (new Date()).getFullYear();

const footerStyle = {
  marginTop: '15px',
  textAlign: 'center'
};

const Footer = () => (
  <footer style={footerStyle}>
    {`The Yochimu Team ${CURRENT_YEAR}`} &copy;
  </footer>
);

export default Footer;
