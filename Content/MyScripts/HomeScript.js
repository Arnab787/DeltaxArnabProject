$(document).ready(function () {

    var MovieArray = new Array();
    $("#txtMovieName").focus();
    MoviesNames();

    function MoviesNames() {
        $.ajax({
            url: rootUrl + '/Home/MovieNameList',
            method: 'post',
            dataType: 'json',
            success: function (data) {
                for (i = 0; i < data.length; i++) {
                    MovieArray.push({ label: data[i].MovieName, value: data[i].MovieId });
                }
            }
        });
    }

    $("#txtMovieName").autocomplete({
        multiple: true,
        multipleSeparator: " ",
        mustMatch: true,
        minLength: 4,
        search: function (event, ui) {
            window.pageIndex = 0;
        },

        source: MovieArray,
        select: function (event, ui) {
            event.preventDefault();
            $(this).val(ui.item.label);
        },
        focus: function (event, ui) {
            $(this).val(ui.item.label);
            $('#movieId').val(ui.item.value);
            return false;
        },
    });

    $('#btnSearchMovieId').click(function () {
        if ($('#movieId').val() != '') {
            window.location.href = "/Movie/MovieDetails?MovieId=" + $('#movieId').val() + "";
        }
        else {
            $.confirm({
                title: 'Select Any Movie',
                content: 'Please Select Any Movie Name From Textbox',
                buttons: {
                    Ok: {
                        text: 'OK',
                        btnClass: 'btn-warning',
                        action: function () {

                        },
                    },
                }
            });
        }
    });

});