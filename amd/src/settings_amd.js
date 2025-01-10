// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * @module     block_newsslider/settings_amd
 * @author     BORNET Stéphen.
 * @copyright  2024 YMAG info@ymag.fr https://www.ymag.fr/
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

define([], function () {

    const init = () => {

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
    };

    return {
        init: function () {
            init();
        }
    };
});
