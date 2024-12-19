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
 * Datas used for view page.
 *
 * @package     block_newsslider
 * @author      BORNET Stéphen.
 * @copyright   2023 YMAG info@ymag.fr https://www.ymag.fr/
 * @license     https://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

namespace block_newsslider\output;

use renderable;
use templatable;
use renderer_base;
use stdClass;

/**
 * Class list_news_item
 *
 * This class implements the renderable and templatable interfaces and is used for handling data for news.
 */
class list_news_item implements renderable, templatable {
    /**
     * @var string $class Class of the "li" item.
     */
    public $class;
    /**
     * @var string $title Title of the news.
     */
    public $title;
    /**
     * @var string $content The content of the news.
     */
    public $content;
    /**
     * @var string $link The URL of the news.
     */
    public $link;
    /**
     * @var string $target Value used to open in an new tab or not.
     */
    public $target;
    /**
     * @var string $color Title color.
     */
    public $color;


    /**
     * Constructor for the list_news_item class.
     *
     * @param string $class Class of the "li" item.
     * @param string $title The title of the news.
     * @param string $content The content of the news.
     * @param string $link The URL of the news.
     */
    public function __construct($class, $title, $content, $link, $target, $color) {
        $this->class = $class;
        $this->title = $title;
        $this->content = $content;
        $this->link = $link;
        $this->target = $target;
        $this->color = $color;
    }

    /**
     * Exports data for use in a template.
     *
     * @param renderer_base $output The renderer base.
     * @return stdClass The data to be used in the template.
     */
    public function export_for_template(renderer_base $output) {
        $data = new stdClass();
        $data->class = $this->class;
        $data->title = $this->title;
        $data->content = $this->content;
        $data->link = $this->link;
        $data->target = $this->target;
        $data->color = $this->color;
        return $data;
    }
}
