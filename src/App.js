
import React, {Component } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Container, Grid, FormControl, MenuItem, Select, Typography} from '@material-ui/core';
import apikey from './APIKEY';
import moment from 'moment';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      data: [], 
      isLoaded: false,
      APIkey: apikey.apikey,
      selectedValue: '634964,655195,650225,658225',
      dropDownOptions: [
                    {
                      name: 'Kaikki kaupungit',
                      value: '634964,655195,650225,658225',
                    },
                    {
                      name: 'Helsinki',
                      value: '658225',
                    },
                    {
                      name: 'Jyväskylä',
                      value: '655195',
                    },
                    {
                      name: 'Kuopio',
                      value: '650225',
                    },
                    {
                      name: 'Tampere',
                      value: '634964',
                    }
      ], 
     
    };
    
  }

  componentDidMount() {
    
    this.getWeatherData();
  }
  getWeatherData(){
    axios.get(`http://api.openweathermap.org/data/2.5/group?id=${this.state.selectedValue}&units=metric&appid=${this.state.APIkey}`)
        
    .then(res => this.setState(
        {
        data: res.data,
        isLoaded: true
        }
    ))
    .catch(err => console.log(err));
    
  }
  selectChange = (event) => {
    
   this.setState({ selectedValue: event.target.value },()=>{
     this.getWeatherData();
     
   })
  }
  render() {
    const {isLoaded, data, dropDownOptions} = this.state;
    
    if(isLoaded){
      
    return (
      
      <Container style={{backgroundColor:'#F8F9FA'}} >
       <Grid container justify={'center'} align={'center'} style={{backgroundColor:'#FFFFFF',border: '1px solid #E6E6E6'}}>
            <Typography variant="h2" style={{padding:"20px"}}>Säätutka</Typography>
        </Grid>
       
      
      <Grid container justify={'center'} align={'center'} style={{margin:'20px 0 20px 0'}}>
      <FormControl fullWidth style={{textAlign:'left'}}>
          <Select displayEmpty id="sortBy" onChange={this.selectChange} 
                 value={this.state.selectedValue} style={{fontSize:'17px',padding:'10px',backgroundColor:'#FFFFFF',border: '1px solid #E6E6E6',borderRadius:'5px'}}>
                  {dropDownOptions.map(item => (
              <MenuItem value={item.value} key={item.value} style={{fontSize:'17px'}}>
                  {item.name}
              </MenuItem>
                    ))}
            </Select>
            </FormControl>
        </Grid>
        <Grid container justify="space-between" spacing={4}style={{minHeight:'100vh'}}>
        {
          data.list.map((item, index) => {
          
            return (
            <Grid item xs={12} md={6} xl={4} key={index} >
              
                 <Grid container direction="row"
                        style={{backgroundColor:'#FFFFFF',border: '1px solid #E6E6E6',borderRadius:'5px',marginBottom:'10px',padding:'15px'}}>
                   {/* 1st-row */}
                   <Grid container justify='space-between' direction="row" style={{textAlign:'left',padding:'10px'}}>
                   <Grid item >
                   <Grid item>
                      <Typography variant="h3">{item.name}</Typography>
                      </Grid>
                      <Grid item>
                      <Typography style={{textTransform: 'capitalize'}} variant="h5" >{item.weather[0].description}</Typography>
                     
                      </Grid>
                      </Grid>
                      <Grid item >
                        <Grid container direction="row">
                      <Grid item >  
                      <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}alt='weather-icon'/>
                      </Grid>

                      <Grid item> 
                      <Typography variant="h1">{Math.round(item.main.temp)}&nbsp;ºC</Typography>
                      </Grid>
                       </Grid>
                       </Grid>
                    </Grid>
                    {/*   1st-row-end */}
                      <Grid container alignItems="flex-end" justify='space-between' direction="row" style={{textAlign:'left',padding:'10px'}}>
                      <Grid item > 
                      <Typography variant="h4">{moment.unix(item.dt).format("MMM Do")}</Typography>
                      <Typography variant="h5">{moment.unix(item.dt).format("HH:mm")}</Typography>
                      </Grid>
                      <Grid item style={{textAlign:'right'}}> 
                      <Typography variant="h5">Wind:&nbsp;{item.wind.speed}&nbsp;m/s</Typography>
                      <Typography variant="h5">Humidity:&nbsp;{item.main.humidity}&nbsp;%</Typography>
                      <Typography variant="h5">Precipitation:&nbsp;n/a</Typography>
                      </Grid>
                      </Grid>
                </Grid>
                 {/* forecast */}
                  <Grid container direction="row" justify="space-between" alignItems="center">
                  
                    <Grid item xs zeroMinWidth style={{margin:'0 5px 5px 0',backgroundColor:'#FFFFFF',border: '1px solid #E6E6E6', borderRadius:'5px'/* ,margin:'8px' */}}> 
                        <Grid item style={{padding:'10px'}}>
                          <Typography variant="h5">{moment.unix(item.dt).format("HH:mm")}</Typography>
                          <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}alt='weather-icon'/>
                          <Typography variant="h4">{Math.round(item.main.temp)}&nbsp;ºC</Typography>
                        </Grid>
                        <Grid item>
                          <Grid item style={{backgroundColor:'#E5F6FD'}}>
                            <Grid item style={{textAlign:'center',padding:'10px'}}>
                              <Typography variant="h6">{item.wind.speed}&nbsp;m/s</Typography>
                              <Typography variant="h6">{item.main.humidity}&nbsp;%</Typography>
                              <Typography variant="h6">n/a &nbsp;mm</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs zeroMinWidth style={{margin:'0 5px 5px 0',backgroundColor:'#FFFFFF',border: '1px solid #E6E6E6', borderRadius:'5px'/* ,margin:'8px' */}}> 
                        <Grid item style={{padding:'10px'}}>
                          <Typography variant="h5">{moment.unix(item.dt).format("HH:mm")}</Typography>
                          <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}alt='weather-icon'/>
                          <Typography variant="h4">{Math.round(item.main.temp)}&nbsp;ºC</Typography>
                        </Grid>
                        <Grid item>
                          <Grid item style={{backgroundColor:'#E5F6FD'}}>
                            <Grid item style={{textAlign:'center',padding:'10px'}}>
                              <Typography variant="h6">{item.wind.speed}&nbsp;m/s</Typography>
                              <Typography variant="h6">{item.main.humidity}&nbsp;%</Typography>
                              <Typography variant="h6">n/a &nbsp;mm</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs zeroMinWidth style={{margin:'0 5px 5px 0',backgroundColor:'#FFFFFF',border: '1px solid #E6E6E6', borderRadius:'5px'/* ,margin:'8px' */}}> 
                        <Grid item style={{padding:'10px'}}>
                          <Typography variant="h5">{moment.unix(item.dt).format("HH:mm")}</Typography>
                          <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}alt='weather-icon'/>
                          <Typography variant="h4">{Math.round(item.main.temp)}&nbsp;ºC</Typography>
                        </Grid>
                        <Grid item>
                          <Grid item style={{backgroundColor:'#E5F6FD'}}>
                            <Grid item style={{textAlign:'center',padding:'10px'}}>
                              <Typography variant="h6">{item.wind.speed}&nbsp;m/s</Typography>
                              <Typography variant="h6">{item.main.humidity}&nbsp;%</Typography>
                              <Typography variant="h6">n/a &nbsp;mm</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs zeroMinWidth style={{margin:'0 5px 5px 0',backgroundColor:'#FFFFFF',border: '1px solid #E6E6E6', borderRadius:'5px'/* ,margin:'8px' */}}> 
                        <Grid item style={{padding:'10px'}}>
                          <Typography variant="h5">{moment.unix(item.dt).format("HH:mm")}</Typography>
                          <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}alt='weather-icon'/>
                          <Typography variant="h4">{Math.round(item.main.temp)}&nbsp;ºC</Typography>
                        </Grid>
                        <Grid item>
                          <Grid item style={{backgroundColor:'#E5F6FD'}}>
                            <Grid item style={{textAlign:'center',padding:'10px'}}>
                              <Typography variant="h6">{item.wind.speed}&nbsp;m/s</Typography>
                              <Typography variant="h6">{item.main.humidity}&nbsp;%</Typography>
                              <Typography variant="h6">n/a &nbsp;mm</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs zeroMinWidth style={{margin:'0 0 5px 0',backgroundColor:'#FFFFFF',border: '1px solid #E6E6E6', borderRadius:'5px'/* ,margin:'8px' */}}> 
                        <Grid item style={{padding:'10px'}}>
                          <Typography variant="h5">{moment.unix(item.dt).format("HH:mm")}</Typography>
                          <img src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}alt='weather-icon'/>
                          <Typography variant="h4">{Math.round(item.main.temp)}&nbsp;ºC</Typography>
                        </Grid>
                        <Grid item>
                          <Grid item style={{backgroundColor:'#E5F6FD'}}>
                            <Grid item style={{textAlign:'center',padding:'10px'}}>
                              <Typography variant="h6">{item.wind.speed}&nbsp;m/s</Typography>
                              <Typography variant="h6">{item.main.humidity}&nbsp;%</Typography>
                              <Typography variant="h6">n/a &nbsp;mm</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                    </Grid>

                  </Grid>
                </Grid>
                
            );
          })}
        </Grid>
        
      </Container>
     
    );
        }
        else return(
          <Grid container alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}>
          <Grid item><CircularProgress /></Grid>
           
        </Grid>
      
        )
       
  }
}

export default App;
