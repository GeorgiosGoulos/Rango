$(document).ready(function() {

    $('#likes').click(function () {
        var catid;
        catid = $(this).attr("data-catid");
        $.get('/rango/like_category/', {category_id: catid}, function (data) {
            $('#like_count').html(data);
            $('#likes').attr("disabled", true);
        });
    });

    $('#suggestion').keyup(function(){
        var query;
        query = $(this).val();
        $.get('/rango/suggest_category/', {suggestion: query}, function(data){
            $('#cats').html(data);
        });
    });

    $('.rango-add').click(function() {
        var catid, ptitle, purl;
        catid = $(this).attr("data-catid");
        ptitle = $(this).attr("data-title");
        purl = $(this).attr("data-url");
        $.get('/rango/auto_add_page/', {title: ptitle, url: purl, catid: catid}, function(data) {
            $('#page-list').html(data);
        });
        $(this).attr("disabled", true);
    });

});