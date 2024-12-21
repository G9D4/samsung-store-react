/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import { filters } from "../../utils/constants";
import '../../styles/styles.css';


function FilterListItem(props){
    return <li className="filter-list_item">
        <button className="filter-list_item-button" onClick={()=>props.onClickFilter(props.value)} >{ props.children }</button>
    </li>
}

function FilterList(){
    const [searchParams,setSearchParams]=useSearchParams();
    function handleClick(value){
        searchParams.set("filterBy",value);
        setSearchParams(searchParams);
    }

    return(
        <ul className="filter-list">
                {filters.map(filter=>
                    <FilterListItem key={filter.id} value={filter.value} onClickFilter={handleClick}>{filter.label}</FilterListItem>
                )}
        </ul>
    )
}

export default FilterList;