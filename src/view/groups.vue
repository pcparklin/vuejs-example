<style type="text/css">
.c3-line {
    stroke-width: 0px;
}
</style>

<template>
<div>
  <h3>This is the groups graph of funds</h3>
  <div id="chart"></div>
  <div id="tooltip" style="position:'absolute';visibility:hidden;">Hide & Seek</div>
</div>
</template>

<script type="text/javascript">
var c3 = require("c3"),
    d3 = require("d3"),
    Rainbow = require("rainbowvis.js")

var rainbow = new Rainbow()
rainbow.setSpectrum('#de0524', '#76FF79')
rainbow.setNumberRange(0, 99)

export default {
  mounted () {
    this.$http.get('groups.json').then((response) => {
      var groups = response.data.groups,
          number_of_blocks = response.data.x_ticks.length - 1

      var points = ['data', [response.data.max_y]]
      for (var i = 0; i < number_of_blocks; i++) {
        points.push([0])
      }

      var chart = c3.generate({
        bindto: '#chart',
        data: {
          columns: [ points ],
        },
        point: {r: 0},
        axis: {
          x: {
            tick: {
              format: function(x) { return response.data.x_ticks[x]; },
              culling: false,
            },
          },
        },
        legend: {
          show: false
        },
        tooltip: {
          show: false
        }
      })

      var tooltip = d3.select("#tooltip")
        .style("left", chart.internal.x(5) + chart.internal.margin.left + "px")
        .style("top", chart.internal.y(response.data.max_y/2) + chart.internal.margin.top + "px")
        .style("position", "absolute")

      for (var i = 0; i < number_of_blocks; i++)
        for (var j = 0; j < number_of_blocks; j++) {
          chart.internal.svg.append("rect")
            .attr('fill', '#' + rainbow.colourAt(j*number_of_blocks+i))
            .attr("x", chart.internal.x(groups[i*number_of_blocks+j].left) + chart.internal.margin.left)
            .attr("y", chart.internal.y(groups[i*number_of_blocks+j].upper) + chart.internal.margin.top)
            .attr("width", chart.internal.x(groups[i*number_of_blocks+j].left+1) - chart.internal.x(groups[i*number_of_blocks+j].left))
            .attr("height", chart.internal.y(groups[i*number_of_blocks+j].lower) - chart.internal.y(groups[i*number_of_blocks+j].upper))
            .attr("index", groups[i*number_of_blocks+j].index)
            .attr("color", '#' + rainbow.colourAt(j*number_of_blocks+i))
            .style("stroke", "black")
            .on('mouseover', function() {
              tooltip.html("<span style='color:" + d3.select(this).attr("color") + "'>Colour: " + d3.select(this).attr("color") + "</span>")
                .style("visibility", "visible")
            })
            .on('mouseout', function() {
              tooltip.style("visibility", "hidden")
            })
        }
    }, (response) => {
    })
  },
  date () {}
}
</script>
