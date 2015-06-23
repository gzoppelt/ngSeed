//app.js
'use strict';
angular.module('ngSeed', [
        'ui.router',
        'templates-app',
        'main',
        'use_case_1'

    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                views: {
                    'menu': {
                        templateUrl: 'app/_main/menu/main_menu.html',
                        controller: 'MenuController as cMenu'
                    },
                    'main': {
                        templateUrl: 'app/_main/main.html',
                        controller: 'MainController as cMain'
                    },
                    'sub': {},
                    'footer': {
                        templateUrl: 'app/_main/footer/main_footer.html',
                        controller: 'FooterController as cFooter'
                    }
                }
            })
        ;
        $urlRouterProvider
            .otherwise('/')
        ;
    })
;