var data = {"labels": ["22 January", "23 January", "24 January", "25 January", "26 January", "27 January", "28 January"], "datasets": [{"languages": [["HTML", "CSS", "C++"], [], ["Ruby", "JavaScript", "Bash"], ["JavaScript", "HTML"], ["JavaScript", "Ruby", "Markdown"], ["JavaScript", "Ruby", "Other"], ["JavaScript", "Rust", "Ruby"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["50 mins", "0 secs", "1 hr 54 mins", "1 hr 5 mins", "3 hrs 19 mins", "6 hrs 16 mins", "5 hrs 58 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.8530555555555556, 0.0, 1.9441666666666666, 1.0883333333333334, 3.345, 6.301944444444445, 6.014444444444444], "label": "Dataset"}]};
var totalTime = "19 hours 32 minutes";
var languages = ["JavaScript", "Ruby", "Rust"];
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
