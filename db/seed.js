let Schema = require("./resturrantSchema");
let mongoose = require('mongoose');

let resturantModel = Schema.resturantModel;
let menuItemModel = Schema.menuItemModel;


let Menu1 = new menuItemModel({
    title: "Kabsa"
})
Menu1.save()
let Menu2 = new menuItemModel({
    title: "Shawrma"
})
Menu2.save()
let Menu3 = new menuItemModel({
    title: "Nodels"
})
Menu3.save()


let menu = [Menu1, Menu2, Menu3]

let MeshalResturant = new resturantModel({
    name: "Meshal Resturant",
    address: {
        street: "al-mothalth",
        zipcode: 1121
    },
    yelpUrl: "//https:www.google.com",
    items: menu
})
MeshalResturant.save()

MeshalResturant.find({
    name: "Meshal Resturant"
})