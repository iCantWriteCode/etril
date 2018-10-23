app.controller('roomCtrl', function ($scope, $http, $routeParams, $location, $timeout) {

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
                }

            })
            .catch(err => {
                console.warn(err)
            })
    }

    $scope.getUserId = (userId) => {
        $scope.userIndex = $scope.room.users.findIndex(user => user.id === userId);
        $scope.userToShow = $scope.room.users[$scope.userIndex]



    }


    $scope.editUserRoomData = (user) => {
        // console.log('?????')
        // return console.log(user)
        $http
            .patch(`${url}/room/edit-user/${$routeParams.roomCode}`, user)
            .then(res => {
                console.log(res)
                $scope.successMsg = `The user ${user.username} has been modified successfully`
                $timeout(() => {
                    $scope.successMsg = null
                }, 4000)
            })
            .catch(err => {
                console.warn(err)
                $scope.failMsg = `A wild error has occured. Please contact the company ASAP`
                $timeout(() => {
                    $scope.failMsg = null
                }, 4000)
            })
    }
    $scope.addMapTooRoom = (room) => {

        // return console.log(room, $scope.room._id)

        $http
            .patch(`${url}/room/maps/${$scope.room._id}`, room.maps)
            .then(res => {
                console.log(res)
                $scope.successMsg = `The changes has been saved`
                $timeout(() => {
                    $scope.successMsg = null
                }, 4000)
            })
            .catch(err => {
                console.warn(err)
                $scope.failMsg = `A wild error has occured. Please contact the company ASAP`
                $timeout(() => {
                    $scope.failMsg = null
                }, 4000)
            })
        // $http
        //     .patch(`${url}/room/edit-user/${$routeParams.roomCode}`, user)
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => {
        //         console.warn(err)
        //     })
        // data.maps.data = true
        // console.log(user)
    }
})