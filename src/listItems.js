import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
   <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Getting Started" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="New Project" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Import STIX 2.0" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Export STIX 2.0" />
    </ListItem>
    </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader><strong>STIX Domain Objects</strong></ListSubheader>
    
	<ListItem dense button> 
      <ListItemText primary="Attack Pattern" />
    </ListItem>
	<ListItem dense button> 
      <ListItemText primary="Campaign" />
    </ListItem>
	<ListItem dense button> 
      <ListItemText primary="Course of Action" />
    </ListItem>
	<ListItem dense button> 
      <ListItemText primary="Grouping" />
    </ListItem>
	<ListItem dense button> 
      <ListItemText primary="Identity" />
    </ListItem>
	<ListItem dense button> 
      <ListItemText primary="Indicator" />
    </ListItem>
	<ListItem dense button> 
      <ListItemText primary="Infrastructure" />
    </ListItem>
	<ListItem dense button> 
      <ListItemText primary="Intrusion Set" />
    </ListItem>
	<ListItem dense button> 
      <ListItemText primary="Location" />
    </ListItem>
	<ListItem dense button> 
      <ListItemText primary="Malware" />
    </ListItem>
	<ListItem dense button> 
      <ListItemText primary="Malware Analysis" />
    </ListItem>
	<ListItem dense button> 
      <ListItemText primary="Note" />
    </ListItem>
	<ListItem dense button> 
      <ListItemText primary="Observed Data" />
    </ListItem>
	<ListItem dense button> 
      <ListItemText primary="Opinion" />
    </ListItem>
	<ListItem dense button> 
      <ListItemText primary="Report" />
    </ListItem>
	<ListItem dense button> 
      <ListItemText primary="Threat Actor" />
    </ListItem>
	<ListItem dense button> 
      <ListItemText primary="Tool" />
    </ListItem>
	<ListItem dense button> 
      <ListItemText primary="Vulnerability" />
    </ListItem>
   
    <ListSubheader><strong>STIX Relationship Objects</strong></ListSubheader>
  
    <ListItem dense button> 
      <ListItemText primary="Relationship" />
    </ListItem>
	<ListItem dense button> 
      <ListItemText primary="Sighting" />
    </ListItem>
     
  </div>
);
