import React from 'react'
import fire from './fire';
import './user.css';
import Chart from "react-apexcharts";
import { CsvToHtmlTable } from 'react-csv-to-table';
import { CSVReader } from 'react-papaparse'
import * as d3 from 'd3'
import hh from '../assets/400_households.csv'
import {GroupBy} from 'aggregate_groupby_js'
import products from '../assets/400_products.csv'
import transactions from '../assets/400_transactions.csv'
import axios from 'axios';
const buttonRef1 = React.createRef()
const buttonRef2 = React.createRef()
const buttonRef3 = React.createRef()
class UserLogin extends React.Component
{
    
        
        state = {
            spsh : [],
            success:false,
            login : true,
            register:false,
            username:'',
            un:'',
            pwd:'',
            cpwd:'',
            email:'',
            password:'',
            hhh:[],
            prod: [],
            trans : [],
            arr:[],
            initial : [],
            final_data : [],
            lineGraph:{
                series: [{
                    name: "Desktops",
                    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
                }],
                options: {
                  chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                      enabled: false
                    }
                  },
                  dataLabels: {
                    enabled: false
                  },
                  stroke: {
                    curve: 'straight'
                  },
                  title: {
                    text: 'Product Trends by Month',
                    align: 'left'
                  },
                  grid: {
                    row: {
                      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                      opacity: 0.5
                    },
                  },
                  xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                  }
                }
            }
        }

        componentDidMount = ()=>{
           
          }
          handleOpenDialog1 = (e) => {
            if (buttonRef1.current) {
              buttonRef1.current.open(e)
            }
          }
        
          handleOnFileLoad1 = (data) => {
            console.log('---------------------------')
            console.log(data)
            var raja = []
            console.log(data.length);
            console.log(data[0].data.length);
            for(let i=0;i<data.length;i++)
            {
                let x = {};
                for(let j=0;j<data[0].data.length;j++)
                {
                    let a = data[0].data[j]
                    let b = data[i].data[j]
                    if(b == undefined)
                    {
                        x[a.trim()] = b;
                    }
                    else{
                        x[a.trim()] = b.trim();
                    }
                    
                }
                raja.push(x);
            }   
            console.log(raja);
            axios.post('http://localhost:5000/data/hh',{data:raja})
            .then(res => {
                console.log("sent data to node js");
            })
            console.log('---------------------------')
          }
        
          handleOnError1 = (err, file, inputElem, reason) => {
            console.log(err)
          }
        
          handleOnRemoveFile1 = (data) => {
            console.log('---------------------------')
            console.log(data)
            console.log('---------------------------')
          }
        
          handleRemoveFile1 = (e) => {
            // Note that the ref is set async, so it might be null at some point
            if (buttonRef1.current) {
              buttonRef1.current.removeFile(e)
            }
          }
        // *********************************************
        handleOpenDialog2 = (e) => {
            if (buttonRef2.current) {
              buttonRef2.current.open(e)
            }
          }
        
          handleOnFileLoad2 = (data) => {
            console.log('---------------------------')
            console.log(data)
            var raja = []
            console.log(data.length);
            console.log(data[0].data.length);
            for(let i=0;i<data.length;i++)
            {
                let x = {};
                for(let j=0;j<data[0].data.length;j++)
                {
                    let a = data[0].data[j]
                    let b = data[i].data[j]
                    if(b == undefined)
                    {
                        x[a.trim()] = b;
                    }
                    else{
                        x[a.trim()] = b.trim();
                    }
                    
                }
                raja.push(x);
            }   
            console.log(raja);
            axios.post('http://localhost:5000/data/pr',{data:raja})
            .then(res => {
                console.log("sent data to node js");
            })
            console.log('---------------------------')
          }
        
          handleOnError2 = (err, file, inputElem, reason) => {
            console.log(err)
          }
        
          handleOnRemoveFile2 = (data) => {
            console.log('---------------------------')
            console.log(data)
            console.log('---------------------------')
          }
        
          handleRemoveFile2 = (e) => {
            // Note that the ref is set async, so it might be null at some point
            if (buttonRef2.current) {
              buttonRef2.current.removeFile(e)
            }
          }
          //**************************************** 
          handleOpenDialog3 = (e) => {
            if (buttonRef3.current) {
              buttonRef3.current.open(e)
            }
          }
        
          handleOnFileLoad3 = (data) => {
            console.log('---------------------------')
            console.log(data)
            var raja = []
            console.log(data.length);
            console.log(data[0].data.length);
            for(let i=0;i<data.length;i++)
            {
                let x = {};
                for(let j=0;j<data[0].data.length;j++)
                {
                    let a = data[0].data[j]
                    let b = data[i].data[j]
                    if(b == undefined)
                    {
                        x[a.trim()] = b;
                    }
                    else{
                        x[a.trim()] = b.trim();
                    }
                    
                }
                raja.push(x);
            }   
            console.log(raja);
            axios.post('http://localhost:5000/data/tr',{data:raja})
            .then(res => {
                console.log("sent data to node js");
            })
            console.log('---------------------------')
          }
        
          handleOnError3 = (err, file, inputElem, reason) => {
            console.log(err)
          }
        
          handleOnRemoveFile3 = (data) => {
            console.log('---------------------------')
            console.log(data)
            console.log('---------------------------')
          }
        
          handleRemoveFile3 = (e) => {
            // Note that the ref is set async, so it might be null at some point
            if (buttonRef3.current) {
              buttonRef3.current.removeFile(e)
            }
          }
    handleRead = (e)=>{
        this.setState({[e.target.name]:e.target.value});
        console.log(this.state);
    }
    handleLogin = ()=>{
        console.log(this.state);
        
        if(this.state.username!='' && this.state.password!='')
        {
            var raj = 0;
            var ref = fire.database().ref("user");
            ref.orderByChild("un").equalTo(this.state.username).on("child_added", function(snapshot) {
                console.log(snapshot.key);
                    raj = 1;
                    console.log('mama');
          
              });
              console.log(raj);
             if(raj == 1)
             {
                this.setState({login:false,success:true})
             }
              console.log("hi ra nithin");

              
        }
        else{
            if(this.state.username=='')
            {
                alert('UserName is required');
            }
            else{
                alert('Password is required');
            }
        }
    }
    handleRegister = ()=>{
        if(this.state.un!='' && this.state.pwd==this.state.cpwd && this.state.email!='')
        {
            this.setState({login:!this.state.login});
            fire.database().ref().child('user').push(
                this.state,
                err=>
                {
                    if(err)
                    {
                        console.log(err);
                    }
                }
            )
            this.setState({login:true,success:false,register:false});
        }
    }
    render()
    {
        return(
        <div>
         {this.state.success? <div style={{marginTop:'10px',marginLeft:'20px',marginRight:'20px'}}>
                                <div style={{justifyContent:'space-between',display:'flex',fontSize:'19px',fontFamily:'cursive'}} >
                                    <h1>Hi {this.state.username}🦁</h1>
                                    <button onClick={()=>this.setState({login:true,success:false,register:false})}>Logout</button>
                                </div>
                         <div class="row">
                             <div class='col-md-4'>
                            <CSVReader
                                ref={buttonRef1}
                                onFileLoad={this.handleOnFileLoad1}
                                onError={this.handleOnError1}
                                noClick
                                noDrag
                                onRemoveFile={this.handleOnRemoveFile1}
                            >
                                {({ file }) => (
                                <aside
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom: 10,
                                    }}
                                >
                                    <button
                                    type='button'
                                    onClick={this.handleOpenDialog1}
                                    style={{
                                        borderRadius: 0,
                                        marginLeft: 0,
                                        marginRight: 0,
                                        width: '40%',
                                        paddingLeft: 0,
                                        paddingRight: 0
                                    }}
                                    >
                                    Browse file
                                    </button>
                                    <div
                                    style={{
                                        borderWidth: 1,
                                        borderStyle: 'solid',
                                        borderColor: '#ccc',
                                        height: 45,
                                        lineHeight: 2.5,
                                        marginTop: 5,
                                        marginBottom: 5,
                                        paddingLeft: 13,
                                        paddingTop: 3,
                                        width: '60%'
                                    }}
                                    >
                                    {file && file.name}
                                    </div>
                                    <button
                                    style={{
                                        borderRadius: 0,
                                        marginLeft: 0,
                                        marginRight: 0,
                                        paddingLeft: 20,
                                        paddingRight: 20
                                    }}
                                    onClick={this.handleRemoveFile1}
                                    >
                                    Remove
                                    </button>
                                </aside>
                                )}
                            </CSVReader>
                            </div>
                            <div class='col-md-4'>
                            <CSVReader
                                ref={buttonRef2}
                                onFileLoad={this.handleOnFileLoad2}
                                onError={this.handleOnError2}
                                noClick
                                noDrag
                                onRemoveFile={this.handleOnRemoveFile2}
                            >
                                {({ file }) => (
                                <aside
                                    style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    marginBottom: 10,
                                   
                                    }}
                                >
                                    <button
                                    type='button'
                                    onClick={this.handleOpenDialog2}
                                    style={{
                                        borderRadius: 0,
                                        marginLeft: 0,
                                        marginRight: 0,
                                        width: '40%',
                                        paddingLeft: 0,
                                        paddingRight: 0
                                    }}
                                    >
                                    Browse file
                                    </button>
                                    <div
                                    style={{
                                        borderWidth: 1,
                                        borderStyle: 'solid',
                                        borderColor: '#ccc',
                                        height: 45,
                                        lineHeight: 2.5,
                                        marginTop: 5,
                                        marginBottom: 5,
                                        paddingLeft: 13,
                                        paddingTop: 3,
                                        width: '60%'
                                    }}
                                    >
                                    {file && file.name}
                                    </div>
                                    <button
                                    style={{
                                        borderRadius: 0,
                                        marginLeft: 0,
                                        marginRight: 0,
                                        paddingLeft: 20,
                                        paddingRight: 20
                                    }}
                                    onClick={this.handleRemoveFile2}
                                    >
                                    Remove
                                    </button>
                                </aside>
                                )}
                            </CSVReader>
                            </div>
                            <div class='col-md-4'>
                            <CSVReader
                                ref={buttonRef3}
                                onFileLoad={this.handleOnFileLoad3}
                                onError={this.handleOnError3}
                                noClick
                                noDrag
                                onRemoveFile={this.handleOnRemoveFile3}
                            >
                                {({ file }) => (
                                <aside
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginBottom: 10,
                                    }}
                                >
                                    <button
                                    type='button'
                                    onClick={this.handleOpenDialog3}
                                    style={{
                                        borderRadius: 0,
                                        marginLeft: 0,
                                        marginRight: 0,
                                        width: '40%',
                                        paddingLeft: 0,
                                        paddingRight: 0
                                    }}
                                    >
                                    Browse file
                                    </button>
                                    <div
                                    style={{
                                        borderWidth: 1,
                                        borderStyle: 'solid',
                                        borderColor: '#ccc',
                                        height: 45,
                                        lineHeight: 2.5,
                                        marginTop: 5,
                                        marginBottom: 5,
                                        paddingLeft: 13,
                                        paddingTop: 3,
                                        width: '60%'
                                    }}
                                    >
                                    {file && file.name}
                                    </div>
                                    <button
                                    style={{
                                        borderRadius: 0,
                                        marginLeft: 0,
                                        marginRight: 0,
                                        paddingLeft: 20,
                                        paddingRight: 20
                                    }}
                                    onClick={this.handleRemoveFile3}
                                    >
                                    Remove
                                    </button>
                                </aside>
                                )}
                            </CSVReader>
                            </div>
                            </div>
                            <div class="row">
                                    <div>
                                    <Chart
                                        options={this.state.lineGraph.options}
                                        series={this.state.lineGraph.series}
                                        type="bar"
                                        width="500"
                                        />
                                    </div>
                            </div>
             </div> : <div></div> }
        { this.state.login ?
            <div id="login">
            <h3 class="text-center text-white pt-5">Login form</h3>
            <div class="container">
                <div id="login-row" class="row justify-content-center align-items-center">
                    <div id="login-column" class="col-md-6">
                        <div id="login-box" class="col-md-12">
                            <form id="login-form" class="form">
                                <h3 class="text-center text-info">Login</h3>
                                <div class="form-group">
                                    <label for="username" class="text-info">Username:</label><br/>
                                    <input onChange={(e)=>this.handleRead(e)} style={{fontSize:'16px'}} type="text" value={this.state.username} name="username" id="username" class="form-control"/>
                                </div>
                                <div class="form-group">
                                    <label for="password" class="text-info">Password:</label><br/>
                                    <input onChange={(e)=>this.handleRead(e)} value={this.state.password} type="password" name="password" id="password" class="form-control"/>
                                </div>
                                <br/>
                                <div class="form-group">
                                    <input onClick={()=>this.handleLogin()} style={{fontSize:'16px'}} type="button" name="submit" class="btn btn-info btn-md" value="Login"/>
                                </div>
                                <br/>
                                <div id="register-link" class="text-right">
                                    <a style={{cursor:'pointer'}} onClick={()=>this.setState({login:false,register:true,sucess:false})} class="text-info">Register here</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>: <div> </div>

         }
         {
             this.state.register ? <div>
                 <div id="register">
        <h3 class="text-center text-white pt-5">Registration form</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form">
                            <h3 class="text-center text-info">Register</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br/>
                                <input onChange={(e)=>this.handleRead(e)} style={{fontSize:'16px'}} type="text" name="un" id="username" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="email" class="text-info">Email:</label><br/>
                                <input onChange={(e)=>this.handleRead(e)} style={{fontSize:'16px'}} type="email" name="email" id="email" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br/>
                                <input onChange={(e)=>this.handleRead(e)} type="password" name="pwd" id="password" class="form-control"/>
                            </div>
                            
                            <div class="form-group">
                                <label for="cpassword" class="text-info">Confirm Password:</label><br/>
                                <input onChange={(e)=>this.handleRead(e)} type="password" name="cpwd" id="cpassword" class="form-control"/>
                            </div>
                            
                            <div style={{justifyContent:'space-between',display:'flex'}} class="form-group">
                                <input onClick={()=>this.handleRegister()} style={{fontSize:'16px'}} type="button" name="submit" class="btn btn-info btn-md" value="Register"/>
                                <input onClick={()=>this.setState({login:true,register:false,success:false})} style={{fontSize:'16px'}} type="button" name="submit" class="btn btn-info btn-md" value="<- Back to Login Page"/>
                            </div>
                        
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
                 </div> : <div> </div>
         }
    </div>    
        )
    }
}
export default UserLogin;