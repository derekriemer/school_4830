var x=0;
function upHandler(evt){
    if(evt.which != 1) //Left
        return;
    let delta = evt.pageX-x;
    if(delta > 0){
        $("#gestureedit").val("Right Swipe");
    }
    else if(delta == 0){
        $("#gestureedit").val("Left mouse button up");
    }
    else {
        $("#gestureedit").val(" Left Swipe");
    }
}

function downHandler(evt){
    if(evt.which != 1) //Left
        return;
    $("#gestureedit").val("Left mouse button down");
    x = evt.pageX;
}

function morfTabToPanel(elem){
    return elem.replace("tab-", "panel-");
}

function hideInertTabs(evt){
    let id = evt.target.id;
    $("[role=tab]").each(function(index, elem){
        let panelId = morfTabToPanel(elem.id);
        if(elem.id == id){
            $(elem).attr("aria-selected", "true");
            $("#"+panelId).show();
        } else {
            $(elem).attr("aria-selected", "false");
            $("#"+panelId).hide();
        }
    });
}

function dialerClicked(evt){
    /* Respond to the click event on a dialpad button.*/
    let elem = evt.target;
    let input = $("#dial-input");
    if(elem.id == "clear"){
        input.val("");
        return;
    }
    input.val(input.val()+elem.innerText);
}

$(document).ready(function() {
    $("[role=tab]").click(hideInertTabs);
    //Dirty red hack, we pass the tab a fake event with only the necessary properties.
    hideInertTabs({"target": {"id": "tab-pad"}});
    $(".phone-button,#clear").click(dialerClicked);
    $("#gesture-test").mouseup(upHandler);
    $("#gesture-test").mousedown(downHandler);
});