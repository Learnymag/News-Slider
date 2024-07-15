$(document).ready(function () {
    for (let $index = 2; $index <= 6; $index++) {
        $('#admin-newstitle0'+$index+', #admin-newscontent0'+$index+', #admin-newsurl0'+$index).css({"display" : "none"});        
    }    

    $('.headingsettings').click(function () { 
        //e.preventDefault();
        if($(this).is('[data-sttngstts="wrapped"]')) {

            $(this).attr('data-sttngstts',"unwrapped");
            $(this).children('i').removeClass('bi-arrow-right-square-fill').addClass('bi-arrow-down-square-fill');
            $idelmnts = $(this).attr('data-sttngid');
            $('#admin-newstitle0'+$idelmnts+', #admin-newscontent0'+$idelmnts+', #admin-newsurl0'+$idelmnts).css({"display" : "flex"});

        } else {

            $(this).attr('data-sttngstts',"wrapped");
            $(this).children('i').removeClass('bi-arrow-down-square-fill').addClass('bi-arrow-right-square-fill');
            $idelmnts = $(this).attr('data-sttngid');
            $('#admin-newstitle0'+$idelmnts+', #admin-newscontent0'+$idelmnts+', #admin-newsurl0'+$idelmnts).css({"display" : "none"});    

        }
    });
});