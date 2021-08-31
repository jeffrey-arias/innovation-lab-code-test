import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Modal from '@material-ui/core/Modal';
import AboutModal from './aboutModal';

describe('Navigation Bar gets rendered', () => {
    const wrapper = mount((
        <AboutModal show={true}/>
      ));  
    it('renders modal', () => {
        const items = wrapper.find(Modal);
        expect(items).toHaveLength(1);
    })

});
