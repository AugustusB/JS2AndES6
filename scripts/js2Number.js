
(function(ns1, ns2){
    "use strict"
    ns2.Number = function Number(){
        //Private members
        var Numbers1 = function (findElem){
            var quantity = 2;
            var price = 0.99;
            $(findElem).append("<li>quantity * price = " + (quantity*price) + "</li>");
        },

        Numbers2 = function(findElem){
            var price = "0.99";
            $(findElem).append("<li>typeof \"0.99\" = " + typeof price + "</li>" );
        },

        Numbers3 = function(findElem){
            try {
                var price = 3.2e4;
                $(findElem).append("<li>3.2e4 = " + 3.2e4 + "</li>" );
                throw "error1"
            } catch (error) {
                $(findElem).append("<li>Caught error : " + error + "</li>");
            }
            
        },
        Numbers4 = function(findElem){
            try {
                var html = "<li>window.Number.MAX_VALUE = " + window.Number.MAX_VALUE+ "</li>";
                html += "<li>window.Number.MIN_VALUE = " + window.Number.MIN_VALUE + "</li>"
                $(findElem).append(html);
                
            } catch (error) {
                $(findElem).append("<li>Caught error : " + error + "</li>");
            }
            
        },

        Numbers5 = function(findElem){
            var html = "<li>window.Number.MAX_VALUE * 2 = " + (window.Number.MAX_VALUE * 2) + "</li>";
            html += "<li>window.Number.MAX_VALUE * -2 = " + (window.Number.MAX_VALUE * -2) + "</li>";
            $(findElem).append(html);
        },

        Numbers6 = function(findElem){
            var count,
            price = 3.99,
            html = "<li>typeof NaN = " + (typeof NaN) + "</li>";
            html += "<li>When count is undefined price/count = " + (price/count) + "</li>";
            html += "<li>When count is undefined isNaN(price/count) = " + isNaN(price/count) + "</li>";
            $(findElem).append(html);
        };

        //Public members 
        return {
            Numbers1 : Numbers1,
            Numbers2 : Numbers2,
            Numbers3 : Numbers3,
            Numbers4 : Numbers4,
            Numbers5 : Numbers5,
            Numbers6 : Numbers6
        };

    };

})(window.Gus = window.Gus || {}, 
    window.Gus.JS2 = window.Gus.JS2 || {});