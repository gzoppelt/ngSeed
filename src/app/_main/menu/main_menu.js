angular.module('main_menu', [
        'ui.router'
    ])
    .controller('MenuController', function() {
        var cMenu = this;
        cMenu.title = 'ngSeed';
        cMenu.pages = [
            {link: '#/use_case_1', text: 'Use Case 1'}
        ];
    })