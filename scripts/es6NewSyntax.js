(function(ns1, ns2){
    'use strict';
    ns2.NewSytax = function NewSytax(){
        // Private members
        var newLet1 = function newLet1(findElem){
            var html = "<li> productId called before var declaration :<b>" + productId + "</b></li>";
            $(findElem).append(html);
            var productId = 12;
        },
        newLet2 = function newLet2(findElem){
            var productId = 12;
            var html = "<li> productId called after var declaration :<b>" + productId + "</b></li>";
            $(findElem).append(html);
        },
        newLet3 = function newLet3(findElem){
            let productId = 13;
            var html = "<li> productId called after let declaration (no hoisting??) :<b>" + productId + "</b></li>";
            $(findElem).append(html);
    
        },
        newLet4 = function newLet4(findElem){
            let productId = "outer block";
            {
                let productId = "inner block";                
            }
            var html = "<li> productId called with let block scope :<b>" + productId + "</b></li>";
            $(findElem).append(html);
        },
        newLet5 = function newLet5(findElem){
            let arrayOfFunctions = [];
            for (var index = 0; index < 2; index++) {
                arrayOfFunctions.push(function() {return index});
            }
            var html = "<li> function invoked in array with closure using var in for :<b>" + arrayOfFunctions[0]() + "</b></li>";
            $(findElem).append(html)
        },
        newLet6 = function newLet6(findElem){
            let arrayOfFunctions = [];
            for (let index = 0; index < 2; index++) {
                arrayOfFunctions.push(function() {return index});
            }
            var html = "<li> function invoked in array with closure using let in for :<b>" + arrayOfFunctions[0]() + "</b></li>";
            $(findElem).append(html)
        },
        newConst7  = function newConst7(findElem){
            const MY_CONST_NUM = 100;
            if (MY_CONST_NUM > 10){
                const MY_CONST_NUM = 10;
            }
            var html = "<li>const MY_CONST_NUM are also block scoped like let :<b>" + MY_CONST_NUM + "</b></li>";
            $(findElem).append(html);
        },
        jsLambda1 = function jsLambda1(findElem){
            let getPrice = () => 11.99;
            let html = "<li> using let getPrice = () => 11.99 lambda sytax with no parameters :<b>" + getPrice() + "</b></li>";
            $(findElem).append(html);
        },
        jsLambda2 = function jsLambda2(findElem){
            let getPrice = (count) => count * 11.99;
            let html = "<li> using let (count) => count * 11.99 lambda sytax with ONE parameter :<b>" + getPrice(2) + "</b></li>";
            $(findElem).append(html);
        },
        jsLambda3 = function jsLambda3(findElem){
            let getPrice = (count, tax) => count * 11.99 * (1 + tax);
            let html = "<li> using let getPrice = (count, tax) => count * 11.99 * (1 + tax) lambda sytax with multiple parameters :<b>" + getPrice(2, 0.2) + "</b></li>";
            $(findElem).append(html);
        },
        jsLambda4 = function jsLambda4(findElem){
            let getPrice = (count, tax) => {
                let tot = count * 11.99 ;
                return tot *= (1 + tax)
            }
            let html = "<li> using lambda sytax with multiple statements must use return :<b>" + getPrice(2, 0.2) + "</b></li>";
            $(findElem).append(html);
        },
        jsFuncTestThis = function jsFuncTestThis(findElem){
            function proc(){
                return this;
            }
            let html = "<li>this :<b>" + proc() + "</b></li>";
            $(findElem).append(html);
        },
        jsFuncTestThis1 = function jsFuncTestThis1(findElem = 'body', listFields = false){
            let invoice = {
                number: 123,
                process: function(){
                    return this;
                }
            }
            let html = "<li>this in invoice.process() :<b>" + invoice.process() + "</b></li>";
            var obj = invoice.process();
            if (listFields){
                for (var key in obj) {
                    html+= "<li>" + key + " : " + obj[key] + "</li>" 
                 }
            }
           
            $(findElem).append(html);
        },

        jsFuncTestThis2 = function jsFuncTestThis2(findElem = 'body', listFields = false){
            let invoice = {
                number: 123,
                process: () => this
            }

            let html = "<li>this in invoice.process() :<b>" + invoice.process() + "</b></li>";
            var obj = invoice.process();
            if (listFields){
                for (var key in obj) {
                    html+= "<li>" + key + " :<b> " + obj[key] + "</b></li>" ;
                 }
            }
            
            $(findElem).append(html);
        },

        jsDynamicFunction = function jsDynamicFunction(findElem = 'body'){
            var dynFuncGetPrice = new Function("price = 10.09", "count = 2", "return price * count;")
            let html = "<li>DYNAMIC FUNCTIONS - var dynFunc = new Function(\"price = 10.09\", \"count = 2\", \"return price * count;\") :<b>" + dynFuncGetPrice() + "</b></li>";
            $(findElem).append(html);
        },

        jsDefaultParaFunc1 = function jsDefaultParaFunc1(findElem = 'body'){
            var getProduct = function getProduct(prodId = 1000, type = 'woodwork'){
                let html = `<li> Passing undefined to getProduct(undefined, \'SQL Dev\') :<b> prodId = ${prodId}, type = ${type}</b></li>`;
                $(findElem).append(html);
            };
            getProduct(undefined, 'SQL Dev');
        },

        jsRestOperator = function jsRestOperator(findElem = 'body', prodId, ...categories){
            let html = `<li> using Rest in jsRest(findElem = 'body', prodId, ...categories) :<b> categories instanceof Array = ${categories instanceof Array}</b></li>`;
            html += `<li> <b>categories = ${categories}</b></li>`;
            $(findElem).append(html);
        },

        jsSpreadOperator = function jsSpreadOperator(findElem = 'body'){
            let someArray = new Array(...[10,60,30]);
            let html = `<li>Array(...[10,60,30]) find hieghest Math.max(...someArray) :<b> ${Math.max(...someArray)}</b></li>`;
            someArray = [...[2,5,]];
            html += `<li>someArray = [...[,,]] :<b> ${someArray}</b></li>`;
            html += `<li>Matt.max(...\'123567432\') :<b> ${Math.max(...'123567432')}</b></li>`;
            let strArr = ['W', ...'ABCD', 'N'];
            html += `<li>strArr = [\'W\', ...\'ABCD\', \'N\'] :<b> ${strArr}</b></li>`;
            $(findElem).append(html);
        },

        jsObjectLiteralsEx = function jsObjectLiteralsEx(findElem = 'body'){
            let price = 10.99;
            let type = "wood";
            let dept = 'department'; 
            let funct1 = "demoFunction";
            var productView = {
                price,
                type,
                [dept] : 'Fridge',
                [funct1]() {
                    return 'In demoFunction.'
                }
            };
            let html = '';
            for (var key in productView) {
                if (productView.hasOwnProperty(key)) {
                    html += `<li>object leteral using extension :<b> ${key} : ${productView[key]} </b></li>`;
                }
            };

            html += `<li>productView.demoFunction() :<b> ${productView.demoFunction()} </b></li>`;
            $(findElem).append(html);
        },

        jsForOfLoop = function jsForOfLoop(findElem = 'body'){
            let categories = ['shorts', 'shirts', 'hats'];
            let html = '<li>for (var item of categories) itterables like array :<b>';
            for (let item of categories){
                html += ` ${item}, `;
            }
            html += `</b></li>`;
            categories = [,,];
            html += `<li>for (var item of categories) where itterables = [,,] : <b>`
            for (let item of categories){
                html += ` ${item}, `;
            }
            categories = 'ABCDEF'
            html += `</b></li>`;
            html += `<li>for (var item of categories) where itterables = \"${categories}\" : <b>`
            for (let item of categories){
                html += ` ${item}, `;
            }
            html += `</b></li>`;
            $(findElem).append(html);
        },

        jsOctalBinary = function jsOctalBinary(findElem){
            let html = '';
            html += `<li>Octal 0o10 : <b>${0o10}</b></li>`;
            html += `<li>Binary 0b10 : <b>${0b10}</b></li>`
            $(findElem).append(html);
        },
        jsTemplateLiterals = function jsTemplateLiterals(findElem){
            let html= '';
            let myNumber = 9876;
            html += `<li>String interpolartion in template literals using \${myNumber} : <b> ${myNumber}</b></li>`
            html += `<li>String interpolartion in template literals using \${\'INV-\' + myNumber} : <b> ${'INV-' + myNumber}</b></li>`
            var myFunc = function myFunc(msg){
                let numb1 = 111111;
                html += msg;
            }
            let numb1 = 777777;
            myFunc(`<li>String interpolartion occurs before function call : <b> ${numb1}</b></li>`);
            $(findElem).append(html);
        },
        jsDestructuring = function jsDestructuring(findElem){
            let html = '';
            let names = ['Jim', 'Bob', 'Harry'];
            let [name1, name2, name3] = names;
            html += `<li>Destructuring <code class="language-javascript">let names = [\'Jim\', \'Bob\', \'Harry\']; let [name1, name2, name3] = names;</code> name2 : <b> ${name2}</b></li>`;
            let [name99, , name100] = names;
            html += `<li>Destructuring <em>skipping values</em> <code class="language-javascript">let names = [\'Jim\', \'Bob\', \'Harry\']; let [name99, , name100] = names;</code> name100: <b> ${name100}</b></li>`;
            let [name88, ...name77] = names;
            html += `<li>Destructuring and <em>Rest</em> <code class="language-javascript">let names = [\'Jim\', \'Bob\', \'Harry\']; let [name88, ...name77] = names;</code> name77: <b> ${name77}</b></li>`;
            
            let [namew, namex, namey, namez = 'Gus'] = names;
            html += `<li>Destructuring and <em>Defaults </em><b>(result - namez:  ${namez}</b>) <pre><code class="language-javascript">
    let names = [\'Jim\', \'Bob\', \'Harry\']; 
    let [namew, namex, namey, namez = '\Gus\'] = names;
    html += \`Destructuring and <em>Defaults </em> <b>(result - namez: \${namez}</b>)\`
    </code></pre> 
    </li>`;
            
            let reviewSalary = function reviewSalary([low,average],high='88000'){
                html += `<li>Destructuring in 
                            <em>function parameters</em><b> 
                            (result - average : ${average})</b></br>`;
            }
            reviewSalary(['32000','50000'])

            html += 
            `<pre><code class="language-javascript">
    let reviewSalary = function reviewSalary([low,average],high='88000'){
        html += \`Destructuring in <em>function parameters</em><b> (result - average : \${average}\`)</b>;
    }
    reviewSalary(['32000','50000'])
            </code></pre>`
          
            let [age1, age2] = [,]
            html += `<li>Destructuring <em>edgecase1</em> :<b>(result - age1 : ${age1}, age2 : ${age2})
            </b><pre><code class="language-javascript">
    let [age1, age2] = [,]
    html += Destructuring <em>edgecase1</em> : (result - age1 : \${age1}, age2 : \${age2})
            </pre></code>
            </li>` 
            $(findElem).append(html);

            html += `<li>Destructuring <em>edgecase2 array of arrays</em> :<b>(results -`
            for (let [name, surname] of [['Jim', 'Smith'], ['Jack', 'Charlton']]) {
               html += ` name:${name}, surmane:${surname}, `;
            }
            html += `)</b><pre><code class="language-javascript">
    html += \`Destructuring <em>edgecase2 array of arrays</em> :(results -\` 
    for (let [name, surname] of [['Jim', 'Smith'], ['Jack', 'Charlton']]) {
        html += \` name:\${name}, surmane:\${surmane}, \`;
    }
    html += \`)\`</pre></code>
    </li>` 

            $(findElem).append(html);
        };
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
            jsSpreadOperator,
            jsObjectLiteralsEx,
            jsForOfLoop,
            jsOctalBinary,
            jsTemplateLiterals,
            jsDestructuring
        };
    };

})(window.Gus = window.Gus || {},
    window.Gus.JS3 = window.Gus.JS3 || {});