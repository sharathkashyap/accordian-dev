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
    
        //Add Event Listener on click of Yes and No button 
        $('[id="btn-yes"]').click(function(){
           console.log("Yes-Clicked");
           console.log("Question :" , ($(this).parent().parent().parent().find("h4").first().text().trim()) );
           console.log("Answer :" , ($(this).parent().parent().find("p").first().text()) );
//                   console.log($(this).parent().children().splice(-1,1))
           $(this).parent().find('button').hide();
           $(this).parent().find("p").first().hide();
            $(this).parent().children().last().removeAttr('hidden')

        })
    
        $('[id="btn-no"]').click(function(){
           console.log("No-Clicked");
           console.log("Question :" , ($(this).parent().parent().parent().find("h4").first().text().trim()) );
           console.log("Answer :" , ($(this).parent().parent().find("p").first().text()) );
        })
    });