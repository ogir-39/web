var cnt = 0;
var index = 0;


function chuyenSlide() {
    if (index == 4) index = 0;
    else index++;
    if (index == 0) {
        $('#img1-slide').attr('src', '../images/Job_search_1.png');
        $('#img-slide').addClass('leftToRight').one('animationend', function () {
            $(this).removeClass('leftToRight').attr('src', '../images/Job_search_1.png');
        });
        $('#thanhNgang1').css('background-color', 'lightskyblue');
        for (var i = 1; i <= 5; i++) {
            if (i != 1) {
                $('#thanhNgang' + i).css('background-color', 'initial');
            }
        }

    }
    else if (index == 1) {
        $('#img1-slide').attr('src', '../images/Job_search_2.png');
        $('#img-slide').addClass('leftToRight').one('animationend', function () {
            $(this).removeClass('leftToRight').attr('src', '../images/Job_search_2.png');
        });
        $('#thanhNgang2').css('background-color', 'lightskyblue');

        for (var i = 1; i <= 5; i++) {
            if (i != 2) {
                $('#thanhNgang' + i).css('background-color', 'initial');
            }
        }

    }
    else if (index == 2) {
        $('#img1-slide').attr('src', '../images/Job_search_3.png');
        $('#img-slide').addClass('leftToRight').one('animationend', function () {
            $(this).removeClass('leftToRight').attr('src', '../images/Job_search_3.png');
        });
        $('#thanhNgang3').css('background-color', 'lightskyblue');

        for (var i = 1; i <= 5; i++) {
            if (i != 3) {
                $('#thanhNgang' + i).css('background-color', 'initial');
            }
        }

    }
    else if (index == 3) {
        $('#img1-slide').attr('src', '../images/Job_search_4.png');
        $('#img-slide').addClass('leftToRight').one('animationend', function () {
            $(this).removeClass('leftToRight').attr('src', '../images/Job_search_4.png');
        });
        $('#thanhNgang4').css('background-color', 'lightskyblue');

        for (var i = 1; i <= 5; i++) {
            if (i != 4) {
                $('#thanhNgang' + i).css('background-color', 'initial');
            }
        }

    }
    else {
        $('#img1-slide').attr('src', '../images/Job_search_5.png');
        $('#img-slide').addClass('leftToRight').one('animationend', function () {
            $(this).removeClass('leftToRight').attr('src', '../images/Job_search_5.png');
        });
        $('#thanhNgang5').css('background-color', 'lightskyblue');

        for (var i = 1; i <= 5; i++) {
            if (i != 5) {
                $('#thanhNgang' + i).css('background-color', 'initial');
            }
        }
    }



}

