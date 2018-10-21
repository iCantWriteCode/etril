app.controller('roomCtrl', function ($scope, $http, $routeParams, $location) {

    $scope.view = 'map'
    $scope.userType = localStorage.getItem('userType')
    $scope.userId = localStorage.getItem('id')
    $scope.username = localStorage.getItem('username')

    $scope.roomCode = $routeParams.roomCode

    $scope.logoutUser = () => {
        localStorage.clear()
        $location.url('/')
    }

    getRoomData()

    function getRoomData() {
        $http.get(`${url}/room/${$scope.roomCode}`)
            .then(res => {
                console.log(res)
                $scope.room = res.data

                if ($scope.room.users && $scope.room.users.length > 0 && $scope.userType === 'GM') {
                    $scope.userToShow = $scope.room.users[0]
                    // console.log($scope.userToShow.id)

                } else {
                    $scope.userToShow = $scope.room.users.find(user => user.id === $scope.userId)
                    if ($scope.userToShow.playerRace === "" || $scope.userToShow.playerRace === null || $scope.userToShow.playerRace === undefined) {
                        localStorage.setItem('roomId', $scope.roomCode)
                        $location.url('/race-selection')
                    }
                    // console.log($scope.userToShow)
                }
                // else {
                // $scope.singleUserIndex = $scope.room.users.findIndex(user => user.id === localStorage.getItem('id'))
                //     $scope.userToShow = $scope.room.users[$scope.singleUserIndex]
                //     $scope.userIdToShow = $scope.room.users[$scope.singleUserIndex].id
                //     $scope.userStats = $scope.room.users[$scope.singleUserIndex].stats
                //     $scope.userGear = $scope.room.users[$scope.singleUserIndex].gear
                //     $scope.userBag = $scope.room.users[$scope.singleUserIndex].bag
                //     console.log($scope.room.users[$scope.singleUserIndex])
                // }
            })
            .catch(err => {
                console.warn(err)
            })
    }

    $scope.getUserId = (userId) => {

        $scope.userToShow = userId

        $scope.userIndex = $scope.room.users.findIndex(user => user.id === userId);
        console.log($scope.userIndex)
        $scope.userStats = $scope.room.users[$scope.userIndex].stats
        $scope.userGear = $scope.room.users[$scope.userIndex].gear
        $scope.userBag = $scope.room.users[$scope.userIndex].bag

    }

    // $scope.editUserRoomData = (stats, gear, bag, user) => {
    //     $scope.userForEdit = $scope.room.users.find(user => user.id === $scope.userToShow)
    //     console.log($scope.userForEdit)
    //     // $http
    //     //     .patch(`${url}/room/edit-user/${$routeParams.roomCode}`, $scope.userForEdit)
    //     //     .then(res => {
    //     //         console.log(res)
    //     //     })
    //     //     .catch(err => {
    //     //         console.warn(err)
    //     //     })
    // }
    $scope.editUserRoomData = (user) => {
        console.log('?????')
        console.log(user)
        $http
            .patch(`${url}/room/edit-user/${$routeParams.roomCode}`, user)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.warn(err)
            })
    }
})