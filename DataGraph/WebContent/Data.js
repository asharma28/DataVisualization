/**
 * 
 */
    function DataGraph()
    {
    	 //Data
        var data_values = [5, 10, 30, 8, 45, 24, 16, 55, 60, 45, 32, 18, 11, 7];
                //Create an SVG element
                var svg = d3.select("body").append("svg").attr({
                    "width": 450,
                    "height": 400
                });
        //Create an SVG element
        var bars = svg.selectAll("rect").data(data_values).enter().append("rect").attr("width", "25").attr("height", function(d) {
                   return d * 5;
               });
bars.attr("fill","blue");
bars.attr("x", function(d, i) {
                return i * 30;
            })
    }
       

