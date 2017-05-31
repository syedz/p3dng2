import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import NavigationComponent from './components/navigation/navigation';
import HomeComponent from './components/home/home';
import 'normalize.css';

// import our default styles for the whole application
import 'bootstrap/dist/css/bootstrap.css';

angular.module('app', [
    uiRouter,
    Common,
    Components
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
          })

          // Dashboard page to contain our goats list page
          .state('app.home', {
              url: '/home',
              template: '<home></home>'
              //template: 'Home page'
          })

          // Create route for our goat listings creator
          .state('app.create', {
              url: '/create',
              template: 'Create Page'
          });

   // Default page for the router
   $urlRouterProvider.otherwise('/app/home');
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
