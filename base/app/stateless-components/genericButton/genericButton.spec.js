import GenericButtonModule from './genericButton'
import GenericButtonController from './genericButton.controller.js';
import GenericButtonComponent from './genericButton.component.js';
import GenericButtonTemplate from './genericButton.html';

describe('BackButton', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GenericButtonModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GenericButtonController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(GenericButtonTemplate).to.match(/{{\s?vm\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = GenericButtonComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(GenericButtonTemplate);
      });

      it('uses `controllerAs` syntax', () => {
        expect(component).to.have.property('controllerAs');
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GenericButtonController);
      });
  });
});
