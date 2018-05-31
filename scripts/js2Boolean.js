(function(ns1, ns2){
    'use strict'; 
    ns2.Boolean = function Boolean(){
        // private members
        var boolean1 = function boolean1(findElem){
            var strVar = "Hi";
            var html = "<div> Boolean(\"\") :<b>" + window.Boolean("") + "</b></div>";
            html +=  "<div> Boolean(\" \") :<b>" + window.Boolean(" ") + "</b></div>";
            html +=  "<div> Boolean(\"Hello\") :<b>" + window.Boolean("Hello") + "</b></div>";
            html +=  "<div> Boolean(8) :<b>" + window.Boolean(8) + "</b></div>";
            html +=  "<div> Boolean(0) :<b>" + window.Boolean(0) + "</b></div>";
            html +=  "<div> Boolean(null) :<b>" + window.Boolean(null) + "</b></div>";
            html +=  "<div> Boolean(undefined) :<b>" + window.Boolean(undefined) + "</b></div>";
            html +=  "<div> Boolean(NaN) :<b>" + window.Boolean(NaN) + "</b></div>";
            html +=  "<div> typeof !!strVar (used to convert any tyoe to boolean) :<b>" + (typeof !! strVar) + "</b></div>";
            html +=  "<div> !!strVar (used to convert any tyoe to boolean) :<b>" + !! strVar + "</b></div>";
            html +=  "<div> typeof undefined :<b>" + typeof undefined + "</b></div>";
            html +=  "<div> typeof null :<b>" + typeof null + "</b></div>";
            html +=  "<div> undefined == null :<b>" + (undefined == null) + "</b></div>";
 
            $(findElem).append(html);
        }

        // public members 
        return {
            boolean1 : boolean1
        }
    }
    
})(window.Gus = window.Gus || {},
    window.Gus.JS2 = window.Gus.JS2 || {});