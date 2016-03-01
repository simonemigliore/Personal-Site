/**
 * Created by Simone on 29/02/2016.
 */
angular.module('SmrWebSite.Main',  ['pascalprecht.translate'])

    .controller('MainCtrl', function($scope) {
        $scope.email = "simone.migliore@gmail.com";
        $scope.cv_path="#";
        $scope.youtube_path="#";

        //Social Links
        $scope.facebook = "https://www.facebook.com/simone.migliore.395";
        $scope.twitter = "https://twitter.com/MegaMiglio";
        $scope.google = "https://plus.google.com/u/0/+SimoneMigliore/posts";
        $scope.linkedin = "https://www.linkedin.com/in/simone-migliore-2364524b?trk=hp-identity-name";

    })

    .config(function($translateProvider){
        $translateProvider
            .translations('it', {
                //Main menu
                home:'Home',
                about:"Sul mio conto",
                resume:"Resume",
                skills:"Competenze",
                works:"Il mio lavoro",
                blog:"Blog",
                contact:"Contatti",

                //Banner Slogan
                banner_title:"Simone Migliore",
                banner_SubTitle1:"Full-Stack",
                banner_SubTitle2:"Developer",
                banner_paragraph1:"I am a fully professional freelance creative User Interface Designer &amp; Developer",
                banner_paragraph2:"Involving with latest web designing and technologies is a great",
                banner_paragraph3:"feel free to contact creative.",


                //about Section
                about_title:"Su di me...",
                about_name_label:"Nome:",
                about_name_value:"Simone",
                about_date_of_bird_label:"Nato il",
                about_date_of_bird_value:"15/01/1985",
                about_address_label:"Città:",
                about_address_value:"Petralia Sottana - Palermo",
                about_nationality_label:"Nazionalità",
                about_nationality_value:"Italiana",
                about_phone_label:"Telefono:",
                about_phone_value:"327 6192127",
                about_email_label:"Email:",

                about_section1_title:"Obiettivi",
                about_section1_description1:"Sono nato in Sicilia, classe 1985, Laurea in Ingegneria Informatica presso l'Università di Palermo. Appassionato di pallavolo, DJ nel tempo libero e 'web addicted'. La prima vera esperienza lavorativa all'età di 17 anni, lavorando presso gli uffici della comunità europea a Bruxelles. Dal 2003 al 2011, come animatore turistico in Tunisia e Sharm el-Sheik, Dj e Sviluppatore Web Freelance per riuscire a pagare gli studi universitari. Dopo aver conseguito la laurea, ho trovato lavoro a Milano dove ho vissuto due anni prima di trasferirmi a Londra. Rientrato in Italia, ho maturato diverse esperienze in ambito Cloud.",
                about_section1_description2:"Ogni singola esperienza lavorativa, ha contribuito a migliorare ogni sfaccettatura del mio profilo professionale. Ho avuto modo di relazionarmi con persone provenienti da ogni parte del mondo e che operano e rivestono ruoli diversi nella società. L'ambito eterogeneo delle esperienze lavorative (Bancario, Trasporti, Militare, Governativo, Consulenza, Sistemistico, Privato) e la complessità dei progetti svolti hanno notevolmente migliorato le mie competenze di interfacciamento con il personale garantendo professionailtà, sintesi ed efficacia. L'esperienza in Gran Bretagna e i progetti all'estero hanno ulteriormente migliorato l'aspetto della lingua Inglese, ampliato il bagaglio strategico nella gestione dei progetti, gestione vendite ed organizzazione del lavoro.",

                about_section2_title:"Cosa faccio...",
                about_section2_description:"Attualmente mi occupo dello sviluppo di soluzioni Cloud su piattaforma Google. ",

                about_list_1:"User Experience Design",
                about_list_2:"Interface Design",
                about_list_3:"Product Design",
                about_list_4:"Branding Design",
                about_list_5:"Digital Painting",
                about_list_6:"Video Editing",

                about_send_message_button:"Invia un messaggio",
                about_cv_button:"Scarica il mio CV",

                //Video Section
                video_title:"Video Introducing",

                //Resume Section
                resume_title:"Sommario",
                resume_section1_title:"Educazione",




                //mywork Section
                mywork_title:"Il mio Lavoro",

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
                mywork:"Il mio lavoro",
                about:"Sul mio conto",
                skills:"Competenze",
                contact:"Contatti",

                //Banner Slogan
                banner_title:"Simone Migliore",
                banner_SubTitle1:"Full-Stack",
                banner_SubTitle2:"Developer",
                banner_paragraph1:"I am a fully professional freelance creative User Interface Designer &amp; Developer",
                banner_paragraph2:"Involving with latest web designing and technologies is a great",
                banner_paragraph3:"feel free to contact creative.",

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
            });
        $translateProvider.preferredLanguage('it');
    });
