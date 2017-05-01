window.onload = function flowData () {

  const flowReportId = '1/'
  const url = 'http://ckjacobson.com/maxicom/reports/flow/' + flowReportId

  $.ajax({
    url: url
  }).done(function(data) {
    console.log('The returned object is:', data)

    if ( whoIs === 'people/') {
      const results = data.report_data;
      const resultsLength = results.length;
      const flowReportFirst = [];

      for (let i = 0; i < resultsLength; i++) {
        flowReportFirst.push(results[i].timestamp)
      }

      console.log('flowReportFirst', flowReportFirst);
    }
    else {
      console.log('the person is:', results)
    }
  })
}
