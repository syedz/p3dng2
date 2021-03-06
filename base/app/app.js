import angular      from 'angular';
import uiRouter     from 'angular-ui-router';
import AppComponent from './app.component';

import HomeComponent from './pages/home/home';
import ProgressBarModule from './stateful-components/progressbar/progressbar';
import PropertiesService from './services/PropertiesService';

// import our default styles for the whole application
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

angular
    .module('app', [
        uiRouter,

        ProgressBarModule.name,
        HomeComponent.name
    ])
    .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
        "ngInject";

        // Define our app routing, we will keep our layout inside the app component
        // The layout route will be abstract and it will hold all of our app views
        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                template: '<app></app>'
            });

        $urlRouterProvider.otherwise('/app/home');
    })
    .component('app', AppComponent)
    .factory('PropertiesService', PropertiesService);
