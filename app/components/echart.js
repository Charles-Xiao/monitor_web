var $ = require('jquery');
var React = require('react');
var echarts = require('echarts');
var EChart = echarts.init(document.getElementById('echart'));

EChart.setOption({
    title: { text: 'HK金价趋势图 --- ECharts' },
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    xAxis: {
      data: [],
      minInterval: 1,
      boundaryGap: false,
      type: 'category'
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      max: 600,
      interval: 50
    },
  series: [{
    name: '价格(HKD/g)',
    type:'line',
    smooth:true,
    itemStyle: {
      normal: {
        color: 'rgb(255, 70, 131)'
      }
    },
    areaStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgb(255, 158, 68)'
        }, {
          offset: 1,
          color: 'rgb(255, 70, 131)'
        }])
      }
    }
  }]
});


var url = 'http://ec2-52-220-140-213.ap-southeast-1.compute.amazonaws.com:8080/api/v1/golds/prices'

fetch(url, {
  method: 'get',
  mode: 'cors'
}).then(function (response) {
  return response.json().then(function(json) {
    console.log(json.cn_prices);

    EChart.setOption({
      xAxis: { data: json.dates },
      series: [{
        data: json.cn_prices
      }]
    });

  });
});

