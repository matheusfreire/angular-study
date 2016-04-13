/**
 * Created by matheus on 3/31/16.
 */

'use strict';
angular.module('confusionApp', [])
    .controller('MenuController', ['$scope', function($scope) {
        $scope.tab = 1;
        $scope.filtText = '';
        $scope.showDetails = false;
        var dishes=[
            {
                name:'Uthapizza',
                image: 'images/uthapizza.png',
                category: 'mains',
                label:'Hot',
                price:'4.99',
                description:'A pizza made with pepperoni and cheese. You can\'t eat one single piece only '  ,
                comment: ''
            },
            {
                name:'Zucchipakoda',
                image: 'images/zucchipakoda.png',
                category: 'appetizer',
                label:'',
                price:'1.99',
                description:'Some pancake with honey sauce. Impossible to resist',
                comment: ''
            },
            {
                name:'Vadonut',
                image: 'images/vadonut.png',
                category: 'appetizer',
                label:'New',
                price:'1.99',
                description:'A fried donut, We improvise the donut!',
                comment: ''
            },
            {
                name:'ElaiCheese Cake',
                image: 'images/elaicheesecake.png',
                category: 'dessert',
                label:'',
                price:'2.99',
                description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                comment: ''
            }
        ];

        $scope.dishes = dishes;
        $scope.select = function(setTab){
            $scope.tab = setTab;
            if (setTab === 2){
                $scope.filtText = "appetizer";
            } else if(setTab === 3){
                $scope.filtText = "mains";
            } else if(setTab === 4){
                $scope.filtText = "dessert";
            } else {
                $scope.filtText = "";
            }
        };

        $scope.isSelected = function(checkTab){
            return ($scope.tab === checkTab) ;
        };

        $scope.toggleDetails = function() {
            $scope.showDetails = !$scope.showDetails;
        };
    }]);
