const fs = require('fs'); //imports filesystem module
const path = require('path');

const pathDirectory = require('../util/path');

const p = path.join(pathDirectory, 'data', 'products.json');

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        return cb ([]);
      } else {
        cb(JSON.parse(fileContent));//returns json file as an array
      }
    });
}

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    //stores the data in a json file in the products folder
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};