import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export const HighChartsStock = () => {

  const options = {
    accessibility: {
        enabled: false
    },
  
    time: {
        useUTC: false
    },
  
    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M'
        }, {
            count: 5,
            type: 'minute',
            text: '5M'
        }, {
            type: 'all',
            text: 'All'
        }],
        inputEnabled: false,
        selected: 0
    },
  
    title: {
        text: 'Live random data'
    },
  
    exporting: {
        enabled: false
    },
  
    series: [{
        name: 'Bid data',
        type: 'line',
        step: 'left',
        lineCap:'sqaure',
        data: (function () {
            // generate an array of random data
            const data = [],
                time = (new Date()).getTime();
  
            for (let i = -150; i <= 0; i += 1) {
                data.push([
                    time + i * 2000,
                    Math.round(Math.random() * 2)
                ]);
            }
            return data;
        }())
    },{
      name: 'Ask data',
      type: 'line',
      step: 'left',
      lineCap:'sqaure',
      data: (function () {
          // generate an array of random data
          const data = [],
              time = (new Date()).getTime();

          for (let i = -150; i <= 0; i += 1) {
              data.push([
                  time + i * 2000,
                  Math.round(Math.random() * 10)
              ]);
          }
          return data;
      }())
  }]
  }


  return (
    <div style={{width:600,height:500}}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
}
