<template>
  <div ref="myData">
   
  </div>
</template>

<script>
 /* eslint-disable */
import * as d3 from 'd3';
export default {
  name: 'BarChart',
  data(){
    return{
      data: [
        { name: 'Item 1', value: 20 },
        { name: 'Item 2', value: 40 },
        { name: 'Item 3', value: 10 },
        { name: 'Item 4', value: 30 },
        { name: 'Item 5', value: 80 },
        { name: 'Item 6', value: 90 },
        { name: 'Item 7', value: 60 },
        { name: 'Item 8', value: 70 },
        
      ],
      margin: { top: 30, right: 30, bottom: 30, left: 30 },
      width: 400,
      height: 400,
    }
  },
  mounted(){
 this.createChart();
  },
  methods:{
createChart(){
  const svg = d3.select(this.$refs.myData)
        .append('svg')
        .attr('width', this.width)
        .attr('height', this.height);
  
   const x = d3.scaleBand()
        .range([this.margin.left, this.width - this.margin.right])
        .padding(0.1)
        .domain(this.data.map((d) => d.name));

   const y = d3.scaleLinear()
        .range([this.height - this.margin.bottom, this.margin.top])
        .domain([0, d3.max(this.data, (d) => d.value)]);

        svg.append('g')
        // .attr('transform', `translate(0,${this.height - this.margin.bottom})`)
        .call(d3.axisBottom(x));

      svg.append('g')
        // .attr('transform', `translate(${this.margin.left},0)`)
        .call(d3.axisLeft(y));

      // svg.selectAll('.bar')
      //   .data(this.data)
      //   .enter()
      //   .append('rect')
      //   .attr('class', 'bar')
      //   .attr('x', (d) => x(d.name))
      //   .attr('y', (d) => y(d.value))
      //   .attr('width', x.bandwidth())
      //   .attr('height', (d) => this.height - this.margin.bottom - y(d.value));
}
  }
 
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>