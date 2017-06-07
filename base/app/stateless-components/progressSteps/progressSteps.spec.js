import GoatsListModule from './progressSteps'
import GoatsListController from './progressSteps.controller.js';
import GoatsListComponent from './progressSteps.component.js';
import GoatsListTemplate from './progressSteps.html';

describe('GoatsList', () => {
    let $rootScope, makeController;

    beforeEach(window.module(GoatsListModule.name));
    beforeEach(inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new GoatsListController();
        };
    }));

    describe('Template', () => {
        it('It renders the progressSteps directive', () => {
            expect(GoatsListTemplate).to.match(/progressSteps/g);
        });
    });

    describe('Component', () => {
        // component/directive specs
        let component = GoatsListComponent;

        it('includes the intended template',() => {
            expect(component.template).to.equal(GoatsListTemplate);
        });

        it('uses `controllerAs` syntax', () => {
            expect(component).to.have.property('controllerAs');
        });

        it('invokes the right controller', () => {
            expect(component.controller).to.equal(GoatsListController);
        });

        it('expose goats as one way input binding', () => {
            expect(component.bindings.goats).to.equal('<');
        });
    });
});
