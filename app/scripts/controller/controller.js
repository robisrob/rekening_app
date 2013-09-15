function billOverviewCtrl($scope, BillLoader) {

    var initUserSelectedItems = function () {
        var userSelectedItems = [];
        for (var i = 0; i < BillLoader.items.length; i++) {
            userSelectedItems.push({id: BillLoader.items[i].id, quantity: 0})
        }
        return userSelectedItems;
    };

    var userSelectedItems = initUserSelectedItems();
    $scope.billItems = BillLoader.items;

    $scope.findUserSelectedItemById = function (id) {
        for (var i = 0; i < userSelectedItems.length; i++) {
            if (userSelectedItems[i].id == id) {
                return userSelectedItems[i]
            }
        }
        throw {message: "Exception: Item not found"}
    };

    $scope.findItemFromBillLoaderById = function (id) {
        for (var i = 0; i < BillLoader.items.length; i++) {
            if (BillLoader.items[i].id == id) {
                return BillLoader.items[i]
            }
        }
        throw {message: "Exception: Item not found"}
    };

    $scope.increaseQuantityUserSelectedItemByOne = function (id) {
        var userSelectedItem = $scope.findUserSelectedItemById(id);
        if (userSelectedItem.quantity + $scope.findItemFromBillLoaderById(id).selectedQuantity < $scope.findItemFromBillLoaderById(id).totalQuantity) {
            userSelectedItem.quantity++;
        }else{
            userSelectedItem.quantity = 0;
        }
    };

    $scope.calculateTotalPriceUserSelectedItems = function(){
        var totalPriceUserSelectedItems = 0;
        for (var i = 0; i < userSelectedItems.length; i++) {
            totalPriceUserSelectedItems+= $scope.findItemFromBillLoaderById(userSelectedItems[i].id).price * userSelectedItems[i].quantity;
        }
        return totalPriceUserSelectedItems;
    }

    $scope.isItemCrossed = function(id){
        return $scope.findItemFromBillLoaderById(id).totalQuantity == $scope.findItemFromBillLoaderById(id).selectedQuantity + $scope.findUserSelectedItemById(id).quantity;
    }
}

function addBillCtrl($scope, BillLoader) {

    $scope.billItems = [];

    $scope.addBillItem = function(){
        $scope.billItems.push({
            description: $scope.description,
            price: $scope.price,
            quantity: $scope.quantity
        });
    }
}

