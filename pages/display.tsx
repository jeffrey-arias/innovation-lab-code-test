import React from 'react'
import styled from 'styled-components';
import DogItem from '../components/DogItem';
import NavBar from "../components/navBar";
import { testData } from "./testDogs";
import { DisplayContainer, Title } from '../styles/GlobalStyles';

const WoofContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
`;

const WoofContainerItem = styled.div`
  min-width: calc((100vw - 16px - 70px)/4 );
  background-color: white;
  border: 1px solid black;
  gap: 20px;
`

export default function DisplayItemsPage() {
    return (
        <div>        
            <NavBar />
            <DisplayContainer>
                <Title>Here are your woofs:</Title>
                
                <WoofContainer>
                    {testData.map (dog=>
                        <WoofContainerItem>
                            <DogItem dog={dog} />
                        </WoofContainerItem>
                    )}  
                </WoofContainer>
            </DisplayContainer>

        </div>
    )
}
