/// <reference path="../knockout-3.4.0.js" />
var CreateArticleVM = {
    //KHAI BAO CAC DOI TUONG CAN THIET 
    Title: ko.observable(),
    Excerpts: ko.observable(),
    Content: ko.observable(),

    btnCreateArticle: function () {
        $.ajax({
            url: '/MTB_Articles/CreateJS',
            type: 'post',
            dataType: 'json',
            data: ko.toJSON(this),
            contentType: 'application/json',
            success: function (result) { '/MTB_Articles'; },
            error: function (err) {
                if (err.responseText == "eerror")
                { '/MTB_Articles'; }
                else {
                    alert(err.responseText);
                }
            },
            complete: function () {
            }
        });

    }
};
ko.applyBindings(CreateArticleVM);