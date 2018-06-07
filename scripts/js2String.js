(function (ns1, ns2){
    ns2.String = function String(){
        //Private members 
      
        var String1 = function String1(findElem){
            try {
                var html = "<li>\"Harware\".toUpperCase() : " + "Harware".toUpperCase() + "</li>";
                html += "<li>\"Harware\".toLowerCase() : " + "Harware".toLowerCase() + "</li>";
                $(findElem).append(html);
            } catch (error) {
                $(findElem).append("<li>Caught error : " + error + "</li>");
            }
        },
        String2 = function String1(findElem){
            var html = "<li>" + "</div";
        };

        //Public members 
        return {
            String1 : String1
        };
    };


})(window.Gus = window.Gus || {},
    window.Gus.JS2 = window.Gus.JS2 || {} );