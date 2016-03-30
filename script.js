var data = {"labels": ["23 March", "24 March", "25 March", "26 March", "27 March", "28 March", "29 March"], "datasets": [{"languages": [["Java", "XML"], [], [], ["HTML", "JavaScript"], ["JavaScript", "Ruby"], ["JavaScript", "Ruby", "JSON"], ["JavaScript", "Markdown"]], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["58 mins", "0 secs", "0 secs", "0 secs", "1 hr 35 mins", "1 hr 13 mins", "27 mins"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [0.9872222222222222, 0.0, 0.0, 0.005, 1.6266666666666667, 1.2566666666666666, 0.46111111111111114], "label": "Dataset"}]};
var totalTime = "4 hours 20 minutes";
var languages = ["JavaScript", "Java", "Ruby"];
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