function desktop() {
    $('*').off();

    // email
    $('#email').focus(function () {
        if ($('#email').val() == '') {
            $('#mail').addClass('bienDoiChu').on('animationend', function () {
                $(this).removeClass('bienDoiChu').css({
                    'font-size': '0.7rem',
                    'top': '-16px',
                    'left': '0px'
                })

            });
        }
        $('#email').blur(function () {

            if ($('#email').val() == '') {
                $('#mail').addClass('bienDoiChu1').on('animationend', function () {

                    $('#mail').removeClass('bienDoiChu1').css({
                        'font-size': '0.9rem',
                        'top': '0.5rem',
                        'left': '0.5rem'
                    });


                });
            }

        });
    });

    // password
    $('#password').focus(function () {
        if ($('#password').val() == '') {
            $('#matKhau').addClass('bienDoiChu').on('animationend', function () {
                $(this).removeClass('bienDoiChu').css({
                    'font-size': '0.7rem',
                    'top': '-16px',
                    'left': '0px'
                })

            });
        }
        $('#password').blur(function () {

            if ($('#password').val() == '') {
                $('#matKhau').addClass('bienDoiChu1').on('animationend', function () {

                    $('#matKhau').removeClass('bienDoiChu1').css({
                        'font-size': '0.9rem',
                        'top': '0.5rem',
                        'left': '0.5rem'
                    });


                });
            }

        });
    });


    // ẩn hiện password
    $('#eyes').click(function () {

        if ($('#password').attr('type') == 'password') {
            $('#password').attr('type', 'text');
            $('#eyes').removeClass('fa-solid fa-eye').addClass('fa-solid fa-eye-slash');
        } else {
            $('#password').attr('type', 'password');
            $('#eyes').removeClass('fa-solid fa-eye-slash').addClass('fa-solid fa-eye');
        }
    })


    $('#eyes1').click(function () {

        if ($('#password1').attr('type') == 'password') {
            $('#password1').attr('type', 'text');
            $('#eyes1').removeClass('fa-solid fa-eye').addClass('fa-solid fa-eye-slash');
        } else {
            $('#password1').attr('type', 'password');
            $('#eyes1').removeClass('fa-solid fa-eye-slash').addClass('fa-solid fa-eye');
        }
    })

    $('#thanhNgang1').click(function () {
        $('#img1-slide').attr('src', '../images/Job_search_1.png');



        $('#thanhNgang1').css('background-color', 'lightskyblue');
        $('#img-slide').addClass('leftToRight').one('animationend', function () {
            $(this).removeClass('leftToRight').attr('src', '../images/Job_search_1.png');
        });

        for (var i = 1; i <= 5; i++) {
            if (i != 1) {
                $('#thanhNgang' + i).css('background-color', 'initial');
            }
            index = 0;
        }
    });
    $('#thanhNgang2').click(function () {
        $('#img1-slide').attr('src', '../images/Job_search_2.png');
        // $('#img-slide').attr('src','./images/Job_search_2.png');
        $('#img-slide').addClass('leftToRight').one('animationend', function () {
            $(this).removeClass('leftToRight').attr('src', '../images/Job_search_2.png');
        });
        $('#thanhNgang2').css('background-color', 'lightskyblue');

        index = 1;

        for (var i = 1; i <= 5; i++) {
            if (i != 2) {
                $('#thanhNgang' + i).css('background-color', 'initial');
            }
        }
    });

    $('#thanhNgang3').click(function () {
        $('#img1-slide').attr('src', '../images/Job_search_3.png');
        $('#img-slide').addClass('leftToRight').one('animationend', function () {
            $(this).removeClass('leftToRight').attr('src', '../images/Job_search_3.png');
        });


        $('#thanhNgang3').css('background-color', 'lightskyblue');

        index = 2;

        for (var i = 1; i <= 5; i++) {
            if (i != 3) {
                $('#thanhNgang' + i).css('background-color', 'initial');
            }
        }
    });

    $('#thanhNgang4').click(function () {
        $('#img1-slide').attr('src', '../images/Job_search_4.png');
        $('#img-slide').addClass('leftToRight').one('animationend', function () {
            $(this).removeClass('leftToRight').attr('src', '../images/Job_search_4.png');
        });
        $('#thanhNgang4').css('background-color', 'lightskyblue');

        index = 3;

        for (var i = 1; i <= 5; i++) {
            if (i != 4) {
                $('#thanhNgang' + i).css('background-color', 'initial');
            }
        }
    });

    $('#thanhNgang5').click(function () {
        $('#img1-slide').attr('src', '../images/Job_search_5.png');
        $('#img-slide').addClass('leftToRight').one('animationend', function () {
            $(this).removeClass('leftToRight').attr('src', '../images/Job_search_5.png');
        });
        $('#thanhNgang5').css('background-color', 'lightskyblue');

        index = 3;

        for (var i = 1; i <= 5; i++) {
            if (i != 5) {
                $('#thanhNgang' + i).css('background-color', 'initial');
            }
        }
    });



    setInterval(chuyenSlide, 5000);

    $('#user-Icon').click(function () {

        if (cnt % 2 == 0) {

            $('#menuPhu > a').addClass('lamMo2').one('animationend', function () {
                $(this).removeClass('lamMo2');
            }).css({
                'display': 'block',

            });
            cnt++;
        }
        else if (cnt % 2 != 0) {

            $('#menuPhu > a').addClass('lamMo1').one('animationend', function () {
                $(this).removeClass('lamMo1').css({
                    'display': 'none',

                });;

            })

            cnt++;

        }

    });

    $('#boy').mouseenter(function () {
        $('#chatBoxWelcome').css('display', 'flex');
    })

    $('#boy').mouseleave(function () {
        $('#chatBoxWelcome').css('display', 'none');
    })


    $('#coolBoy').mouseenter(function () {
        $('#chatBoxUT').css('display', 'flex');
    })

    $('#coolBoy').mouseleave(function () {
        $('#chatBoxUT').css('display', 'none');
    })

    $('#dangKy').click(function(){
        if(kiemTra())
        {
            window.location.href = '../index.html';
        }
       
    })

}

