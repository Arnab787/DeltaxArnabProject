$(document).ready(function () {

    var ddlProducer = $('#ddlMovieProducer');
    var ddlActor = $('#ddlMovieActors');

    $('#btnModalAddProducer').click(function () {
        var ProducerModel = {};

        if ($('#txtModalPoducerName').val() == '') {
            $.alert({
                title: 'Warning',
                content: 'Please Enter The Producer Name',
            });
            return false;
        }
        else {
            ProducerModel.ProducerName = $('#txtModalPoducerName').val();
        }

        if ($('#txtModalProducerDob').val() == '') {
            $.alert({
                title: 'Warning',
                content: 'Please Enter The Producer Dob',
            });
            return false;
        }
        else {
            ProducerModel.ProducerDob = $('#txtModalProducerDob').val();
        }

        if ($('#ddlModalProducerGender').val() == '') {
            $.alert({
                title: 'Warning',
                content: 'Please Select Producer Gender',
            });
            return false;
        }
        else {
            ProducerModel.ProducerGender = $('#ddlModalProducerGender').val();
        }

        if ($('#txtModalProducerBio').val() == '') {
            $.alert({
                title: 'Warning',
                content: 'Please Select Producer Bio',
            });
            return false;
        }
        else {
            ProducerModel.ProducerBio = $('#txtModalProducerBio').val();
        }

        ProducerInsert(ProducerModel);

    });

    $('#btnModalAddActor').click(function () {
        var ActorModel = {};
        if ($('#txtModalActorName').val() == '') {
            $.alert({
                title: 'Warning',
                content: 'Please Enter The Actor Name',
            });
            return false;
        }
        else {
            ActorModel.ActorName = $('#txtModalActorName').val();
        }

        if ($('#txtModalActorDob').val() == '') {
            $.alert({
                title: 'Warning',
                content: 'Please Enter The Actor Dob',
            });
            return false;
        }
        else {
            ActorModel.ActorDob = $('#txtModalActorDob').val();
        }

        if ($('#ddlModalActorGender').val() == '') {
            $.alert({
                title: 'Warning',
                content: 'Please Select The Actor Gender',
            });
            return false;
        }
        else {
            ActorModel.ActorGender = $('#ddlModalActorGender').val();
        }

        if ($('#txtModalActorBio').val() == '') {
            $.alert({
                title: 'Warning',
                content: 'Please Enter The Actor Bio',
            });
            return false;
        }
        else {
            ActorModel.ActorBio = $('#txtModalActorBio').val();
        }

        ActorInsert(ActorModel);

    });

    $('#btnCreateMovie').click(function () {
        var MovieModel = {};

        if (ddlProducer.val() == '') {
            $.alert({
                title: 'Warning',
                content: 'Please Select The Producer',
            });
            return false;
        }
        else {
            MovieModel.ProducerId = ddlProducer.val();
        }

        if ($('#txtMovieName').val() == '') {
            $.alert({
                title: 'Warning',
                content: 'Please Enter The Movie Name',
            });
            return false;
        }
        else {
            MovieModel.MovieName = $('#txtMovieName').val();
        }

        if ($('#txtMovieRelease').val() == '') {
            $.alert({
                title: 'Warning',
                content: 'Please Enter The Movie Release Date',
            });
            return false;
        }
        else {
            MovieModel.MovieRelease = $('#txtMovieRelease').val();
        }

        if ($('#txtMoviePlot').val() == '') {
            $.alert({
                title: 'Warning',
                content: 'Please Enter The Movie Plot',
            });
            return false;
        }
        else {
            MovieModel.MoviePlot = $('#txtMoviePlot').val();
        }

        if ($('#ddlMovieActors option:selected').val() == '') {
            $.alert({
                title: 'Warning',
                content: 'Please Select Movie Actors',
            });
            return false;
        }
        else {
            MovieModel.MovieActors = $('#ddlMovieActors option:selected').map(function () {
                return $(this).val();
            }).get().join(",");
        }

        var File = $('#fleMoviePoster').get(0).files;

        //MovieModel.MovieImageFile = File[0];
        var MyFormData = new FormData();
        MyFormData.append("ProducerId", MovieModel.ProducerId);
        MyFormData.append("MovieName", MovieModel.MovieName);
        MyFormData.append("MovieRelease", MovieModel.MovieRelease);
        MyFormData.append("MoviePlot", MovieModel.MoviePlot);
        MyFormData.append("MovieActors", MovieModel.MovieActors);
        MyFormData.append("MovieImageFile", File[0]);



        MovieInsert(MyFormData)
    });

    $('#btnMovieUpdate').click(function () {
        var MovieUpdateModel = {};

        if (ddlProducer.val() == '') {
            $.alert({
                title: 'Warning',
                content: 'Please Select The Producer',
            });
            return false;
        }
        else {
            MovieUpdateModel.ProducerId = ddlProducer.val();
        }

        if ($('#txtMovieName').val() == '') {
            $.alert({
                title: 'Warning',
                content: 'Please Enter The Movie Name',
            });
            return false;
        }
        else {
            MovieUpdateModel.MovieName = $('#txtMovieName').val();
        }

        if ($('#txtMovieReleaseDate').val() == '') {
            $.alert({
                title: 'Warning',
                content: 'Please Enter The Movie Release Date',
            });
            return false;
        }
        else {
            MovieUpdateModel.MovieRelease = $('#txtMovieReleaseDate').val();
        }

        if ($('#txtMoviePlot').val() == '') {
            $.alert({
                title: 'Warning',
                content: 'Please Enter The Movie Plot',
            });
            return false;
        }
        else {
            MovieUpdateModel.MoviePlot = $('#txtMoviePlot').val();
        }

        if ($('#ddlMovieActors option:selected').val() == '') {
            $.alert({
                title: 'Warning',
                content: 'Please Select Movie Actors',
            });
            return false;
        }
        else {
            MovieUpdateModel.MovieActors = $('#ddlMovieActors option:selected').map(function () {
                return $(this).val();
            }).get().join(",");
        }

        var File = $('#fleMoviePoster').get(0).files;

        //MovieUpdateModel.MovieImageFile = File[0];
        var MyFormData = new FormData();
        MyFormData.append("ProducerId", MovieUpdateModel.ProducerId);
        MyFormData.append("MovieName", MovieUpdateModel.MovieName);
        MyFormData.append("MovieRelease", MovieUpdateModel.MovieRelease);
        MyFormData.append("MoviePlot", MovieUpdateModel.MoviePlot);
        MyFormData.append("MovieActors", MovieUpdateModel.MovieActors);
        MyFormData.append("MovieImage", $('#MovieImage').attr("alt"));
        MyFormData.append("MovieId", $('#txtMovieName').attr("name"));
        MyFormData.append("MovieImageFile", File[0]);



        MovieUpdate(MyFormData)
    });

    function ProducerInsert(ProducerModel) {
        $.confirm({

            content: function () {
                var SelfContent = this;
                return $.ajax({
                    url: rootUrl + '/Movie/CreateProducer',
                    method: 'post',
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({ producer: ProducerModel }),
                    dataType: 'json',
                    success: function (data) {

                    },
                    error: function (request, status, error) {

                    }
                }).done(function (data) {
                    SelfContent.close(true);
                    if (data == true) {

                        $.confirm({
                            title: "Success",
                            content: function () {
                                var OpdContentSelf = this;
                                return "Producer Successfully Created";
                            },
                            buttons: {
                                /*Ok: function () {
                            
                                },*/
                                OK: {
                                    text: 'OK ',
                                    btnClass: 'btn-success',
                                    keys: ['enter'],
                                    action: function () {
                                        $('#modalProducer * input:text').val('');
                                        $('#ddlModalProducerGender').prop('selectedIndex', 0);
                                        $('#modalProducer').modal('toggle');
                                        GetProducer();
                                    },
                                },

                            },
                            /*
                            onClose: function () {
                                OpdContentSelf.close(true);
                            },*/
                        });
                    }
                    else {
                        SelfContent.close(true);
                        $.confirm({
                            title: 'Technical Issue',
                            content: 'Sorry For Trouble Some Technical Issue',
                            buttons: {
                                Ok: {
                                    text: 'OK',
                                    btnClass: 'btn-danger',
                                    action: function () {

                                    },
                                },
                            }
                        });
                    }

                }).fail(function (data) {
                    SelfContent.close(true);
                    $.confirm({
                        title: 'Technical Issue',
                        content: 'Sorry For Trouble Some Technical Issue',
                        buttons: {
                            Ok: {
                                text: 'OK',
                                btnClass: 'btn-danger',
                                action: function () {

                                },
                            },
                        }
                    });
                });
            },
            contentLoaded: function (data, status, xhr) {

            },

        });
    }

    function ActorInsert(ActorModel) {

        $.confirm({
            content: function () {
                var SelfContent = this;
                return $.ajax({
                    url: rootUrl + '/Movie/CreateActor',
                    method: 'post',
                    dataType: 'json',
                    contentType: "application/json; charset=utf-8",
                    data: JSON.stringify({ actor: ActorModel }),
                    dataType: 'json',
                    success: function (data) {

                    },
                    error: function (request, status, error) {

                    }
                }).done(function (data) {
                    SelfContent.close(true);
                    if (data == true) {

                        $.confirm({
                            title: "Success",
                            content: function () {
                                var OpdContentSelf = this;
                                return "Actor Successfully Created";
                            },
                            buttons: {
                                /*Ok: function () {
                            
                                },*/
                                OK: {
                                    text: 'OK ',
                                    btnClass: 'btn-success',
                                    keys: ['enter'],
                                    action: function () {
                                        $('#modalActor * input:text').val('');
                                        $('#ddlModalActorGender').prop('selectedIndex', 0);
                                        $('#modalActor').modal('toggle');
                                        GetActors();
                                    },
                                },

                            },
                            /*
                            onClose: function () {
                                OpdContentSelf.close(true);
                            },*/
                        });
                    }
                    else {
                        SelfContent.close(true);
                        $.confirm({
                            title: 'Technical Issue',
                            content: 'Sorry For Trouble Some Technical Issue',
                            buttons: {
                                Ok: {
                                    text: 'OK',
                                    btnClass: 'btn-danger',
                                    action: function () {

                                    },
                                },
                            }
                        });
                    }

                }).fail(function (data) {
                    SelfContent.close(true);
                    $.confirm({
                        title: 'Technical Issue',
                        content: 'Sorry For Trouble Some Technical Issue',
                        buttons: {
                            Ok: {
                                text: 'OK',
                                btnClass: 'btn-danger',
                                action: function () {

                                },
                            },
                        }
                    });
                });
            },
            contentLoaded: function (data, status, xhr) {

            },

        });

    }

    function MovieInsert(MyFormData) {

        $.confirm({
            content: function () {
                var SelfContent = this;
                return $.ajax({
                    url: rootUrl + '/Movie/CreateMovieInsert',
                    type: "POST",
                    data: MyFormData,
                    processData: false,
                    contentType: false,
                    success: function (data) {

                    },
                    error: function (request, status, error) {

                    }
                }).done(function (data) {
                    SelfContent.close(true);
                    if (data == true) {

                        $.confirm({
                            title: "Success",
                            content: function () {
                                var OpdContentSelf = this;
                                return "Movie Successfully Created";
                            },
                            buttons: {
                                /*Ok: function () {
                            
                                },*/
                                OK: {
                                    text: 'OK ',
                                    btnClass: 'btn-success',
                                    keys: ['enter'],
                                    action: function () {
                                        ResetTxtNdDdl();
                                    },
                                },

                            },
                            /*
                            onClose: function () {
                                OpdContentSelf.close(true);
                            },*/
                        });
                    }
                    else {
                        SelfContent.close(true);
                        $.confirm({
                            title: 'Technical Issue',
                            content: 'Sorry For Trouble Some Technical Issue',
                            buttons: {
                                Ok: {
                                    text: 'OK',
                                    btnClass: 'btn-danger',
                                    action: function () {

                                    },
                                },
                            }
                        });
                    }

                }).fail(function (data) {
                    SelfContent.close(true);
                    $.confirm({
                        title: 'Technical Issue',
                        content: 'Sorry For Trouble Some Technical Issue',
                        buttons: {
                            Ok: {
                                text: 'OK',
                                btnClass: 'btn-danger',
                                action: function () {

                                },
                            },
                        }
                    });
                });
            },
            contentLoaded: function (data, status, xhr) {

            },

        });

    }

    function MovieUpdate(MyFormData) {

        $.confirm({
            content: function () {
                var SelfContent = this;
                return $.ajax({
                    url: rootUrl + '/Movie/UpdtaeMovie',
                    type: "POST",
                    data: MyFormData,
                    processData: false,
                    contentType: false,
                    success: function (data) {

                    },
                    error: function (request, status, error) {

                    }
                }).done(function (data) {
                    SelfContent.close(true);
                    if (data == true) {

                        $.confirm({
                            title: "Success",
                            content: function () {
                                var OpdContentSelf = this;
                                return "Movie Successfully Updated";
                            },
                            buttons: {
                                /*Ok: function () {

                                },*/
                                OK: {
                                    text: 'OK ',
                                    btnClass: 'btn-success',
                                    keys: ['enter'],
                                    action: function () {

                                    },
                                },

                            },
                            /*
                            onClose: function () {
                                OpdContentSelf.close(true);
                            },*/
                        });
                    }
                    else {
                        SelfContent.close(true);
                        $.confirm({
                            title: 'Technical Issue',
                            content: 'Sorry For Trouble Some Technical Issue',
                            buttons: {
                                Ok: {
                                    text: 'OK',
                                    btnClass: 'btn-danger',
                                    action: function () {

                                    },
                                },
                            }
                        });
                    }

                }).fail(function (data) {
                    SelfContent.close(true);
                    $.confirm({
                        title: 'Technical Issue',
                        content: 'Sorry For Trouble Some Technical Issue',
                        buttons: {
                            Ok: {
                                text: 'OK',
                                btnClass: 'btn-danger',
                                action: function () {

                                },
                            },
                        }
                    });
                });
            },
            contentLoaded: function (data, status, xhr) {

            },

        });

    }

    function GetProducer() {
        $.ajax({
            url: rootUrl + '/Movie/GetProducer',
            method: 'post',
            dataType: 'json',
            success: function (data) {
                ddlProducer.empty();
                //ddlProducer.append($('<option/>', { value: -1, text: '-- Select --' }));
                $(data).each(function (index, item) {
                    ddlProducer.append($('<option/>', { value: item.ProducerId, text: item.ProducerName }));
                });
            }
        });
    }

    function GetActors() {
        $.ajax({
            url: rootUrl + '/Movie/GetActor',
            method: 'post',
            dataType: 'json',
            success: function (data) {
                ddlActor.empty();
                //ddlProducer.append($('<option/>', { value: -1, text: '-- Select --' }));
                $(data).each(function (index, item) {
                    ddlActor.append($('<option/>', { value: item.ActorId, text: item.ActorName }));
                });
            }
        });
    }

    function ResetTxtNdDdl() {
        $('#divMovie* input:text').val('');
        $('#txtMoviePlot').val('');
        $('#ddlMovieProducer').val('');
        $('#ddlMovieActors').select2('val', '');
        $('#fleMoviePoster').val('');
    }


});