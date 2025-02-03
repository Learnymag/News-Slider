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
 * Class news
 *
 * This class implements the renderable and templatable interfaces and is used for handling all data for news.
 */
class news implements renderable, templatable {
    /**
     * @var news_label The news label.
     */
    private $news_label;

    /**
     * @var list_news The list of news items.
     */
    private $list_news;

    /**
     * Constructor for the news class.
     *
     * @param news_label $news_label The news label.
     * @param list_news $list_news The list of news items.
     */
    public function __construct(string $news_label, array $list_news) {
        $this->news_label = $news_label;
        $this->list_news = $list_news;
    }

    /**
     * Exports data for use in a template.
     *
     * @param renderer_base $output The renderer base.
     * @return array The datas to be used in the two templates : list_news & news_label.
     */
    public function export_for_template(renderer_base $output) {
        return [
            'content' => $this->news_label,
            'newsitems' => $this->list_news,
        ];
    }
}
