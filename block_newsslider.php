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
 * Block newsslider is defined here.
 *
 * @package     block_newsslider
 * @author      BORNET Stéphen.
 * @copyright   2023 YMAG info@ymag.fr https://www.ymag.fr/
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class block_newsslider extends block_base {

    /**
     * Initializes class member variables.
     */
    public function init() {
        // Needed by Moodle to differentiate between blocks.
        $this->title = get_string('pluginname', 'block_newsslider');
    }

    /**
     * Defines configuration data.
     *
     * The function is called immediately after init().
     */
    public function specialization() {

        // Load user defined title and make sure it's never empty.
        if (empty($this->config->title)) {
            $this->title = get_string('pluginname', 'block_newsslider');
        } else {
            $this->title = $this->config->title;
        }
    }

    /**
     * Sets the applicable formats for the block.
     *
     * @return string[] Array of pages and permissions.
     */
    public function applicable_formats() {
        return [
            'admin' => false,
            'site-index' => false,
            'course-view' => true,
            'mod' => false,
            'my' => true,
        ];
    }

    /**
     * Returns the block contents.
     *
     * @return stdClass|stdObject The block contents.
     */
    public function get_content() {

        $context = context_system::instance();

        $this->content = new stdClass();
        $this->content->text = '<div id="newsLabelContent"><span class="actualitesIcon">'
            . format_text(get_config('block_newsslider', 'newslabel'), FORMAT_HTML, ['noclean' => false, 'filter' => true, 'context' => $context])
            . '</span>';
        $this->content->footer = '';

        $renderer = $this->page->get_renderer('block_newsslider');

        $newsitems = [];

        for ($i = 1; $i <= 6; $i++) {
            if (get_config('block_newsslider', 'newstitle0'.$i) !== "") {
                $news = new \block_newsslider\output\list_news_item(
                    $i === 1 ? 'glideAppear' : 'glideDisappear',
                    format_text(get_config('block_newsslider', 'newstitle0'.$i), FORMAT_HTML, ['noclean' => false, 'filter' => true, 'context' => $context]),
                    format_text(get_config('block_newsslider', 'newscontent0'.$i), FORMAT_HTML, ['noclean' => false, 'filter' => true, 'context' => $context]),
                    get_config('block_newsslider', 'newsurl0'.$i),
                    get_config('block_newsslider', 'newstarget0'.$i),
                );
                array_push($newsitems, $news);
            }
        }

        $this->content->text .= '<div id="newsList"><ul id="actualitesList">';
        foreach ($newsitems as $newsitem) {
            $this->content->text .= $renderer->render($newsitem);
        }
        $this->content->text .= '</ul></div></div><span id="dotContainer"></span>';

        return $this->content;
    }

    /**
     * Specify what js must be loaded and pass values to it.
     *
     * @param none
     * @return void
     */
    public function get_required_javascript() {

        // Values to pass to our js.
        $datasttngs = [
            'clr' => get_config('block_newsslider', 'colour'),
            'cycle' => get_config('block_newsslider', 'newsclyde'),
        ];

        $jsmodule = [
            'name'     => 'block_newsslider',
            'fullpath' => '/blocks/newsslider/amd/news.js',
            'requires' => [],
        ];
        // Put the second parameter to "null" if you don't have values to send.
        $this->page->requires->js_init_call('M.block_newsslider.init', $datasttngs, false, $jsmodule);
    }

    /**
     * Enables global configuration of the block in settings.php.
     *
     * @return bool True if the global configuration is enabled.
     */
    public function has_config() {
        return true;
    }
}
