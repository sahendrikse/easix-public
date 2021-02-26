import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import FormPropsTextFields from './components/inputTest';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default function Landing() {
  
  return (
    
    <div>
	
		 <Typography component="h1" variant="h2" color="inherit" gutterBottom noWrap>
            Getting Started
         </Typography>
		 
		  <Typography component="subtitle1" color="inherit">
            EASIX offers a lightweight solution for constucting
			and exporting STIX 2.1 visualisations, for use with
			exchanging cyber threat intelligence (CTI). EASIX 
			is an open source tool and those interested	can 
			contribute and ask questions freely.
         </Typography>
	
<FormPropsTextFields />
	
    </div>
	
	
   
  );
}
