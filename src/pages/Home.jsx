import Carousel from "../components/home/Carousel";
import ProductItems from "../components/home/ProductItems";
import FilterList from "../components/home/FilterList";
import { products } from "../utils/constants";
import { useSearchParams } from "react-router-dom"
import '../styles/styles.css';



function Home() {
  // FILTERING
  const [searchParams] = useSearchParams();
  const filterBy = searchParams.get("filterBy") || "all";
  let filteredProducts;
  if (filterBy === "all") filteredProducts = products;
  else filteredProducts = products.filter((product) => product.type == filterBy);
  return (
    <main className="lista-productos-main">
      <Carousel />
      <FilterList />
      <ProductItems items={filteredProducts} />
    </main>
  )
}

export default Home