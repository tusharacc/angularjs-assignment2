(function () {
  'use strict';
  
  angular.module('CheckOff', [])
  
  .controller('ItemsToBeBoughtController', ItemsToBeBoughtController)
  .controller('ItemsBoughtController', ItemsBoughtController)
  .service('ItemsBoughtService',ItemsBoughtService);
  
  ItemsToBeBoughtController.$inject = ['ItemsBoughtService'];
  
  function ItemsToBeBoughtController(ItemsBoughtService) {
    var itemsToBeBought = this;
  
    itemsToBeBought.items = ItemsBoughtService.getItems();
    if (itemsToBeBought.items.length == 0){
      console.log('The value'+itemsToBeBought.message);
      itemsToBeBought.message = 0;
    }
    
    itemsToBeBought.checkItems = function (itemIndex) {
      console.log(itemIndex);
      ItemsBoughtService.removeItem(itemIndex);
    };
  }
  
  ItemsBoughtController.$inject = ['ItemsBoughtService'];
  
  function ItemsBoughtController(ItemsBoughtService) {
    var itemsBought = this;
  
    itemsBought.items = ItemsBoughtService.getBoughtItems();
    console.log ('The length of itemBought' +itemsBought.items.length);
    if (itemsBought.items.length == 0){
      itemsBought.message = 0;
      console.log(Boolean(itemsBought.message));
    }

  }
  
  function ItemsBoughtService() {
    var service = this;
  
    // List of shopping items
    var items = [{'name':'Cookies','quantity':10},{'name':'Cakes','quantity':10},{'name':'Cheese','quantity':10},{'name':'Caramel','quantity':10},{'name':'Chocolate','quantity':10}];
    var itemsBought = []
    console.log(items);
    service.addItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    };
  
    service.removeItem = function (itemIndex) {
      let itemBought = items.splice(itemIndex, 1)[0];
      console.log('item Bought' + itemBought.name + itemBought.quantity);
      itemsBought.push(itemBought);
    };
  
    service.getItems = function () {
      return items;
    };
    service.getBoughtItems = function () {
      return itemsBought;
    };
  }

})();