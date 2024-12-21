
import styled from "styled-components";
import Carousel from "../components/Carousel";
import ProductItems from "../components/ProductItems";
import FilterList from "../components/FilterList";
import { products } from "../utils/constants";
import { useSearchParams } from "react-router-dom"

const StyleMain = styled.main`
    display: flex;
    flex-direction: column;
    gap: 32px;
`
function Home() {
  // FILTERING
  const [searchParams] = useSearchParams();
  const filterBy = searchParams.get("filterBy") || "all";
  let filteredProducts;
  if (filterBy === "all") filteredProducts = products;
  else filteredProducts = products.filter((product) => product.type == filterBy);
  return (
    <StyleMain>
      <Carousel />
      <FilterList />
      <ProductItems items={filteredProducts} />
    </StyleMain>
  )
}

export default Home