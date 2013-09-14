function RekeningCtrl($scope, BillLoader) {

    var initUserSelectedItems = function () {
        var userSelectedItems = [];
        for (var i = 0; i < BillLoader.items.length; i++) {
            userSelectedItems.push({id: BillLoader.items[i].id, amount: 0})
        }
        return userSelectedItems;
    };

    $scope.userSelectedItems = initUserSelectedItems();

    $scope.findUserSelectedItemById = function (id) {
        for (var i = 0; i < $scope.userSelectedItems.length; i++) {
            if ($scope.userSelectedItems[i].id == id) {
                return $scope.userSelectedItems[i]
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

    $scope.increaseUserSelectedItemByOne = function (id) {
        var userSelectedItem = $scope.findUserSelectedItemById(id);
        if (userSelectedItem.amount + $scope.findItemFromBillLoaderById(id).selectedAmount < $scope.findItemFromBillLoaderById(id).totalAmount) {
            userSelectedItem.amount++;
        }else{
            userSelectedItem.amount = 0;
        }
    };
}


//    var water = 14;
//    var totaalAantalPersonen = 8;
//    $scope.selectedItems = [];
//
//    var berekenSelectedTotaal = function () {
//        var totaal=0;
//        for (var i = 0; i < $scope.selectedItems.length; i++) {
//            totaal += $scope.selectedItems.prijs * $scope.selectedItems.totaalAantal;
//        }
//        return totaal;
//    };
//    var addItem = function (item) {
//        item.totaalSelected++
//        $scope.selectedItems.push(item);
//    };
//
//    var resetItem = function (item) {
//        item.totaalSelected = 0;
//        $scope.selectedItems=[];
//    };
//
//    $scope.rekeningItems = BillLoader;
//
//    $scope.waterPerPersoon = water / totaalAantalPersonen;
//    $scope.selectedTotaal =  function () {
//        var totaal=0;
//        for (var i = 0; i < $scope.selectedItems.length; i++) {
//            totaal += $scope.selectedItems.prijs * $scope.selectedItems.totaalAantal;
//        }
//        return totaal;
//    };
//
//    $scope.addSelectedItem = function (item) {
//        if (item.totaalSelected < item.totaalAantal) {
//            addItem(item, $scope.selectedItems);
//        } else {
//            resetItem(item, $scope.selectedItems);
//        }
//    };
//
//
//
//
//
//    $scope.berekenTotaal = function () {
//        var totaal = water;
//        for (var i = 0; i < $scope.rekeningItems.length; i++) {
//            totaal += $scope.rekeningItems[i].prijs * $scope.rekeningItems[i].totaalAantal;
//        }
//        return totaal;
//    };


