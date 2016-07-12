$(function () { // Same as document.addEventListener("DOMContentLoaded"...

    console.log(window);
    console.log("Main DOMContentLoaded function called");

    var draftId = $progAlliesJsUtils.getUrlParameter("draftId");

    
    // *** Content for Progressive Alliance petition / pledge ***
    var progAlliesPetition = "";

    progAlliesPetition += "<p>We call on the leaders, elected representatives, and members of the Green Party, Labour Party, Liberal Democrats, Plaid Cymru, and Scottish National Party to form a progressive alliance of parties working together to avert a worst case 'Brexit' scenario.</p>";

    progAlliesPetition += "<p>Working together, such an alliance must do all it can to:<ul>";
    progAlliesPetition += "<li>Guarantee the right to live & work for all those currently living in the UK, both from the EU and from outside</li>";
    progAlliesPetition += "<li>Protect human rights in the UK</li>";
    progAlliesPetition += "<li>Protect workers rights in the UK</li>";
    progAlliesPetition += "<li>Ensure environmental protections & safeguards are maintained</li>";
    progAlliesPetition += "<li>Ensure that the public services of the UK are not put at risk of privatisation</li>";
    progAlliesPetition += "<li>Respect other nations in any trade deals made</li>";
    progAlliesPetition += "<li>Protect grant funding to agriculture, science and local communities which previously came from the EU budget</li></ul></p>";

    progAlliesPetition += "<p>As signatories we also pledge to support such a progressive alliance in a General Election, and do our best to ensure it's victory in order to deliver the above.</p>";

    progAlliesPetition += "<p>What this means in practice:<ul>";
    progAlliesPetition += "<li>Saying no to deportating people currently residing in the UK as a result of 'Brexit'</li>";
    progAlliesPetition += "<li>Maintaining gender equality legislation</li>";
    progAlliesPetition += "<li>Protecting the rights of ethnic & religious minorities</li>";
    progAlliesPetition += "<li>Protecting the rights of LGBTQ+ people</li>";
    progAlliesPetition += "<li>Protecting equal pay</li>";
    progAlliesPetition += "<li>Protecting maternity & paternity rights</li>";
    progAlliesPetition += "<li>Protecting the rights of workers to join unions, and the rights of unions</li>";
    progAlliesPetition += "<li>Ratifying the Paris Climate Agreement</li>";
    progAlliesPetition += "<li>Continuing the UK's commitments to de-carbonise</li>";
    progAlliesPetition += "<li>Maintaining air quality & safety rules</li>";
    progAlliesPetition += "<li>Blocking trade deals which would erode the right or ability to provide public services in the UK</li>";
    progAlliesPetition += "<li>Blocking trade deals which would erode the human rights and / or workers rights of the populations of other countries</li>";
    progAlliesPetition += "<li>Working to ensure communities are not left worse off due to withdrawal of EU funding after 'Brexit'</li></ul></p>";
    // *** End Content for Progressive Alliance petition / pledge ***


    // *** Content for No Confidence petition ***
    var noConfidencePetition = "";

    noConfidencePetition += "<p>Following the advisory referendum on the UK's membership of the EU, approximately 52% of the electorate voted to leave the EU. ";
    noConfidencePetition += "However, this alone does not give any political party or government the mandate to negotiate the UK's exit from the EU. ";
    noConfidencePetition += "The referendum was purely a question about the UK's continuing membership of the EU - it did not indicate what sort of relationship the UK should have with the EU in the event of Leaving, nor did it spell out how the UK should go about replacing the various EU laws which will cease to take effect when the UK leaves. ";
    noConfidencePetition += "Indeed, different advocates of leaving the EU often presented differing visions of what the UK would look like outside the EU.</p>";

    noConfidencePetition += "<p>As such, we call upon Parliament to debate a motion of no confidence in the Government prior to Article 50 being triggered. ";
    noConfidencePetition += "All political parties must have a chance to put forward their vision & negotiating position for the UK outside of the EU, such that members of the public can have a say on the type of 'Brexit' in a General Election. ";
    noConfidencePetition += "This will provide the winning party with a democratic mandate for negotiations with the EU and individual nations, and any new UK laws to replace EU laws.</p>";
    // *** End Content for No Confidence petition ***
    

    // Function to update content
    var updatePage = function(newDraftId) {
        console.log("updatePage called with [" + newDraftId + "], value of progAlliesPetition is [" + progAlliesPetition + "]");

        // Make the correct button active
        ( newDraftId == "progAlliesPetition" ) ? $('#prog-allies-petition').addClass('active') : $('#prog-allies-petition').removeClass('active') ;
        ( newDraftId == "noConfidencePetition" ) ? $('#no-confidence-petition').addClass('active') : $('#no-confidence-petition').removeClass('active') ;

        // Set content appropriately
        if (newDraftId == "progAlliesPetition") {
            $progAlliesJsUtils.insertHtml(
                "#draft-text",
                progAlliesPetition
            );
        }
        else if (newDraftId == "noConfidencePetition") {
            $progAlliesJsUtils.insertHtml(
                "#draft-text",
                noConfidencePetition
            );
        }
    }


    // Add listener for the buttons
    $('#prog-allies-petition').click(function(event) { updatePage("progAlliesPetition"); });
    $('#no-confidence-petition').click(function(event) { updatePage("noConfidencePetition"); });

    // Call update page based on the draftId param passed to the page
    if (draftId == "noConfidencePetition") {
        updatePage("noConfidencePetition");
    } else {
        // Default to ProgAlliesPetition
        updatePage("progAlliesPetition");
    }

});
