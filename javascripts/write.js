$(function () { // Same as document.addEventListener("DOMContentLoaded"...

    console.log(window);
    console.log("Main DOMContentLoaded function called");

    var representativeType = $progAlliesJsUtils.getUrlParameter("representativeType");
    var issue = $progAlliesJsUtils.getUrlParameter("issue");

    // Default variables
    representativeType = ( (typeof representativeType) !== 'undefined' ? representativeType : "mp" );
    issue = ( (typeof issue) !== 'undefined' ? issue : "election" );


    // *** Update meta tags ***
    var ogTitle = "";
    var ogDescription = "";
    var ogImage = "";

    if (issue == "election") {
        ogTitle = "Progressive Alliance - Take Action for a General Election";
        ogDescription = "Write to your MP or a Lord, calling for a General Election before Article 50 is invoked";
        ogImage = "";
    } else if (issue == "fairBrexit") {
        ogTitle = "Progressive Alliance - Take Action for a Fair Brexit";
        ogDescription = "Write to your MP or a Lord, urging them to support a Fair Brexit, protecting human rights, workers rights, and the environment";
        ogImage = "https://prog-allies.github.io/progressive-alliance/images/fbShareBanner-fairBrexit.png";
    } else {

    }

    $('meta[property=og\\:url]').attr('content', 'https://prog-allies.github.io/progressive-alliance/write.html?representativeType=' + representativeType + '&amp;issue=' + issue);
    $('meta[property=og\\:title]').attr('content',  ogTitle);
    $('meta[property=og\\:description]').attr('content', ogDescription);
    $('meta[property=og\\:image]').attr('content', ogImage);
    // *** Finished updating meta tags


    // *** Create the general letter tips for the appropriate type of representative ***

    // Standard / common tips
    var commonLetterTips = [
        "<strong>Always be polite</strong> - if you are rude or use an aggressive tone you are likely to be ignored",
        "<strong>Be as clear and concise as possible</strong>, while still getting your message across",
        "<strong>Personalise your letter</strong> - you are more likely to be listened to if you say why it matters to you, and give examples of how it directly affects you",
        "<strong>Tailor your message to the politician you are sending it to</strong> - bear in mind the party they belong to and their priorities"
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

    // Call for a Progressive Alliance of Parties talking points
    var allianceOpening = [
        
    ];

    var allianceTalkingPoints = [
        [

        ]
    ];

    var allianceClosingLord = [

    ];

    var allianceClosingMp = [

    ];
    // End of Call for a Progressive Alliance of Parties talking points

    // Call for a General Election talking points
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
    // End of Call for a General Election talking points

    // Call for a Progressive Alliance of Parties talking points
    var fairBrexitOpening = [
        [
            "Following the vote to leave the European Union, there are many questions about what Brexit should look like.",
            "Before Article 50 is triggered, the country must have a strategy for the exit negotiations.",
            "The United Kingdom has voted for Brexit, but what life outside the EU will look like is still unclear.",
            "When official 'Brexit' negotiations start with the EU, they will only have two years to conclude, so we should know in advance the negotiating position."
        ],
        [
            "As well as negotiations with the EU, there will inevitably be conversations and negotiations with other countries regarding trade deals.",
            "This extends to free trade agreements with countries outside of the EU, as well as our relationship with the EU itself.",
            "The EU currently has various trade agreements in place, and others in discussion, and the UK will likely be involved in its own trade negotiations with many countries."
        ],
        [
            "In this uncertain time, the government and MPs of all parties must do all they can to: ",
            "When negotiating with the EU and other governments, representatives of the UK should do their utmost to achieve the following: ",
            "During negotiations, all representatives must work together to ensure the best possible outcome for Brexit, including: ",
            "When replacing EU laws and discussing terms of 'Brexit', the following aims should be adhered to: "
        ]
    ];

    var fairBrexitTalkingPoints = [
        [
            "Guarantee the right to live &amp; work for all those currently living in the UK, both from the EU and from outside. ",
            "Protect the rights of migrants from the EU and elsewhere to live and work in the UK, especially those already here. "
        ],
        [
            "Protect human rights in the UK. ",
            "Maintain all human rights."
        ],
        [
            "Protect workers rights in the UK.",
            "Maintain all workers rights. "
        ],
        [
            "Ensure environmental protections &amp; safeguards are maintained. ",
            "Protect the environment, air quality, and renewable energy."
        ],
        [
            "Ensure that the public services of the UK are not put at risk of privatisation. ",
            "Protect public services such as the NHS from privatisation and underfunding."
        ],
        [
            "Respect other nations in any trade deals made.",
            "Ensure the rights of foreign workers are respected during trade negotiations. "
        ],
        [
            "Protect grant funding to agriculture, science and local communities which previously came from the EU budget. ",
            "Maintain funding for local communities and areas such as research &amp; agriculture such that they do not suffer as a result of Brexit."
        ]
    ];

    var fairBrexitClosingLord = [
        "Please do all you can to achieve the above goals both within the House of Lords, and with your colleages in the House of Commons.",
        "Members of the Lords from all parties should come together to work for these aims. ",
        "All representatives of the Lords and the Commons must work together to make sure these are protected in the wake of Brexit.",
        "Representatives across the political spectrum should work to ensure these rights and protections are maintained once the UK is no longer a member of the EU. "
    ];

    var fairBrexitClosingMp = [
        "Please do everything you can to achieve the above aims in the House of Commons, and encourage your colleages in the Lords to do the same. ",
        "MPs from all political parties must come together to help achieve these goals.",
        "Representatives from the House of Commons and the House of Lords should work together to make sure they are protected after the UK has left the EU. ",
        "Politicians from all sides must work together in the interests of the people to ensure the above protections &amp; rights remain in place after Brexit."
    ];
    // End of Call for a Progressive Alliance of Parties talking points


    var header;

    var opening;
    var openingPreHtml = "<ul>";
    var openingPostHtml = "";
    var openingJoinString = " ";

    var talkingPoints;
    var talkingPointsPreHtml = "";
    var talkingPointsPostHtml = "";
    var talkingPointsJoinString ="\n";

    var closing;
    var closingPreHtml = "";
    var closingPostHtml = "</ul>";
    var closingJoinString = " ";

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

    } else if (issue == "fairBrexit") {
        // Insert content for Fair Brexit
        console.log("issue is fairBrexit");

        header = "Talking Points for a Fair Brexit";

        opening = $progAlliesJsUtils.getRandomSubArray(fairBrexitOpening,3,true);

        talkingPointsPreHtml = "<ul>";
        talkingPoints = $progAlliesJsUtils.getRandomSubArray(fairBrexitTalkingPoints,7);
        talkingPointsPostHtml = "</ul>";

        if (representativeType == "lord") {
            // Insert content for Lord
            console.log("representativeType is lord");
            closing = $progAlliesJsUtils.getRandomSubArray(fairBrexitClosingLord,1);

        } else {
            // Default to MP
            console.log("representativeType is defaulted to MP");
            closing = $progAlliesJsUtils.getRandomSubArray(fairBrexitClosingMp,1);
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
    var letterTalkingPointsHtml = "";
    letterTalkingPointsHtml += "<h2>" + header + "</h2>";
    letterTalkingPointsHtml += openingPreHtml + $progAlliesJsUtils.toHtmlList(opening) + openingPostHtml;
    letterTalkingPointsHtml += talkingPointsPreHtml + $progAlliesJsUtils.toHtmlList(talkingPoints) + talkingPointsPostHtml;
    letterTalkingPointsHtml += closingPreHtml + $progAlliesJsUtils.toHtmlList(closing) + closingPostHtml;

    $progAlliesJsUtils.insertHtml(
        "#letter-talking-points",
        letterTalkingPointsHtml
    );

    // Build and insert the text into the textArea
    var letterTalkingPointsText = "";
    letterTalkingPointsText += opening.join(openingJoinString) + "\n\n";
    letterTalkingPointsText += talkingPoints.join(talkingPointsJoinString) + "\n\n";
    letterTalkingPointsText += closing.join(closingJoinString) + "\n";

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
        findRepresentativeText += '<p class="bold-font">Remember, the above text is only a template, please use your own words and say why it\'s important to you!</p>'

        findRepresentativeLinks += '<a class="btn btn-lg btn-primary" href="https://www.writetothem.com/lords?random_lord=1" target="_blank" role="button">Find a random Lord &raquo;</a>';
        findRepresentativeLinks += '<a class="btn btn-lg btn-primary" href="https://www.writetothem.com/lords" target="_blank" role="button">Search for a Lord &raquo;</a>';

    } else {
        // Default to MP
        console.log("representativeType is defaulted to MP");

        findRepresentativeText += '<h2>Find your MP</h2>';
        findRepresentativeText += '<p>Only write to the MP who represents the constituency where you live, otherwise you will be ignored.<br>';
        findRepresentativeText += 'Always include your full name and address so the MP knows you live in their constituency.</p>';
        findRepresentativeText += '<p><strong>Remember, the above text is only a template, please use your own words and say why it\'s important to you!</strong></p>';

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


    // *** Create and insert appropriate social media buttons ***
    var fbShareButton = '<div class="fb-share-button" data-href="https://prog-allies.github.io/progressive-alliance/write.html?representativeType=' + representativeType + '&amp;issue=' + issue + '" data-layout="button" data-size="small" data-mobile-iframe="false">';
    fbShareButton += '<a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fprog-allies.github.io%2Fprogressive-alliance%2Fwrite.html%3FrepresentativeType%3D' + representativeType + '%26issue%3D' + issue + '&amp;src=sdkpreparse">Share</a></div>';
    
    $progAlliesJsUtils.insertHtml(
        "#social-media",
        fbShareButton
    );
    // *** Finished creating and insert appropriate social media buttons ***


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
