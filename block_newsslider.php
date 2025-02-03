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
 * @thanks      Volodymyr DOVHAN for his help & his patience.
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

        $renderer = $this->page->get_renderer('block_newsslider');

        $this->content = new stdClass();

        $label = format_text(get_config('block_newsslider', 'newslabel'), FORMAT_HTML, ['noclean' => false, 'filter' => true, 'context' => $context]);

        $this->content->text = '';

        $newsitems = [];

        for ($i = 1; $i <= 6; $i++) {
            if (get_config('block_newsslider', 'newstitle0'.$i) !== "") {
                $news = [
                    'class' => $i === 1 ? 'glideAppear' : 'glideDisappear',
                    'title' => format_text(get_config('block_newsslider', 'newstitle0'.$i), FORMAT_HTML, ['noclean' => false, 'filter' => true, 'context' => $context]),
                    'content' => format_text(get_config('block_newsslider', 'newscontent0'.$i), FORMAT_HTML, ['noclean' => false, 'filter' => true, 'context' => $context]),
                    'link' => get_config('block_newsslider', 'newsurl0'.$i) === "" ? '#' : get_config('block_newsslider', 'newsurl0'.$i),
                    'target' => get_config('block_newsslider', 'newstarget0'.$i),
                    'color' => get_config('block_newsslider', 'colour'),
                ];
                array_push($newsitems, $news);
            }
        }

        $newscontent = new \block_newsslider\output\news($label, $newsitems);

        $this->content->text .= $renderer->render($newscontent);

        $this->content->footer = '';

        return $this->content;
    }

    /**
     * Specify what js must be loaded and pass values to it.
     * PR754160552RV - 14600102
     * @param none
     * @return void
     */
    public function get_required_javascript() {

        $this->page;
        // Values to pass to our js.
        $datasttngs = [
            'clr' => get_config('block_newsslider', 'colour'),
            'cycle' => get_config('block_newsslider', 'newsclyde'),
        ];

        $this->page->requires->js_call_amd('block_newsslider/news_amd', 'init', [
            'clr' => get_config('block_newsslider', 'colour'),
            'cycle' => get_config('block_newsslider', 'newsclyde'),
        ]);
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
