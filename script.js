var data = {"labels": ["22 October", "23 October", "24 October", "25 October", "26 October", "27 October", "28 October"], "datasets": [{"languages": [[], [], [], [], ["JavaScript", "Ruby"], ["Ruby", "Rust", "JavaScript"], ["Ruby", "JavaScript", "YAML"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["0 minutes", "0 minutes", "0 minutes", "0 minutes", "3 hrs 31 mins", "4 hrs 48 mins", "3 hrs 4 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.0, 0.0, 0.0, 0.0, 3.584722222222222, 4.862777777777778, 3.1380555555555554], "label": "Dataset"}]};
var totalTime = "11 hours 35 minutes";
var languages = ["Ruby", "JavaScript", "Rust"];
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
