function changeColor() {
    if(document.body.classList == 'active'){
        document.body.classList.remove('active');
    }else{
        document.body.classList.add('active');
    }
}