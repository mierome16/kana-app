import React from 'react'
import {Bar, Pie } from 'react-chartjs-2'

export default props => {

  ///Pie Chart ////
  var datapie = {
    datasets: [{
      data: [30, 70],
      backgroundColor: [
        'red',
        'grey',
      ]
      }],
    labels: [
      'Your restaurant',
      'Others',
    ],
    }

  /// Bar Chart ///
  var databar = {
    labels: [
      'Menu items'
    ],
    datasets: [
      {
        label:'Pad Thai',
        backgroundColor: 'yellow',
        data: [25],
      },
      {
        label:'Pad sew',
        backgroundColor: 'blue',
        data: [23],
      },
      {
        label:'Fried Rice',
        backgroundColor: 'green',
        data: [17]
      },
      {
        label: 'Crab Rangoon',
        backgroundColor: 'orange',
        data: [11],
      },
    ]
  }

  var optionsbar = {
    scales: {
      xAxes: [{
        barPercentage: .7,
        categoryPercentage: 1,
        barThickness: 'flex',
        minBarLength: 2,
        gridLines: {
          offsetGridLines: true
        }
      }],
      yAxes:[{
        gridLines: {
          zeroLineColor: "black",
          zeroLineWidth: 2
        },
        ticks: {
          min: 0,
          max: 30,
          stepSize: 5
        }
      }] 
    }
  }

  return (
    <div style={{height: '700px', width: '700px'}}>
      <div style={{marginTop: '20px', marginLeft: '25%', width: '400px', height: '1px', background: 'black'}}></div>
      <div>
        <h1 style={{textAlign:'center'}}>Your market share in a 5 miles radius</h1>
        <Pie
        data={datapie}
        width={100}
        height={100}
        options={{ maintainAspectRatio: false }}/>
      </div>
      <div style={{marginTop: '20px', marginLeft: '25%', width: '400px', height: '1px', background: 'black'}}></div>
      <div>
        <h1 style={{textAlign:'center'}}>Your most sold items today by number of orders</h1>
          <Bar
          data={databar}
          options={optionsbar}/>
      </div>
      <div style={{marginTop: '20px', marginLeft: '25%', width: '400px', height: '1px', background: 'black'}}></div>
    </div>
  )
}