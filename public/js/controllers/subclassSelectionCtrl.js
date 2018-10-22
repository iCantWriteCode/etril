app.controller('subclassSelectionCtrl', function ($scope, $http, $location, $timeout) {

    if (!localStorage.getItem("playerRace") && !localStorage.getItem("playerClass")) return $location.url('/user-page')
    else {



        $scope.playerRace = JSON.parse(localStorage.getItem("playerRace"))
        $scope.roomId = localStorage.getItem("roomId")
        $scope.playerClass = localStorage.getItem("playerClass")


        $scope.calculateEnergy = () => {
            if ($scope.playerRace.race === 'Shamadji Teca' ||
                $scope.playerRace.race === 'Shamadji Roht' ||
                $scope.playerRace.race === 'Urugar') return $scope.playerEnergy = "White"
            else if ($scope.playerRace.race === 'Gargoyle' ||
                $scope.playerRace.race === 'Vampire' ||
                $scope.playerRace.race === 'Black Chotgor' ||
                $scope.playerRace.race === 'Red Chotgor' ||
                $scope.playerRace.race === 'Grepter') return $scope.playerEnergy = "Black"
            else return $scope.playerEnergy = "Mixed"
        }

        $scope.subclassesAvaliable = () => {
            if ($scope.playerEnergy === "White" && $scope.playerClass === "Knight") { $scope.avaliableClass1 = "Chevalier"; $scope.otherClass = "Rogue" }
            else if ($scope.playerEnergy === "Black" && $scope.playerClass === "Knight") { $scope.avaliableClass1 = "Rogue"; $scope.otherClass = "Chevalier" }
            else if ($scope.playerEnergy === "White" && $scope.playerClass === "Mage") { $scope.avaliableClass1 = "Scholar"; $scope.otherClass = "Plague Doctor" }
            else if ($scope.playerEnergy === "Black" && $scope.playerClass === "Mage") { $scope.avaliableClass1 = "Plague Doctor"; $scope.otherClass = "Scholar" }
            else if ($scope.playerEnergy = "Mixed" && $scope.playerClass === "Knight") {
                $scope.avaliableClass1 = "Chevalier"; $scope.avaliableClass2 = "Rogue"
            }
            else if ($scope.playerEnergy = "Mixed" && $scope.playerClass === "Mage") {
                $scope.avaliableClass1 = "Plague Doctor"; $scope.avaliableClass2 = "Scholar"
            }
            else if ($scope.playerClass === "Mercenary") {
                $scope.avaliableClass1 = "Rotier"; $scope.avaliableClass2 = "Sniper"
            }

        }

        let stats = {}
        $scope.calculateStats = (subclass) => {

            if ($scope.playerRace.race === 'Black Chotgor') {
                let stats = {
                    mobility: "2"
                }
                if (subclass === "Rogue") {
                    stats.power = "40"
                    stats.vitality = "10"
                    stats.teamwork = "15"
                }
                else if (subclass === "Sniper") {
                    stats.power = "40"
                    stats.vitality = "50"
                    stats.teamwork = "45"
                } else {
                    stats.power = "20"
                    stats.vitality = "50"
                    stats.teamwork = "15"
                }
                // console.log(stats)
                return stats
            }
            if ($scope.playerRace.race === 'Red Chotgor') {
                let stats = {
                    teamwork: "15"
                }
                if (subclass === "Routier") {
                    stats.vitality = "150"
                    stats.power = "60"
                    stats.mobility = "2"
                } else {
                    stats.vitality = "100"
                    stats.power = "20"
                    stats.mobility = "1"
                }
                // console.log(stats)
                return stats
            }
            if ($scope.playerRace.race === 'Gargoyle') {
                let stats = {
                    mobility: "2",
                }
                if (subclass === "Rogue" || subclass === "Sniper") {
                    stats.vitality = "50"
                    stats.power = "80"
                    stats.teamwork = "30"
                } else if (subclass === "Plague Doctor") {
                    stats.vitality = "150"
                    stats.teamwork = "45"
                    stats.power = "40"
                } else {
                    stats.vitality = "50"
                    stats.power = "20"
                    stats.teamwork = "15"
                }
                // console.log(stats)
                return stats
            }
            if ($scope.playerRace.race === 'Grepter') {
                let stats = {
                    // vitality: "1"
                }
                if (subclass === "Rogue") {
                    stats.power = "40"
                    stats.mobility = "3"
                    stats.teamwork = "15"
                    stas.vitality = "50"
                } else if (subclass === "Plague Doctor") {
                    stats.power = "40"
                    stats.mobility = "2"
                    stats.teamwork = "45"
                    stas.vitality = "100"
                } else {
                    stats.power = "20"
                    stats.mobility = "2"
                    stats.teamwork = "15"
                    stas.vitality = "50"
                }
                // console.log(stats)
                return stats
            }
            if ($scope.playerRace.race === 'Human') {
                let stats = {
                    teamwork: "15"
                }
                if (subclass === "Scholar") {
                    stats.power = "60"
                    stats.vitality = "100"
                    stats.mobility = "1"
                } else if (subclass === "Sniper") {
                    stats.power = "40"
                    stats.vitality = "50"
                    stats.mobility = "2"
                } else {
                    stats.power = "40"
                    stats.vitality = "50"
                    stats.mobility = "1"
                }
                // console.log(stats)
                return stats
            }
            if ($scope.playerRace.race === 'Shamadji Roht') {
                let stats = {
                    power: "50",
                    mobility: "3",
                    teamwork: "15"
                }
                if (subclass === "Chevalier") {
                    stats.vitality = "150"
                } else {
                    stats.vitality = "50"
                }
                // console.log(stats)
                return stats
            }
            if ($scope.playerRace.race === 'Shamadji Teca') {
                let stats = {
                    mobility: "2",
                    // teamwork: "1"
                }
                if (subclass === "Scholar") {
                    stats.vitality = "100"
                    stats.power = "40"
                    stats.teamwork = "45"
                } else if (subclass === "Sniper") {
                    stats.vitality = "100"
                    stats.power = "60"
                    stats.teamwork = "30"

                } else {
                    stats.vitality = "50"
                    stats.power = "20"
                    stats.teamwork = "15"
                }
                // console.log(stats)
                return stats
            }
            if ($scope.playerRace.race === 'Urugar') {
                let stats = {
                    mobility: "1",
                    teamwork: "15"
                }
                if (subclass === "Chevalier") {
                    stats.vitality = "50"
                    stats.power = "40"
                } else if (subclass === "Chevalier") {
                    stats.vitality = "150"
                    stats.power = "40"
                } else {
                    stats.vitality = "100"
                    stats.power = "20"
                }
                // console.log(stats)
                return stats
            }
            if ($scope.playerRace.race === 'Urugar') {
                let stats = {
                    vitality: "50",
                    mobility: "1"
                }
                if (subclass === "Plague Doctor") {
                    stats.power = "60"
                    stats.teamwork = "15"
                } else if (subclass === "Rogue") {
                    stats.power = "60"
                    stats.teamwork = "30"
                } else {
                    stats.power = "40"
                    stats.teamwork = "15"
                }
                // console.log(stats)
                return stats
            }
        }


        $scope.calculateEnergy()
        $scope.subclassesAvaliable()

        $scope.characterCreationFinalize = (subclass) => {

            let stats = $scope.calculateStats(subclass)

            // console.log(stats)

            let playerRaceCharcteristics = JSON.parse(localStorage.getItem("playerRace"))
            let data = {
                roomId: localStorage.getItem("roomId"),
                id: localStorage.getItem("id"),
                username: localStorage.getItem("username"),
                playerRace: playerRaceCharcteristics.race,
                playerClass: localStorage.getItem("playerClass"),
                playerSubclass: subclass,
                stats: stats,
                gear: {
                    weaponSlot1: "",
                    weaponSlot2: "",
                    armorSlot1: "",
                    armorSlot2: "",
                },
                bag: {
                    itemSlot1: "",
                    itemSlot2: "",
                    itemSlot3: "",
                    itemSlot4: "",
                    itemSlot5: "",
                    itemSlot6: "",
                },
                generalInfo: "",
                level: "1"
            }
            localStorage.setItem("data", JSON.stringify(data))
            $location.url(`/username-selection`)
        }
    }

});