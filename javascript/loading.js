document.body.innerHTML += ('<div id="preloader-body"><div id="cube-wrapper"><div class="cube-folding"><span class="leaf1"></span><span class="leaf2"></span><span class="leaf3"></span><span class="leaf4"></span></div><span class="loading"data-name="Loading">Loading</span></div></div>');
var flag = 1;
window.onload = function () {
    setTimeout("wait()", 1400);//���룬����ʱ���
    imgchange();
}
//��������ع��죬������,,������ʱһ������
function wait() {
    document.getElementById('cube-wrapper').style.display = "none";
    document.getElementById('preloader-body').style.display = "none";
    //����ֱ��д����window.onload���棬Ȼ���setTime�Ǿ�ɾ����������������У���ô������������ص�ʱ���������������ʾ
}
function change(target) {
    switch (flag) {
        case 1: target.style.backgroundImage = "url('picture/picture1.jpg')"; break;
        case 2: target.style.backgroundImage = "url('picture/picture2.jpg')"; break;//ע���ڲ����ţ�
        case 3: target.style.backgroundImage = "url('picture/picture3.jpg')"; break;
        case 4: target.style.backgroundImage = "url('picture/picture4.jpg')"; break;
        case 5: target.style.backgroundImage = "url('picture/picture5.jpg')"; break;
        case 6: target.style.backgroundImage = "url('picture/picture6.jpg')"; break;
        default: target.style.backgroundImage = "url('picture/picture1.jpg')";
    }
    flag++;
    if (flag === 6) {
        flag = 1;
    }
}
function imgchange() {
    var target = document.getElementById("paragraph_mid");
    fadeOut(target);
    fadeIn(target);
    setTimeout("imgchange()", 10000);
}
function fadeIn(element) {
    if (element.style.opacity !== 1) {
        var speed = 70;
        var num = 0;
        var st = setInterval(function () {
            num++;
            element.style.opacity = num / 10;
            if (num >= 10) {
                clearInterval(st);
            }
        }, speed);
    }
}
function fadeOut(element) {
    if (element.style.opacity !== 0) {
        var speed = 70;
        var num = 10;
        var st = setInterval(function () {
            num--;
            element.style.opacity = num / 10;
            if (num <= 0) {
                clearInterval(st);
            }
        }, speed);
    }
    element.style.opacity = 0;
    change(element);
}