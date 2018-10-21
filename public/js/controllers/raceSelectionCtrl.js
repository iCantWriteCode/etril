app.controller('raceSelectionCtrl', function ($scope, $location, $racesService) {

    $scope.raceSelectionStep = 1
    $scope.races = $racesService.getAllRaces();
    // console.log($scope.races)

    $scope.racePreview = (data) => {
        $scope.raceSelectionStep = 2
        return $scope.choosenRace = $racesService.getOneRace(data)
    }

    $scope.playerRace = () => {
        // console.log($scope.choosenRace)
        localStorage.setItem("playerRace", JSON.stringify($scope.choosenRace))
        // console.log(localStorage)
        $location.url(`/class-selection`)
    }

    $scope.changeRaceSelectionStep = (data) => {
        $scope.raceSelectionStep = data
    }
})