function mobile() {
    $('*').off();

    $('#dangKy').click(function(){
        if(kiemTra())
        {
            window.location.href = '../index.html';
        }
       
    })
    // email
    $('#email').focus(function () {
        if ($('#email').val() == '') {
            $('#mail').addClass('bienDoiChu').on('animationend', function () {
                $(this).removeClass('bienDoiChu').css({
                    'font-size': '0.7rem',
                    'top': '-16px',
                    'left': '0px'
                })

            });
        }
        $('#email').blur(function () {

            if ($('#email').val() == '') {
                $('#mail').addClass('bienDoiChu1').on('animationend', function () {

                    $('#mail').removeClass('bienDoiChu1').css({
                        'font-size': '0.9rem',
                        'top': '0.7rem',
                        'left': '0.5rem'
                    });


                });
            }

        });
    });

    // password
    $('#password').focus(function () {
        if ($('#password').val() == '') {
            $('#matKhau').addClass('bienDoiChu').on('animationend', function () {
                $(this).removeClass('bienDoiChu').css({
                    'font-size': '0.7rem',
                    'top': '-16px',
                    'left': '0px'
                })

            });
        }
        $('#password').blur(function () {

            if ($('#password').val() == '') {
                $('#matKhau').addClass('bienDoiChu1').on('animationend', function () {

                    $('#matKhau').removeClass('bienDoiChu1').css({
                        'font-size': '0.9rem',
                        'top': '0.7rem',
                        'left': '0.5rem'
                    });


                });
            }

        });
    });


    // ẩn hiện password
    $('#eyes').click(function () {

        if ($('#password').attr('type') == 'password') {
            $('#password').attr('type', 'text');
            $('#eyes').removeClass('fa-solid fa-eye').addClass('fa-solid fa-eye-slash');
        } else {
            $('#password').attr('type', 'password');
            $('#eyes').removeClass('fa-solid fa-eye-slash').addClass('fa-solid fa-eye');
        }
    })


    $('#eyes1').click(function () {

        if ($('#password1').attr('type') == 'password') {
            $('#password1').attr('type', 'text');
            $('#eyes1').removeClass('fa-solid fa-eye').addClass('fa-solid fa-eye-slash');
        } else {
            $('#password1').attr('type', 'password');
            $('#eyes1').removeClass('fa-solid fa-eye-slash').addClass('fa-solid fa-eye');
        }
    })
}

function kiemTra(){
    let value = document.querySelectorAll('input');
    let flag = true;

    for(let x of value){
        if(x.value == ''){
            flag = false;
            break;
        }
    }
    return flag;
}

window.onload = function () {
    if(window.innerWidth > 1024)
    {
        desktop();
    }
    else if(window.innerWidth <= 1024)
    {
        mobile();
    }

    $(window).resize(function(){
        if(window.innerWidth > 1024)
        {
            desktop();
        }
        else if(window.innerWidth <= 1024)
        {
            mobile();
        }
    });
}