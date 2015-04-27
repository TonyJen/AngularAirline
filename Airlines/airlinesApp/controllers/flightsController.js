﻿(function (app) {

    var flightsController = function ($scope) {

        $scope.selectFlight = function (flight) {
            for (var i = 0; i < $scope.flights.length; i++) {

                console.log($scope.flights[i]);
                $scope.flights[i].approved = false;
            }
            console.log(flight);
            flight.approved = !flight.approved;          
        }

        $scope.flights= 
        [ 
            {
                airline:"United", 
                flightNumber: 207, 
                startTime: "13:00", 
                endTime: "15:00", 
                totalDuration: 2, 
                price: 500,
                date: "12/1/2014",
                cities: ["ORD", "LAS"],
                approved: false
            },
            {
                airline:"United", 
                flightNumber: 207, 
                startTime: "13:00", 
                endTime: "15:00", 
                totalDuration: 2, 
                price: 500,
                date: "12/1/2014",
                cities: ["SFO", "LAS"],
                approved: false
            }
        ];
    };
    app.controller("flightsController", ["$scope", flightsController]);
}(angular.module("airlineApp")));