/// <reference path="../knockout-3.4.0.js" />
$(function(){
    ko.applyBindings(indexVM);
    indexVM.loadArticles();
})
var indexVM = {
    //KHAI BAO MANG ARTICER
    Articles: ko.observableArray([]),

    loadArticles: function () {
        var self = this;
        //Ajax Call Get All Articles
        $.ajax({
            type: "GET",
            url: '/MTB_Articles/FillIndex',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                self.Articles(data); //Put the response in ObservableArray
            },
            error: function (err) {
                alert(err.status + " : " + err.statusText);
            }
        }); 
    }
};

function Articles(Articles) {
    this.Title = ko.observable(Articles.Title);
    this.Excerpts = ko.observable(Articles.Excerpts);
    this.Content = ko.observable(Articles.Content);
}