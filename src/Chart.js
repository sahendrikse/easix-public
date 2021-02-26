import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

export default function Landing() {
  const theme = useTheme();

  return (
    
     <div>
         <Typography component="h1" variant="h3" color="inherit" noWrap><strong>
            Getting Started
          </strong></Typography>
        </div>
   
  );
}
