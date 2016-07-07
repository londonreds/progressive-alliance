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


$(function () { // Same as document.addEventListener("DOMContentLoaded"...

    console.log(window);
    console.log("Main DOMContentLoaded function called");

    var representativeType = $progAlliesJsUtils.getUrlParameter("representativeType");
    var issue = $progAlliesJsUtils.getUrlParameter("issue");


    // *** Create the general letter tips for the appropriate type of representative ***

    // Standard / common tips
    var commonLetterTips = [
        "Always be polite - if you are rude or use an aggressive tone you are likely to be ignored",
        "Try to be as clear and concise as possible, while still getting your message across",
        "Personalise your letter - you are more likely to be listened to if you say why it matters to you, and how it affects you",
        "If you can, tailor your message to the politician you are sending it to - bear in mind the party they belong to and their priorities"
    ];

    // Tips specifically for Lords
    var lordsLetterTips = [
    ];

    // Tips specifically for MPs
    var mpLetterTips = [
    ];
    

    var generalTips = "";

    if (representativeType == "lord") {
        // Insert content for Lord
        console.log("representativeType is lord");

        generalTips = "<h2>Tips for writing to a Lord</h2><ul>";
        generalTips += $progAlliesJsUtils.toHtmlList(lordsLetterTips);
        generalTips += $progAlliesJsUtils.toHtmlList(commonLetterTips);
        generalTips += "</ul>"

    } else {
        // Default to MP
        console.log("representativeType is defaulted to MP");

        generalTips = "<h2>Tips for writing to your MP</h2><ul>";
        generalTips += $progAlliesJsUtils.toHtmlList(mpLetterTips);
        generalTips += $progAlliesJsUtils.toHtmlList(commonLetterTips);
        generalTips += "</ul>"

    }

    // Insert the HTML onto the page
    $progAlliesJsUtils.insertHtml(
        "#general-letter-tips",
        generalTips
    );

    // *** Finished creating and inserting the general letter tips for the appropriate type of representative ***


    // *** Create the specific talking points for this letter ***

    var electionOpening = [
        "Following the vote to leave the European Union, there must be a general election. ",
        "Before Article 50 is triggered and negotiations on 'Brexit' start, there should be an election. ",
        "The UK has voted to leave the EU, but before negotiationg our exit a General Election should be held. ",
        "A general election must be held before we start the clock ticking on our two-year 'divorce negotiations' with the EU. "
    ];

    var electionTalkingPoints = [
        [
            "The advisory EU Referendum only gave voters a choice of 'in' or 'out', it did not set out the terms of the UK's exit from the EU. ",
            "The Referendum on the European Union was a choice for leaving or remaining, but it didn't make clear the terms of our exit. "
        ],
        [
            "The next leader of the Conservative Party will not have a personal mandate from the UK electorate to negotiate 'Brexit' on our behalf. ",
            "The vast majority of the public will have had no say in whoever is chosen as the new Conservative Leader. Therefore they will have no legitimate mandate from the people to negotiate 'Brexit'. "
        ],
        [
            "No manifesto at the last General Election included plans or negotiating positions for Brexit, so such plans must be debated and put to voters. ",
            "Political parties did not present plans or negotiating positions for 'Brexit' in their manifesto's in the 2015 General Election. These positions must be discussed and put to the electorate. "
        ],
        [
            "The result of the referendum was very close, and therefore leaves open questions over our relationship with other European Countries should be - for example, whether we should remain part of the European Economic Area. ",
            "There are still many questions about the UKs place in Europe despite leaving the EU. One example is staying in the EEA, or leaving this as well. The Referendum result was close, so this should not be a foregone conclusion. "
        ],
        [
            "The public must have a say in how the UK will go about replacing EU laws. ",
            "Many rights and protections that people in the UK take for granted are not written into UK law, but EU law - voters must have a say on what will replace these laws. "
        ],
        [
            "The various advocates of 'Leave' often presented differing visions of what the UK should look like outside of the European Union. It's not clear which of these visions should now be pursued. ",
            "During the referendum campaign, many competing ideas of what Britain outside of the EU should look like emerged. The public should now have the opportunity to choose between these. "
        ],
        [
            "Parties from across the political spectrum must now have a chance to put forward their vision and negotiationg position for the UK outside the EU. ",
            "All political parties should be able to put their vision for Britain outside the European Union to voters before the country starts to negotiate its exit. ",
        ],
        [
            "The country is now deeply divided. Both the 52% who voted leave, and the 48% who voted remain must have a say in what our future outside the EU looks like, so the country can begin to heal. ",
            "Although just over half chose 'Leave', the result was close. The whole country must now have a voice in determining the type of country we want to be, as we start this new chapter in our nation. "
        ]
    ];

    var electionClosingLord = [
        "For these reasons, a General Election should be held prior to Article 50 being triggered. ",
        "Members of the House of Lords should therefore vote against any attempts to invoke Article 50 before an election is held to obtain a mandate for the terms of Brexit. ",
        "Due to the above, the Government must not begin negotiations on leaving the EU until the public has had their say in a General Election. ",
        "For the above reasons, the Lords should reject any motion to trigger Article 50, and push for a general election to be held. "
    ];

    var electionClosingMp = [
        "For the above reasons, a General Election should be held prior to Article 50 being triggered. ",
        "MPs should vote against any measures to invoke Article 50 before a General Election is held to obtain a democratic mandate for the terms of 'Brexit'. ",
        "Due to these reasons, the Government should not begin official negotiations on leaving the EU until the people have their say in a general election. ",
        "For these reasons, the House of Commons should reject any motion to trigger Article 50, and push for a General Election to be held. "
    ];


    var header;
    var opening;
    var talkingPoints;
    var closing;

    var letterTalkingPointsHtml = "";
    var letterTalkingPointsText = "";

    if (issue == "election") {
        // Insert content for General Election
        console.log("issue is election");

        header = "Talking Points for calling a General Election";

        opening = $progAlliesJsUtils.getRandomSubArray(electionOpening,1);
        talkingPoints = $progAlliesJsUtils.getRandomSubArray(electionTalkingPoints,3);

        if (representativeType == "lord") {
            // Insert content for Lord
            console.log("representativeType is lord");
            closing = $progAlliesJsUtils.getRandomSubArray(electionClosingLord,1);

        } else {
            // Default to MP
            console.log("representativeType is defaulted to MP");
            closing = $progAlliesJsUtils.getRandomSubArray(electionClosingMp,1);
        }

    } else {
        // Default to Progressive Alliance
        console.log("issue is defaulted to progAlliance");

        if (representativeType == "lord") {
            // Insert content for Lord
            console.log("representativeType is lord");


        } else {
            // Default to MP
            console.log("representativeType is defaulted to MP");

        }

    }

    // Build and insert the HTML onto the page
    letterTalkingPointsHtml += "<h2>" + header + "</h2><ul>";
    letterTalkingPointsHtml += $progAlliesJsUtils.toHtmlList(opening);
    letterTalkingPointsHtml += $progAlliesJsUtils.toHtmlList(talkingPoints);
    letterTalkingPointsHtml += $progAlliesJsUtils.toHtmlList(closing);
    letterTalkingPointsHtml += "</ul>";

    $progAlliesJsUtils.insertHtml(
        "#letter-talking-points",
        letterTalkingPointsHtml
    );

    // Build and insert the text into the textArea
    letterTalkingPointsText += opening.join("\n") + "\n\n";
    letterTalkingPointsText += talkingPoints.join("\n") + "\n\n";
    letterTalkingPointsText += closing.join("\n") + "\n";

    $progAlliesJsUtils.insertHtml(
        "#letter-talking-points-copy",
        letterTalkingPointsText
    );

    // *** Finished creating and inserting the specific talking points for this letter ***


    // *** Create and insert the appropriate buttons for finding a representative ***

    var findRepresentativeText = "";
    var findRepresentativeLinks = "";

    if (representativeType == "lord") {
        // Insert content for Lord
        console.log("representativeType is lord");

        findRepresentativeText += '<h2>Find a member of the House of Lords</h2>';
        findRepresentativeText += '<p>Lords are not directly elected, so you may write to any Lord</p>'
        findRepresentativeText += '<p>Remember, the above text is only a template, please use your own words and say why it\'s important to you!</p>'

        findRepresentativeLinks += '<a class="btn btn-lg btn-primary" href="https://www.writetothem.com/lords?random_lord=1" target="_blank" role="button">Find a random Lord &raquo;</a>';
        findRepresentativeLinks += '<a class="btn btn-lg btn-primary" href="https://www.writetothem.com/lords" target="_blank" role="button">Search for a Lord &raquo;</a>';

    } else {
        // Default to MP
        console.log("representativeType is defaulted to MP");

        findRepresentativeText += '<h2>Find your MP</h2>';
        findRepresentativeText += '<p>Only write to the MP who represents the constituency where you live, otherwise you will be ignored<br>';
        findRepresentativeText += 'Always include your full name and address so the MP knows you live in their constituency</p>';
        findRepresentativeText += '<p>Remember, the above text is only a template, please use your own words and say why it\'s important to you!</p>';

        findRepresentativeLinks += '<form method="get" action="https://www.writetothem.com/" target="_blank"><div class="input-group pull-right">';
        findRepresentativeLinks += '<input type="text" id="postcode" name="pc" placeholder="Postcode" size="14">';
        findRepresentativeLinks += '<input type="hidden" name="a" value="westminstermp">';
        findRepresentativeLinks += '<button type="submit" class="btn btn-lg btn-primary">Find my MP &raquo;</button>';
        findRepresentativeLinks += '</div></form>';
    }

    $progAlliesJsUtils.insertHtml(
        "#find-representative-text",
        findRepresentativeText
    );

    $progAlliesJsUtils.insertHtml(
        "#find-representative-links",
        findRepresentativeLinks
    );

    // *** Finished creating and inserting the appropriate buttons for finding a representative ***


    // Add listener for the copy-to-clip button
    document.getElementById("copy-to-clip").addEventListener('click', function(event) {

        // Get text area & make it visible
        var copyTextArea = document.getElementById("letter-talking-points-copy");
        copyTextArea.style.visibility = "visible";

        // Copy the text, then hide the text area again
        var success = $progAlliesJsUtils.copyTextToClipboard(copyTextArea);
        copyTextArea.style.visibility = "hidden";

        // Re-style the 'copy' link as appropriate
        var copyLinkElement = document.getElementById("copy-to-clip");

        if (success) {
            console.log("Success! Updating button");
            copyLinkElement.text = "Copied \u2714"
            copyLinkElement.className += " copy-success";  //TODO: appends another "copy-success" every time button is clicked...
        } else {
            console.log("Failed... Updating button");
            copyLinkElement.text = "\u2716 Sorry, copy manually"
            copyLinkElement.className += " copy-failed";   //TODO: appends another "copy-failed" every time button is clicked...
        }
        
    });

});
