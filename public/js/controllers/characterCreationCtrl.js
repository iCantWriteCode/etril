app.controller('characterCreationCtrl', function ($scope, $location, $characterService) {

    $scope.step = 1

    $scope.finishCharacterCreation = (data) => {
        console.log(data)
        $location.url('/user-page')
    }
    $scope.classChoise = (playerClass) => {
        $scope.playerClass = playerClass
        $scope.selectedClass = $characterService.getOneCharacter(playerClass);
        console.log($scope.selectedClass)
        $scope.characterCreationStep(2)
    }
    $scope.characterCreationStep = (step) => {
        $scope.step = step
    }

    $scope.characters = $characterService.getAllCharacters();
    console.log($scope.characters)

})

