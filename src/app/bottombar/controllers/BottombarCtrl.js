angular.module('bottombar.controllers.BottombarCtrl', [])
  .controller('BottombarCtrl', function($state, $scope) {

    // Go to the 'about' state which shows the about page content.
    $scope.showAboutPage = function(){
      $state.go('about');
    };
  });
