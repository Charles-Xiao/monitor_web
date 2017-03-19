var $ = require('jquery');
var React = require('react');
var echarts = require('echarts');
var EChart = echarts.init(document.getElementById('echart'));

EChart.setOption({
    title: { text: 'ECharts 入门示例' },
    tooltip: {},
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});


var url = 'http://ec2-52-220-140-213.ap-southeast-1.compute.amazonaws.com:8080/api/v1/golds/prices'

fetch(url, {
  method: 'get',
  mode: 'cors'
}).then(function (res) {
  console.log(res);

  EChart.setOption({
    xAxis: { data: data.status },
    series: [{
      name: '价格',
      data: data.cn_prices
    }]
  });

});

