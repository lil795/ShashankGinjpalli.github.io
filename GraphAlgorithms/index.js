var treeData = [{children: [{children:[{},{},{}]},
    {children:[{children:[{},{}]}]},
    {children:{}},{children: {}},
    {children:[{},{children:[{children:[{},{}]},{}]}]}]

}];


var margin = {top: 30, right: 400, bottom: 20, left: 400},
  width = document.getElementById("traverse").offsetWidth - margin.right - margin.left,
  height = document.getElementById("traverse").offsetHeight - margin.top - margin.bottom;

var i=0, animDuration=400,root;

var tree = d3.layout.tree()
  .size([height, width]);


d3.selection.prototype.moveToFront = function() {  
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};

var svg = d3.select("#traverse").append("svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + (width/2 + 150) + "," + 20+ ")");
  
root= treeData[0];
update(treeData[0]);

function resetTraversal(root){
  d3.selectAll(".node")
    .transition().duration(animDuration)
    .style("stroke","#008080")
    .style("fill","rgb(221, 221, 221)");

}


// from youtube tutorial on treelayout
function update(root) {

  resetTraversal(root);

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
    links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) { d.y = d.depth *100; });


  

  // Declare and append the nodes
  var vertex = svg.append("g").attr("id","nodes").selectAll("g1.node")
    .data(nodes, function(d) {return d.id || (d.id = ++i); })
    .enter().append("circle")
    .attr("class", "node")
    //Root is the highest ID
    .attr("id",function(d){return "node-"+d.id})
    .attr("cx",function(d){return d.x;})
    .attr("cy",function(d){return d.y;})
    .attr("r", 20);

  // Declare and append the links

  var edges = svg.append("g").attr("id","links").selectAll("path.link")
    .data(links, function(d) { return d.target.id; })
    .enter()
    .append("line", "g")
    .attr("class", "link")
    .attr("id",function(d){
      return d.source.id +"->"+ d.target.id;
    })
    .attr('x1', function(d){return d.source.x;})
    .attr('x2',function(d){return d.target.x;})
    .attr('y1',function(d){return d.source.y;})
    .attr('y2',function(d){return d.target.y;});
    

  // moving the nodes to the front so that they overlap the lines
  d3.select("#nodes").moveToFront();
  

}
function visitElement(element,X){
  d3.select("#node-"+element.id)
    .transition().duration(animDuration).delay(animDuration*X)
    .style("fill","#008080").style("stroke","#008080");
}

function dft(){
  resetTraversal();
  var stack=[];
  var X=0;
  stack.push(root);
  while(stack.length!==0){
    var element = stack.pop();
    visitElement(element,X);
    X=X+1;
    if(element.children!==undefined){
      for(var i=0; i<element.children.length; i++){
        stack.push(element.children[element.children.length-i-1]);
      }
    }
  }
}

function bft(){
  resetTraversal();
  var queue=[];
  var X=0;
  queue.push(root);
  while(queue.length!==0){
    var element = queue.shift();
    visitElement(element,X);
    X= X+1;
    if(element.children!==undefined){
      for(var i=0; i<element.children.length; i++){
        queue.push(element.children[i]);
      }
    }
  }
}
