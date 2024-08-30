function thuGon() {
    let careers = document.querySelectorAll('.career');

    for (let i = 0; i < careers.length; i++) {
        if (i > 11) {
            careers[i].style.display = 'none';
        }
    }

    $('#btnMoRong>div>div').html('Xem tất cả');

}

function thuGonMobile() {
    let careers = document.querySelectorAll('.career');

    for (let i = 0; i < careers.length; i++) {
        if (i > 8) {
            careers[i].style.display = 'none';
        }
    }

    $('#btnMoRong>div>div').html('Xem tất cả');

}

function moRong() {
    let careers = document.querySelectorAll('.career');

    for (let i = 11; i < careers.length; i++) {
        if (i >= 12) {
            careers[i].style.display = 'block';
        }
    }

    $('#btnMoRong>div>div').text('Thu gọn');

}

function moRongMobile() {
    let careers = document.querySelectorAll('.career');

    for (let i = 8; i < careers.length; i++) {
        if (i >= 8) {
            careers[i].style.display = 'block';
        }
    }

    $('#btnMoRong>div>div').text('Thu gọn');

}


function kiemTraMoRong(flag) {
    // đang search thì ẩn
    if (flag == true) {
        $('#btnMoRong').addClass('hidden');
        $('#btnMoRong>div>div').text('Mở rộng');

        return;
    }

    $('#btnMoRong').removeClass('hidden');
    $('#btnMoRong>div>div').text('Thu gọn');
}

function chuyenDoiChuoi(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}


function chuKeoDaiNguoc(word, index = word.length - 1) {
    if (index < 0) {
        //console.log('index cua ham chu keo dai nguoc: ',index);
        return;
    };
    $(word[index]).addClass('chuKeoDaiNguoc').one('animationend', function () {
        this.classList.remove('chuKeoDaiNguoc');
        this.style.width = '0%';
        chuKeoDaiNguoc(word, index - 1);
        flag = true;
    });
}

function chuKeoDai(word, index = 0) {
    if (index >= word.length) {
        flag = false;
        return chuKeoDaiNguoc(word, word.length - 1);

    }
    

    if (flag == true) return;

    $(word[index]).addClass('chuKeoDai').one('animationend', function () {
        this.classList.remove('chuKeoDai');
        this.style.width = '100%';
        chuKeoDai(word, index + 1);

    });


}

function anArea() {
    let btnArea = document.querySelectorAll('.btnArea');

    for (let x of btnArea) {
        $(x).removeClass('activeArea');
    }
}

