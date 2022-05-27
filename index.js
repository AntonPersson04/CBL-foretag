document.querySelectorAll('.expandtext').forEach(button => {
    button.addEventListener('click', () => {
       
        button.classList.toggle("expandtext--open");
        const textboxen = button.nextElementSibling;
        if(button.classList.contains("expandtext--open")){
            textboxen.style.maxHeight = textboxen.scrollHeight + 'px';

        }else{
            textboxen.style.maxHeight = 0 + 'px';
        }
    });
});
