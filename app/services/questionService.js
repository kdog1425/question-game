var $ = require("jquery");
var promise = require("es6-promise");
var resourceUrl = "http://localhost:7777/questions";

module.exports = {
    getQuestions: function () {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                method: "GET",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    }
}