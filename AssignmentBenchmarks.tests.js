exports.runCBenchmark = function(services, inputData, testRoute, outputFile){
    var apiBenchmark = require('api-benchmark');
    var fs = require('fs');
    
    var currentIndexPost = 0;
    
    var currentData =  function(){
        return inputData[currentIndexPost++];
    }
    
    var routes = { 
        postRoute: {
            method: 'post',
            route: 'assignments',
            data: currentData
        },
        getAllRoute: {
            method: 'get',
            route: 'assignments/',
            headers: {
                Accept: 'application/json'
            }
        },
        getByIdRoute: {
            method: 'get',
            route: 'assignments/' + testRoute,
            headers: {
                Accept: 'application/json'
            }
        },
        putRoute: {
            method: 'put',
            route: 'assignments/' + testRoute,
            headers: {
                Accept: 'application/json'
            },
            data: {name: "test" }
        }
    }

    apiBenchmark.measure(services, routes, {debug: true, minSamples: inputData.length, maxTime: 600}, function(err, results){
        apiBenchmark.getHtml(results, function(error, html){
            fs.writeFileSync(outputFile, html);
        });
    })
}
