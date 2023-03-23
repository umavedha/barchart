<template>
  <div id="myChart">
   
  </div>
</template>

<script>
 /* eslint-disable */
import * as d3 from 'd3';
import { svg } from 'd3';
export default {
  name: 'Chart',
  data(){
    return{
     salesData:[{name:'Tata Nexon',value:'9900000'},
                {name:'Baleno',value:'7450000'},
                {name:'Swift',value:'6740000'},
                {name:'Creta',value:'1273000'},
                {name:'MG Hector',value:'2160000'},
                {name:'Verna',value:'1000000'}, 
                {name:'Kwid',value:'470000'}]
    }
  },
  mounted(){
    this.drawChart(this.salesData);
  },
  methods:{
drawChart(data) {
  const margin = { top: 20, right: 20, bottom: 20, left: 40 };
  const width = 1000 - margin.left - margin.right;
  const height = 550 - margin.top - margin.bottom; 
  const svg = d3.select('#myChart')
        .append('svg')
        .attr('width', width)
        .attr('height', height);
   const x = d3.scaleBand()
    .range([0, width])
    .padding(0.1)
    .domain(data.map(function(d) { return d.name; }));

     svg.append('g')
     .attr('transform',`translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x))
    
     const y = d3.scaleLinear()
    .range([height, 0])
    .domain([0, d3.max(data, function(d) { return d.value; })]);

    svg.append('g')
    .attr('transform',`translate(0,${margin.left})`)
    .call(d3.axisLeft(y))


   
}
  }
 
}

</script>
<style scoped lang="scss">

</style>