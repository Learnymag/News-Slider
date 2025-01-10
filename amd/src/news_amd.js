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
 * @module     block_newsslider/news_amd
 * @author     BORNET Stéphen.
 * @copyright  2024 YMAG info@ymag.fr https://www.ymag.fr/
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

define([], function () {

    let globalNewsSettngsDatas = [];

    const init = (clr, cycle) => {

        globalNewsSettngsDatas.push(clr);
        globalNewsSettngsDatas.push(cycle);

        // Récupération du nombre d'actualités renseignées
        const nbNews = document.querySelectorAll(`#actualitesList li`).length;

        // Initialisation variables
        // Numéro de l'actualité active initialement
        var activeNews = 1;

        // Initialisation de la chaine de caractère qui contiendra nos éléments HTML
        let dots = ``;

        // Pour chacune des actualités, tant qu'on ne dépasse pas le nobre total d'actu
        for (var i = 1; i <= nbNews; i++) {

            // pour notre première actualité
            if (i === 1) {
                // On créé notre point en lui assignant les classes permettant l'affichage d'actualité active
                dots += `<span class="dots green lrg" data-news="${i}"></span>`;
            }else{
                // On créé notre point en lui assignant les classes permettant l'affichage d'actualité inactive
                dots += `<span class="dots grey sml" data-news="${i}"></span>`;
            }
        }

        document.getElementById("dotContainer").innerHTML = dots;

        document.querySelector('#dotContainer .dots.green').style.backgroundColor = globalNewsSettngsDatas[0];
        //document.querySelector('#dotContainer .dots.green:hover').style.backgroundColor = globalNewsSettngsDatas[0];

        // Initialisation de notre booléen permettant de voir si l'utilisateur a cliqué ou non sur nos petit points de navigation
        let dotClicked = false;

        // On va gérer ici le clic sur nos petits points
        document.querySelectorAll('#dotContainer span.dots').forEach(function(dot) {
            dot.addEventListener('click', function(e) {
                // On empêchece clic influencé une autre anim
                e.preventDefault();

                // On enlève notre classe liée à l'animation d'apparition du texte & on ajoute celle liée à la disparition afin de lancer par la même l'animation souhaitée
                document.querySelector(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).classList.remove(`glideAppear`);
                document.querySelector(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).classList.add(`glideDisappear`);

                // Etant donné que nous n'avons pas encore modifié "activeNews", il s'agit donc de l'actualité actuellement affichée.
                // On va donc passer le point représentant sa position parmi nos autres actualité comme une actualité autre que celle sélectionnée
                if(document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.contains('green') && document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.contains('lrg')) {

                    document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.remove('green');
                    document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.remove('lrg');
                }
                document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.add('grey')
                document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.add('sml')
                document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).style.backgroundColor = '#a9a9a9';

                // On change enfin "activeNews" en reprenant la donnée affiliée à notre point : le numéro de l'actualité que nous voulons voir
                activeNews = parseInt(this.getAttribute("data-news"));

                // S'il y a déjà eu une boucle, on retire la classe permettant l'animation de disparition de notre texte (catégorie + titre)
                if (document.querySelector(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).classList.contains(`glideDisappear`)) { document.querySelector(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).classList.remove(`glideDisappear`); }
                // On ajoute notre classe pour animer l'apparition de notre texte
                document.querySelector(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).classList.add(`glideAppear`);

                // On passe notre point comme représentant notre activité actuellement affichée
                if(document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.contains('grey') && document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.contains('sml')) {

                    document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.remove('grey');
                    document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.remove('sml');
                }
                document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.add('green');
                document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.add('lrg');
                document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).style.backgroundColor = globalNewsSettngsDatas[0];

                // On change notre booléen pour savoir si oui ou non l'utilisateur a utilisé un de nos points
                dotClicked = true;
            }, false)
        });

        // Modification de la couleur principale à partir de celle receuillie des paramètres.
        document.querySelector('#newsLabelContent .actualitesIcon').style.backgroundColor = globalNewsSettngsDatas[0];
        document.querySelector('section[data-block=newsslider] .card-body .card-text #dotContainer .dots.green').style.backgroundColor = globalNewsSettngsDatas[0];
        //document.querySelector('section[data-block=newsslider] .card-body .card-text #dotContainer .dots.green:hover').style.backgroundColor = globalNewsSettngsDatas[0];

        //document.querySelector('#actualitesList .actualitesListItem:hover').style.color = globalNewsSettngsDatas[0];
        document.querySelector('#actualitesList .actualitesListItem .actualitesCategories').style.color = globalNewsSettngsDatas[0];

        document.querySelectorAll('#actualitesList .actualitesListItem').forEach(function(itm) {
            itm.addEventListener('hover', function() {
                    // over
                    this.style.textDecoration = 'underline';
                    this.style.color = globalNewsSettngsDatas[0];
                }, function () {
                    // out
                    this.style.textDecoration = 'none';
                    this.style.color = 'initial';
                }
            )
        });
    };

    // Notre fonction regroupant toute notre jauge, qui s'appellera elle-même.
    // Le fait de la mettre entre parenthèse lance la fonction dès que possible
    const loop = function() {

        // Timer qui se relancera après 11 secondes
        newsLoop = setTimeout(() => {

            //console.log(`En entrant dans la boucle, la valeur de nbNews : ${nbNews} & la valeur d'activeNews : ${activeNews}`);

            // Condition pour vérifier que nous ne sommes pas sur la dernière news de la liste
            if (activeNews < nbNews) {

                // S'il y a déjà eu une boucle, on retire la classe permettant l'animation de disparition de notre texte (catégorie + titre)
                if (document.querySelector(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).classList.contains(`glideDisappear`)) { document.querySelector(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).classList.remove(`glideDisappear`); }
                // On ajoute notre classe pour animer l'apparition de notre texte
                document.querySelector(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).classList.add(`glideAppear`);

                // On modifie l'état de notre point liée a l'activité qui vient de finir de s'afficher afin de le passer en activité "sélectionnée/affichée"
                if(document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.contains('grey') && document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.contains('sml')) {

                    document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.remove('grey');
                    document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.remove('sml');
                }
                document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.add('green');
                document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.add('lrg');
                document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).style.backgroundColor = globalNewsSettngsDatas[0];

                // On défini qu'une fois 11 secondes écoulées on lancera ce qui suit
                setTimeout(() => {

                    // On enlève notre classe liée à l'animation d'apprition du texte & on ajoute celle liée à la disparition afin de lancer par la même l'animation souhaitée
                    document.querySelector(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).classList.remove(`glideAppear`);
                    document.querySelector(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).classList.add(`glideDisappear`);

                    // On modifie l'état de notre point liée a l'activité qui vient de finir de s'afficher afin de le passer en activité "autre que sélectionnée"
                    if(document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.contains('green') && document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.contains('lrg')) {

                        document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.remove('green');
                        document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.remove('lrg')

                    }
                    document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.add('grey');
                    document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.add('sml');
                    document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).style.backgroundColor = '#a9a9a9';

                    // Si l'utilisateur a cliqué
                    if(dotClicked === true){
                        // Si le chiffre d'identification de notre actu est plus grand ou égale au nombre d'actus total
                        if (activeNews >= nbNews){
                            // On réinitialise pour la prochaine boucle la prochaine news à afficher, c'est à dire la première de la liste
                            activeNews = 1;
                            // On repasse notre booléen en false pour permettre de capter les prochains clics de l'utilisateur
                            dotClicked = false;

                            // Dans tous les cas où le chiffre est plus petit
                        } else {
                            // On change ajoute +1 à notre inde d'actualité afin de passer à la news suivante
                            activeNews++;
                            // On repasse notre booléen en false pour permettre de capter les prochains clics de l'utilisateur
                            dotClicked = false;
                        }

                        // Si l'utilisateur n'a pas cliqué, on suit le processus normal
                    }else{
                        // On change ajoute +1 à notre index d'actualité afin de passer à la news suivante
                        activeNews++;
                    }

                }, parseInt(globalNewsSettngsDatas[1]));

                //console.log(`Fin condition (activeNews <= nbNews) => La valeur de nbNews : ${nbNews} & la valeur d'activeNews : ${activeNews}`);

                // Si nous sommes sur la dernière news de la liste
            } else if (activeNews === nbNews) {

                // On vérifie de nouveau s'il y a eu déjà d'autre(s) boucle(s) auparavant pour enlever ce qui pourrait nuir à la bonne animation de notre élément texte
                if (document.querySelector(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).classList.contains(`glideDisappear`)) { document.querySelector(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).classList.remove(`glideDisappear`); }
                // On fait apparaitre notre texte
                document.querySelector(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).classList.add(`glideAppear`);

                // On passe notre point pour ajouter le feedback de positionnement de l'actu en activité "sélectionné/affichée"
                if(document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.contains('grey') && document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.contains('sml')) {

                    document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.remove('grey');
                    document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.remove('sml');
                }
                document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.add('green')
                document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.add('lrg')
                document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).style.backgroundColor = globalNewsSettngsDatas[0];


                // On défini qu'une fois 11 secondes écoulées on lancera ce qui suit
                setTimeout(() => {

                    // On enlève notre classe liée à l'animation d'apprition du texte & on ajoute celle liée à la disparition afin de lancer par la même l'animation souhaitée
                    document.querySelector(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).classList.remove(`glideAppear`);
                    document.querySelector(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).classList.add(`glideDisappear`);

                    // On modifie l'état de notre point liée a l'activité qui vient de finir de s'afficher afin de le passer en activité "autre que sélectionnée"
                    if(document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.contains('green') && document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.contains('lrg')) {

                        document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.remove('green');
                        document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.remove('lrg');
                    }
                    document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.add('grey');
                    document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).classList.add('sml');
                    document.querySelector(`#dotContainer span.dots:nth-child(${activeNews})`).style.backgroundColor = '#a9a9a9';

                    // Si l'utilisateur a cliqué
                    if(dotClicked === true){
                        // Si le chiffre d'identification de notre actu est plus grand ou égale au nombre d'actus total
                        if (activeNews >= nbNews){
                            // On réinitialise pour la prochaine boucle la prochaine news à afficher, c'est à dire la première de la liste
                            activeNews = 1;
                            // On repasse notre booléen en false pour permettre de capter les prochains clics de l'utilisateur
                            dotClicked = false;

                            // Dans tous les cas où le chiffre est plus petit
                        } else {
                            // On change ajoute +1 à notre index d'actualité afin de passer à la news suivante
                            activeNews++;
                            // On repasse notre booléen en false pour permettre de capter les prochains clics de l'utilisateur
                            dotClicked = false;
                        }

                        // Si l'utilisateur n'a pas cliqué, on suit le processus normal
                    }else{
                        // On réinitialise pour la prochaine boucle la prochaine news à afficher, c'est à dire la première de la liste
                        activeNews = 1;
                    }

                }, parseInt(globalNewsSettngsDatas[1]));

                //console.log(`Fin condition autre => La valeur de nbNews : ${nbNews} & la valeur d'activeNews : ${activeNews}`);

            }

            // On boucle ici tout notre processus pour parcourir de nouveau toutes nos actualités
            loop();

        }, parseInt(globalNewsSettngsDatas[1]));

    };

    return {
        init: function (clr, cycle) {
            init(clr, cycle);
        }
    };
});
