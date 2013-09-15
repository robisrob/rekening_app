describe('The controller is testing that', function () {
    var $scope;
    var ctrl;
    var BillLoader = {"id": 1,
        items: [
            {
                "id": 1,
                "description": "White wine",
                "price": 3.5,
                "selectedQuantity": 1,
                "totalQuantity": 3
            },
            {
                "id": 2,
                "description": "Cava",
                "price": 4.7,
                "selectedQuantity": 2,
                "totalQuantity": 5
            },
            {
                "id": 3,
                "description": "Martini",
                "price": 3.8,
                "selectedQuantity": 0,
                "totalQuantity": 4
            }
        ]};

    beforeEach(module('shareTheBillApp'));

    beforeEach(inject(function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        ctrl = $controller('billOverviewCtrl', {
            $scope: $scope,
            BillLoader: BillLoader
        })
    }));

    describe('findUserSelectedItemById', function () {
        it('find a user selected item by id', function () {
            $scope.userSelectedItems = [
                {
                    id: 2,
                    quantity: 1
                },
                {
                    id: 3,
                    quantity: 2
                }
            ]
            expect($scope.findUserSelectedItemById(2).id).toBe(2);
            expect($scope.findUserSelectedItemById(2).quantity).toBe(1);
        });

        it("find user selected item by id - doesn't find item", function () {
            $scope.userSelectedItems = [
                {
                    id: 2,
                    quantity: 1
                },
                {
                    id: 3,
                    quantity: 2
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

    describe('increaseQuantityUserSelectedItemByOne', function () {
        it('increases the quantity of a userSelectedItem', function () {
            $scope.increaseQuantityUserSelectedItemByOne(2);
            expect($scope.findUserSelectedItemById(2).id).toBe(2);
            expect($scope.findUserSelectedItemById(2).quantity).toBe(1);

            $scope.increaseQuantityUserSelectedItemByOne(2);
            expect($scope.findUserSelectedItemById(2).id).toBe(2);
            expect($scope.findUserSelectedItemById(2).quantity).toBe(2);
        });

        it('reset the userSelectedItem to zero if the quantity of a UserSelectedItem goes over the correlated totalQuantity minus the selectedQuantity', function () {
            $scope.increaseQuantityUserSelectedItemByOne(1);
            expect($scope.findUserSelectedItemById(1).id).toBe(1);
            expect($scope.findUserSelectedItemById(1).quantity).toBe(1);

            $scope.increaseQuantityUserSelectedItemByOne(1);
            expect($scope.findUserSelectedItemById(1).id).toBe(1);
            expect($scope.findUserSelectedItemById(1).quantity).toBe(2);

            $scope.increaseQuantityUserSelectedItemByOne(1);
            expect($scope.findUserSelectedItemById(1).id).toBe(1);
            expect($scope.findUserSelectedItemById(1).quantity).toBe(0);
        });

        it("throws exception when you try to increase a userSelectedItem that doesn't exist", function () {
            expect(function () {
                $scope.increaseQuantityUserSelectedItemByOne(5)
            }).toThrow({message: "Exception: Item not found"});
        });
    });

    describe('calculateTotalPriceUserSelectedItems', function () {
        it('calculates the total price of the userSelectedItems ', function () {
            $scope.increaseQuantityUserSelectedItemByOne(1);
            $scope.increaseQuantityUserSelectedItemByOne(2);
            $scope.increaseQuantityUserSelectedItemByOne(2);

            expect($scope.calculateTotalPriceUserSelectedItems()).toBe(12.9);
        });
    });

    describe('isItemCrossed ', function () {
        it('returns true if the quantity of the userSelectedItem summed up with the selectedQuantity of the Item on the bill equals the totalQuantity on the bill ', function () {
            expect($scope.isItemCrossed(1)).toBeFalsy();

            $scope.increaseQuantityUserSelectedItemByOne(1);
            expect($scope.isItemCrossed(1)).toBeFalsy();

            $scope.increaseQuantityUserSelectedItemByOne(1);
            expect($scope.isItemCrossed(1)).toBeTruthy();

            $scope.increaseQuantityUserSelectedItemByOne(1);
            expect($scope.isItemCrossed(1)).toBeFalsy();
        });
    });
});