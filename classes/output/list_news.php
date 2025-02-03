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
 * Class list_news
 *
 * This class implements the renderable and templatable interfaces and is used for handling list of list_news_item.
 */
class list_news implements renderable, templatable {
    /**
     * @var array Array of news.
     */
    private $newsitems;

    /**
     * Constructor for the list_news_item class.
     *
     * @param string $newsitems Array of news.
     */
    public function __construct($newsitems) {
        $this->newsitems = $newsitems;
    }

    /**
     * Exports data for use in a template.
     *
     * @param renderer_base $output The renderer base.
     * @return array The data to be used in the template.
     */
    public function export_for_template(renderer_base $output) {
        return ['newsitems' => $this->newsitems];
    }
}
