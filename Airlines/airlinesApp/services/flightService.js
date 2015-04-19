﻿(function () {
    var flightService = function () {
        var flightFactory = {};
        flightFactory.getFlights = function () {
           return [{
                       airline: "United",
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
                       airline: "United",
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
          }
    };
    app.factory("flightService", flightService);
}(angular.module("airlineApp")));