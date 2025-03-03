function buttonclick(val){
    document.getElementById('screen-text').value+=val
}
function clearDisplay(){
    document.getElementById('screen-text').value=""
}
function equalClick(){
    var text=document.getElementById('screen-text').value
    var result=eval(text)
    document.getElementById('screen-text').value=result
}