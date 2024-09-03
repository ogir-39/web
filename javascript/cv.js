let co = false; //false = bright mode


function desktop() {
    $('*').off();
    let close = document.querySelector('#close');
    close.onclick = function () {
        let pre = document.querySelectorAll('.preview');
        for (let x of pre)
            x.style.display = 'none';
    };
    let buttons = document.querySelectorAll('.btnColor');
    $('.open').on('click', function () {
        $('.preview').css("display", "block");
        for (let z = 0; z < buttons.length; z++) {
            if (z == 0) {
                $(buttons[z].querySelector('i')).css({
                    'display': 'block'
                })
            }
            else {
                $(buttons[z].querySelector('i')).css({
                    'display': 'none'
                })
            }
        }
    })

    $('#close').css({
        'display': 'block'
    })


    if (co == true) {

        $('.topcmps').css('background-color', '#292a2d');
        $('.underline').css('background', 'white');
        $('.subMenuP>li>input').css('color', 'white');
        $('.subMenuP>li>button > i').css('color', 'white');
        $('.subMenuP>li>a').css('color', 'white');
        $('.subMenuP>li').css('color', 'white');
        $('.subMenuP').css('background-color', '#292a2d');
        $('.phone').css('background-color', '#292a2d');
        $('.topjobs_p').css('background-color', '#202124');
        $('.topjobs_p .topjob>div').css('background-color', '#292a2d');
        $('.imgjob + div,p').css('color', 'white');
        $('.word').css('color', 'white');
        $('.topjob p').css('color', '');
        $('.topjob>div').css('background-color', 'rgba(2, 47, 68, 0.28)');
        let menu = document.querySelectorAll('.menu>li>a');
        for (let i = 0; i < menu.length; i++) {
            $(menu[i + 1]).on('mouseenter', function () {
                $(this).css({
                    'color': 'lightskyblue',
                    'background-color': 'rgb(49,51,56)'
                })
            })
            $(menu[i + 1]).on('mouseleave', function () {
                $(this).css({
                    'color': '',
                    'background-color': ''
                })
            })
        }
        let users = document.querySelectorAll('.users>li');
        for (let y = 0; y < users.length; y++) {
            $(users[y]).on('mouseenter', function () {
                $(this).css({
                    'color': 'lightskyblue',
                    'background-color': 'rgb(49,51,56)'
                })
            })
            $(users[y]).on('mouseleave', function () {
                $(this).css({
                    'color': '',
                    'background-color': ''
                })
            })
        }
        $('.choice>a:last-child>p').css('color', '');
        $('.bigbackground>p').css('color', 'black');
    }
    else {
        $('.topcmps').css('background-color', '');
        $('.underline').css('background', '');
        $('.subMenuP>li>input').css('color', '');
        $('.subMenuP>li>button > i').css('color', '');
        $('.subMenuP>li>a').css('color', '');
        $('.subMenuP>li').css('color', '');
        $('.subMenuP').css('background-color', '');
        $('.phone').css('background-color', '');
        $('.topjobs_p').css('background-color', '');
        $('.topjobs_p .topjob>div').css('background-color', '');
        $('.imgjob + div,p').css('color', '');
        $('.word').css('color', '');
        $('.topjob p').css('color', '');
        $('.topjob>div').css('background-color', '');
        let menu = document.querySelectorAll('.menu>li>a');
        for (let i = 0; i < menu.length; i++) {
            $(menu[i + 1]).on('mouseenter', function () {
                $(this).css({
                    'color': '',
                    'background-color': ''
                })
            })
            $(menu[i + 1]).on('mouseleave', function () {
                $(this).css({
                    'color': '',
                    'background-color': ''
                })
            })
        }
        let users = document.querySelectorAll('.users>li');
        for (let y = 0; y < users.length; y++) {
            $(users[y]).on('mouseenter', function () {
                $(this).css({
                    'color': '',
                    'background-color': ''
                })
            })
            $(users[y]).on('mouseleave', function () {
                $(this).css({
                    'color': '',
                    'background-color': ''
                })
            })
        }
        $('.choice>a:last-child>p').css('color', '');
        $('.bigbackground>p').css('color', '');
    }


    $('.preview').on('click', function (event) {
        event.stopImmediatePropagation();
        $(this).css({
            'display': 'none'
        })
    })

    $('.preview div').on('click', function (event) {
        event.stopImmediatePropagation();

        $('.preview div div').css({
            'display': 'block'
        })
        $('#close').css({
            'display': 'block'
        })
    })



    let cv = document.querySelectorAll('.imgCV>a>img');
    for (let x = 0; x < cv.length; x++) {
        cv[x].addEventListener('mouseenter', function () {
            let bigImg = $(cv[x]).attr("src");
            $('#bigImg').attr('src', bigImg); /*
        lấy src của bigImg gán cho id bigImg*/
        })
    }

    let btnColor = document.querySelectorAll('.btnColor');
    for (let b = 0; b < btnColor.length; b++) {
        btnColor[b].addEventListener('click', function () {
            let txt = $(btnColor[b]).attr("rel");
            let tmp = bigImg.getAttribute("src");
            //tmp[tmp.length-5] = txt;
            let nStr = "";
            for (let i = 0; i < tmp.length; i++) {
                if (i != tmp.length - 5) {
                    nStr += tmp[i];
                }
                else {
                    nStr += txt;
                }
            }
            bigImg.setAttribute("src", nStr);

        })
    }

    // DARK MODE
    //let co = false; //false = bright mode
    //chỉnh từ dark mode sang brigth mode
    $('#sun').click(function () {
        if (co == true) {
            $('#sun').css({
                'color': 'gold',
                'border': '3px solid gold'
            })
            $('#moon').css({
                'color': 'gainsboro',
                'box-shadow': '0 0 0 0 transparent',
            })
            $('body').css({
                'background-color': 'white'
            })
            $('header').css({
                'background-color': '',
                'color': ''
            })
            $('.menu>li:hover>a').css({
                'background-color': '',
                'color': ''
            })
            let menu = document.querySelectorAll('.menu>li>a');
            for (let i = 0; i < menu.length; i++) {
                $(menu[i + 1]).on('mouseenter', function () {
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
                $(menu[i + 1]).on('mouseleave', function () {
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
            }
            $('.search>input').css({
                'color': ''
            })
            let users = document.querySelectorAll('.users>li');
            for (let y = 0; y < users.length; y++) {
                $(users[y]).on('mouseenter', function () {
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
                $(users[y]).on('mouseleave', function () {
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
            }
            $('.bigbackground>p').css({
                'color': ''
            })
            $('.main').css({
                'background-color': ''
            })
            $('.info>div').css({
                'background-color': '',
                'color': ''
            })
            $('.info>div:first-child i').css({
                'color': ''
            })
            $('.info>div:last-child i').css({
                'color': ''
            })
            $('.lienhe').css({
                'background-color': '',
                'color': ''
            })
            $('.lienhe a').css({
                'color': ''
            })
            $('.salary').css({
                'color': ''
            })
            $('.salary > p').css({
                'color': ''
            })
            $('.info p').css({'color':''});
            $('.details').css({
                'background-color': '',
                'color': ''
            })
            $('.below').css({
                'background-color': '',
                'color': ''
            })
            $('.career div').css({
                'background-color': '',
                'color': ''
            })
            let cv = document.querySelectorAll('.career');
            for (let x = 0; x < cv.length; x++) {
                $(cv[x]).on('mouseenter', function () {
                    $(this).css({
                        'background': '',
                        'border-color': ''
                    })
                })
                $(cv[x]).on('mouseleave', function () {
                    $(this).css({
                        'background': ''
                    })
                })
            }
            let topcmp = document.querySelectorAll('.topcmp');
            for (let x = 0; x < topcmp.length; x++) {
                $(topcmp[x]).on('mouseenter', function () {
                    $(this).css({
                        'background': ''
                    })
                })
                $(topcmp[x]).on('mouseleave', function () {
                    $(this).css({
                        'background': ''
                    })
                })
            }
            $('.topcmp>div').css({
                'background-color': '',
                'color': ''
            })
            $('footer').css({
                'background': ''
            })
            $('footer h2').css({
                'color': ''
            })
            $('footer p').css({
                'color': ''
            })

            $('.below p').css({
                'color': ''
            })
    
            $('.below h2').css('color', '');
            co = false;
        }
    });
    //chuyển từ bright mode sang dark mode
    $('#moon').click(function () {
        if (co == false) {
            $(this).removeClass('moonOn moonOff').addClass('moonOn');
            $('#sun').css({
                'color': 'gray',
                'border': '0'
            })
            $('body').css({
                'background-color': '#202124'
            })
            $('header').css({
                'background-color': '#292a2d',
                'color': 'white !important'
            })
            $('.menu>li:hover>a').css({
                'background-color': '#292a2d',
                'color': 'white !important'
            })
            let menu = document.querySelectorAll('.menu>li>a');
            for (let i = 0; i < menu.length; i++) {
                $(menu[i + 1]).on('mouseenter', function () {
                    $(this).css({
                        'color': 'lightskyblue',
                        'background-color': 'rgb(49,51,56)'
                    })
                })
                $(menu[i + 1]).on('mouseleave', function () {
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
            }
            $('.search>input').css({
                'color': 'whitesmoke'
            })
            let users = document.querySelectorAll('.users>li');
            for (let y = 0; y < users.length; y++) {
                $(users[y]).on('mouseenter', function () {
                    $(this).css({
                        'color': 'lightskyblue',
                        'background-color': 'rgb(49,51,56)'
                    })
                })
                $(users[y]).on('mouseleave', function () {
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
            }
            $('.bigbackground>p').css({
                'color': 'black'
            })
            $('.main').css({
                'background-color': '#292a2d'
            })
            $('.info>div').css({
                'background-color': 'rgb(49,51,56)',
                'color': 'white'
            })
            $('.info>div:first-child i').css({
                'color': 'black'
            })
            $('.info>div:last-child i').css({
                'color': '#97bdd4'
            })
            $('.lienhe').css({
                'background-color': 'rgb(49,51,56)',
                'color': 'white'
            })
            $('.lienhe a').css({
                'color': 'white'
            })
            $('.salary').css({
                'color': 'orangered'
            })

            $('.details').css({
                'background-color': 'rgb(49,51,56)',
                'color': 'white'
            })
            $('.below').css({
                'background-color': '#292a2d',
                
            })
            $('.below p,h2').css({
                'color': 'white'
            })
            $('.career div').css({
                'background-color': 'rgb(49,51,56)',
                'color': 'white'
            })
            $('.career .salary').css({
                'color': 'lightskyblue'
            })
            // let cv = document.querySelectorAll('.career');
            // for (let x = 0; x < cv.length; x++) {
            //     $(cv[x]).on('mouseenter', function () {
            //         $(this).css({
            //             'background': 'radial-gradient(rgba(135, 206, 250, 0.4),#292a2d)',
            //             'border-color': 'lightskyblue'
            //         })
            //     })
            //     $(cv[x]).on('mouseleave', function () {
            //         $(this).css({
            //             'background': 'initial'
            //         })
            //     })
            // }
            // let topcmp = document.querySelectorAll('.topcmp');
            // for (let x = 0; x < topcmp.length; x++) {
            //     $(topcmp[x]).on('mouseenter', function () {
            //         $(this).css({
            //             'background': 'radial-gradient(rgba(135, 206, 250, 0.4),#292a2d)'
            //         })
            //     })
            //     $(topcmp[x]).on('mouseleave', function () {
            //         $(this).css({
            //             'background': 'initial'
            //         })
            //     })
            // }
            $('.topcmp>div').css({
                'background-color': 'rgb(49,51,56)',
                'color': 'white'
            })
            $('footer').css({
                'background': '#202124'
            })
            $('footer h2').css({
                'color': 'lightskyblue'
            })
            $('footer p').css({
                'color': 'white'
            })
            co = true;
        }
    });

    // HOVER DARK MODE BUTTONS
    $('#moon').on('mouseenter', function () {
        if (co == false) { //bright mode
            $('#sun').removeClass('haoquang').addClass('sunOff').on('animationend', function () {
                $('#sun').css({
                    'color': 'gainsboro',
                    'border': '0'
                })
            })
            $('#moon').removeClass('moonOff').addClass('moonOn');
        }
    })
    $('#moon').on('mouseleave', function () {
        if (co == false) //bright mode
        {
            $('#sun').removeClass('sunOff').addClass('haoquang');
            $('#sun').css({
                'color': 'gold',
                'border': '3px solid gold',
                'box-shadow': '0 0 0 0'
            })
            $('#moon').removeClass('moonOn').addClass('moonOff');
        }
    })
    $('#sun').on('mouseenter', function () {
        if (co == true) { //dark mode
            $('#sun').removeClass('sunOff').addClass('haoquang');
            $('#sun').css({
                'color': 'gold',
                'border': '3px solid gold'
            })
            $('#moon').removeClass('moonOn').addClass('moonOff');
        }
    })
    $('#sun').on('mouseleave', function () {
        if (co == true) //dark mode
        {
            $('#sun').removeClass('haoquang').addClass('sunOff');
            $('#sun').css({
                'color': 'gainsboro',
                'border': '0',
            })
            $('#moon').removeClass('moonOff').addClass('moonOn');
        }
    })


    //DẤU TICK MỤC CHỌN MÀU

    for (let i = 0; i < buttons.length; i++) {

        $(buttons[i]).click(function () {
            for (let x = 0; x < buttons.length; x++) {
                if (x == i) {
                    $(buttons[x].querySelector('i')).css({
                        'display': 'block'
                    })
                }
                else {
                    $(buttons[x].querySelector('i')).css({
                        'display': 'none'
                    })
                }
            }
        })
    }

    // cuộn thanh tìm kiếm trên taskbar
    $('#click1').on('click', function () {

        $(this).addClass('hidden');
        $('.search').removeClass('unexpand');

        $('#click').removeClass('hidden');

    });

    $('#click').on('click', function () {
        $(this).addClass('hidden');

        $('.search').addClass('unexpand');

        $('#click1').removeClass('hidden');
    });

    $(window).scroll(function () {
        let top = $(window).scrollTop();
        var footer = document.querySelector('.footer');
        let maxHeight = document.body.offsetHeight;


        let footerCal = maxHeight - footer.offsetHeight - 300;
        let max = footerCal - 250 + 30;



        if (top >= 0 && top < max) {


            if (top > 0 && top <= footerCal) {
                if (top > 300) {
                    let movetoTop = document.querySelector('.icon > div > a');
                    $(movetoTop).css({
                        'display': 'block'
                    });
                }
                else {
                    let movetoTop = document.querySelector('.icon > div > a');
                    $(movetoTop).css({
                        'display': 'none'
                    });
                }

                let quangCao = document.querySelectorAll('.ads a');

                for (let x of quangCao) {
                    $(x).css({
                        'width': '12%',
                        'height': '50%',
                        'padding': '1rem',
                        'margin-top': '1rem',
                        'border-radius': '1rem',
                        'position': 'fixed',
                        'top': '20%'
                    });
                }
            } else if (top <= 100) {
                if (top > 300) {
                    let movetoTop = document.querySelector('.icon > div > a');
                    $(movetoTop).css({
                        'display': 'none'
                    });
                }


                let quangCao = document.querySelectorAll('.ads a');

                for (let x of quangCao) {
                    $(x).css({
                        'width': '12%',
                        'height': '50%',

                        'padding': '1rem',
                        'margin-top': '1rem',
                        'border-radius': '1rem',
                        'position': 'absolute',
                        'top': '20%'
                    });
                }
            }

        } else {
            let quangCao = document.querySelectorAll('.ads a');

            for (let x of quangCao) {

                // Cố định vị trí hiện tại của phần tử
                $(x).css({
                    'position': 'absolute',
                    'top': `${footerCal - 88}px` // Giữ nguyên vị trí hiện tại
                });
            }

        }


    });

    $('.subMenuP').hide();
}



function mobile() {
    $('*').off();

    $('.subMenuP').hide();

    let bell = document.querySelector('.bell');

    bell.addEventListener('click', function () {

        $('.thongBao').addClass("active");
    });

    if (co == true) {

        $('.topcmps').css('background-color', '#292a2d');
        $('.underline').css('background', 'white');
        $('.subMenuP>li>input').css('color', 'white');
        $('.subMenuP>li>button > i').css('color', 'white');
        $('.subMenuP>li>a').css('color', 'white');
        $('.subMenuP>li').css('color', 'white');
        $('.subMenuP').css('background-color', '#292a2d');
        $('.phone').css('background-color', '#292a2d');
        $('.topjobs_p').css('background-color', '#202124');
        $('.topjobs_p .topjob>div').css('background-color', '#292a2d');
        $('.imgjob + div,p').css('color', 'white');
        $('.word').css('color', 'lightskyblue');
        $('.words').css('color', 'white');

        $('.choice>a:last-child>p').css('color', 'white');
        $('.bigbackground>p').css('color', 'black');


    }
    else {
        $('.topcmps').css('background-color', '');
        $('.underline').css('background', '');
        $('.subMenuP>li>input').css('color', '');
        $('.subMenuP>li>button > i').css('color', '');
        $('.subMenuP>li>a').css('color', '');
        $('.subMenuP>li').css('color', '');
        $('.subMenuP').css('background-color', '');
        $('.phone').css('background-color', '');
        $('.topjobs_p').css('background-color', '');
        $('.topjobs_p .topjob>div').css('background-color', '');
        $('.imgjob + div,p').css('color', '');
        $('.word').css('color', '');
        $('.words').css('color', '');
        $('.choice>a:last-child>p').css('color', '');
        $('.bigbackground>p').css('color', '');


    }

    $('.thongBao i').on('click', function () {

        $('.thongBao').removeClass("active");
    });
    $('.menuPhone').on('click', function () {

        $('.subMenuP').show();
        $('.subMenuP>li:first-child>i').on('click', function () {
            $('.subMenuP').hide();
        })
    })


    $('#close').css({
        'display': 'none'
    })

    $('.preview div').on('click', function (event) {
        event.stopImmediatePropagation();

        $('.preview div div').css({
            'display': 'block'
        })
        $('#close').css({
            'display': 'none'
        })
    })

    $(window).scroll(function () {
        let top = $(window).scrollTop();
        var footer = document.querySelector('.footer');
        let maxHeight = document.body.offsetHeight;


        let footerCal = maxHeight - footer.offsetHeight - 300;
        let max = footerCal - 250 + 30;



        if (top >= 0 && top < max) {


            if (top > 0 && top <= footerCal) {
                if (top > 300) {
                    let movetoTop = document.querySelector('.icon > div > a');
                    $(movetoTop).css({
                        'display': 'block'
                    });
                }
                else {
                    let movetoTop = document.querySelector('.icon > div > a');
                    $(movetoTop).css({
                        'display': 'none'
                    });
                }

                let quangCao = document.querySelectorAll('.ads a');

                for (let x of quangCao) {
                    $(x).css({
                        'width': '12%',
                        'height': '50%',
                        'padding': '1rem',
                        'margin-top': '1rem',
                        'border-radius': '1rem',
                        'position': 'fixed',
                        'top': '20%'
                    });
                }
            } else if (top <= 100) {
                if (top > 300) {
                    let movetoTop = document.querySelector('.icon > div > a');
                    $(movetoTop).css({
                        'display': 'none'
                    });
                }


                let quangCao = document.querySelectorAll('.ads a');

                for (let x of quangCao) {
                    $(x).css({
                        'width': '12%',
                        'height': '50%',

                        'padding': '1rem',
                        'margin-top': '1rem',
                        'border-radius': '1rem',
                        'position': 'absolute',
                        'top': '20%'
                    });
                }
            }

        } else {
            let quangCao = document.querySelectorAll('.ads a');

            for (let x of quangCao) {

                // Cố định vị trí hiện tại của phần tử
                $(x).css({
                    'position': 'absolute',
                    'top': `${footerCal - 88}px` // Giữ nguyên vị trí hiện tại
                });
            }

        }


    });





    let close = document.querySelector('.preview>p');
    close.onclick = function () {
        let pre = document.querySelectorAll('.preview');
        for (let x of pre)
            x.style.display = 'none';
    };

    // chỉnh màu
    let buttons = document.querySelectorAll('.btnColor');
    $('.open').on('click', function () {
        $('.preview').css("display", "block");
        for (let z = 0; z < buttons.length; z++) {
            if (z == 0) {
                $(buttons[z].querySelector('i')).css({
                    'display': 'block'
                })
            }
            else {
                $(buttons[z].querySelector('i')).css({
                    'display': 'none'
                })
            }
        }
    })



    $('.open').click(function () {
        $('#bigImg').attr('src', this.parentElement.parentElement.querySelector('.imgCV img').getAttribute('src'));
    });



    let cv = document.querySelectorAll('.imgCV>a>img');
    for (let x = 0; x < cv.length; x++) {
        cv[x].addEventListener('mouseenter', function () {
            let bigImg = $(cv[x]).attr("src");
            $('#bigImg').attr('src', bigImg); /*
            lấy src của bigImg gán cho id bigImg*/
        })
    }

    let btnColor = document.querySelectorAll('.btnColor');
    for (let b = 0; b < btnColor.length; b++) {
        btnColor[b].addEventListener('click', function () {
            let txt = $(btnColor[b]).attr("rel");
            let tmp = bigImg.getAttribute("src");
            //tmp[tmp.length-5] = txt;
            let nStr = "";
            for (let i = 0; i < tmp.length; i++) {
                if (i != tmp.length - 5) {
                    nStr += tmp[i];
                }
                else {
                    nStr += txt;
                }
            }
            bigImg.setAttribute("src", nStr);

        })
    }

    for (let i = 0; i < buttons.length; i++) {

        $(buttons[i]).click(function () {
            for (let x = 0; x < buttons.length; x++) {
                if (x == i) {
                    $(buttons[x].querySelector('i')).css({
                        'display': 'block'
                    })
                }
                else {
                    $(buttons[x].querySelector('i')).css({
                        'display': 'none'
                    })
                }
            }
        })
    }

    // DARK MODE
    // DARK MODE

    //chỉnh từ dark mode sang brigth mode
    $('#sun').click(function () {
        if (co == true) {

            let tabs = document.querySelectorAll('.tab>li');

            for (let x = 0; x < tabs.length; x++) {
                if (tabs[x].classList.contains('changeColorBright')) {
                    $('.changeColorBright a').css('color', 'black');
                }

                else if (tabs[x].classList.contains('changeColorDark') == true) {
                    $('.changeColorDark a').css('color', 'black');

                }


            }
            $('.below h2').css('color', '');

            $('.main_p .info h1').css('color', '');
            $('.topcmps').css('background-color', '');
            $('.underline').css('background', '');
            $('.subMenuP>li>input').css('color', '');
            $('.subMenuP>li>button > i').css('color', '');
            $('.subMenuP>li>a').css('color', '');
            $('.subMenuP>li').css('color', '');
            $('.subMenuP').css('background-color', '');
            $('.phone').css('background-color', '');
            $('.topjobs_p').css('background-color', '');
            $('.topjobs_p .topjob>div').css('background-color', '');
            $('.imgjob + div,p').css('color', '');
            $('#sun').css({
                'color': 'gold',
                'border': '3px solid gold'
            })
            $('#moon').css({
                'color': 'gainsboro',
                'box-shadow': '0 0 0 0 transparent',
            })
            $('body').css({
                'background-color': 'white'
            })
            $('header').css({
                'background-color': '',
                'color': ''
            })
            $('.menu>li:hover>a').css({
                'background-color': '',
                'color': ''
            })
            let menu = document.querySelectorAll('.menu>li>a');
            for (let i = 0; i < menu.length; i++) {
                $(menu[i + 1]).on('mouseenter', function () {
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
                $(menu[i + 1]).on('mouseleave', function () {
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
            }
            $('.search>input').css({
                'color': ''
            })
            let users = document.querySelectorAll('.users>li');
            for (let y = 0; y < users.length; y++) {
                $(users[y]).on('mouseenter', function () {
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
                $(users[y]).on('mouseleave', function () {
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
            }
            $('.bigbackground>p').css({
                'color': ''
            })
            $('.main').css({
                'background-color': ''
            })
            $('.info>div').css({
                'background-color': '',
                'color': ''
            })
            $('.info>div:first-child i').css({
                'color': ''
            })
            $('.info>div:last-child i').css({
                'color': ''
            })
            $('.lienhe').css({
                'background-color': '',
                'color': ''
            })
            $('.lienhe a').css({
                'color': ''
            })
            $('.salary').css({
                'color': ''
            })
            $('.details').css({
                'background-color': '',
                'color': ''
            })
            $('.below').css({
                'background-color': '',
                'color': ''
            })
            $('.career div').css({
                'background-color': '',
                'color': ''
            })
            let cv = document.querySelectorAll('.career');
            for (let x = 0; x < cv.length; x++) {
                $(cv[x]).on('mouseenter', function () {
                    $(this).css({
                        'background': '',
                        'border-color': ''
                    })
                })
                $(cv[x]).on('mouseleave', function () {
                    $(this).css({
                        'background': ''
                    })
                })
            }
            let topcmp = document.querySelectorAll('.topcmp');
            for (let x = 0; x < topcmp.length; x++) {
                $(topcmp[x]).on('mouseenter', function () {
                    $(this).css({
                        'background': ''
                    })
                })
                $(topcmp[x]).on('mouseleave', function () {
                    $(this).css({
                        'background': ''
                    })
                })
            }
            $('.topcmp>div').css({
                'background-color': '',
                'color': ''
            })
            $('footer').css({
                'background': ''
            })
            $('footer h2').css({
                'color': ''
            })
            $('footer p').css({
                'color': ''
            })
            co = false;
        }
    });
    //chuyển từ bright mode sang dark mode
    $('#moon').click(function () {
        if (co == false) {

            let tabs = document.querySelectorAll('.tab>li');

            for (let x = 0; x < tabs.length; x++) {
                if (tabs[x].classList.contains('changeColorBright')) {
                    $('.changeColorBright a').css('color', 'lightskyblue');
                }

                else if (tabs[x].classList.contains('changeColorDark') == true) {
                    $('.changeColorDark a').css('color', 'lightskyblue');

                }


            }



            $('.main_p .info h1').css('color', 'white');
            $('.underline').css('background', 'white');
            $('.subMenuP>li>input').css('color', 'white');
            $('.subMenuP>li>button > i').css('color', 'white');
            $('.subMenuP>li>a').css('color', 'white');
            $('.subMenuP>li').css('color', 'white');
            $('.subMenuP').css('background-color', '#292a2d');
            $('.phone').css('background-color', '#292a2d');
            $('.topjobs_p').css('background-color', '#202124');
            $('.topjobs_p .topjob>div').css('background-color', 'rgba(0, 0, 0, 0.28)');
            $('.imgjob + div,p').css('color', 'white');
            $(this).removeClass('moonOn moonOff').addClass('moonOn');
            $('#sun').css({
                'color': 'gray',
                'border': '0'
            })
            $('body').css({
                'background-color': '#202124'
            })
            $('header').css({
                'background-color': '#292a2d',
                'color': 'white !important'
            })
            $('.menu>li:hover>a').css({
                'background-color': '#292a2d',
                'color': 'white !important'
            })
            let menu = document.querySelectorAll('.menu>li>a');
            for (let i = 0; i < menu.length; i++) {
                $(menu[i + 1]).on('mouseenter', function () {
                    $(this).css({
                        'color': 'lightskyblue',
                        'background-color': 'rgb(49,51,56)'
                    })
                })
                $(menu[i + 1]).on('mouseleave', function () {
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
            }
            $('.search>input').css({
                'color': 'whitesmoke'
            })
            let users = document.querySelectorAll('.users>li');
            for (let y = 0; y < users.length; y++) {
                $(users[y]).on('mouseenter', function () {
                    $(this).css({
                        'color': 'lightskyblue',
                        'background-color': 'rgb(49,51,56)'
                    })
                })
                $(users[y]).on('mouseleave', function () {
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
            }
            $('.bigbackground>p').css({
                'color': 'black'
            })
            $('.main').css({
                'background-color': '#292a2d'
            })
            $('.info>div').css({
                'background-color': 'rgb(49,51,56)',
                'color': 'white'
            })
            $('.info>div:first-child i').css({
                'color': 'black'
            })
            $('.info>div:last-child i').css({
                'color': '#97bdd4'
            })
            $('.lienhe').css({
                'background-color': 'rgb(49,51,56)',
                'color': 'white'
            })
            $('.lienhe a').css({
                'color': 'white'
            })
            $('.salary').css({
                'color': 'white',
                'background-color': 'transparent'
            })

            $('.salary > p').css({
                'color': 'lightskyblue'
            })
            $('.location').css({
                'background-color': 'transparent'
            });
            $('.details').css({
                'background-color': 'rgb(49,51,56)',
                'color': 'white'
            })
            $('.below').css({
                'background-color': '#292a2d',
                'color': 'white'
            })
            $('.career div').css({
                'background-color': 'rgb(49,51,56)',
                'color': 'white'
            })
            $('.career .salary').css({
                'color': 'lightskyblue'
            })
            // let cv = document.querySelectorAll('.career');
            // for (let x = 0; x < cv.length; x++) {
            //     $(cv[x]).on('mouseenter', function () {
            //         $(this).css({
            //             'background': 'radial-gradient(rgba(135, 206, 250, 0.4),#292a2d)',
            //             'border-color': 'lightskyblue'
            //         })
            //     })
            //     $(cv[x]).on('mouseleave', function () {
            //         $(this).css({
            //             'background': 'initial'
            //         })
            //     })
            // }
            // let topcmp = document.querySelectorAll('.topcmp');
            // for (let x = 0; x < topcmp.length; x++) {
            //     $(topcmp[x]).on('mouseenter', function () {
            //         $(this).css({
            //             'background': 'radial-gradient(rgba(135, 206, 250, 0.4),#292a2d)'
            //         })
            //     })
            //     $(topcmp[x]).on('mouseleave', function () {
            //         $(this).css({
            //             'background': 'initial'
            //         })
            //     })
            // }
            $('.topcmp>div').css({
                'background-color': 'rgb(49,51,56)',
                'color': 'white'
            })

            $('.below h2').css('color', 'white');


            $('footer').css({
                'background': '#202124'
            })
            $('footer h2').css({
                'color': 'lightskyblue'
            })
            $('footer p').css({
                'color': 'white'
            })
            co = true;
        }
    });

    // HOVER DARK MODE BUTTONS
    $('#moon').on('mouseenter', function () {
        if (co == false) { //bright mode
            $('#sun').removeClass('haoquang').addClass('sunOff').on('animationend', function () {
                $('#sun').css({
                    'color': 'gainsboro',
                    'border': '0'
                })
            })
            $('#moon').removeClass('moonOff').addClass('moonOn');
        }
    })
    $('#moon').on('mouseleave', function () {
        if (co == false) //bright mode
        {
            $('#sun').removeClass('sunOff').addClass('haoquang');
            $('#sun').css({
                'color': 'gold',
                'border': '3px solid gold',
                'box-shadow': '0 0 0 0'
            })
            $('#moon').removeClass('moonOn').addClass('moonOff');
        }
    })
    $('#sun').on('mouseenter', function () {
        if (co == true) { //dark mode
            $('#sun').removeClass('sunOff').addClass('haoquang');
            $('#sun').css({
                'color': 'gold',
                'border': '3px solid gold'
            })
            $('#moon').removeClass('moonOn').addClass('moonOff');
        }
    })
    $('#sun').on('mouseleave', function () {
        if (co == true) //dark mode
        {
            $('#sun').removeClass('haoquang').addClass('sunOff');
            $('#sun').css({
                'color': 'gainsboro',
                'border': '0',
            })
            $('#moon').removeClass('moonOff').addClass('moonOn');
        }
    })
}

window.onload = function () {

    if (window.innerWidth >= 1024) {
        desktop();
    }

    else if (window.innerWidth <= 1023) {
        mobile();
    }

    $(window).on('resize', function () {
        if (window.innerWidth >= 1024) {
            desktop();
        }

        else if (window.innerWidth <= 1023) {
            mobile();
        }
    });
};