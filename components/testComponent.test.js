import React from 'react';
import { shallow, mount, render } from 'enzyme';
import TestComponent from './testComponent';

describe('Test Component', () => {
    const wrapper = render(<TestComponent/>).text();
    console.log(wrapper);
    it('should mount in a full DOM', () => {
        expect(mount(<TestComponent />).find('.test').length).toBe(1);
      }); 
    it('shallow renders Navigation Bar without an error', () => {
        expect(shallow(<TestComponent />).contains(<h6>TEST</h6>)).toBe(true);
    })
    it('static renders Navigation Bar without an error', () => {
        expect(render(<TestComponent />).text()).toEqual('TEST');
    })
});
