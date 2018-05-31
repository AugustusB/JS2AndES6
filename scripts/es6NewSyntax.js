(function(ns1, ns2){
    'use strict';
    ns2.NewSytax = function NewSytax(){
        // Private members
        var newLet1 = function newLet1(findElem){
            var html = "<div> productId called before var declaration :<b>" + productId + "</b></div>";
            $(findElem).append(html);
            var productId = 12;
        },
        newLet2 = function newLet2(findElem){
            var productId = 12;
            var html = "<div> productId called after var declaration :<b>" + productId + "</b></div>";
            $(findElem).append(html);
        },
        newLet3 = function newLet3(findElem){
            let productId = 13;
            var html = "<div> productId called after let declaration (no hoisting??) :<b>" + productId + "</b></div>";
            $(findElem).append(html);
    
        },
        newLet4 = function newLet4(findElem){
            let productId = "outer block";
            {
                let productId = "inner block";                
            }
            var html = "<div> productId called with let block scope :<b>" + productId + "</b></div>";
            $(findElem).append(html);
        } ;
        // Public members
        return {
            newLet1: newLet1,
            newLet2: newLet2,
            newLet3: newLet3,
            newLet4: newLet4
        };
    };

})(window.Gus = window.Gus || {},
    window.Gus.JS3 = window.Gus.JS3 || {});