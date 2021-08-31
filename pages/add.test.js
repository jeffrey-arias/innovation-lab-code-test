import React from 'react'
import {  mount } from 'enzyme';

import NavBar from "../components/navBar";
import { DisplayContainer } from '../styles/GlobalStyles';
import AddItem from "./add"
import 'jest-styled-components'


describe('add page gets rendered without errors', () => {  
    const wrapper = mount(<AddItem />);  
    it('renders the NavBar', () => {   
        const items = wrapper.find(NavBar);
        expect(items).toHaveLength(1);
      });
    it('renders the URL input fields', () => {   
        const items = wrapper.find('#input_url');
        expect(items).toHaveLength(1);
      });
    it('renders the caption input fields', () => {   
        const items = wrapper.find('#input_caption');
        expect(items).toHaveLength(1);
      });
    it('renders the Import Dog button', () => {   
        const items = wrapper.find('button#importDogBtn');
        expect(items).toHaveLength(1);
      });
    it('renders the Add Dog button', () => {   
        const items = wrapper.find('button#addDogBtn');
        expect(items).toHaveLength(1);
      });
      
    it('renders StyledComponent DisplayContainer wrapper', () => {
        const wrapper = mount(<AddItem />);
        expect(wrapper.find(DisplayContainer)).toHaveStyleRule('background-color', 'lightgray');
    
    })
});

describe('add page functionalities', () => {  
    const wrapper = mount(<AddItem />);  
    it('renders the Import Dog button', () => {   
        wrapper.find('button#importDogBtn').simulate('click');
        const value = wrapper.find('#input_url').get(0).value;
        expect(value).not.toBe('');

      });
});