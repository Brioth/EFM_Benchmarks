var Benchmarks = require('./Benchmarks.tests');

var inputData_10 = require('./mockdata/MOCK_ASS_10.json');
var inputData_100 = require('./mockdata/MOCK_ASS_100.json');
var inputData_1000 = require('./mockdata/MOCK_ASS_1000.json');

var ASPServices = {
    ASP: "http://localhost:61412/api/assignments"
};

var NodeServices = {
    Node: "http://localhost:3000/assignments"
};

//Benchmarks.runCBenchmark(ASPServices, inputData_10, 1462, "results/benchmarks_ASP_10_1.html");
//Benchmarks.runCBenchmark(ASPServices, inputData_100, 1462, "results/benchmarks_ASP_100_1.html");
//Benchmarks.runCBenchmark(ASPServices, inputData_1000, 1462, "results/benchmarks_ASP_1000_1.html");

//Benchmarks.runCBenchmark(NodeServices, inputData_10, "5cd93ab9f184586224c7dcc5", "results/benchmarks_Node_10_1.1.html");
//Benchmarks.runCBenchmark(NodeServices, inputData_100, "5cd93ab9f184586224c7dcc5", "results/benchmarks_Node_100_1.1.html");
Benchmarks.runCBenchmark(NodeServices, inputData_1000, "5cd93ab9f184586224c7dcc5", "results/benchmarks_Node_1000_1.1.html");
