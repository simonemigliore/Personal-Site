/**
 * Created by Simone on 29/02/2016.
 */
angular.module('SmrWebSite.Main',  ['pascalprecht.translate','ngMaterial'])

    .controller('MainCtrl', function($scope, $rootScope) {
        $scope.email = "simone.migliore@gmail.com";
        $scope.name="";

    })

    .config(function($translateProvider){
        $translateProvider
            .translations('it', {
                //Main menu
                home:'Home',
                mywork:"Il mio lavoro",
                about:"Sul mio conto",
                skills:"Competenze",
                contact:"Contatti",

                //Banner Slogan
                bannerSubTitle:"Sviluppatore Web",

                //mywork Section
                mywork_title:"Il mio Lavoro",

                //about Section
                about_title:"Su di me...",
                about_paragraph_left:"Sono nato in Sicilia, classe 1985, Laurea in Ingegneria Informatica presso l'Università di Palermo. Appassionato di pallavolo, DJ nel tempo libero e 'web addicted'. La prima vera esperienza lavorativa all'età di 17 anni, lavorando presso gli uffici della comunità europea a Bruxelles. Dal 2003 al 2011, come animatore turistico in Tunisia e Sharm el-Sheik, Dj e Sviluppatore Web Freelance per riuscire a pagare gli studi universitari. Dopo aver conseguito la laurea, ho trovato lavoro a Milano dove ho vissuto due anni prima di trasferirmi a Londra. Rientrato in Italia, ho maturato diverse esperienze in ambito Cloud. <br>Attualmente mi occupo dello sviluppo di soluzioni web su piattaforma Google.",
                about_paragraph_right:"Ogni singola esperienza lavorativa, ha contribuito a migliorare ogni sfaccettatura del mio profilo professionale. Ho avuto modo di relazionarmi con persone provenienti da ogni parte del mondo e che operano e rivestono ruoli diversi nella società. L'ambito eterogeneo delle esperienze lavorative (Bancario, Trasporti, Militare, Governativo, Consulenza, Sistemistico, Privato) e la complessità dei progetti svolti hanno notevolmente migliorato le mie competenze di interfacciamento con il personale garantendo professionailtà, sintesi ed efficacia. L'esperienza in Gran Bretagna e i progetti all'estero hanno ulteriormente migliorato l'aspetto della lingua Inglese, ampliato il bagaglio strategico nella gestione dei progetti, gestione vendite ed organizzazione del lavoro.",

                //Skill Section
                skill_title:"Competenze",
                skill_subTitle:"Tecnologie adottate durante il mio percorso lavorativo",

                //Contact Section
                contact_title:"Contatti",
                contact_sendMessage:"Invia Messaggio",

                //Info Section
                info_location:"Dove mi trovo",
                info_city:"Milano - Italia",
                info_subLocationDescription:"If you require any further information, please contact me at",
                info_right_panel_title:"About Freelancer",
                info_right_panel_description:"I'm a Freelancer, a Milan based freelance web developer and designer. I passionately move pixels and lines of code to craft clean, responsive, and user-friendly websites.",
                info_socialTitle:"Social Links"
            })
            .translations('en', {
                //Main menu
                home:'Home',
                mywork:"My Work",
                about:"About",
                skills:"Skill",
                contact:"Contact",

                //Banner Slogan
                bannerSubTitle:"Full-Stack Web Developer",

                //mywork Section
                mywork_title:"Il mio Lavoro",

                //about Section
                about_title:"Su di me...",
                about_paragraph_left:"Sono nato in Sicilia, classe 1985, Laurea in Ingegneria Informatica presso l'Università di Palermo. Appassionato di pallavolo, DJ nel tempo libero e 'web addicted'. La prima vera esperienza lavorativa all'età di 17 anni, lavorando come 'maitenance man' a Bruxelles. Dal 2003 al 2011, come animatore turistico in Tunisia e Sharm el-Sheik, Dj e Sviluppatore Web Freelance per riuscire a pagare gli studi universitari. Dopo aver conseguito la laurea, ho trovato lavoro a Milano dove ho vissuto due anni prima di trasferirmi a Londra. Rientrato in Italia, ho maturato diverse esperienze in ambito Cloud. <br>Attualmente mi occupo dello sviluppo di soluzioni web su piattaforma Google.",
                about_paragraph_right:"Ogni singola esperienza lavorativa, ha contribuito a migliorare ogni sfaccettatura del mio profilo professionale. Ho avuto modo di relazionarmi con persone provenienti da ogni parte del mondo e che operano e rivestono ruoli diversi nella società. L'ambito eterogeneo delle esperienze lavorative (Bancario, Trasporti, Militare, Governativo, Consulenza, Sistemistico, Privato) e la complessità dei progetti svolti hanno notevolmente migliorato le mie competenze di interfacciamento con il personale garantendo professionailtà, sintesi ed efficacia. L'esperienza in Gran Bretagna e i progetti all'estero hanno ulteriormente migliorato l'aspetto della lingua Inglese, ampliato il bagaglio strategico nella gestione dei progetti, gestione vendite ed organizzazione del lavoro.",

                //Skill Section
                skill_title:"Competenze",
                skill_subTitle:"A brief recap about competences and skills gained during my work experiences"
            });
        $translateProvider.preferredLanguage('it');
    });
