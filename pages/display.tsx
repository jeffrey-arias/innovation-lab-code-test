import React, {useState} from 'react'
import styled from 'styled-components';
import DogItem from '../components/DogItem';
import NavBar from "../components/navBar";
import { testData } from "./testDogs";
import { DisplayContainer, Title } from '../styles/GlobalStyles';
import { GetStaticProps } from "next";
import useDetectDevice from "../hooks/useDetectDevice";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import getDogs from "../pages/api/getDogs";
import { AlternateEmailRounded } from '@material-ui/icons';

interface IProps {
    isMobileDevice?: boolean;
}

export interface DisplayableDog {
  url: string;
  caption: string;
  mediaType: string;
  id: string;
}

export const WoofContainer = styled.div<IProps>`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
  ${props => {
    if (props.isMobileDevice === true ) return `
        grid-template-columns: auto;
        gap: 0;  
    `
  }}
`;

export const WoofContainerItem = styled.div<IProps>`
  width: calc((100vw - 16px - 70px)/4 );
  background-color: white;
  border: 1px solid black;
  gap: 20px;
  ${props => {
    if (props.isMobileDevice === true ) return `
        min-width: calc(100vw - 16px - 20px);
        margin-bottom: 10px;
        margin-left: 10px ;
        margin-right: 10px;
    `
  }}
`
export const FilterContainer = styled.div<IProps>`
  width: 100%;
  margin-bottom: 20px;
  ${props => {
    if (props.isMobileDevice === true ) return `
       
    `
  }}
`

type PropTypes = {
  dogs?: any
}

type DogStaticProps = {
  dog: DisplayableDog
};
/**
 * This page displays all items that are fetched from the DB.
 * @returns React.Element
 * @props dogs, contains the dogs to display
 */
export default function DisplayItemsPage({dogs}: PropTypes) {
    const { isMobileDevice } = useDetectDevice();
    const dogItems = dogs && dogs.length > 0 ? dogs : testData;

    const [displayableItems, setDisplayableItems] = useState(dogItems);

    const handleFilter = (event) => {
      const filter = event.target.value;
      if (filter === 'all') {
        setDisplayableItems(dogItems);
      } else {
        setDisplayableItems(dogItems.filter((dog: DisplayableDog) => dog.mediaType === filter));
      }
      
    }

    return (
        <div>        
            <NavBar />
            <DisplayContainer>
                <Title>Here are your woofs:</Title>
                <FormControl variant="outlined">
                <FilterContainer>
                <InputLabel id="demo-simple-select-outlined-label">Filter by</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue="all"
                    onChange={handleFilter}
                    label="Filter by:"                    
                  >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="image">Images</MenuItem>
                    <MenuItem value="video">Videos</MenuItem>
                  </Select>
                  </FilterContainer>
              </FormControl> 
                <WoofContainer isMobileDevice={isMobileDevice} >
                    {displayableItems.map ((dog: DisplayableDog) =>
                        <WoofContainerItem isMobileDevice={isMobileDevice} key={dog.id+"wci"}>
                            <DogItem dog={dog} key={dog.id} />
                        </WoofContainerItem>
                    )}  
                </WoofContainer>
            </DisplayContainer>

        </div>
    )
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
    // const dogs = getDogs();
    return {
      props: {
        dogs: {}
      },
    };
  };    