$(function(){

    var jsNumber = new Gus.JS2.Number();
    jsNumber.Numbers1('#number ol');
    jsNumber.Numbers2('#number ol');
    jsNumber.Numbers3('#number ol');
    jsNumber.Numbers4('#number ol');
    jsNumber.Numbers5('#number ol');
    jsNumber.Numbers6('#number ol');

    var jsString = new Gus.JS2.String();
    jsString.String1('#string ol');

    var jsBoolean = new Gus.JS2.Boolean();
    jsBoolean.boolean1('#boolean ol');

    var es6NewSyntax = new Gus.JS3.NewSytax();
    es6NewSyntax.newLet1('#let ol');
    es6NewSyntax.newLet2('#let ol');
    es6NewSyntax.newLet3('#let ol');
    es6NewSyntax.newLet4('#let ol');
    es6NewSyntax.newLet5('#let ol');
    es6NewSyntax.newLet6('#let ol');
    es6NewSyntax.newConst7('#constant ol');
    es6NewSyntax.jsLambda1('#fatArrow ol');
    es6NewSyntax.jsLambda2('#fatArrow ol');
    es6NewSyntax.jsLambda3('#fatArrow ol');
    es6NewSyntax.jsLambda4('#fatArrow ol');
    es6NewSyntax.jsFuncTestThis('#fatArrow ol');
    es6NewSyntax.jsFuncTestThis1('#fatArrow ol', true);
    es6NewSyntax.jsFuncTestThis2('#fatArrow ol');
    es6NewSyntax.jsDynamicFunction('#dynamicFunction ol');
    es6NewSyntax.jsDefaultParaFunc1('#defaultPara ol');
    es6NewSyntax.jsRestOperator('#rest ol', 123, 'veg', 'meat', 'pasta');
    es6NewSyntax.jsSpreadOperator('#spread ol');
    es6NewSyntax.jsObjectLiteralsEx('#object ol');;
    es6NewSyntax.jsForOfLoop('#forOfLoop ol');
    es6NewSyntax.jsOctalBinary('#octalAndBinary ol');
    es6NewSyntax.jsTemplateLiterals('#temporalLiteral ol');
    es6NewSyntax.jsDestructuring('#destructuring ol');
});