function desktop()
{
    $('.subMenuP').hide();
    $('.word').off();
    let cntFilter = 1;
    let btn = document.querySelector('#btnMoRong>div');
    let cntSearch = 1;
    let cnt = 1;
    let flagMoRong = false;
    thuGon();

    // javascript cho nút mở rộng
    $('#btnMoRong > div').click(function () {

        let chu = $('#btnMoRong>div>div').text().toLowerCase();

        let chuMoRong = 'xem tat ca';
        let chuThuGon = 'thu gon';

        chuMoRong = chuyenDoiChuoi(chuMoRong);
        chuThuGon = chuyenDoiChuoi(chuThuGon);
        chu = chuyenDoiChuoi(chu);


        if (chuMoRong.includes(chu) == true) {
            moRong();
            // btn.innerHTML = "Thu gọn";

            window.scrollTo(0, 965);
        }
        else {
            thuGon();
            flagMoRong = false;
            // btn.innerHTML = "Xem tất cả";
            window.scrollTo(0, 465);
        }
    });


    // javascript cho thẻ select

    $('#area').change(function () {
        let value = $(this).val();

        $('#area').val(value);


    });


    // javascript cho sự kiện cuộn chuột

    $(window).scroll(function () {
        let top = $(window).scrollTop();
        var footer = document.querySelector('.footer');
        let maxHeight = document.body.offsetHeight;

        // console.log(maxHeight);
        let footerCal = maxHeight - footer.offsetHeight - 300;
        let max = footerCal - 250 + 30;



        if (top >= 0 && top < max) {


            if (top > 400 && top <= footerCal) {
                if (top > 500) {
                    let movetoTop = document.querySelector('.icon > div > a');
                    $(movetoTop).css({
                        'display': 'block'
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
            } else if (top <= 400) {
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
                        'top': '77%'
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


    // javascript cho sự kiện tìm kiếm ở thanh taskbar
    $('#taskbarSearch').change(function () {

        let value = $('#taskbarSearch').val().toLowerCase();
        value = chuyenDoiChuoi(value);


        let careers = document.querySelectorAll('.career');

        if (value == '') {
            flagMoRong = false;
            kiemTraMoRong(flagMoRong);



            for (let x of careers) {
                x.style.display = 'block';
            }
        }



    });

    $('.search button').click(function () {

        window.scrollTo(0, 465);
        let value = $('#taskbarSearch').val().toLowerCase();
        value = chuyenDoiChuoi(value);
        let name = document.querySelectorAll('div.detail > p.name');

        let careers = document.querySelectorAll('.career');

        flagMoRong = true;
        kiemTraMoRong(flagMoRong);

        for (let x = 0; x < name.length; x++) {
            let chuoiSauKhiChuyenDoi = chuyenDoiChuoi(name[x].innerHTML.toLowerCase());
            if (chuoiSauKhiChuyenDoi.includes(value) == true) {

                careers[x].style.display = '';
            }
            else {

                careers[x].style.display = 'none';
            }
        }


    });

    // javascript cho sự kiện tìm kiếm ở thanh main search

    $('#mainSearch').focus(function () {

        $('.mainsearch').css({
            'width': '55%',
            'border': '1.5px solid black'

        });

        $('#mainSearch').blur(function () {

            $('.mainsearch').css({
                'width': '',
                'border': ''
            });



        });

        $('#area').focus(function () {
            $('.mainsearch').css({
                'width': '55%',
                'border': '1.5px solid black'

            });
        });

        $('#area').blur(function () {
            $('.mainsearch').css({
                'width': '',
                'border': ''
            });
        });



    });

    $('#mainSearch').change(function () {



        let careers = document.querySelectorAll('.career');
        let value = $('#mainSearch').val().toLowerCase();

        if (value == '') {
            flagMoRong = false;
            kiemTraMoRong(flagMoRong);

            for (let x of careers) {
                x.style.display = 'block';
            }
        }





    });


    $('.mainsearch button').click(function () {

        window.scrollTo(0, 465);
        let value = $('#mainSearch').val().toLowerCase();
        let area = $('#area').val().toLowerCase();
        let careers = document.querySelectorAll('.career');
        let name = document.querySelectorAll('div.detail > p.name');
        let location = document.querySelectorAll('div.detail > div > p.location');

        value = chuyenDoiChuoi(value);
        area = chuyenDoiChuoi(area);

        if (flagMoRong == false) {
            moRong();
            flagMoRong = true;
            kiemTraMoRong(flagMoRong);
        }

        for (let i = 0; i < careers.length; i++) {

            careers[i].style.display = 'block';
        }

        for (let i = 0; i < careers.length; i++) {

            let chuoiSauKhiChuyenDoi = chuyenDoiChuoi(name[i].innerHTML.toLowerCase());
            if (area == 'all') {


                if (chuoiSauKhiChuyenDoi.includes(value) == true) {
                    careers[i].style.display = '';

                }
                else {
                    careers[i].style.display = 'none';
                }
            }
            else {
                let areaSaukhiChuyenDoi = chuyenDoiChuoi(location[i].innerHTML.toLowerCase());

                if (chuoiSauKhiChuyenDoi.includes(value) == true
                    && areaSaukhiChuyenDoi.includes(area) == true) {
                    careers[i].style.display = '';


                }
                else {
                    careers[i].style.display = 'none';
                }
            }

        }
    });


    // javascript cho hover career

    let congviec = document.querySelectorAll('.career > a > div.flex');
    let congviecdetail = document.querySelectorAll('.career_detail');
    let name = document.querySelectorAll('.name');

    // chỉnh css cho các vị trí đặt biệt
    for (let i = 1; i <= congviec.length; i += 3) {
        $(congviecdetail[i]).css('left', '10%');
    }

    // chỉnh sự kiện hover cho các công việc

    for (let x = 0; x < congviec.length; x++) {

        if (x < 12) {
            congviec[x].addEventListener('mouseenter', function (event) {

                event.stopImmediatePropagation();


                $(`#career${x + 1}`).css({
                    'display': 'block'
                })

            });

            // ẩn đi khi rời khỏi
            congviec[x].addEventListener('mouseleave', function (event) {
                event.stopImmediatePropagation();

                $(`#career${x + 1}`).css({
                    'display': 'none'
                })


            });
        }
        else if (x >= 12 && x < 24) {
            congviec[x].addEventListener('mouseenter', function (event) {
                event.stopImmediatePropagation();



                $(`#career${x - 12 + 1}`).css({
                    'display': 'block'
                })

            });

            // ẩn đi khi rời khỏi
            congviec[x].addEventListener('mouseleave', function (event) {
                event.stopImmediatePropagation();

                $(`#career${x - 11}`).css({
                    'display': 'none'
                })


            });
        }
        else if (x >= 24) {
            congviec[x].addEventListener('mouseenter', function (event) {

                event.stopImmediatePropagation();



                $(`#career${x - 23}`).css({
                    'display': 'block'
                })

            });

            // ẩn đi khi rời khỏi
            congviec[x].addEventListener('mouseleave', function (event) {
                event.stopImmediatePropagation();

                $(`#career${x - 23}`).css({
                    'display': 'none'
                })


            });
        }
    }

    // chỉnh hover khi vào thông tin chi tiết công việc
    for (let y = 0; y < congviecdetail.length; y++) {
        congviecdetail[y].addEventListener('mouseenter', function (event) {
            event.stopImmediatePropagation();



            // ẩn đi những thẻ không liên quan tới thẻ đang được hover
            for (let z = 0; z <= congviecdetail.length; z++) {
                if (z != y + 1) {
                    $(`#career${z}`).css({
                        'display': 'none'
                    })
                }


            }

            // hiện thẻ đang được hover
            $(`#career${y + 1}`).css({
                'display': 'block'
            })



        });


        congviecdetail[y].addEventListener('mouseleave', function (event) {
            event.stopImmediatePropagation();

            $(`#career${y + 1}`).css({
                'display': 'none'
            })


        });

    }



    // DARK MODE
    let co = false; //false = bright mode
    //chỉnh từ dark mode sang bright mode
    $('#sun').click(function () {
        if (co == true) {
            $('.wallpaper img').attr('src', 'images/sup_ga.png');
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
            $('.topjob>div').css({
                'background-color': ''
            })
            $('.lists').css({
                'background-color': ''
            })
            $('.career>a>div').css({
                'background-color': ''
            })
            $('.detail>p').css({
                'color': ''
            })
            $('.name').css({
                'color': ''
            })
            $('.location').css({
                'color': ''
            })
            $('.salary').css({
                'color': ''
            })
            $('.go>span').css({
                'color': 'white'
            })
            let go = document.querySelectorAll('.go>div');
            $(go).on('mouseenter', function () {
                $('.underline').css({
                    'background': ''
                })
            })
            $(go).on('mouseleave', function () {
                $('.underline').css({
                    'background': ''
                })
            })
            $('.career_detail').css({
                'background-color': ''
            })
            $('.career_detail .imgcareer').css({
                'background-color': ''
            })
            $('.in4>p').css({
                'color': ''
            })
            $('.se_part li').css({
                'color': ''
            })
            $('.se_part h3').css({
                'color': ''
            })
            $('.se_part p').css({
                'color': ''
            })
            $('.go>div').css({
                'color': ''
            })
            $('.go>div::after').css({
                'background': ''
            })
            $('.topcmp>div').css({
                'background-color': ''
            })
            $('.imgcmp>img').css({
                'background-color': ''
            })
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
            $('.topcmp h4').css({
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
            $('.search>input').css({
                'color': ''
            })
            co = false;
        }
    });
    //chuyển từ bright mode sang dark mode
    $('#moon').click(function () {
        if (co == false) {

            $('.wallpaper img').attr('src', 'images/GCareer1.png');
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
            $('.topjob>div').css({
                'background-color': '#022f4447'
            })
            $('.lists').css({
                'background-color': '#292a2d'
            })
            $('.career>a>div').css({
                'background-color': 'rgb(49,51,56)'
            })
            $('.detail>p').css({
                'color': 'lightgray'
            })
            $('.name').css({
                'color': 'white'
            })
            $('.location').css({
                'color': 'gray'
            })
            $('.salary').css({
                'color': 'lightskyblue'
            })
            $
            $('.go>span').css({
                'color': 'white'
            })
            let go = document.querySelectorAll('.go>div');
            $(go).on('mouseenter', function () {
                $('.underline').css({
                    'background': 'white'
                })
            })
            $(go).on('mouseleave', function () {
                $('.underline').css({
                    'background': ''
                })
            })
            $('.career_detail').css({
                'background-color': 'rgb(49,51,56)'
            })
            $('.career_detail .imgcareer').css({
                'background-color': 'white'
            })
            $('.in4>p').css({
                'color': 'lightgray'
            })
            $('.se_part li').css({
                'color': 'lightgray'
            })
            $('.se_part h3').css({
                'color': 'lightskyblue'
            })
            $('.se_part p').css({
                'color': 'lightgray'
            })
            $('.go>div').css({
                'color': 'whitesmoke'
            })
            $('.go>div::after').css({
                'background': 'white'
            })
            $('.topcmp>div').css({
                'background-color': 'rgb(49,51,56)'
            })
            $('.imgcmp>img').css({
                'background-color': 'white'
            })
            let topcmp = document.querySelectorAll('.topcmp');
            for (let x = 0; x < topcmp.length; x++) {
                $(topcmp[x]).on('mouseenter', function () {
                    $(this).css({
                        'background': 'radial-gradient(rgba(135, 206, 250, 0.4),#292a2d)'
                    })
                })
                $(topcmp[x]).on('mouseleave', function () {
                    $(this).css({
                        'background': 'initial'
                    })
                })
            }
            $('.topcmp h4').css({
                'color': 'whitesmoke'
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
                'color': '',
                'border': '0',
            })
            $('#moon').removeClass('moonOff').addClass('moonOn');
        }
    }) // HOVER DARK MODE BUTTONS
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
                'color': '',
                'border': '0',
            })
            $('#moon').removeClass('moonOff').addClass('moonOn');
        }
    })


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

    // animation cho top ngành nghề
    let word = document.querySelectorAll('.alpha');
    let tam = 0;
    flag = false;

    chuKeoDai(word, 0);

    // tổng thời gian cho cả 2 chu kì animation là 16s
    setInterval(function () {

        flag = false;
        chuKeoDai(word, 0);
    }, 17000);

    // ẩn hiện thanh filter
    $('#filter').on('click', function () {
        cntFilter++;
        if (cntFilter % 2 == 0) {
            $(this).removeClass('fa-solid fa-filter').addClass('fa-solid fa-filter-circle-xmark');
            $('.filter-menu').css({
                'width': '40%',

            });
        }
        else {
            $(this).removeClass('fa-solid fa-filter-circle-xmark').addClass('fa-solid fa-filter');
            $('.filter-menu').css({
                'width': '0',

            });
        }
    });



    // chỉnh sự kiện khi người dùng ấn vào filter

    let btnArea = document.querySelectorAll('.btnArea');
    let mienNam = ['ho chi minh', 'vũng tàu', 'bình dương', 'đồng nai', 'bình phước', 'tây ninh', 'kien giang', 'long an', 'đồng tháp', 'tiền giang', 'bến tre', 'an giang', 'vĩnh long', 'trà vinh', 'sóc trăng', 'bạc liêu', 'cà mau', 'hậu giang', 'cần thơ'];

    let mienBac = ['ha noi', 'hải phòng', 'hà nam', 'hải dương', 'hòa bình', 'hưng yên', 'vĩnh phúc', 'bắc ninh', 'quảng ninh', 'thái bình', 'nam định', 'ninh bình', 'hà giang', 'cao bằng', 'lào cai', 'yên bái', 'điện biên', 'lau châu', 'sơn la', 'bắc kạn', 'lạng sơn', 'thái nguyên', 'mường lay', 'hạ long', 'phú thọ', 'bắc giang'];

    let mienTrung = ['đà nẵng', 'quảng nam', 'quảng ngãi', 'bình định', 'phú yên', 'hue', 'nghe an', 'thanh hoa', 'khanh hoa', 'hà tĩnh', 'quãng bình', 'quảng trị', 'đã năng', 'quảng nam', 'ninh thuận', 'bình thuận', 'kon tum', 'gia lai', 'đák lák', 'đák nông', 'lâm đồng'];


    // bắc/trung/nam
    let flagArea = [false, false, false];

    for (x of btnArea) {
        x.addEventListener('click', function () {
            let rel = $(this).attr('rel');
            let area = document.querySelectorAll('div.detail > div.flex > p.location');
            let careers = document.querySelectorAll('.career');


            if (rel == 'MN') {
                if (flagArea[2] == false) {
                    anArea();
                    flagArea[2] = true;
                    $(this).addClass('activeArea');

                    if (flagMoRong == false) {
                        moRong();
                        flagMoRong = true;
                        kiemTraMoRong(flagMoRong);
                    }

                    for (let y = 0; y < mienNam.length; y++) {
                        mienNam[y] = chuyenDoiChuoi(mienNam[y]);
                    }

                    // ẩn hiện job theo điều kiện
                    for (let i = 0; i < area.length; i++) {

                        let location = chuyenDoiChuoi($(area[i]).text().toLowerCase());



                        if (mienNam.includes(location) == true) {

                            $(careers[i]).css({
                                'display': 'block'
                            })
                        }
                        else {

                            $(careers[i]).css({
                                'display': 'none'
                            })
                        }
                    }

                }
                else {

                    flagArea[2] = false;
                    $(this).removeClass('activeArea');
                    for (let x of careers) {
                        $(x).css({
                            'display': 'block'
                        })
                    }


                    flagMoRong = false;
                    kiemTraMoRong(flagMoRong);


                }
            }
            else if (rel == 'MB') {
                if (flagArea[0] == false) {
                    anArea();
                    flagArea[0] = true;
                    $(this).addClass('activeArea');

                    for (let y = 0; y < mienBac.length; y++) {
                        mienBac[y] = chuyenDoiChuoi(mienBac[y]);
                    }

                    if (flagMoRong == false) {
                        moRong();
                        flagMoRong = true;
                        kiemTraMoRong(flagMoRong);
                    }

                    // ẩn hiện job theo điều kiện
                    for (let i = 0; i < area.length; i++) {

                        let location = chuyenDoiChuoi($(area[i]).text().toLowerCase());



                        if (mienBac.includes(location) == true) {

                            $(careers[i]).css({
                                'display': 'block'
                            })
                        }
                        else {

                            $(careers[i]).css({
                                'display': 'none'
                            })
                        }
                    }

                }
                else {
                    flagMoRong = false;
                    kiemTraMoRong(flagMoRong);

                    flagArea[0] = false;
                    $(this).removeClass('activeArea');
                    for (let x of careers) {
                        $(x).css({
                            'display': 'block'
                        })
                    }

                }
            }
            else {
                if (flagArea[1] == false) {
                    anArea();
                    flagArea[1] = true;
                    $(this).addClass('activeArea');

                    if (flagMoRong == false) {
                        moRong();
                        flagMoRong = true;
                        kiemTraMoRong(flagMoRong);
                    }

                    for (let y = 0; y < mienNam.length; y++) {
                        mienTrung[y] = chuyenDoiChuoi(mienTrung[y]);
                    }

                    // ẩn hiện job theo điều kiện
                    for (let i = 0; i < area.length; i++) {

                        let location = chuyenDoiChuoi($(area[i]).text().toLowerCase());



                        if (mienTrung.includes(location) == true) {

                            $(careers[i]).css({
                                'display': 'block'
                            })
                        }
                        else {

                            $(careers[i]).css({
                                'display': 'none'
                            })
                        }
                    }

                }
                else {


                    flagMoRong = false;
                    kiemTraMoRong(flagMoRong);

                    flagArea[1] = false;
                    $(this).removeClass('activeArea');
                    for (let x of careers) {
                        $(x).css({
                            'display': 'block'
                        })
                    }

                }
            }
        })



    }
}

function mobile()
{
    $('.subMenuP').hide();
    $('.menuPhone').on('click', function () {
        
        $('.subMenuP').show();
        $('.subMenuP>li:first-child>i').on('click', function () {
            $('.subMenuP').hide();
        })
    })

    $('.word').off();


    let cntFilter = 1;
    let btn = document.querySelector('#btnMoRong>div');
    let cntSearch = 1;
    let cnt = 1;
    let flagMoRong = false;
    thuGon();

    // javascript cho nút mở rộng
    $('#btnMoRong > div').click(function () {

        let chu = $('#btnMoRong>div>div').text().toLowerCase();

        let chuMoRong = 'xem tat ca';
        let chuThuGon = 'thu gon';

        chuMoRong = chuyenDoiChuoi(chuMoRong);
        chuThuGon = chuyenDoiChuoi(chuThuGon);
        chu = chuyenDoiChuoi(chu);


        if (chuMoRong.includes(chu) == true) {
            moRongMobile();
            // btn.innerHTML = "Thu gọn";

            window.scrollTo(0, 965);
        }
        else {
            thuGonMobile();
            flagMoRong = false;
            // btn.innerHTML = "Xem tất cả";
            window.scrollTo(0, 465);
        }
    });


    // javascript cho thẻ select

    $('#area').change(function () {
        let value = $(this).val();

        $('#area').val(value);


    });


    // javascript cho sự kiện cuộn chuột

    $(window).scroll(function () {
        let top = $(window).scrollTop();
        var footer = document.querySelector('.footer');
        let maxHeight = document.body.offsetHeight;

        // console.log(maxHeight);
        let footerCal = maxHeight - footer.offsetHeight - 300;
        let max = footerCal - 250 + 30;



        if (top >= 0 && top < max) {


            if (top > 400 && top <= footerCal) {
                if (top > 500) {
                    let movetoTop = document.querySelector('.icon > div > a');
                    $(movetoTop).css({
                        'display': 'block'
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
            } else if (top <= 400) {
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
                        'top': '77%'
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


    // javascript cho sự kiện tìm kiếm ở thanh taskbar
    $('#taskbarSearch').change(function () {

        let value = $('#taskbarSearch').val().toLowerCase();
        value = chuyenDoiChuoi(value);


        let careers = document.querySelectorAll('.career');

        if (value == '') {
            flagMoRong = false;
            kiemTraMoRong(flagMoRong);



            for (let x of careers) {
                x.style.display = 'block';
            }
        }



    });

    $('.search button').click(function () {

        window.scrollTo(0, 465);
        let value = $('#taskbarSearch').val().toLowerCase();
        value = chuyenDoiChuoi(value);
        let name = document.querySelectorAll('div.detail > p.name');

        let careers = document.querySelectorAll('.career');

        flagMoRong = true;
        kiemTraMoRong(flagMoRong);

        for (let x = 0; x < name.length; x++) {
            let chuoiSauKhiChuyenDoi = chuyenDoiChuoi(name[x].innerHTML.toLowerCase());
            if (chuoiSauKhiChuyenDoi.includes(value) == true) {

                careers[x].style.display = '';
            }
            else {

                careers[x].style.display = 'none';
            }
        }


    });

    // javascript cho sự kiện tìm kiếm ở thanh main search

    $('#mainSearch').focus(function () {

        $('.mainsearch').css({
            'width': '90%',
            'border': '1.5px solid black'

        });

        $('#mainSearch').blur(function () {

            $('.mainsearch').css({
                'width': '',
                'border': ''
            });



        });

        $('#area').focus(function () {
            $('.mainsearch').css({
                'width': '90%',
                'border': '1.5px solid black'

            });
        });

        $('#area').blur(function () {
            $('.mainsearch').css({
                'width': '',
                'border': ''
            });
        });



    });

    $('#mainSearch').change(function () {



        let careers = document.querySelectorAll('.career');
        let value = $('#mainSearch').val().toLowerCase();

        if (value == '') {
            flagMoRong = false;
            kiemTraMoRong(flagMoRong);

            for (let x of careers) {
                x.style.display = 'block';
            }
        }





    });


    $('.mainsearch button').click(function () {

        window.scrollTo(0, 465);
        let value = $('#mainSearch').val().toLowerCase();
        let area = $('#area').val().toLowerCase();
        let careers = document.querySelectorAll('.career');
        let name = document.querySelectorAll('div.detail > p.name');
        let location = document.querySelectorAll('div.detail > div > p.location');

        value = chuyenDoiChuoi(value);
        area = chuyenDoiChuoi(area);

        if (flagMoRong == false) {
            moRongMobile();
            flagMoRong = true;
            kiemTraMoRong(flagMoRong);
        }

        for (let i = 0; i < careers.length; i++) {

            careers[i].style.display = 'block';
        }

        for (let i = 0; i < careers.length; i++) {

            let chuoiSauKhiChuyenDoi = chuyenDoiChuoi(name[i].innerHTML.toLowerCase());
            if (area == 'all') {


                if (chuoiSauKhiChuyenDoi.includes(value) == true) {
                    careers[i].style.display = '';

                }
                else {
                    careers[i].style.display = 'none';
                }
            }
            else {
                let areaSaukhiChuyenDoi = chuyenDoiChuoi(location[i].innerHTML.toLowerCase());

                if (chuoiSauKhiChuyenDoi.includes(value) == true
                    && areaSaukhiChuyenDoi.includes(area) == true) {
                    careers[i].style.display = '';


                }
                else {
                    careers[i].style.display = 'none';
                }
            }

        }
    });


    // DARK MODE
    let co = false; //false = bright mode
    //chỉnh từ dark mode sang bright mode
    $('#sun').click(function () {
        if (co == true) {
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

            let kytu = document.querySelectorAll('.words');

            for(let x of kytu)
            {
                $(x).css({
                    'color':''
                })
            }

            $('.wallpaper img').attr('src', 'images/sup_ga.png');
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
            $('.topjob>div').css({
                'background-color': ''
            })
            $('.lists').css({
                'background-color': ''
            })
            $('.career>a>div').css({
                'background-color': ''
            })
            $('.detail>p').css({
                'color': ''
            })
            $('.name').css({
                'color': ''
            })
            $('.location').css({
                'color': ''
            })
            $('.salary').css({
                'color': ''
            })
            $('.go>span').css({
                'color': 'white'
            })
            let go = document.querySelectorAll('.go>div');
            $(go).on('mouseenter', function () {
                $('.underline').css({
                    'background': ''
                })
            })
            $(go).on('mouseleave', function () {
                $('.underline').css({
                    'background': ''
                })
            })
            $('.career_detail').css({
                'background-color': ''
            })
            $('.career_detail .imgcareer').css({
                'background-color': ''
            })
            $('.in4>p').css({
                'color': ''
            })
            $('.se_part li').css({
                'color': ''
            })
            $('.se_part h3').css({
                'color': ''
            })
            $('.se_part p').css({
                'color': ''
            })
            $('.go>div').css({
                'color': ''
            })
            $('.go>div::after').css({
                'background': ''
            })
            $('.topcmp>div').css({
                'background-color': ''
            })
            $('.imgcmp>img').css({
                'background-color': ''
            })
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
            $('.topcmp h4').css({
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
            $('.search>input').css({
                'color': ''
            })
            co = false;
        }
    });
    //chuyển từ bright mode sang dark mode
    $('#moon').click(function () {
        if (co == false) {
            $('.topcmps').css('background-color', '#292a2d');
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
            let kytu = document.querySelectorAll('.words');

            for(let x of kytu)
            {
                $(x).css({
                    'color':'white'
                })
            }
            $('.wallpaper img').attr('src', 'images/GCareer1.png');
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
            $('.topjob>div').css({
                'background-color': '#022f4447'
            })
            $('.lists').css({
                'background-color': '#292a2d'
            })
            $('.career>a>div').css({
                'background-color': 'rgb(49,51,56)'
            })
            $('.detail>p').css({
                'color': 'lightgray'
            })
            $('.name').css({
                'color': 'white'
            })
            $('.location').css({
                'color': 'gray'
            })
            $('.salary').css({
                'color': 'lightskyblue'
            })
            $
            $('.go>span').css({
                'color': 'white'
            })
            let go = document.querySelectorAll('.go>div');
            $(go).on('mouseenter', function () {
                $('.underline').css({
                    'background': 'white'
                })
            })
            $(go).on('mouseleave', function () {
                $('.underline').css({
                    'background': ''
                })
            })
            $('.career_detail').css({
                'background-color': 'rgb(49,51,56)'
            })
            $('.career_detail .imgcareer').css({
                'background-color': 'white'
            })
            $('.in4>p').css({
                'color': 'lightgray'
            })
            $('.se_part li').css({
                'color': 'lightgray'
            })
            $('.se_part h3').css({
                'color': 'lightskyblue'
            })
            $('.se_part p').css({
                'color': 'lightgray'
            })
            $('.go>div').css({
                'color': 'whitesmoke'
            })
            $('.go>div::after').css({
                'background': 'white'
            })
            $('.topcmp>div').css({
                'background-color': 'rgb(49,51,56)'
            })
            $('.imgcmp>img').css({
                'background-color': 'white'
            })
            let topcmp = document.querySelectorAll('.topcmp');
            for (let x = 0; x < topcmp.length; x++) {
                $(topcmp[x]).on('mouseenter', function () {
                    $(this).css({
                        'background': 'radial-gradient(rgba(135, 206, 250, 0.4),#292a2d)'
                    })
                })
                $(topcmp[x]).on('mouseleave', function () {
                    $(this).css({
                        'background': 'initial'
                    })
                })
            }
            $('.topcmp h4').css({
                'color': 'whitesmoke'
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
                'color': '',
                'border': '0',
            })
            $('#moon').removeClass('moonOff').addClass('moonOn');
        }
    })


    // animation cho top ngành nghề
    let word = document.querySelectorAll('.beta');
    let tam = 0;
    flag = false;

    chuKeoDai(word, 0);
    // tổng thời gian cho cả 2 chu kì animation là 16s
    setInterval(function () {

        flag = false;
        chuKeoDai(word, 0);
    }, 17000);

    // ẩn hiện thanh filter
    $('#filter').on('click', function () {
        cntFilter++;
        if (cntFilter % 2 == 0) {
            $(this).removeClass('fa-solid fa-filter').addClass('fa-solid fa-filter-circle-xmark');
            $('.filter-menu').css({
                'width': '60%',

            });
        }
        else {
            $(this).removeClass('fa-solid fa-filter-circle-xmark').addClass('fa-solid fa-filter');
            $('.filter-menu').css({
                'width': '',

            });
        }
    });



    // chỉnh sự kiện khi người dùng ấn vào filter

    let btnArea = document.querySelectorAll('.btnArea');
    let mienNam = ['ho chi minh', 'vũng tàu', 'bình dương', 'đồng nai', 'bình phước', 'tây ninh', 'kien giang', 'long an', 'đồng tháp', 'tiền giang', 'bến tre', 'an giang', 'vĩnh long', 'trà vinh', 'sóc trăng', 'bạc liêu', 'cà mau', 'hậu giang', 'cần thơ'];

    let mienBac = ['ha noi', 'hải phòng', 'hà nam', 'hải dương', 'hòa bình', 'hưng yên', 'vĩnh phúc', 'bắc ninh', 'quảng ninh', 'thái bình', 'nam định', 'ninh bình', 'hà giang', 'cao bằng', 'lào cai', 'yên bái', 'điện biên', 'lau châu', 'sơn la', 'bắc kạn', 'lạng sơn', 'thái nguyên', 'mường lay', 'hạ long', 'phú thọ', 'bắc giang'];

    let mienTrung = ['đà nẵng', 'quảng nam', 'quảng ngãi', 'bình định', 'phú yên', 'hue', 'nghe an', 'thanh hoa', 'khanh hoa', 'hà tĩnh', 'quãng bình', 'quảng trị', 'đã năng', 'quảng nam', 'ninh thuận', 'bình thuận', 'kon tum', 'gia lai', 'đák lák', 'đák nông', 'lâm đồng'];


    // bắc/trung/nam
    let flagArea = [false, false, false];

    for (x of btnArea) {
        x.addEventListener('click', function () {
            let rel = $(this).attr('rel');
            let area = document.querySelectorAll('div.detail > div.flex > p.location');
            let careers = document.querySelectorAll('.career');


            if (rel == 'MN') {
                if (flagArea[2] == false) {
                    anArea();
                    flagArea[2] = true;
                    $(this).addClass('activeArea');

                    if (flagMoRong == false) {
                        moRongMobile();
                        flagMoRong = true;
                        kiemTraMoRong(flagMoRong);
                    }

                    for (let y = 0; y < mienNam.length; y++) {
                        mienNam[y] = chuyenDoiChuoi(mienNam[y]);
                    }

                    // ẩn hiện job theo điều kiện
                    for (let i = 0; i < area.length; i++) {

                        let location = chuyenDoiChuoi($(area[i]).text().toLowerCase());



                        if (mienNam.includes(location) == true) {

                            $(careers[i]).css({
                                'display': 'block'
                            })
                        }
                        else {

                            $(careers[i]).css({
                                'display': 'none'
                            })
                        }
                    }

                }
                else {

                    flagArea[2] = false;
                    $(this).removeClass('activeArea');
                    for (let x of careers) {
                        $(x).css({
                            'display': 'block'
                        })
                    }


                    flagMoRong = false;
                    kiemTraMoRong(flagMoRong);


                }
            }
            else if (rel == 'MB') {
                if (flagArea[0] == false) {
                    anArea();
                    flagArea[0] = true;
                    $(this).addClass('activeArea');

                    for (let y = 0; y < mienBac.length; y++) {
                        mienBac[y] = chuyenDoiChuoi(mienBac[y]);
                    }

                    if (flagMoRong == false) {
                        moRongMobile();
                        flagMoRong = true;
                        kiemTraMoRong(flagMoRong);
                    }

                    // ẩn hiện job theo điều kiện
                    for (let i = 0; i < area.length; i++) {

                        let location = chuyenDoiChuoi($(area[i]).text().toLowerCase());



                        if (mienBac.includes(location) == true) {

                            $(careers[i]).css({
                                'display': 'block'
                            })
                        }
                        else {

                            $(careers[i]).css({
                                'display': 'none'
                            })
                        }
                    }

                }
                else {
                    flagMoRong = false;
                    kiemTraMoRong(flagMoRong);

                    flagArea[0] = false;
                    $(this).removeClass('activeArea');
                    for (let x of careers) {
                        $(x).css({
                            'display': 'block'
                        })
                    }

                }
            }
            else {
                if (flagArea[1] == false) {
                    anArea();
                    flagArea[1] = true;
                    $(this).addClass('activeArea');

                    if (flagMoRong == false) {
                        moRongMobile();
                        flagMoRong = true;
                        kiemTraMoRong(flagMoRong);
                    }

                    for (let y = 0; y < mienNam.length; y++) {
                        mienTrung[y] = chuyenDoiChuoi(mienTrung[y]);
                    }

                    // ẩn hiện job theo điều kiện
                    for (let i = 0; i < area.length; i++) {

                        let location = chuyenDoiChuoi($(area[i]).text().toLowerCase());



                        if (mienTrung.includes(location) == true) {

                            $(careers[i]).css({
                                'display': 'block'
                            })
                        }
                        else {

                            $(careers[i]).css({
                                'display': 'none'
                            })
                        }
                    }

                }
                else {


                    flagMoRong = false;
                    kiemTraMoRong(flagMoRong);

                    flagArea[1] = false;
                    $(this).removeClass('activeArea');
                    for (let x of careers) {
                        $(x).css({
                            'display': 'block'
                        })
                    }

                }
            }
        })



    }

    $('#clickMenuP').click(function(){
        let careers = document.querySelectorAll('.career');
        let name = document.querySelectorAll('div.detail > p.name');

        let value = $('#menuPhoneSearch').val().toLowerCase();

        value = chuyenDoiChuoi(value);
        if (flagMoRong == false) {
            moRongMobile();
            flagMoRong = true;
            kiemTraMoRong(flagMoRong);
        }

        for(let i = 0; i<name.length;i++)
        {
            let chuoiSauKhiChuyenDoi = chuyenDoiChuoi(name[i].innerHTML.toLowerCase());
            if(chuoiSauKhiChuyenDoi.includes(value) == true)
            {
                careers[i].style.display = 'block';
            }
            else
            {
                careers[i].style.display = 'none';
            }
        }
        
    })
    $('#menuPhoneSearch').change(function(){
        if($('#menuPhoneSearch').val() == '')
        {
            let careers = document.querySelectorAll('.career');
            for(let x of careers)
            {
                x.style.display = 'block';
            }

            flagMoRong = false;
            kiemTraMoRong(flagMoRong);
        }
    });


}



window.onload = function () {
    $('.subMenuP').hide();

    if(window.innerWidth > 1024)
    {
        desktop();
    }
    else if(window.innerWidth <= 500)
    {
        mobile();
    }

    $(window).on('resize', function () {
        if(window.innerWidth > 1024)
        {
            desktop();
        }
        else if(window.innerWidth <= 500)
        {
            mobile();
        }
    });

    // $(window).blur(function(){
    //     let word = document.querySelectorAll('.word');

    //     for(let x of word)
    //         $(x).off();

    // })

    // $(window).focus(function(){
    //     if(window.innerWidth > 1024)
    //         {
    //             desktop();
    //         }
    //         else if(window.innerWidth <= 500)
    //         {
    //             mobile();
    //         }
    
    // });

}
