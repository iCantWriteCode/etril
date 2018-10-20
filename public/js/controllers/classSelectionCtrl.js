app.controller('classSelectionCtrl', function ($scope, $location, $racesService) {
    console.log('class Selection')
    $scope.playerRace = (data) => {
        localStorage.setItem('playerClass', data)
        $location.url(`/subclass-selection`)
    }

});