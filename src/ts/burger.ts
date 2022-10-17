export const addBurger = (): HTMLElement | null => {
    let res:HTMLElement | null = null;
    if (window.innerWidth < 1060 && !(document.querySelector('.burger'))) {
        res = document.querySelector('.navigation');
        if(res != null){
            res.classList.add('burger');
            res.classList.remove('navigation');
            console.log('df')
        }
    }
    if (document.querySelector('.burger') && window.innerWidth > 1060) {
        res = document.querySelector('.burger');
        if (res != null){
            res.classList.add('navigation');
            res.classList.remove('burger');
        }
    }
    return res;
};
