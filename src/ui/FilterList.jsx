/* eslint-disable react/prop-types */
import styled from "styled-components";

const filters=[
    {id:1,label:'Mobile'},
    {id:2,label:'TV & Audio'},
    {id:3,label:'Electrodomesticos'},
    {id:4,label:'Tecnología AI'}
]

const StyleFilterList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
const StyleFilterListItem = styled.li`
    align-content: center;
    text-align: center;
    cursor: pointer;

`
const StyleFilterListButton = styled.button`
    padding: 4px 12px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    border-radius: 24px;
    border-color: none;
    background: none;
    
    border-color: transparent;
    &:hover{
         background-color: black;
        color: white;
    }
`

function FilterListItem(props){
    return <StyleFilterListItem>
        <StyleFilterListButton onClick={()=>props.onClickFilter(props.id)} >{ props.children }</StyleFilterListButton>
    </StyleFilterListItem>
}

function FilterList({onClickFilter}){
    return(
        <StyleFilterList>
            {filters.map(filter=>
                <FilterListItem key={filter.id} id={filter.id} onClickFilter={onClickFilter}>{filter.label}</FilterListItem>
            )}
        </StyleFilterList>
    )
}

export default FilterList;