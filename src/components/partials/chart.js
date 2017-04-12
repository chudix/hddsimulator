var Chart = require('chart.js');

import {scheduler} from '../../models';

var chartModel = {
    index: -1,

    data:[],

    addPoint:(coor) => {
        chartModel.data.push(coor);
    },

    stepsToData:(steps) => {
        chartModel.data = [];
        steps.forEach((step, index) => {
            console.log(index);
            chartModel.addPoint({x: step.requirement.value, y: - index*2});
        });
    },
    construct: (vnode) => {
        return new Chart(vnode.instance.dom,
                         {
                             type: 'line',
                             data: {
                                 datasets:[
                                     {data: chartModel.data,
                                      lineTension:0,
                                      fill: false
                                     }
                                 ]
                             },

                             options: {
                                 scales: {
                                     xAxes: [{
                                         ticks: {
                                             max: 511,
                                             min: 0,
                                             step: 10
                                         },
                                         type: 'linear',
                                         position: 'bottom'
                                     }]
                                 },
                             }
                         });


    }
}

var chartComponent = {
    oninit: (vnode) => {
        console.log(vnode.attrs.results);
    },
    onupdate: (vnode) => {
        chartModel.stepsToData(vnode.attrs.results);
        chartModel.construct(vnode);
    },
    view: (vnode) => {
        return m('canvas[width=400][height=400]');
    }
}

export default chartComponent