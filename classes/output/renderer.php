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
 * Collection of methods to handle rendering visual aspects of pages.
 *
 * @package     block_newsslider
 * @author      BORNET Stéphen.
 * @copyright   2023 YMAG info@ymag.fr https://www.ymag.fr/
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

namespace block_newsslider\output;

use plugin_renderer_base;
use renderable;

/**
 * Class renderer
 *
 * This class extends the plugin_renderer_base class and is used for rendering templates.
 */
class renderer extends plugin_renderer_base {

    /**
     * Renders the label of the block.
     *
     * @param mixed $label The string needed to be rendered.
     * @return string The rendered template.
     */
    public function render_news_label(news_label $label) {
        $data = $label->export_for_template($this);
        return parent::render_from_template('block_newsslider/news_label', $data);
    }

    /**
     * Renders a specific news item.
     *
     * @param mixed $linewsitem The item to be rendered.
     * @return string The rendered template.
     */
    public function render_list_news_item(list_news_item $linewsitem) {
        $data = $linewsitem->export_for_template($this);
        return parent::render_from_template('block_newsslider/list_news_item', $data);
    }

    /**
     * Renders a specific news item.
     *
     * @param mixed $arrnews The array of news.
     * @return string The rendered template.
     */
    public function render_list_news(list_news $arrnews) {
        $data = $arrnews->export_for_template($this);
        return parent::render_from_template('block_newsslider/list_news_item', $data);
    }
}
