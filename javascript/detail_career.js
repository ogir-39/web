function thuGon() {
    let careers = document.querySelectorAll('.career');

    for (let i = 1; i < careers.length; i++) {
        if (i >= 12) {
            careers[i].style.display = 'none';
        }
    }

}

function moRong() {
    let careers = document.querySelectorAll('.career');

    for (let i = 1; i < careers.length; i++) {
        if (i >= 12) {
            careers[i].style.display = 'block';
        }
    }

}

window.onload = function () {

    let btn = document.querySelector('#btnMoRong div');

    let cnt = 1;
    thuGon();

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

    $('#btnMoRong > div').click(function () {
        cnt++;
        if (cnt % 2 == 0) {
            moRong();
            // btn.innerHTML = "Thu gọn";
            $('#btnMoRong div').text('Thu gọn').css({
                'padding': '1rem 1.9rem',
                'box-sizing': 'border-box'
            });
            window.scrollTo(0, 965);
        }
        else {
            thuGon();
            // btn.innerHTML = "Xem tất cả";
            $('#btnMoRong div').text('Xem tất cả').css({
                'padding': '1rem',
                'box-sizing': 'border-box'
            });;
            window.scrollTo(0, 465);
        }
    });



    $(window).scroll(function () {
        let top = $(window).scrollTop();
        var footer = document.querySelector('.footer');
        let maxHeight = document.body.offsetHeight;

        // console.log(maxHeight);
        let footerCal = maxHeight - footer.offsetHeight -300;
        let max = footerCal - 250 + 30;
      

    
        if (top >= 0 && top < max) {


            if (top > 200 && top <= footerCal) {
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
                        'top': '20%'
                    });
                }
            }

        } else  {
            let quangCao = document.querySelectorAll('.ads a');
            
            for (let x of quangCao) {
                
                // Cố định vị trí hiện tại của phần tử
                $(x).css({
                    'position': 'absolute',
                    'top': `${footerCal-88}px` // Giữ nguyên vị trí hiện tại
                });
            }

        }


    });



    $('#taskbarSearch').change(function () {

        let value = $('#taskbarSearch').val().toLowerCase();

        let name = document.querySelectorAll('div.detail > p.name');

        let careers = document.querySelectorAll('.career');

        if (value == '') {
            for (let x of careers) {
                x.style.display = 'block';
            }
        }

        $('.search button').click(function () {

            window.scrollTo(0, 465);


            console.log(value);


            for (let x = 0; x < name.length; x++) {

                if (name[x].innerHTML.toLowerCase().includes(value) == true) {

                    careers[x].style.display = '';
                }
                else {
                    // console.log(name[x].innerHTML.toLowerCase());
                    careers[x].style.display = 'none';
                }
            }


        });

    });

    $('#mainSearch').change(function () {
        let value = $('#mainSearch').val().toLowerCase();
        let area = $('#area').val().toLowerCase();
        let careers = document.querySelectorAll('.career');

        if (value == '') {
            for (let x of careers) {
                x.style.display = 'block';
            }
        }


        $('.mainsearch button').click(function () {

            window.scrollTo(0, 465);

            let name = document.querySelectorAll('div.detail > p.name');
            let location = document.querySelectorAll('div.detail > div > p.location');

            for (let i = 0; i < name.length; i++) {
                if (area == 'all') {
                    if (name[i].innerHTML.toLowerCase().includes(value) == true) {
                        careers[i].style.display = '';
                    }
                    else {
                        careers[i].style.display = 'none';
                    }
                }
                else {
                    if (name[i].innerHTML.toLowerCase().includes(value) == true
                        && location[i].innerHTML.toLowerCase().includes(area) == true) {
                        careers[i].style.display = '';
                    }
                    else {
                        careers[i].style.display = 'none';
                    }
                }

            }
        });
    });


    // javascript cho hover career

    let congviec = document.querySelectorAll('.career');
    let congviecdetail = document.querySelectorAll('.career_detail');
    let name = document.querySelectorAll('.name');

    // chỉnh css cho các vị trí đặt biệt
    for (let i = 1; i <= congviec.length; i += 3) {
        $(congviecdetail[i]).css('left', '10%');
    }


    for (let x = 0; x < congviec.length; x++) {
        congviec[x].addEventListener('mouseenter', function () {
            $(`#career${x + 1}`).css({
                'display': 'block'
            })
        });

       
        for (let y = 0; y < congviecdetail.length; y++) 
        {
            congviecdetail[y].addEventListener('mouseenter', function () 
            {
               
                for (let z = 0; z <= congviecdetail.length; z++) 
                {
                    if (z != x + 1) 
                    {
                        $(`#career${z}`).css({
                            'display': 'none'
                        })
                    }
                    

                }

             // hiện thẻ đang được hover
                $(`#career${x + 1}`).css({
                    'display': 'block'
                })

                // congviecdetail[y].addEventListener('mouseleave', function () {
                //     console.log('leave');
                //     $(`#career${x + 1}`).css({
                //         'display': 'none'
                //     })
    
                //     $(name[x]).css({
                //         'color': 'initial'
                //     })
                // });
            });

        }
        // congviec[x].addEventListener('mouseout', function () {
        //     $(`#career${x + 1}`).css({
        //         'display': 'none'
        //     })

        //     $(name[x]).css({
        //         'color': 'initial'
        //     })
        // });
    }

    // DARK MODE
    let co=false; //false = bright mode
    //chỉnh từ dark mode sang brigth mode
    $('#sun').click(function () {
        if (co==true)
        {
            $('#sun').css({
                'color':'gold',
                'border':'3px solid gold'
            })
            $('#moon').css({
                'color':'gainsboro',
                'box-shadow':'0 0 0 0 transparent',
            })
            $('body').css({
                'background-color':'white'
            })
            $('header').css({
                'background-color':'',
                'color':''
            })
            $('.menu>li:hover>a').css({
                'background-color':'',
                'color':''
            })
            let menu = document.querySelectorAll('.menu>li>a');
            for (let i=0;i<menu.length;i++) 
            {
                $(menu[i+1]).on('mouseenter',function(){
                    console.log($('.menu>li>a'));
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
                $(menu[i+1]).on('mouseleave',function(){
                    console.log($('.menu>li>a'));
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
            }
            $('.search>input').css({
                'color':''
            })
            let users = document.querySelectorAll('.users>li');
            for (let y=0;y<users.length;y++) 
            {
                $(users[y]).on('mouseenter',function(){
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
                $(users[y]).on('mouseleave',function(){
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
            }
            $('.bigbackground>p').css({
                'color':''
            })
            $('.main').css({
                'background-color':''
            })
            $('.info>div').css({
                'background-color':'',
                'color':''
            })
            $('.info>div:first-child i').css({
                'color':''
            })
            $('.info>div:last-child i').css({
                'color':''
            })
            $('.lienhe').css({
                'background-color':'',
                'color':''
            })
            $('.lienhe a').css({
                'color':''
            })
            $('.salary').css({
                'color':''
            })
            $('.details').css({
                'background-color':'',
                'color':''
            })
            $('.below').css({
                'background-color':'',
                'color':''
            })
            $('.career div').css({
                'background-color':'',
                'color':''
            })
            let cv=document.querySelectorAll('.career');
            for (let x=0;x<cv.length;x++){
                $(cv[x]).on('mouseenter',function(){
                    $(this).css({
                        'background':'',
                        'border-color':''
                    })
                })
                $(cv[x]).on('mouseleave',function(){
                    $(this).css({
                        'background':''
                    })
                })
            }
            let topcmp=document.querySelectorAll('.topcmp');
            for (let x=0;x<topcmp.length;x++){
                $(topcmp[x]).on('mouseenter',function(){
                    $(this).css({
                        'background':''
                    })
                })
                $(topcmp[x]).on('mouseleave',function(){
                    $(this).css({
                        'background':''
                    })
                })
            }
            $('.topcmp>div').css({
                'background-color':'',
                'color':''
            })
            $('footer').css({
                'background':''
            })
            $('footer h2').css({
                'color':''
            })
            $('footer p').css({
                'color':''
            })
            co=false;
        }
    });
    //chuyển từ bright mode sang dark mode
    $('#moon').click(function () {
        if (co==false)
        {
            $(this).removeClass('moonOn moonOff').addClass('moonOn');
            $('#sun').css({
                'color':'gray',
                'border':'0'
            })
            $('body').css({
                'background-color':'#202124'
            })
            $('header').css({
                'background-color':'#292a2d',
                'color':'white !important'
            })
            $('.menu>li:hover>a').css({
                'background-color':'#292a2d',
                'color':'white !important'
            })
            let menu = document.querySelectorAll('.menu>li>a');
            for (let i=0;i<menu.length;i++) 
            {
                $(menu[i+1]).on('mouseenter',function(){
                    console.log($('.menu>li>a'));
                    $(this).css({
                        'color': 'lightskyblue',
                        'background-color': 'rgb(49,51,56)'
                    })
                })
                $(menu[i+1]).on('mouseleave',function(){
                    console.log($('.menu>li>a'));
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
            }
            $('.search>input').css({
                'color':'whitesmoke'
            })
            let users = document.querySelectorAll('.users>li');
            for (let y=0;y<users.length;y++) 
            {
                $(users[y]).on('mouseenter',function(){
                    $(this).css({
                        'color': 'lightskyblue',
                        'background-color': 'rgb(49,51,56)'
                    })
                })
                $(users[y]).on('mouseleave',function(){
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
            }
            $('.bigbackground>p').css({
                'color':'black'
            })
            $('.main').css({
                'background-color':'#292a2d'
            })
            $('.info>div').css({
                'background-color':'rgb(49,51,56)',
                'color':'white'
            })
            $('.info>div:first-child i').css({
                'color':'black'
            })
            $('.info>div:last-child i').css({
                'color':'#97bdd4'
            })
            $('.lienhe').css({
                'background-color':'rgb(49,51,56)',
                'color':'white'
            })
            $('.lienhe a').css({
                'color':'white'
            })
            $('.salary').css({
                'color':'red'
            })
            $('.details').css({
                'background-color':'rgb(49,51,56)',
                'color':'white'
            })
            $('.below').css({
                'background-color':'#292a2d',
                'color':'white'
            })
            $('.career div').css({
                'background-color':'rgb(49,51,56)',
                'color':'white'
            })
            $('.career .salary').css({
                'color':'lightskyblue'
            })
            let cv=document.querySelectorAll('.career');
            for (let x=0;x<cv.length;x++){
                $(cv[x]).on('mouseenter',function(){
                    $(this).css({
                        'background':'radial-gradient(rgba(135, 206, 250, 0.4),#292a2d)',
                        'border-color':'lightskyblue'
                    })
                })
                $(cv[x]).on('mouseleave',function(){
                    $(this).css({
                        'background':'initial'
                    })
                })
            }
            let topcmp=document.querySelectorAll('.topcmp');
            for (let x=0;x<topcmp.length;x++){
                $(topcmp[x]).on('mouseenter',function(){
                    $(this).css({
                        'background':'radial-gradient(rgba(135, 206, 250, 0.4),#292a2d)'
                    })
                })
                $(topcmp[x]).on('mouseleave',function(){
                    $(this).css({
                        'background':'initial'
                    })
                })
            }
            $('.topcmp>div').css({
                'background-color':'rgb(49,51,56)',
                'color':'white'
            })
            $('footer').css({
                'background':'#202124'
            })
            $('footer h2').css({
                'color':'lightskyblue'
            })
            $('footer p').css({
                'color':'white'
            })
            co=true;
        }
    });

    // HOVER DARK MODE BUTTONS
    $('#moon').on('mouseenter',function() {
        if (co==false) { //bright mode
            $('#sun').removeClass('haoquang').addClass('sunOff').on('animationend',function() {
                $('#sun').css({
                    'color':'gainsboro',
                    'border':'0'
                })
            })
            $('#moon').removeClass('moonOff').addClass('moonOn');
        }
    })
    $('#moon').on('mouseleave',function() {
        if (co==false) //bright mode
        {
            $('#sun').removeClass('sunOff').addClass('haoquang');
            $('#sun').css({
                'color':'gold',
                'border':'3px solid gold',
                'box-shadow': '0 0 0 0'
            })
        $('#moon').removeClass('moonOn').addClass('moonOff');
        }
    })
    $('#sun').on('mouseenter',function() {
        if (co==true) { //dark mode
            $('#sun').removeClass('sunOff').addClass('haoquang');
            $('#sun').css({
                'color':'gold',
                'border':'3px solid gold'
            })
            $('#moon').removeClass('moonOn').addClass('moonOff');
        }
    })
    $('#sun').on('mouseleave',function() {
        if (co==true) //dark mode
        {
            $('#sun').removeClass('haoquang').addClass('sunOff');
            $('#sun').css({
                'color':'',
                'border':'0',
            })
        $('#moon').removeClass('moonOff').addClass('moonOn');
        }
    })

    // javascript cho sự kiện cuộn chuột

    $(window).scroll(function () {
        let top = $(window).scrollTop();
        var footer = document.querySelector('.footer');
        let maxHeight = document.body.offsetHeight;

        // console.log(maxHeight);
        let footerCal = maxHeight - footer.offsetHeight -300;
        let max = footerCal - 250 + 30;
      

    
        if (top >= 0 && top < max) {
            

            if (top > 0 && top <= footerCal) {
                if (top > 300) {
                    let movetoTop = document.querySelector('.icon > div > a');
                    $(movetoTop).css({
                        'display': 'block'
                    });
                }
                else
                {
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
                        'top': '20%'
                    });
                }
            }

        } else  {
            let quangCao = document.querySelectorAll('.ads a');
            
            for (let x of quangCao) {
                
                // Cố định vị trí hiện tại của phần tử
                $(x).css({
                    'position': 'absolute',
                    'top': `${footerCal-88}px` // Giữ nguyên vị trí hiện tại
                });
            }

        }


    });
}