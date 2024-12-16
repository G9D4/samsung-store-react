
import styled from "styled-components";
import Carousel from "../ui/Carousel";
import ProductItems from "../ui/ProductItems";
import FilterList from "../ui/FilterList";
import { useState } from "react";


const products=[
    { id:"1",type:1, title:'producto 1', price:100, src:"https://images.samsung.com/is/image/samsung/p6pim/pe/sm-s721blbqltp/gallery/pe-galaxy-s24-fe-s721-sm-s721blbqltp-thumb-543769618?$180_180_PNG$"},
    { id:"2",type:1,title:'producto 2', price:130,src:"https://images.samsung.com/is/image/samsung/p6pim/pe/sm-f956bzsvpeo/gallery/pe-galaxy-z-fold6-f956-sm-f956bzsvpeo-thumb-543216135?$180_180_PNG$"},
    { id:"3",type:1,title:'producto 3', price:130,src:"https://images.samsung.com/is/image/samsung/p6pim/pe/sm-f741bzskpeo/gallery/pe-galaxy-zflip6-f741-sm-f741bzskpeo-thumb-543214352?$180_180_PNG$"},
    { id:"4",type:2,title:'producto 3', price:130,src:"https://images.samsung.com/is/image/samsung/p6pim/pe/qn65q65dagxpe/gallery/pe-qled-q60d-qn65q65dagxpe-544280736?$650_519_PNG$"},
    { id:"5",type:3,title:'producto 3', price:130,src:"https://images.samsung.com/is/image/samsung/p6pim/pe/rf32cg5910b1pe/gallery/pe-3door-french-door-large-capacity-with-spacemax-technology-rf32cg5910b1pe-538509120?$650_519_PNG$"},

]

const StyleMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 32px 0;
`
function Home() {
    const [productsFiltered, setProductsFiltered] = useState(products);
    function handleFilter(type) {
        setProductsFiltered( products.filter(x=>x.type==type))
    }
    return (
      <StyleMain>
        <Carousel />
        <FilterList onClickFilter={handleFilter} />
        <ProductItems items={productsFiltered} />
      </StyleMain>
    )
  }
  
  export default Home