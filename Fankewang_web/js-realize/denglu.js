$(function(){
    /*选项卡 选择普通和快速登录*/
    $('#tab-btn div').click(function(){ 
        $(this).css({'background':'#b42025','color':'white'}).siblings().css({'background':'#f5f5f5','color':'black'})
        $('.tab-puto').show().siblings('.tab-kuaisu').hide();
    });
    $('#kuaisu').click(function(){$('.tab-kuaisu').show().siblings('.tab-puto').hide();});
})
window.onload=function(){
    function getClass(clas){
        return this.document.getElementsByClassName(clas)[0];
    }
    getClass('user').onblur=function(){
        var userVal=getClass('user').value; // 用户名
        var uPattern = /^[a-zA-Z0-9_-]{4,16}$/; // 用户名表达式
        var passVal=getClass('password').value;// 密码
        var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
        if(uPattern.text(userVal) || pPattern.text(passVal)){
            console.log('登录成功');
        }
    }
}