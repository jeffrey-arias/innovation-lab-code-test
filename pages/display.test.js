import React from 'react'
import { mount } from 'enzyme';

import DogItem from '../components/DogItem';
import NavBar from "../components/navBar";
import { testData } from "./testDogs";
import { DisplayContainer } from '../styles/GlobalStyles';
import DisplayItemsPage, { WoofContainer, WoofContainerItem } from "./display"

import 'jest-styled-components'


describe('add page gets rendered without errors', () => {  
    const wrapper = mount(<DisplayItemsPage dogs={testData}/>);  
    it('renders the NavBar', () => {   
        const items = wrapper.find(NavBar);
        expect(items).toHaveLength(1);
      });
    it('renders the test data', () => {   
        const items = wrapper.find(DogItem);
        expect(items).toHaveLength(4);
      });
});

// describe('renders Styled Components wrappers correcrtly', () => {  
//   const wrapper = mount(<DisplayItemsPage dogs={testData}/>);    
//   it('renders StyledComponent DisplayContainer wrapper', () => {
//     expect(wrapper.find(DisplayContainer)).toHaveStyleRule('background-color', 'lightgray');

//   })
//   it('renders StyledComponent DisplayContainer wrapper', () => {
//     expect(wrapper.find(WoofContainer)).toHaveStyleRule('display', 'grid');
//   })
//   it('renders StyledComponent DisplayContainer wrapper', () => {
//     expect(wrapper.find(WoofContainerItem)).toHaveStyleRule('background-color', 'white');

//   })
// });