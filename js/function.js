$(function () {
    // -----jQueryの記述-------

    // スムーススクロール
    $(function () {
        $('.gnav__link').on('click', function () {
            const target = $(this).attr('href');
            const targetPos = $(target).offset().top;
            $('html,body').animate({ scrollTop: targetPos }, 500);
            return false;
        });
    });

    //マウスオーバーで表示
    // $(function() {
    //     $('#btn').on('click',function () {
    //       $('.gnav').show();
    //     },
    //   );
    // });

    

    // リサイズヘッダー

    const mvHeight = $('#mv').height();

    $(window).on('scroll', function () {
        const ST = $(window).scrollTop();

        if (ST >= mvHeight) {
            $('.gnav').addClass('resizeHeader');
        } else {
            $('.gnav').removeClass('resizeHeader')
        }
        if (ST >= mvHeight) {
            $('#btn').removeClass('resizeHeader');
        } else {
            $('#btn').addClass('resizeHeader')
        }
    });


    // noneは効果ありだがgnavを表示することができていない
    $(function () {
        $('#btn').on('click', function () {
            $('#btn').addClass('none');
            $('.gnav').addClass('mo');
        })
    });


    // ビューワー

    $('.crops__link').on('click', function () {
        const path = $(this).attr('href');
        $('#crops__img').attr('src', path);
        return false;
    });


    // -------ここまで----------
});