import Header from './Header';
import Footer from './Footer';
import Title from './Title';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    <Title copy="よちむ"/>
    {props.children}
    <Footer />
  </div>
)

export default Layout
