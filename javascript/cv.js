window.onload = function() {
    let close = document.querySelector('#close');
    close.onclick = function () {
        let pre = document.querySelectorAll('.preview');
        for ( let x of pre)
            x.style.display='none';
    };
    let buttons = document.querySelectorAll('.btnColor');
    $('.open').on('click', function(){
        $('.preview').css("display","block");
        for (let z=0;z<buttons.length;z++)
            {
                if (z==0)
                {
                    $(buttons[z].querySelector('i')).css({
                        'display':'block'
                    })
                }
                else
                {
                    $(buttons[z].querySelector('i')).css({
                        'display':'none'
                    })
                }
            }
    })

    $('.preview').on('click', function(event){
        event.stopImmediatePropagation();
        $(this).css({
            'display':'none'
        })
    })

    $('.preview div').on('click', function(event){
        event.stopImmediatePropagation();
        $('.preview div div').css({
            'display':'block'
        })
    })

    let cv = document.querySelectorAll('.imgCV>a>img');
    for (let x=0;x<cv.length;x++) {
        cv[x].addEventListener('mouseenter', function() {
            let bigImg = $(cv[x]).attr("src");
            $('#bigImg').attr('src',bigImg); /*
            lấy src của bigImg gán cho id bigImg*/
        })
    }

    let btnColor = document.querySelectorAll('.btnColor');
        for (let b=0;b<btnColor.length;b++) {
            btnColor[b].addEventListener('click', function() {
                let txt = $(btnColor[b]).attr("rel");
                let tmp = bigImg.getAttribute("src");
                //tmp[tmp.length-5] = txt;
                let nStr="";
                for (let i=0;i<tmp.length;i++)
                {
                    if (i!= tmp.length-5) {
                        nStr+=tmp[i];
                    }
                    else {
                        nStr+=txt;
                    }
                }
                bigImg.setAttribute("src",nStr);

            })
            }

    // DARK MODE
    let co=false; //false = bright mode
    //chỉnh từ dark mode sang brigth mode
    $('#sun').click(function () {
        if (co==true)
        {
            co=false;
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
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
                $(menu[i+1]).on('mouseleave',function(){
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
                    console.log($(users[y]));
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
                $(users[y]).on('mouseleave',function(){
                    console.log($(users[y]));
                    $(this).css({
                        'color': '',
                        'background-color': ''
                    })
                })
            }
            $('.bigbackground>p').css({
                'color':''
            })
            $('.cv>div').css({
                'background-color':'',
                'border':''
            })
            let cv=document.querySelectorAll('.cv');
            for (let x=0;x<cv.length;x++){
                $(cv[x]).on('mouseenter',function(){
                    $(this).css({
                        'background':'',
                    })
                })
                $(cv[x]).on('mouseleave',function(){
                    $(this).css({
                        'background':''
                    })
                })
            }
            $('.imgCV').css({
                'background':''
            })
            $('.cv>div>a>p').css({
                'color':''
            })
            $('.form').css({
                'background':''
            })
            $('.design').css({
                'background':''
            })
            $('.color>p').css({
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
        }
    });
    //chuyển từ bright mode sang dark mode
    $('#moon').click(function () {
        if (co==false)
        {
            co=true;
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
                    $(this).css({
                        'color': 'lightskyblue',
                        'background-color': 'rgb(49,51,56)'
                    })
                })
                $(menu[i+1]).on('mouseleave',function(){
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
            $('.cv>div').css({
                'background-color':'#292a2d',
                'border':'0',
            })
            let cv=document.querySelectorAll('.cv>div');
            for (let x=0;x<cv.length;x++){
                $(cv[x]).on('mouseenter',function(){
                    $(this).css({                       
                        'box-shadow': '0 0 2rem 0.5rem rgba(135, 206, 250,0.2)'
                    })
                })
                $(cv[x]).on('mouseleave',function(){
                    $(this).css({
                        'box-shadow':''
                    })
                })
            }
            $('.imgCV').css({
                'background':'rgb(49,51,56)'
            })
            $('.cv>div>a>p').css({
                'color':'white'
            })
            $('.choice').css({
                'background':'linear-gradient(transparent, rgba(20,42,56,0.3), rgba(28,89,129,0.6))'
            })
            $('.form').css({
                'background':'#292a2d'
            })
            $('.design').css({
                'background':'rgb(49,51,56)'
            })
            $('.color>p').css({
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

    //DẤU TICK MỤC CHỌN MÀU
    
    for (let i=0;i<buttons.length;i++)
    {
        
        $(buttons[i]).click( function() {
            for (let x=0;x<buttons.length;x++)
            {
                if (x==i)
                {
                    $(buttons[x].querySelector('i')).css({
                        'display':'block'
                    })  
                }
                else
                {
                    $(buttons[x].querySelector('i')).css({
                        'display':'none'
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
            } else if (top <= 100) {
                if (top > 300) {
                    let movetoTop = document.querySelector('.icon > div > a');
                    $(movetoTop).css({
                        'display': 'none'
                    });
                }
                console.log(top);

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


};