(function (ns1, ns2){
    ns2.String = function String(){
        //Private members 
      
        var String1 = function String1(findElem){
            try {
                var html = "<div>\"Harware\".toUpperCase() : " + "Harware".toUpperCase() + "</div>";
                html += "<div>\"Harware\".toLowerCase() : " + "Harware".toLowerCase() + "</div>";
                $(findElem).append(html);
            } catch (error) {
                $(findElem).append("<div>Caught error : " + error + "</div>");
            }
        },
        String2 = function String1(findElem){
            var html = "<div>" + "</div";
        };

        //Public members 
        return {
            String1 : String1
        };
    };


})(window.Gus = window.Gus || {},
    window.Gus.JS2 = window.Gus.JS2 || {} );