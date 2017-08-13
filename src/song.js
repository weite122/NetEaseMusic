$(function(){
    $.get('/lyric.json').then(function(object){
        let {lyric} = object
        let array = lyric.split('\n')
        let regex = /^\[(.+)\](.*)$/ 
        array = array.map(function(string,index){            
            let matches = string.match(regex)
            if(matches){
                return {time: matches[1],words:matches[2]}
            } 
        })
        console.log(array)
        let $lyric = $('.lyric')
        array.map(function(object){
            if(!object){return}
            let $p = $('<p/>')
            $p.attr('data-time',object.time).text(object.words)
            $p.appendTo($lyric)
        })
    })
})