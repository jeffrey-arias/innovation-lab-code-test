
import React from 'react';
import useLayoutEffect from './useEffectTestFix';

import { mount, render } from 'enzyme';

import NavBar from "./navBar";
import PetsIcon from '@material-ui/icons/Pets';
import { MenuItem }  from '@material-ui/core'
import AboutModal from './aboutModal';

describe('Navigation Bar gets rendered', () => {  
    React.useLayoutEffect = React.useEffect;

    const wrapper = mount(<NavBar />);  
    it('renders the title text', () => {
    expect(render(<NavBar />).text()).toEqual('Woof App');
    }); 
    it('renders icon button', () => {   
        const items = wrapper.find(PetsIcon);
        expect(items).toHaveLength(1);
      });
    it('renders 4 menu items', () => {   
        const items = wrapper.find(MenuItem);
        expect(items).toHaveLength(4);
      });
    it('renders about modal', () => {
        const items = wrapper.find(AboutModal);
        expect(items).toHaveLength(1);
    })

});
