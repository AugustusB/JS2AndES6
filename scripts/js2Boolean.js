(function(ns1, ns2){
    'use strict'; 
    ns2.Boolean = function Boolean(){
        // private members
        var boolean1 = function boolean1(findElem){
            var strVar = "Hi";
            var html = "<li> Boolean(\"\") :<b>" + window.Boolean("") + "</b></li>";
            html +=  "<li> Boolean(\" \") :<b>" + window.Boolean(" ") + "</b></li>";
            html +=  "<li> Boolean(\"Hello\") :<b>" + window.Boolean("Hello") + "</b></li>";
            html +=  "<li> Boolean(8) :<b>" + window.Boolean(8) + "</b></li>";
            html +=  "<li> Boolean(0) :<b>" + window.Boolean(0) + "</b></li>";
            html +=  "<li> Boolean(null) :<b>" + window.Boolean(null) + "</b></li>";
            html +=  "<li> Boolean(undefined) :<b>" + window.Boolean(undefined) + "</b></li>";
            html +=  "<li> Boolean(NaN) :<b>" + window.Boolean(NaN) + "</b></li>";
            html +=  "<li> typeof !!strVar (used to convert any tyoe to boolean) :<b>" + (typeof !! strVar) + "</b></li>";
            html +=  "<li> !!strVar (used to convert any tyoe to boolean) :<b>" + !! strVar + "</b></li>";
            html +=  "<li> typeof undefined :<b>" + typeof undefined + "</b></li>";
            html +=  "<li> typeof null :<b>" + typeof null + "</b></li>";
            html +=  "<li> undefined == null :<b>" + (undefined == null) + "</b></li>";
 
            $(findElem).append(html);
        }

        // public members 
        return {
            boolean1 : boolean1
        }
    }
    
})(window.Gus = window.Gus || {},
    window.Gus.JS2 = window.Gus.JS2 || {});