describe('The controller is testing that', function () {
    var $scope;
    var ctrl;
    var BillLoader = {"id": 1,
        items: [
            {
                "id": 1,
                "description": "White wine",
                "price": 3.5,
                "selectedAmount": 1,
                "totalAmount": 3
            },
            {
                "id": 2,
                "description": "Cava",
                "price": 4.7,
                "selectedAmount": 2,
                "totalAmount": 5
            },
            {
                "id": 3,
                "description": "Martini",
                "price": 3.8,
                "selectedAmount": 0,
                "totalAmount": 4
            }
        ]};

    beforeEach(module('shareTheBillApp'));

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        ctrl = $controller('RekeningCtrl', {
            $scope: $scope,
            BillLoader: BillLoader
        })
    }));

    describe('findUserSelectedItemById', function () {
        it('find a user selected item by id', function () {
            $scope.userSelectedItems = [
                {
                    id: 2,
                    amount: 1
                },
                {
                    id: 3,
                    amount: 2
                }
            ]
            expect($scope.findUserSelectedItemById(2).id).toBe(2);
            expect($scope.findUserSelectedItemById(2).amount).toBe(1);
        });

        it("find user selected item by id - doesn't find item", function () {
            $scope.userSelectedItems = [
                {
                    id: 2,
                    amount: 1
                },
                {
                    id: 3,
                    amount: 2
                }
            ]

            expect(function () {
                $scope.findUserSelectedItemById(5)
            }).toThrow({message: "Exception: Item not found"});
        });
    });

    describe('findItemFromBillLoaderById', function () {
        it('find a item from the BillLoader by id', function () {
            expect($scope.findItemFromBillLoaderById(2).id).toBe(2);
            expect($scope.findItemFromBillLoaderById(2).description).toBe("Cava");

            expect($scope.findItemFromBillLoaderById(1).id).toBe(1);
            expect($scope.findItemFromBillLoaderById(1).description).toBe("White wine");
        });

        it("throws an exception when item doesn't exist", function () {
            expect(function () {
                $scope.findItemFromBillLoaderById(5)
            }).toThrow({message: "Exception: Item not found"});
        });
    });

    describe('increaseUserSelectedItemByOne', function () {
        it('increases the amount of a userSelectedItem', function () {
            $scope.increaseUserSelectedItemByOne(2);
            expect($scope.findUserSelectedItemById(2).id).toBe(2);
            expect($scope.findUserSelectedItemById(2).amount).toBe(1);

            $scope.increaseUserSelectedItemByOne(2);
            expect($scope.findUserSelectedItemById(2).id).toBe(2);
            expect($scope.findUserSelectedItemById(2).amount).toBe(2);
        });

        it('reset the userSelectedItem to zero if the amount of a UserSelectedItem goes over the correlated totalAmount minus the selectedAmount', function () {
            $scope.increaseUserSelectedItemByOne(1);
            expect($scope.findUserSelectedItemById(1).id).toBe(1);
            expect($scope.findUserSelectedItemById(1).amount).toBe(1);

            $scope.increaseUserSelectedItemByOne(1);
            expect($scope.findUserSelectedItemById(1).id).toBe(1);
            expect($scope.findUserSelectedItemById(1).amount).toBe(2);

            $scope.increaseUserSelectedItemByOne(1);
            expect($scope.findUserSelectedItemById(1).id).toBe(1);
            expect($scope.findUserSelectedItemById(1).amount).toBe(0);
        });

        it("throws exception when you try to increase a userSelectedItem that doesn't exist", function () {
            expect(function () {
                $scope.increaseUserSelectedItemByOne(5)
            }).toThrow({message: "Exception: Item not found"});
        });
    });
});