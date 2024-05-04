const footerStyle = {
  marginTop: '15px',
  textAlign: 'center',
}

const CURRENT_YEAR = new Date().getFullYear()
const FOOTER_COPY = `The Yochimu Team ${CURRENT_YEAR}`

const Footer = () => <footer style={footerStyle}> {FOOTER_COPY} &copy; </footer>

export default Footer
