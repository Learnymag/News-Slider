var globalNewsSettngsDatas;

M.block_newsslider = {
    init: function (Y, clr, cycle) {
        globalNewsSettngsDatas = [clr, cycle];
    }
}

$(document).ready(function () {

    // Vérification qu'on se trouve bien sur la page du tableau de bord
    if (window.location.href.indexOf("/my") != -1) {

        // Récupération du nombre d'actualités renseignées
        const nbNews = $(`#actualitesList li`).length;

        // Affichage de ce nombre
        //console.log(nbNews);

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

        $("#dotContainer").html(dots);

        // Initialisation de notre booléen permettant de voir si l'utilisateur a cliqué ou non sur nos petit points de navigation
        let dotClicked = false;

        // Notre fonction regroupant toute notre jauge, qui s'appellera elle-même. 
        // Le fait de la mettre entre parenthèse lance la fonction dès que possible
        (function loop() {

            // Timer qui se relancera après 11 secondes
            newsLoop = setTimeout(() => {

                //console.log(`En entrant dans la boucle, la valeur de nbNews : ${nbNews} & la valeur d'activeNews : ${activeNews}`);

                // Condition pour vérifier que nous ne sommes pas sur la dernière news de la liste
                if (activeNews < nbNews) {

                    // S'il y a déjà eu une boucle, on retire la classe permettant l'animation de disparition de notre texte (catégorie + titre)
                    if ($(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).hasClass(`glideDisappear`)) { $(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).removeClass(`glideDisappear`); }
                    // On ajoute notre classe pour animer l'apparition de notre texte
                    $(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).addClass(`glideAppear`);

                    // On modifie l'état de notre point liée a l'activité qui vient de finir de s'afficher afin de le passer en activité "sélectionnée/affichée"
                    if($(`#dotContainer span.dots:nth-child(${activeNews})`).hasClass('grey') && $(`#dotContainer span.dots:nth-child(${activeNews})`).hasClass('sml')) {

                        $(`#dotContainer span.dots:nth-child(${activeNews})`).removeClass('grey');
                        $(`#dotContainer span.dots:nth-child(${activeNews})`).removeClass('sml');
                    }
                    $(`#dotContainer span.dots:nth-child(${activeNews})`).addClass('green').css({'background-color' : globalNewsSettngsDatas[0]});
                    $(`#dotContainer span.dots:nth-child(${activeNews})`).addClass('lrg');

                    // On défini qu'une fois 11 secondes écoulées on lancera ce qui suit
                    setTimeout(() => {

                        // On enlève notre classe liée à l'animation d'apprition du texte
                        $(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).removeClass(`glideAppear`);
                        // On ajoute celle liée à la disparition afin de lancer par la même l'animation souhaitée
                        $(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).addClass(`glideDisappear`);

                        // On modifie l'état de notre point liée a l'activité qui vient de finir de s'afficher afin de le passer en activité "autre que sélectionnée"
                        if($(`#dotContainer span.dots:nth-child(${activeNews})`).hasClass('green') && $(`#dotContainer span.dots:nth-child(${activeNews})`).hasClass('lrg')) {

                            $(`#dotContainer span.dots:nth-child(${activeNews})`).removeClass('green');
                            $(`#dotContainer span.dots:nth-child(${activeNews})`).removeClass('lrg');
                        }    
                        $(`#dotContainer span.dots:nth-child(${activeNews})`).addClass('grey').css({'background-color' : '#a9a9a9'});
                        $(`#dotContainer span.dots:nth-child(${activeNews})`).addClass('sml');  
                        
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
                            // On change ajoute +1 à notre inde d'actualité afin de passer à la news suivante
                            activeNews++;
                        }

                    }, parseInt(globalNewsSettngsDatas[1]));                    

                    //console.log(`Fin condition (activeNews <= nbNews) => La valeur de nbNews : ${nbNews} & la valeur d'activeNews : ${activeNews}`);
                
                // Si nous sommes sur la dernière news de la liste
                } else if (activeNews === nbNews) {

                    // On vérifie de nouveau s'il y a eu déjà d'autre(s) boucle(s) auparavant pour enlever ce qui pourrait nuir à la bonne animation de notre élément texte
                    if ($(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).hasClass(`glideDisappear`)) { $(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).removeClass(`glideDisappear`); }
                    // On fait apparaitre notre texte
                    $(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).addClass(`glideAppear`);

                    // On passe notre point pour ajouter le feedback de positionnement de l'actu en activité "sélectionné/affichée"
                    if($(`#dotContainer span.dots:nth-child(${activeNews})`).hasClass('grey') && $(`#dotContainer span.dots:nth-child(${activeNews})`).hasClass('sml')) {

                        $(`#dotContainer span.dots:nth-child(${activeNews})`).removeClass('grey')
                        $(`#dotContainer span.dots:nth-child(${activeNews})`).removeClass('sml')
                    }
                    $(`#dotContainer span.dots:nth-child(${activeNews})`).addClass('green').css({'background-color' : globalNewsSettngsDatas[0]});
                    $(`#dotContainer span.dots:nth-child(${activeNews})`).addClass('lrg');

                    // On défini qu'une fois 11 secondes écoulées on lancera ce qui suit
                    setTimeout(() => {

                        // On enlève notre classe liée à l'animation d'apprition du texte
                        $(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).removeClass(`glideAppear`);
                        // On ajoute celle liée à la disparition afin de lancer par la même l'animation souhaitée
                        $(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).addClass(`glideDisappear`);

                        // On modifie l'état de notre point liée a l'activité qui vient de finir de s'afficher afin de le passer en activité "autre que sélectionnée"
                        if($(`#dotContainer span.dots:nth-child(${activeNews})`).hasClass('green') && $(`#dotContainer span.dots:nth-child(${activeNews})`).hasClass('lrg')) {

                            $(`#dotContainer span.dots:nth-child(${activeNews})`).removeClass('green')
                            $(`#dotContainer span.dots:nth-child(${activeNews})`).removeClass('lrg')
                        }    
                        $(`#dotContainer span.dots:nth-child(${activeNews})`).addClass('grey').css({'background-color' : '#a9a9a9'});
                        $(`#dotContainer span.dots:nth-child(${activeNews})`).addClass('sml');

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
                            // On réinitialise pour la prochaine boucle la prochaine news à afficher, c'est à dire la première de la liste
                            activeNews = 1;
                        }

                    }, parseInt(globalNewsSettngsDatas[1]));                    

                    //console.log(`Fin condition autre => La valeur de nbNews : ${nbNews} & la valeur d'activeNews : ${activeNews}`);

                }

                // On boucle ici tout notre processus pour parcourir de nouveau toutes nos actualités
                loop();

            }, parseInt(globalNewsSettngsDatas[1]));
        })();

        // On va gérer ici le clic sur nos petits points
        $('#dotContainer span.dots').click(function (e) {

            // On empêchece clic influencé une autre anim
            e.preventDefault();

            // On arrête notre timer permettant la création de notre infobulle
            //clearTimeout(newsLoop);
            // On le vide de son potentiel contenu
            //newsLoop = null;

            //console.log($(this).attr("data-news"));

            // On enlève notre classe liée à l'animation d'apparition du texte
            $(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).removeClass(`glideAppear`);
            // On ajoute celle liée à la disparition afin de lancer par la même l'animation souhaitée
            $(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).addClass(`glideDisappear`);

            // Etant donné que nous n'avons pas encore modifié "activeNews", il s'agit donc de l'actualité actuellement affichée.
            // On va donc passer le point représentant sa position parmi nos autres actualité comme une actualité autre que celle sélectionnée 
            if($(`#dotContainer span.dots:nth-child(${activeNews})`).hasClass('green') && $(`#dotContainer span.dots:nth-child(${activeNews})`).hasClass('lrg')) {

                $(`#dotContainer span.dots:nth-child(${activeNews})`).removeClass('green');
                $(`#dotContainer span.dots:nth-child(${activeNews})`).removeClass('lrg');
            }
            $(`#dotContainer span.dots:nth-child(${activeNews})`).addClass('grey').css({'background-color' : '#a9a9a9'});
            $(`#dotContainer span.dots:nth-child(${activeNews})`).addClass('sml');

            // On change enfin "activeNews" en reprenant la donnée affiliée à notre point : le numéro de l'actualité que nous voulons voir
            activeNews = parseInt($(this).attr("data-news"));
            
            // S'il y a déjà eu une boucle, on retire la classe permettant l'animation de disparition de notre texte (catégorie + titre)
            if ($(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).hasClass(`glideDisappear`)) { $(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).removeClass(`glideDisappear`); }
            // On ajoute notre classe pour animer l'apparition de notre texte
            $(`#actualitesList li.actualitesListItem:nth-child(${activeNews})`).addClass(`glideAppear`);

            // On passe notre point comme représentant notre activité actuellement affichée
            if($(`#dotContainer span.dots:nth-child(${activeNews})`).hasClass('grey') && $(`#dotContainer span.dots:nth-child(${activeNews})`).hasClass('sml')) {

                $(`#dotContainer span.dots:nth-child(${activeNews})`).removeClass('grey');
                $(`#dotContainer span.dots:nth-child(${activeNews})`).removeClass('sml');
            }
            $(`#dotContainer span.dots:nth-child(${activeNews})`).addClass('green').css({'background-color' : globalNewsSettngsDatas[0]});
            $(`#dotContainer span.dots:nth-child(${activeNews})`).addClass('lrg');

            // On change notre booléen pour savoir si oui ou non l'utilisateur a utilisé un de nos points
            dotClicked = true;
        });

        // Modification de la couleur principale à partir de celle receuillie des paramètres.
        $('section[data-block=lynews] .card-body .card-text .actualitesIcon, '
            +'section[data-block=lynews] .card-body .card-text #dotContainer .dots.green, '
            +'section[data-block=lynews] .card-body .card-text #dotContainer .dots.green:hover').css({'background-color' : globalNewsSettngsDatas[0]});
            
        $('section[data-block=lynews] .card-body .card-text #actualitesList .actualitesListItem:hover, '
            +'section[data-block=lynews] .card-body .card-text #actualitesList .actualitesListItem .actualitesCategories').css({'color' : globalNewsSettngsDatas[0]});

        $('section[data-block=lynews] .card-body .card-text #actualitesList .actualitesListItem').hover(function () {
                // over
                $(this).css({'text-decoration' : 'underline','color' : globalNewsSettngsDatas[0]});
            }, function () {
                // out
                $(this).css({'text-decoration' : 'none','color' : 'initial'});
            }
        );
    }
});