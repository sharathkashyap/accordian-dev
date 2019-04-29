$(document).ready(function(){
    // Add minus icon for collapse element which is open by default
    $(".collapse.in").each(function(){
        $(this).siblings(".panel-heading").find(".fa-chevron-down").addClass("rotate");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).parent().find(".fa-chevron-down").addClass("rotate");
    }).on('hide.bs.collapse', function(){
        $(this).parent().find(".fa-chevron-down").removeClass("rotate");
    });

    $(document).on( 'click','[id="btn-yes"]',function(){
        var value = {};
        console.log("Yes-Clicked");
        value.type = "Yes-Clicked"
        value.position = Number($(this).parent().parent().attr("id").substr(-1)) +1;
        value.value = {};
        value.value.topic = $(this).parent().parent().parent().find("h4").first().text().trim();
        value.value.description = $(this).parent().parent().find("p").first().text();
        console.log(value);
        window.parent.postMessage(value,"*");
        $(this).parent().find('button').hide();
        $(this).parent().find("p").first().hide();
        $(this).parent().children().last().removeAttr('hidden');

    })

    $(document).on( 'click','[id="btn-no"]',function(){
        console.log("No-Clicked");
        var value = {};
        value.type = "No-Clicked"
        value.position = Number($(this).parent().parent().attr("id").substr(-1)) +1;
        value.value = {};
        value.value.topic = $(this).parent().parent().parent().find("h4").first().text().trim();
        value.value.description = $(this).parent().parent().find("p").first().text();
        console.log(value);
        window.parent.postMessage(value,"*");
        $(this).parent().hide();
        $(this).parent().parent().find('.panel-info').removeAttr('hidden');
    })

    $(document).on( 'keypress','.input-text',function() {
        if($(this).val().length > 999) {
            //display your warinig the way you chose
            console.log('MaxLength Reached');
        }
    });
    $(document).on( 'submit','#know-more-form',function(e) {
        e.preventDefault();
        var inputVal = $( this )[0][0].value; // resolves to current input element.
        if(inputVal && inputVal.length){
            var value = {};
            value.type = "No-Clicked-Know-More-Text"
            value.position = Number($(this).parent().parent().attr("id").substr(-1)) +1;
            value.value = {};
            value.value.topic = $(this).parent().parent().parent().find("h4").first().text().trim();
            value.value.description = $(this).parent().parent().find("p").first().text();
            value.value.knowMoreText=inputVal;
            window.parent.postMessage(value,"*");

            console.log(value);
        }
        $(this).parent().parent().find('.panel-info').hide();
    });
});