import Chart from 'react-apexcharts'
import React, { Component } from 'react';
import axios from 'axios';

export default class GdpChart extends Component {
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
        const data1 =[]
        const data2 =[]
       
        await axios.get(`http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/bccr_bcm2_0/pr/2020/2039/deu`)
        .then(Response => {
            console.log("Res", Response.data[0]);
            for(const obj of Response.data[0].monthVals){
                console.log("obj", obj)
              
               data1.push(Math.round(obj))
              
              
            }
            console.log(data1)

            for(const obj of Response.data[1].monthVals){
                console.log("obj", obj)
              
               data2.push(Math.round(obj))
              
              
            }
            console.log(data2)

            // for (let i = 0; i < Response.data[0].monthVals; i++) {
            //     const ele = Response.data[0].monthVals[i];
            //     console.log(ele)
            //     data.push(Math.round(ele))
            // }
            // console.log(data)



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
           
          name: 'Temperature',
          data: data1
        },
        {
           
            name: 'Temperature',
            data: data2
          }],
          
      })
    

            
        })
    }


    render() {
      return (
          <div style={{
            // position: "absolute",
            // bottom: "10%",
            // left: "10%",
            fontSize: "10px"
            
          }}>
        <Chart style={{
           
            fontSize: "10px"
            
          }}  options={this.state.options} series={this.state.series}  type="line" width={1500} height={520} />
        </div>
      )
    }
  }