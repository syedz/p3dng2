import template from './progressbar.html';
import controller from './progressbar.controller.js';

let goatsListingComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'barctrl'
};

export default goatsListingComponent;
