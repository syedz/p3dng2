import template from './genericButton.html';
import controller from './genericButton.controller.js';
import './genericButton.scss';

let genericButtonComponent = {
  restrict: 'E',
  bindings: {
    buttonlabel: '@',
    buttoncolor: '@'
  },
  template,
  controller,
  controllerAs: 'btnCtrl'
};

export default genericButtonComponent;
