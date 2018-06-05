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
        },
        newLet5 = function newLet5(findElem){
            let arrayOfFunctions = [];
            for (var index = 0; index < 2; index++) {
                arrayOfFunctions.push(function() {return index});
            }
            var html = "<div> function invoked in array with closure using var in for :<b>" + arrayOfFunctions[0]() + "</b></div>";
            $(findElem).append(html)
        },
        newLet6 = function newLet6(findElem){
            let arrayOfFunctions = [];
            for (let index = 0; index < 2; index++) {
                arrayOfFunctions.push(function() {return index});
            }
            var html = "<div> function invoked in array with closure using let in for :<b>" + arrayOfFunctions[0]() + "</b></div>";
            $(findElem).append(html)
        },
        newConst7  = function newConst7(findElem){
            const MY_CONST_NUM = 100;
            if (MY_CONST_NUM > 10){
                const MY_CONST_NUM = 10;
            }
            var html = "<div>const MY_CONST_NUM are also block scoped like let :<b>" + MY_CONST_NUM + "</b></div>";
            $(findElem).append(html);
        },
        jsLambda1 = function jsLambda1(findElem){
            let getPrice = () => 11.99;
            let html = "<div> using let getPrice = () => 11.99 lambda sytax with no parameters :<b>" + getPrice() + "</b></div>";
            $(findElem).append(html);
        },
        jsLambda2 = function jsLambda2(findElem){
            let getPrice = (count) => count * 11.99;
            let html = "<div> using let (count) => count * 11.99 lambda sytax with ONE parameter :<b>" + getPrice(2) + "</b></div>";
            $(findElem).append(html);
        },
        jsLambda3 = function jsLambda3(findElem){
            let getPrice = (count, tax) => count * 11.99 * (1 + tax);
            let html = "<div> using let getPrice = (count, tax) => count * 11.99 * (1 + tax) lambda sytax with multiple parameters :<b>" + getPrice(2, 0.2) + "</b></div>";
            $(findElem).append(html);
        },
        jsLambda4 = function jsLambda4(findElem){
            let getPrice = (count, tax) => {
                let tot = count * 11.99 ;
                return tot *= (1 + tax)
            }
            let html = "<div> using lambda sytax with multiple statements must use return :<b>" + getPrice(2, 0.2) + "</b></div>";
            $(findElem).append(html);
        },
        jsFuncTestThis = function jsFuncTestThis(findElem){
            function proc(){
                return this;
            }
            let html = "<div>this :<b>" + proc() + "</b></div>";
            $(findElem).append(html);
        },
        jsFuncTestThis1 = function jsFuncTestThis1(findElem = 'body', listFields = false){
            let invoice = {
                number: 123,
                process: function(){
                    return this;
                }
            }
            let html = "<div>this in invoice.process() :<b>" + invoice.process() + "</b></div>";
            var obj = invoice.process();
            if (listFields){
                for (var key in obj) {
                    html+= "<div>" + key + " : " + obj[key] + "</div>" 
                 }
            }
           
            $(findElem).append(html);
        },

        jsFuncTestThis2 = function jsFuncTestThis2(findElem = 'body', listFields = false){
            let invoice = {
                number: 123,
                process: () => this
            }

            let html = "<div>this in invoice.process() :<b>" + invoice.process() + "</b></div>";
            var obj = invoice.process();
            if (listFields){
                for (var key in obj) {
                    html+= "<div>" + key + " : " + obj[key] + "</div>" ;
                 }
            }
            
            $(findElem).append(html);
        },

        jsDynamicFunction = function jsDynamicFunction(findElem = 'body'){
            var dynFuncGetPrice = new Function("price = 10.09", "count = 2", "return price * count;")
            let html = "<div>DYNAMIC FUNCTIONS - var dynFunc = new Function(\"price = 10.09\", \"count = 2\", \"return price * count;\") :<b>" + dynFuncGetPrice() + "</b></div>";
            $(findElem).append(html);
        },

        jsDefaultParaFunc1 = function jsDefaultParaFunc1(findElem = 'body'){
            var getProduct = function getProduct(prodId = 1000, type = 'woodwork'){
                let html = `<div> Passing undefined to getProduct(undefined, \'SQL Dev\') : prodId = ${prodId}, type = ${type}</div>`;
                $(findElem).append(html);
            };
            getProduct(undefined, 'SQL Dev');
        },

        jsRestOperator = function jsRestOperator(findElem = 'body', prodId, ...categories){
            let html = `<div> using Rest in jsRest(findElem = 'body', prodId, ...categories) : categories instanceof Array = ${categories instanceof Array}</div>`;
            html += `<div> categories = ${categories}</div>`;
            $(findElem).append(html);
        },

        jsSpreadOperator = function jsSpreadOperator(findElem = 'body'){
            let someArray = new Array(...[10,60,30]);
            let html = `<div>Array(...[10,60,30]) find hieghest Math.max(...someArray) : ${Math.max(...someArray)}</div>`;
            $(findElem).append(html);
        }
        
        ;
        // Public members
        return {
            newLet1: newLet1,
            newLet2: newLet2,
            newLet3: newLet3,
            newLet4: newLet4,
            newLet5: newLet5,
            newLet6: newLet6,
            newConst7: newConst7,
            jsLambda1: jsLambda1,
            jsLambda2: jsLambda2,
            jsLambda3: jsLambda3,
            jsLambda4: jsLambda4,
            jsFuncTestThis: jsFuncTestThis,
            jsFuncTestThis1: jsFuncTestThis1,
            jsFuncTestThis2: jsFuncTestThis2,
            jsDynamicFunction: jsDynamicFunction,
            // ES6 does not need define as above
            jsDefaultParaFunc1,
            jsRestOperator,
            jsSpreadOperator
        };
    };

})(window.Gus = window.Gus || {},
    window.Gus.JS3 = window.Gus.JS3 || {});