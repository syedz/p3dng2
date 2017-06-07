import angular from 'angular';
import uiRouter from 'angular-ui-router';
import genericButtonComponent from './genericButton.component.js';

const genericButtonModule = angular.module('backButton', [
  uiRouter
])

.component('genericButton', genericButtonComponent);

export default genericButtonModule;
