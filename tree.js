

function radialtree(){
var width = 960;
var height = 800;
var svg = d3.select(".radialTree").append("svg")
    .attr("width", width)
    .attr("height", height);

var g = svg.append("g")
    .attr("transform", "translate(" + (width / 2 + 40) + "," + (height / 2 + 90) + ")");

var stratify = d3.stratify()
    .parentId(function(d) { return d.id.substring(0, d.id.lastIndexOf(".")); });

var tree = d3.tree()
    .size([360, 200])
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });
var color = d3.scaleOrdinal(d3.schemeCategory10);

d3.csv("data.csv", function(error, data) {
  if (error) throw error;

  var root = tree(stratify(data));

  var link = g.selectAll(".link")
    .data(root.descendants().slice(1))
    .enter().append("path")
      .attr("class", "link")
      .attr("d", function(d) {
        return "M" + project(d.x, d.y)
            + "C" + project(d.x, (d.y + d.parent.y) / 2)
            + " " + project(d.parent.x, (d.y + d.parent.y) / 2)
            + " " + project(d.parent.x, d.parent.y);
      });

  var node = g.selectAll(".node")
    .data(root.descendants())
    .enter().append("g")
      .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
      .attr("class", function(d) {
          if (d.parent == "null") {
              return "nodeparent" //since its root its parent is null
          }
      })
      .attr("transform", function(d) { return "translate(" + project(d.x, d.y) + ")"; });

  node.append("circle")
      .attr("r",3);

  node.append("text")
      .attr("dy", ".31em")
      .attr("fill", function(d,i){return color(i)})
      .attr("x", function(d) {
          return d.x < 180 === !d.children ? 3 : -3;
      })
      .style("text-anchor", function(d) {
          return d.x < 180 === !d.children ? "start" : "end";
      })
      .attr("transform", function(d) {
          return "rotate(" + (d.x < 180 ? d.x - 90 : d.x + 90) + ")";
      })
      // .text(function(d) {
      //     return d.id.substring(d.id.lastIndexOf(".") + 1);
      // })
     .text(function(d) {
          return d.id.substring(d.id.lastIndexOf(".") + 1);
        });
      g.selectAll(".nodeparent").attr("fill",function(d,i){return color(i)})
      .on("click", function(){console.log("afd")});
});

function project(x, y) {
  var angle = (x - 90) / 180 * Math.PI, radius = y;
  return [radius * Math.cos(angle), radius * Math.sin(angle)];
}
};
radialtree();
