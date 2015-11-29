var data = {"labels": ["23 November", "24 November", "25 November", "26 November", "27 November", "28 November", "29 November"], "datasets": [{"languages": [["JavaScript", "Ruby", "YAML"], ["Ruby", "JavaScript", "Rust"], ["Ruby", "Rust", "JavaScript"], ["Ruby", "Rust", "ERB"], ["Ruby", "Rust", "Python"], ["Rust", "JavaScript", "Markdown"], ["Markdown"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["5 hrs 43 mins", "4 hrs 36 mins", "4 hrs 21 mins", "4 hrs 57 mins", "6 hrs 21 mins", "6 hrs 26 mins", "9 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [5.746388888888889, 4.650833333333333, 4.388055555555556, 5.010555555555555, 6.413611111111111, 6.461111111111111, 0.15583333333333332], "label": "Dataset"}]};
var totalTime = "32 hours 49 minutes";
var languages = ["Ruby", "Rust", "JavaScript"];
var ctx = document.getElementById("chart").getContext("2d");
var myLineChart = new Chart(ctx).Line(data, {
  tooltipTemplate: function(valuesObject){
    var label = valuesObject.label;
    var idx = data.labels.indexOf(label);
    var result = data.datasets[0].time[idx];
    if (data.datasets[0].languages[idx].length !== 0)
      result += " [" + data.datasets[0].languages[idx].join(", ") + "]"
    return result;
  }
});
document.getElementById("summary").innerHTML = "I have written code for " + totalTime + " in the last week in mostly " + languages.join(", ") + ".";
