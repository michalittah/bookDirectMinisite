describe('BottombarCtrl ', function () {

  var controller, scope;

  beforeEach(module('app.bottombar'));

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('BottombarCtrl', {
      $scope: scope
    });
  }));

});
