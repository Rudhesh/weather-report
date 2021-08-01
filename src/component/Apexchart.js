import Chart from 'react-apexcharts'
import React, { Component } from 'react';
import axios from 'axios';

export default class Apexchart extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: []
          }
        },
        series: [{
          name: 'series-1',
          data: []
        }]
      }
    }



    async componentDidMount() {
        const data =[]
       
        await axios.get(`http://climatedataapi.worldbank.org/climateweb/rest/v1/country/annualavg/tas/2020/2039/GBR`)
        .then(Response => {
            console.log("Res", Response);
            for(const obj of Response.data){
                // console.log("obj", obj)
              
               data.push(Math.round(obj.annualData[0]))
              
              
            }
           
            console.log(data)
            let element = []
            for (let i = 2020; i < 2039; i++) {
                element.push(i)
                
            }
            console.log(element)

             this.setState ({
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: element
          }
        },
        series: [{
          name: 'series-1',
          data: data
        }]
      })
    

            
        })
    }


    render() {
      return (
          <div style={{
            // position: "absolute",
            // top: "10%",
            // left: "10%",
            fontSize: "10px"
            
          }}>
        <Chart options={this.state.options} series={this.state.series} type="bar" width={1500} height={520} />
        </div>
      )
    }
  }