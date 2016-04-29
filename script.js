var data = {"labels": ["22 April", "23 April", "24 April", "25 April", "26 April", "27 April", "28 April"], "datasets": [{"languages": [[], ["Other", "GAS", "C"], ["Bash", "Makefile", "Batchfile"], ["Bash", "Ruby", "JavaScript"], ["Ruby", "Bash", "JavaScript"], ["Ruby", "JavaScript", "Logos"], ["Ruby", "JavaScript", "JSON"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["0 secs", "1 hr 28 mins", "4 hrs 51 mins", "1 hr 20 mins", "3 hrs 47 mins", "2 hrs 10 mins", "38 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.0, 1.475, 4.865277777777778, 1.3711111111111112, 3.8513888888888888, 2.2191666666666667, 0.6611111111111111], "label": "Dataset"}]};
var totalTime = "14 hours 26 minutes";
var languages = ["Bash", "Ruby", "JavaScript"];
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
