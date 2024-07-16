<?php
// This file is part of Moodle - https://moodle.org/
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
// along with Moodle.  If not, see <https://www.gnu.org/licenses/>.

/**
 * Plugin administration pages are defined here.
 *
 * @package     block_newsslider
 * @category    admin
 * @author      BORNET Stéphen.
 * @copyright   2023 YMAG info@ymag.fr https://www.ymag.fr/
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

require_login();

if ($hassiteconfig) {

    if ($ADMIN->fulltree) {

        global $CFG;
        require_once($CFG->dirroot . '/config.php');
        require_admin();
        require($CFG->dirroot . '/blocks/newsslider/loadjs.php');

        $settings->add(
            new admin_setting_description(
                'block_newsslider/infosupp',
                '',
                get_string('greetings', 'block_newsslider') . '<br>' . get_string('mandatoryfieldsdesc', 'block_newsslider') . '<br><br>',
            )
        );

        $settings->add(
            new admin_setting_configcolourpicker(
                'block_newsslider/colour',
                get_string('newscolour', 'block_newsslider'),
                get_string('newscolourdesc', 'block_newsslider'),
                '#28a94d',
            )
        );

        $settings->add(
            new admin_setting_configtext(
                'block_newsslider/newslabel',
                get_string('newslabel', 'block_newsslider') . " " . get_string('mandatoryfields', 'block_newsslider'),
                get_string('newslabeldesc', 'block_newsslider'),
                get_string('newsheading', 'block_newsslider'),
            )
        );

        $settings->add(
            new admin_setting_configtext(
                'block_newsslider/newsclyde',
                get_string('newscycle', 'block_newsslider') . " " . get_string('mandatoryfields', 'block_newsslider'),
                get_string('newscycledesc', 'block_newsslider'),
                get_string('newscycledefault', 'block_newsslider'),
            )
        );

        // News 01.
        $settings->add(
            new admin_setting_heading(
                'block_newsslider/separatornewsT01',
                ' ',
                get_string('newsheading', 'block_newsslider') . " 1",
            )
        );

        $settings->add(
            new admin_setting_configtext(
                'block_newsslider/newstitle01',
                get_string('newstitle', 'block_newsslider') . " 1" . get_string('mandatoryfields', 'block_newsslider'),
                get_string('newstitledesc', 'block_newsslider') . " 1.",
                get_string('newstitledefault', 'block_newsslider'),
                PARAM_RAW
            )
        );

        $settings->add(
            new admin_setting_configtextarea(
                'block_newsslider/newscontent01',
                get_string('newscontent', 'block_newsslider') . " 1" . get_string('mandatoryfields', 'block_newsslider'),
                get_string('newscontentdesc', 'block_newsslider') . " 1.",
                get_string('newscontentdefault', 'block_newsslider'),
                PARAM_RAW
            )
        );

        $settings->add(
            new admin_setting_configtext(
                'block_newsslider/newsurl01',
                get_string('newsurl', 'block_newsslider') . " 1",
                get_string('newsurldesc', 'block_newsslider') . " 1.",
                get_string('newsurldefault', 'block_newsslider'),
            )
        );
        
        $settings->add(
            new admin_setting_configcheckbox(
                'block_newsslider/newstarget01',
                get_string('newstargetdesc', 'block_newsslider') . " 1",
                "",
                "_blank",
                $yes = '_blank',
 	            $no = '_self' 
            )
        );

        // News 02.
        $settings->add(
            new admin_setting_heading(
                'block_newsslider/separatornewsT02',
                ' ',
                "<span class='headingsettings' data-sttngstts='wrapped' data-sttngid='2'>"
                 ."<i class='bi bi-arrow-right-square-fill text-primary'></i>  "
                 . get_string('newsheading', 'block_newsslider') . " 2</span>",
            )
        );

        $settings->add(
            new admin_setting_configtext(
                'block_newsslider/newstitle02',
                get_string('newstitle', 'block_newsslider') . " 2",
                get_string('newstitledesc', 'block_newsslider') . " 2.",
                '',
                PARAM_RAW
            )
        );

        $settings->add(
            new admin_setting_configtextarea(
                'block_newsslider/newscontent02',
                get_string('newscontent', 'block_newsslider') . " 2",
                get_string('newscontentdesc', 'block_newsslider') . " 2.",
                '',
                PARAM_RAW
            )
        );

        $settings->add(
            new admin_setting_configtext(
                'block_newsslider/newsurl02',
                get_string('newsurl', 'block_newsslider') . " 2",
                get_string('newsurldesc', 'block_newsslider') . " 2.",
                get_string('newsurldefault', 'block_newsslider'),
            )
        );

        $settings->add(
            new admin_setting_configcheckbox(
                'block_newsslider/newstarget02',
                get_string('newstargetdesc', 'block_newsslider') . " 2",
                "",
                "_blank",
                $yes = '_blank',
 	            $no = '_self' 
            )
        );

        // News 03.
        $settings->add(
            new admin_setting_heading(
                'block_newsslider/separatornewsT03',
                ' ',
                "<span class='headingsettings' data-sttngstts='wrapped' data-sttngid='3'>"
                 ."<i class='bi bi-arrow-right-square-fill text-primary'></i>  "
                 . get_string('newsheading', 'block_newsslider') . " 3</span>",
            )
        );

        $settings->add(
            new admin_setting_configtext(
                'block_newsslider/newstitle03',
                get_string('newstitle', 'block_newsslider') . " 3",
                get_string('newstitledesc', 'block_newsslider') . " 3.",
                '',
                PARAM_RAW
            )
        );

        $settings->add(
            new admin_setting_configtextarea(
                'block_newsslider/newscontent03',
                get_string('newscontent', 'block_newsslider') . " 3",
                get_string('newscontentdesc', 'block_newsslider') . " 3.",
                '',
                PARAM_RAW
            )
        );

        $settings->add(
            new admin_setting_configtext(
                'block_newsslider/newsurl03',
                get_string('newsurl', 'block_newsslider') . " 3",
                get_string('newsurldesc', 'block_newsslider') . " 3.",
                get_string('newsurldefault', 'block_newsslider'),
            )
        );

        $settings->add(
            new admin_setting_configcheckbox(
                'block_newsslider/newstarget03',
                get_string('newstargetdesc', 'block_newsslider') . " 3",
                "",
                "_blank",
                $yes = '_blank',
 	            $no = '_self' 
            )
        );

        // News 04.
        $settings->add(
            new admin_setting_heading(
                'block_newsslider/separatornewsT04',
                ' ',
                "<span class='headingsettings' data-sttngstts='wrapped' data-sttngid='4'>"
                 ."<i class='bi bi-arrow-right-square-fill text-primary'></i>  "
                 . get_string('newsheading', 'block_newsslider') . " 4</span>",
            )
        );

        $settings->add(
            new admin_setting_configtext(
                'block_newsslider/newstitle04',
                get_string('newstitle', 'block_newsslider') . " 4",
                get_string('newstitledesc', 'block_newsslider') . " 4.",
                '',
                PARAM_RAW
            )
        );

        $settings->add(
            new admin_setting_configtextarea(
                'block_newsslider/newscontent04',
                get_string('newscontent', 'block_newsslider') . " 4",
                get_string('newscontentdesc', 'block_newsslider') . " 4.",
                '',
                PARAM_RAW
            )
        );

        $settings->add(
            new admin_setting_configtext(
                'block_newsslider/newsurl04',
                get_string('newsurl', 'block_newsslider') . " 4",
                get_string('newsurldesc', 'block_newsslider') . " 4.",
                get_string('newsurldefault', 'block_newsslider'),
            )
        );

        $settings->add(
            new admin_setting_configcheckbox(
                'block_newsslider/newstarget04',
                get_string('newstargetdesc', 'block_newsslider') . " 4",
                "",
                "_blank",
                $yes = '_blank',
 	            $no = '_self' 
            )
        );

        // News 05.
        $settings->add(
            new admin_setting_heading(
                'block_newsslider/separatornewsT05',
                ' ',
                "<span class='headingsettings' data-sttngstts='wrapped' data-sttngid='5'>"
                 ."<i class='bi bi-arrow-right-square-fill text-primary'></i>  "
                 . get_string('newsheading', 'block_newsslider') . " 5</span>",
            )
        );

        $settings->add(
            new admin_setting_configtext(
                'block_newsslider/newstitle05',
                get_string('newstitle', 'block_newsslider') . " 5",
                get_string('newstitledesc', 'block_newsslider') . " 5.",
                '',
                PARAM_RAW
            )
        );

        $settings->add(
            new admin_setting_configtextarea(
                'block_newsslider/newscontent05',
                get_string('newscontent', 'block_newsslider') . " 5",
                get_string('newscontentdesc', 'block_newsslider') . " 5.",
                '',
                PARAM_RAW
            )
        );

        $settings->add(
            new admin_setting_configtext(
                'block_newsslider/newsurl05',
                get_string('newsurl', 'block_newsslider') . " 5",
                get_string('newsurldesc', 'block_newsslider') . " 5.",
                get_string('newsurldefault', 'block_newsslider'),
            )
        );

        $settings->add(
            new admin_setting_configcheckbox(
                'block_newsslider/newstarget05',
                get_string('newstargetdesc', 'block_newsslider') . " 5",
                "",
                "_blank",
                $yes = '_blank',
 	            $no = '_self' 
            )
        );

        // News 06.
        $settings->add(
            new admin_setting_heading(
                'block_newsslider/separatornewsT06',
                ' ',
                "<span class='headingsettings' data-sttngstts='wrapped' data-sttngid='6'>"
                 ."<i class='bi bi-arrow-right-square-fill text-primary'></i>  "
                 . get_string('newsheading', 'block_newsslider') . " 6</span>",
            )
        );

        $settings->add(
            new admin_setting_configtext(
                'block_newsslider/newstitle06',
                get_string('newstitle', 'block_newsslider') . " 6",
                get_string('newstitledesc', 'block_newsslider') . " 6.",
                '',
                PARAM_RAW
            )
        );

        $settings->add(
            new admin_setting_configtextarea(
                'block_newsslider/newscontent06',
                get_string('newscontent', 'block_newsslider') . " 6",
                get_string('newscontentdesc', 'block_newsslider') . " 6.",
                '',
                PARAM_RAW
            )
        );

        $settings->add(
            new admin_setting_configtext(
                'block_newsslider/newsurl06',
                get_string('newsurl', 'block_newsslider') . " 6",
                get_string('newsurldesc', 'block_newsslider') . " 6.",
                get_string('newsurldefault', 'block_newsslider'),
            )
        );

        $settings->add(
            new admin_setting_configcheckbox(
                'block_newsslider/newstarget06',
                get_string('newstargetdesc', 'block_newsslider') . " 6",
                "",
                "_blank",
                $yes = '_blank',
 	            $no = '_self' 
            )
        );

        $settings->add(
            new admin_setting_heading(
                'block_newsslider/separatornewsB06',
                ' ',
                '',
            )
        );
    }
}
