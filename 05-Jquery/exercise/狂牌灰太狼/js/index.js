$(function() {
    //1.设置开始游戏按钮
    $(".start").click(function() {
        $(this).stop().fadeOut(100);
        //调用进度条方法
        progressHandler();
        //调用处理灰太狼动画方法
        startWolfAnimation();
    });
    //2.设置游戏规则界面
    $(".rules").click(function() {
        $(".rule").stop().fadeIn(100);
    });
    //3.设置关闭按钮
    $(".close").click(function() {
        $(".rule").stop().fadeOut(100);
    });
    //4.设置重新开始按钮
    $(".reStart").click(function() {
        $(".mask").stop().fadeOut(100);
        progressHandler();
        startWolfAnimation();
    });

    function progressHandler() {
        $(".progress").css({
            width: 180
        });
        var timer = setInterval(function() {
            var progressWidth = $(".progress").width();
            progressWidth -= 1;
            $(".progress").css({
                width: progressWidth
            })
            if (progressWidth <= 0) {
                clearInterval(timer);
                $(".mask").stop().fadeIn(100);
                stopWolfAnimation();
            }
        }, 100);
    }
    var wolfTimer;

    function startWolfAnimation() {
        //定义两个数组，放所有小灰灰和灰太狼图片
        var wolf_1 = ["./images/h0.png", "./images/h1.png", "./images/h2.png", "./images/h3.png", "./images/h4.png", "./images/h5.png", "./images/h6.png", "./images/h7.png", "./images/h8.png", "./images/h9.png"];
        var wolf_2 = ["./images/x0.png", "./images/x1.png", "./images/x2.png", "./images/x3.png", "./images/x4.png", "./images/x5.png", "./images/x6.png", "./images/x7.png", "./images/x8.png", "./images/x9.png"];
        // 2.定义一个数组保存所有可能出现的位置
        var arrPos = [
            { left: "100px", top: "115px" },
            { left: "20px", top: "160px" },
            { left: "190px", top: "142px" },
            { left: "105px", top: "193px" },
            { left: "19px", top: "221px" },
            { left: "202px", top: "212px" },
            { left: "120px", top: "275px" },
            { left: "30px", top: "295px" },
            { left: "209px", top: "297px" }
        ];
        //3.随机生成一个位置
        var posIndex = Math.round(Math.random() * 8);
        //4.定义一个图片
        var $wolfImage = $("<img src='' class='wolfImage'>");
        //5.设置图片显示的位置
        $wolfImage.css({
            position: "absolute",
            left: arrPos[posIndex].left,
            top: arrPos[posIndex].top
        });
        //随机获取数组类型
        var wolfType = Math.round(Math.random()) == 0 ? wolf_1 : wolf_2;
        //6.设置图片的内容
        window.wolfIndex = 0;
        window.wolfIndexEnd = 5;
        wolfTimer = setInterval(function() {
            if (wolfIndex > wolfIndexEnd) {
                $wolfImage.remove();
                clearInterval(wolfTimer);
                startWolfAnimation();
            }
            $wolfImage.attr("src", wolfType[wolfIndex]);
            wolfIndex++;
        }, 300);
        //7.将图片添加到界面上
        $(".container").append($wolfImage);
        //8.调用游戏得分规则方法
        gameRules($wolfImage);
    }

    function gameRules($wolfImage) {
        $wolfImage.one("click", function() {
            // 修改索引
            window.wolfIndex = 5;
            window.wolfIndexEnd = 9;

            // 拿到当前点击图片的地址
            var $src = $(this).attr("src");
            // 根据图片地址判断是否是灰太狼
            var flag = $src.indexOf("h") >= 0;
            // 根据点击的图片类型增减分数
            if (flag) {
                // +10
                $(".score").text(parseInt($(".score").text()) + 10);
            } else {
                // -10
                $(".score").text(parseInt($(".score").text()) - 10);
            }
        });
    }

    function stopWolfAnimation() {
        $(".wolfImage").remove();
        clearInterval(wolfTimer);
    }

});