import './HomeScreen.css'
import Product from '../components/Product'

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <h1 className="home-screen__title">
        Latest products
      </h1>
      <div className="home-screen__products">
        {/* <Product /> */}
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default HomeScreen
