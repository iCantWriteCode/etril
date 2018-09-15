app.controller('userPageCtrl', function ($scope, $location, $http) {


    if (localStorage.user) {
        $scope.user = JSON.parse(localStorage.getItem('user'))
        $location.url('/user-page')
    }
    console.warn($scope.user)

    // Get the rooms of a user
    $scope.getUserRooms = () => {
        if ($scope.user.type === 'GM') {
            $scope.queryParam = {
                "where": { "gm": $scope.user.username }
            }
        } else {
            $scope.queryParam = {
                "where": { "players": { "elemMatch": { "id": $scope.user.username } } }
            }
        }
        let queryParam = JSON.stringify($scope.queryParam)
        $http.get(`${url}/api/rooms?filter=${queryParam}`)
            .then(res => {
                $scope.rooms = res.data
                console.log($scope.rooms)

            })
    }
    $scope.getUserRooms()


    $scope.logoutUser = () => {
        localStorage.clear()
        $location.url('/')
    }

    $scope.createNewRoom = (data) => {
        data.gm = $scope.user.username
        $http.post(`${url}/api/rooms`, data)
            .then(res => {
                $scope.sucessMsg = 'The room has been created successfuly. You will be redirected in the room page shortly'
                localStorage.setItem('roomCode', res.data.roomCode)
                $location.url(`/room/${res.data.roomCode}`)

            })
            .catch(err => {
                $scope.failMsg = 'This Room Code is already in use. Please try a different Room Code'
                console.warn(err, 'catch')
            })
    }

    $scope.enterNewRoom = (data) => {
        // console.log(data)
        $http.get(`${url}/api/rooms/findOne?filter=%7B%22where%22%3A%20%7B%22roomCode%22%20%3A%20%22${data.roomCode}%22%7D%7D`)
            .then(res => {
                // console.log(res.data)

                $scope.sucessMsg = 'The room exists. You will be redirected to character creation shortly'
                playerDataForArray = { "id": $scope.user.username }

                // Check if this room has already players
                if (res.data.players) {
                    newPlayerArray = res.data.players.concat(playerDataForArray)
                    dataToPost = { "players": newPlayerArray }
                } else dataToPost = { "players": [playerDataForArray] }


                // This step must be after character class Choose
                $http.post(`${url}/api/rooms/update?where=%7B%22roomCode%22%3A%22${res.data.roomCode}%22%7D`,
                    JSON.stringify(dataToPost)
                )
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(err => {
                        console.warn(err.data.error)
                    })

                $location.url('/character-creation')

            })
            .catch(err => {
                console.warn(err.data)
            })
    }


})