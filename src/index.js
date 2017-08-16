/*在本地开启服务器,尝试获取数据*/
$(function(){
    $.get('./songs.json').then(function(response){
        console.log(response)
        //本地服务器获取的response是json,http请求的就是json,看content-type
        //github获取的response是字符串
    },function(){
        alert('失败')
    })
})