var data = {"labels": ["10 November", "11 November", "12 November", "13 November", "14 November", "15 November", "16 November"], "datasets": [{"languages": [["Ruby", "JavaScript", "TeX"], ["JavaScript", "JSON", "Other"], ["JavaScript", "Markdown", "JSON"], ["Ruby", "TeX", "JavaScript"], ["HTML", "Rust", "Markdown"], ["Rust", "Markdown", "C++"], []], "pointHighlightFill": "#fff", "fillColor": "rgba(151,187,205,0.2)", "pointHighlightStroke": "rgba(151,187,205,1)", "time": ["3 hrs 7 mins", "3 hrs 13 mins", "1 hr 24 mins", "5 hrs 55 mins", "3 hrs 46 mins", "1 hr 44 mins", " 0 secs"], "pointColor": "rgba(151,187,205,1)", "strokeColor": "rgba(151,187,205,1)", "pointStrokeColor": "#fff", "data": [3.156111111111111, 3.2180555555555554, 1.4036111111111111, 5.936944444444444, 3.7977777777777777, 1.7752777777777777, 0.0], "label": "Dataset"}]};
var totalTime = "19 hours 17 minutes";
var languages = ["JavaScript", "Ruby", "TeX"];
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
