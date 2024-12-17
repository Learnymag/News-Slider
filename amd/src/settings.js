document.addEventListener('DOMContentLoaded', function () {
    for (let $index = 2; $index <= 6; $index++) {
        document.querySelector('#admin-newstitle0'+$index+', #admin-newscontent0'+$index+', #admin-newsurl0'+$index+', #admin-newstarget0'+$index).style.display = "none";        
    }    

    document.querySelector('.headingsettings').addEventListener('click', function() {
        //e.preventDefault();
        if(this.matches('[data-sttngstts="wrapped"]')) {

            this.setAttribute('data-sttngstts',"unwrapped");
            this.querySelector('i').classList.remove('bi-arrow-right-square-fill');
            this.querySelector('i').classList.add.addClass('bi-arrow-down-square-fill');
            $idelmnts = this.getAttribute('data-sttngid');
            document.querySelector('#admin-newstitle0'+$idelmnts+', #admin-newscontent0'+$idelmnts+', #admin-newsurl0'+$idelmnts+', #admin-newstarget0'+$idelmnts).style.display = "flex";

        } else {

            this.setAttribute('data-sttngstts',"wrapped");
            this.querySelector('i').classList.remove('bi-arrow-down-square-fill');
            this.querySelector('i').classList.add('bi-arrow-right-square-fill');
            $idelmnts = this.getAttribute('data-sttngid');
            document.querySelector('#admin-newstitle0'+$idelmnts+', #admin-newscontent0'+$idelmnts+', #admin-newsurl0'+$idelmnts+', #admin-newstarget0'+$idelmnts).style.display = "none";  

        }
    }, false);
});