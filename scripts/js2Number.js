
(function(ns1, ns2){
    "use strict"
    ns2.Number = function Number(){
        //Private members
        var Numbers1 = function (findElem){
            var quantity = 2;
            var price = 0.99;
            $(findElem).append("<div>quantity * price = " + (quantity*price) + "</div>");
        },

        Numbers2 = function(findElem){
            var price = "0.99";
            $(findElem).append("<div>typeof \"0.99\" = " + typeof price + "</div>" );
        },

        Numbers3 = function(findElem){
            try {
                var price = 3.2e4;
                $(findElem).append("<div>3.2e4 = " + 3.2e4 + "</div>" );
                throw "error1"
            } catch (error) {
                $(findElem).append("<div>Caught error : " + error + "</div>");
            }
            
        },
        Numbers4 = function(findElem){
            try {
                var html = "<div>window.Number.MAX_VALUE = " + window.Number.MAX_VALUE+ "</div>";
                html += "<div>window.Number.MIN_VALUE = " + window.Number.MIN_VALUE + "</div>"
                $(findElem).append(html);
                
            } catch (error) {
                $(findElem).append("<div>Caught error : " + error + "</div>");
            }
            
        },

        Numbers5 = function(findElem){
            var html = "<div>window.Number.MAX_VALUE * 2 = " + (window.Number.MAX_VALUE * 2) + "</div>";
            html += "<div>window.Number.MAX_VALUE * -2 = " + (window.Number.MAX_VALUE * -2) + "</div>";
            $(findElem).append(html);
        },

        Numbers6 = function(findElem){
            var count,
            price = 3.99,
            html = "<div>typeof NaN = " + (typeof NaN) + "</div>";
            html += "<div>When count is undefined price/count = " + (price/count) + "</div>";
            html += "<div>When count is undefined isNaN(price/count) = " + isNaN(price/count) + "</div>";
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