import { MuiThemeProvider } from 'material-ui/styles';
import React, { Component } from 'react'
//import  Button  from '@material-ui/core/Button';
import Navbar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search';

export default class App extends Component{
    render(){
        return(
            <MuiThemeProvider>
           <Navbar/>
           <Search/>
           </MuiThemeProvider>
           
        );
    }
}