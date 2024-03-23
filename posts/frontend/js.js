let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.button_create'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
let arrButtonDelete = document.querySelectorAll('.button_delete')
let arrButtonOpen = document.querySelectorAll('.button_open')

// const { textpost } = import('../backend/postfun/textpost');



for ( let i = 0; i< arrButtonDelete.length; i++) {
    
    let x = arrButtonDelete[i]

    let butId = x.getAttribute("id")

    x.addEventListener('click', async function () {
        // console.log(butId)
        const res = await fetch('http://localhost:5000/post',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({butId: butId})
        })   
        return res
    })

}


for ( let i = 0; i< arrButtonOpen.length; i++) {
    
    let x = arrButtonOpen[i]

    let butId = x.getAttribute("id")

    x.addEventListener('click', function () {
        console.log(butId)
    })
    
}


openPopupButtons.forEach((button) => { // Перебираем все кнопки
    button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
        e.preventDefault(); // Предотвращаем дефолтное поведение браузера
        popupBg.classList.add('active'); // Добавляем класс 'active' для фона
        popup.classList.add('active'); // И для самого окна
    })
});

closePopupButton.addEventListener('click',() => { // Вешаем обработчик на крестик
    popupBg.classList.remove('active'); // Убираем активный класс с фона
    popup.classList.remove('active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
    if(e.target === popupBg) { // Если цель клика - фот, то:
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    }
});
