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

$(document).ready(function() {
    $("[role=tab]").click(hideInertTabs);
    //Dirty red hack, we pass the tab a fake event with only the necessary properties.
    hideInertTabs({"target": {"id": "tab-pad"}});
});