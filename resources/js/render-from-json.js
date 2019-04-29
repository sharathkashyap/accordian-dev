//$.getJSON("mydata.json", function(data) {
//    var html = '';
//    $.each(data, function(key, value){
//        html += '<div class="dcell">';
//        html += '<img src="images/'+value.product+'.png"/>';
//        html += '<label for="'+value.product+'">'+value.name+':</label>';
//        html += '<input type="text" id="'+value.product+'" name="'+value.product+'" value="0" stock="'+value.stock+'" price="'+value.price+'" required>';
//        html += '</div>';
//    });
//$('#yourContainerId').html(html);
//});
var selectedLang = getUrlVars()["selectedlang"];
$( document ).ready(function() {
    var jsonUrl;
    if(selectedLang){
        jsonUrl = "./resources/res/faq-" + selectedLang.trim() + ".json"
    }else{
        jsonUrl="./resources/res/faq-en.json"
    }
    
        console.log(jsonUrl);
    $.getJSON(jsonUrl, function(data) {
        var html ='';
        $.each(data.faqs, function(key, value){
            console.log('value  : ', value, 'key  ', key)
            html += '<div class="panel panel-default">'
                    +'<a data-toggle="collapse" data-parent="#accordion" href="#collapse'+key+'">'
                        +'<div class="panel-heading" >'
                            +'<h4 class="panel-title">'
                                +value.topic+'<span class="fas fa-chevron-down icon" ></span>'
                            +'</h4>'
                        +'</div>'
                    +'</a>'
                    +'<div id="collapse'+key+'" class="panel-collapse collapse">'
                        +'<div class="panel-body">'
                            +'<p>'+value.description+'</p>'
                        +'</div>'
                        +'<div class="panel-interact">'
                            +'<p>Did this answer help you?</p>'
                            +'<button type="button" class="btn" id = "btn-no">No</button>'
                            +'<button type="button" class="btn" style="color: green" id = "btn-yes">Yes</button>'
                            +'<p class="yes-clicked" hidden="true">Thanks for your response!</p>'
                        +'</div>'
                        +'<div class="panel-info" hidden="true">'
                            +'<h6>Sorry about that!</h6>'
                            +'<p>What more would you like to know?</p>'
                            +'<form action="#" id="know-more-form"> '
                                +'<textarea type="text" name="moreInfo" placeholder="Type here..." class="input-text"  maxlength="1000"></textarea>'
                                +'<input type="submit" value="Submit" class="submit-button">'
                            +'</form>'
                        +'</div>'
                    +'</div>'
                +'</div>'
        });
        $('#accordion').html(html);
    })
});

function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}