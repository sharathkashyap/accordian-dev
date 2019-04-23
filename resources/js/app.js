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
    });