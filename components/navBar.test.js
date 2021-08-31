import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';

import NavBar from "../navBar";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PetsIcon from '@material-ui/icons/Pets';
import { MenuItem, Menu }  from '@material-ui/core'
import AboutModal from './aboutModal';

afterEach(cleanup);

describe('Navigation Bar gets rendered', () => {  
    render(
        <NavBar />
    );
        
    it('renders Navigation Baar', () => {
        expect(renderer.find(AppBar));
    })
});
