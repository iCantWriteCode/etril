app.controller('userPageCtrl', function ($scope, $location, $http, $timeout) {

    let id = localStorage.getItem('id')
    let token = localStorage.getItem('token')
    $scope.userType = localStorage.getItem('userType')

    $http.get(`${url}/user/${id}`)
        .then(res => {
            console.log(res)
            $scope.user = res.data

        })
        .catch(err => {
            console.warn(err)
        })
    $scope.createNewRoom = (data) => {
        let roomData = {
            name: data.name,
            gm: id
        }
        $http.post(`${url}/room/new-room`, roomData, { headers: { Authorization: 'JWT ' + token } })
            .then(res => {
                console.log(res)
                $scope.sucessMsg = 'The room has been created successfuly. You will be redirected in the room page shortly'
                $timeout(() => {
                    $scope.sucessMsg = ''
                    $location.url(`/room/${res.data.room._id}`)
                }, 3000);
            })
            .catch(err => {
                if (err.status === 500) $scope.failMsg = 'Το όνομα του Room υπαρχει ήδη. Παρακαλώ επιλέξτε ένα άλλο όνομα'
                else $scope.failMsg = err.data.message
                console.warn(err)
            })
    }
    $scope.joinNewRoom = (data) => {
        // console.log(data)
        let reqData = {
            roomId: data.id,
            userId: id,
        }
        // return console.log(reqData)

        $http.post(`${url}/room/add-user`, reqData)
            .then(res => {
                console.log(res)

                $http.get(`${url}/user/${id}`)
                    .then(res => {
                        console.log(res)
                        $scope.user = res.data
                    })
                    .catch(err => {
                        console.warn(err)
                        $scope.failMsg = err.data.message
                        $timeout(() => {
                            $scope.failMsg = ''
                        }, 4000);
                    })

            })
            .catch(err => {
                console.warn(err)
                $scope.failMsg = err.data.message
                $timeout(() => {
                    $scope.failMsg = ''
                }, 4000);
            })

        // $http.get(`${url}/room/${data.id}`)
        //     .then(res => {
        //         localStorage.setItem('roomId', data.id)
        //         $scope.sucessMsg = 'The room has been found. You will now be redirected to create your character'
        //         $scope.user.rooms.push(data.id)
        //         console.log($scope.user)
        //         $timeout(() => {
        //             $scope.sucessMsg = ''
        //             // $location.url(`/race-selection`)
        //         }, 4000);
        //     })
        //     .catch(err => {
        //         console.log(err)
        //         $scope.failMsg = 'The room does not exist'
        //         $timeout(() => {
        //             $scope.failMsg = ''
        //         }, 4000);
        //     })
    }
    $scope.logoutUser = () => {
        localStorage.clear()
        $location.url('/')
    }



    // $scope.characterCreationFinalize = (subclass) => {

    //     let stats = $scope.calculateStats(subclass)

    //     // console.log(stats)

    //     let playerRaceCharcteristics = JSON.parse(localStorage.getItem("playerRace"))
    //     let data = {
    //         roomId: localStorage.getItem("roomId"),
    //         id: localStorage.getItem("id"),
    //         username: localStorage.getItem("username"),
    //         playerRace: playerRaceCharcteristics.race,
    //         playerClass: localStorage.getItem("playerClass"),
    //         playerSubclass: subclass,
    //         stats: stats,
    //         gear: {
    //             weaponSlot1: "",
    //             weaponSlot2: "",
    //             armorSlot1: "",
    //             armorSlot2: "",
    //         },
    //         bag: {
    //             itemSlot1: "",
    //             itemSlot2: "",
    //             itemSlot3: "",
    //             itemSlot4: "",
    //             itemSlot5: "",
    //             itemSlot6: "",
    //         },
    //         generalInfo: ""
    //     }

    //     // console.log(data)
    //     $http.post(`${url}/room/add-user`, data)
    //         .then(res => {
    //             // console.log(res)
    //             $scope.successMsg = 'You have joined the room successfully. You wil be redirected in your roompage shortly'
    //             localStorage.removeItem("roomId")
    //             localStorage.removeItem("playerClass")
    //             localStorage.removeItem("playerRace")
    //             $timeout(() => {
    //                 $scope.successMsg = '';
    //                 $location.url(`/room/${data.roomId}`)
    //             }, 3000);
    //         })
    //         .catch(err => {
    //             console.warn(err)
    //         })
    // }
})