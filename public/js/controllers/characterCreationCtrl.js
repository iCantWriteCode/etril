app.controller('characterCreationCtrl', function ($scope, $location) {

    $scope.step = 1

    $scope.finishCharacterCreation = (data) => {
        console.log(data)
        $location.url('/user-page')
    }
    $scope.classChoise = (playerClass) => {
        $scope.playerClass = playerClass
        $scope.selectedClass = getClassByType(playerClass)
        console.log($scope.selectedClass)
        $scope.characterCreationStep(2)
    }
    $scope.characterCreationStep = (step) => {
        $scope.step = step
    }



    let characterClasses = [
        {
            type: 'Shamadji Teca',
            img: '/images/character-creation/classes/1. Shamadji_Teca_template.png',
            vitality: 1,
            power: 3,
            mobility: 2,
            teamwork: 5,
            description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloremque officia corporis eligendi enim
            mollitia similique id? Inventore a cupiditate id illo aperiam perferendis, libero dolore dolorum
            perspiciatis sed facilis.`

        },
        {
            type: 'Shamadji Roht'
        },
        {
            type: 'Urugar'
        },
        {
            type: 'Human'
        },
        {
            type: 'Vampire'
        },
        {
            type: 'Black Chotgor'
        },
        {
            type: 'Red Chotgor'
        },
        {
            type: 'Gargoyle'
        },
        {
            type: 'Grepter'
        }
    ]

    getClassByType = (param) => {
        return characterClasses.filter((characterClass) => characterClass.type === param);
    }


})

