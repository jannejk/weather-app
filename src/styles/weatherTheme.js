import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const weatherTheme = createMuiTheme({
  
    typography: {
     "fontFamily": "\"Arial\", \"Helvetica\", sans-serif",
    
     h1: {
      
      "fontSize": '35px',
      "fontWeight": "500",
      "color": '#262626'
    },
     h2: {
      "fontSize": '31px',
      "fontWeight": "500",
      "color": '#262626'
    },
    h3: {
      "fontWeight": "500",
      "fontSize": '25px',
      "color": '#262626'
    },
    h4:{
      "fontSize": '20px',
      "color": '#262626',
      "fontWeight": "500",
    },
    h5:{
      "fontSize": '17px',
      "color": '#70757A'
    },
    h6:{
      "fontSize": '13px',
      "color": '#70757A'
    },
    }
    
  });

  export default weatherTheme