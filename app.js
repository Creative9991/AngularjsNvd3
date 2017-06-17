var app = angular.module('myApp', ['nvd3']);

app.controller('MainCtrl', function($scope) {
  $scope.options = {
            chart: {
                type: 'pieChart',
                height: 500,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                duration: 500,
                labelThreshold: 0.01,
                labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                }
            }
        };

        $scope.data = [
            {
                key: "Asia",
                y: 59.69
            },
            {
                key: "Africa",
                y: 16.36
            },
            {
                key: "Europe",
                y: 9.94
            },
            {
                key: "North America",
                y: 7.79
            },
            {
                key: "South America",
                y: 5.68
            },
            {
                key: "Australia",
                y: 0.54
            },
            {
                key: "Antarctica",
                y: 0.00001
            }
        ];
});
