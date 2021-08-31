import React from 'react'
import styled from 'styled-components';
import DogItem from '../components/DogItem';
import NavBar from "../components/navBar";
import { testData } from "./testDogs";
import { DisplayContainer, Title } from '../styles/GlobalStyles';
import { GetStaticProps } from "next";
import useDetectDevice from "../hooks/useDetectDevice";
import getDogs from "../pages/api/getDogs";

interface IProps {
    isMobileDevice?: boolean;
}

export interface DisplayableDog {
  url: string;
  caption: string;
  type: string;
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
  min-width: calc((100vw - 16px - 70px)/4 );
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
    return (
        <div>        
            <NavBar />
            <DisplayContainer>
                <Title>Here are your woofs:</Title>   
                <WoofContainer isMobileDevice={isMobileDevice} >
                    {dogItems.map ((dog: DisplayableDog) =>
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