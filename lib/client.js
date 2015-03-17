var _ = require('lodash');
var moment = require('moment');
var Promise = require('bluebird');

var api = function (miner) {
  return {
    connect: function () {
      return new Promise(function (resolve, reject) {
        resolve();
      });
    },
    removepool: function () {
      return new Promise(function (resolve, reject) {
        resolve();
      });
    },
    addpool: function () {
      return new Promise(function (resolve, reject) {
        resolve();
      });
    },
    pools: function () {
      return new Promise(function (resolve, reject) {

      });
    },
    summary: function () {
      return new Promise(function (resolve, reject) {
        resolve({
          "GHS 5s": miner.hashRate / 1000,
          "GHS av": miner.hashRate / 1000,
          "Elapsed": 86400
        });
      });
    },
    version: function () {
      return new Promise(function (resolve, reject) {
        resolve({
          "CGMiner": "3.12.0_7.0.0.3",
          "API": "3.1"
        });
      });
    },
    devs: function () {
      var max = miner.hashRate * 1.05;
      var min = miner.hashRate * 0.65;
      return new Promise(function (resolve, reject) {
        resolve([{
          "MHS 5s": (Math.random() * (max - min)) + min,
          "MHS av": miner.hashRate * 0.80,
          "Temperature": 41
        }]);
      });
    }
  };
};

module.exports = function (miner) {
  return api(miner);
};
