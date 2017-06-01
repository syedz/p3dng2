import angular                  from 'angular';
import homeComponent            from './home.component';
import GoatsListingComponent    from '../../containers/goatsListing/goatsListing';

let homeModule = angular.module('home', [
    GoatsListingComponent.name
])

.config(($stateProvider) => {
    "ngInject";

    // Define our home page routing
    $stateProvider
        // Dashboard page to contain our goats list page
        .state('app.home', {
            url: '/home',
            template: '<home></home>'
        });
})

.component('home', homeComponent);

export default homeModule;
