// Site-wide functionality to collapse the navbar once a link is clicked
$('.navbar a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});


// Javascript util functions
(function (global) {
    
    var progAlliesJsUtils = {};

    progAlliesJsUtils.getUrlParameter = function (name) {
        console.log("getUrlParameter called for [" + name + "]");

        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    }

    progAlliesJsUtils.insertHtml = function (domSelector, htmlToInsert) {
        console.log("insertHtml called for [" + domSelector + "], [" + htmlToInsert + "]");

        var targetElement = document.querySelector(domSelector);
        targetElement.innerHTML = htmlToInsert;
    };

    progAlliesJsUtils.toHtmlList = function(stringArray) {
        console.log("toHtmlList called for [" + stringArray + "]");

        var htmlString = "";
        for (var i = 0; i < stringArray.length; i++) {
            htmlString += "<li>" + stringArray[i] + "</li>";
        }
        return htmlString;
    }

    progAlliesJsUtils.getRandomSubArray = function (array, noOfElements) {
        console.log("getRandomSubArray called for [" + array + "], [" + noOfElements + "]");

        var randomArray = [];

        for (var i=0; i<noOfElements; i++) {
            // Pick a random index
            let index = Math.floor(Math.random() * array.length);
            console.log("getRandomSubArray got random index [" + index + "]");

            if (!jQuery.isArray(array[index])) {
                // Standard case - the value is not an array, so just use it
                // Add the randomly chosen element from the original array to the randomArray
                randomArray[i] = array[index];
                console.log("getRandomSubArray got element [" + array[index] + "] at [" + index + "]");
            } else {
                // Special case - the value is an array - get a random element from this array and use it
                let subIndex = Math.floor(Math.random() * array[index].length);
                randomArray[i] = array[index][subIndex];
                console.log("getRandomSubArray got element [" + array[index][subIndex] + "] at [" + index + "][" + subIndex + "]");
            }

            // Remove the element from the array
            array.splice(index,1);
            console.log("getRandomSubArray spliced array [" + array + "]");
        }

        return randomArray;
    }

    progAlliesJsUtils.copyTextToClipboard = function (textInputToCopy) {
        console.log("copyTextToClipboard called for [" + textInputToCopy + "]");

        textInputToCopy.select();

        var success = false;
        try {
            success = document.execCommand('copy');
            console.log("executed copy command");
        } catch (err) {
            console.log("Could not copy [" + err + "]");
        }
        return success;
    }

    // Expose utility to the global object
    global.$progAlliesJsUtils = progAlliesJsUtils;

})(window);
