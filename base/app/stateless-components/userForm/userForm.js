import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userFormComponent from './userForm.component';

const userFormModule = angular.module('userForm', [
  uiRouter
])

.component('userForm', userFormComponent);

export default userFormModule;
