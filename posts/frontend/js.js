let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.button_create'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
let arrButtonDelete = document.querySelectorAll('.button_delete')
let arrButtonOpen = document.querySelectorAll('.button_open')
let nameImp = document.getElementById('nameImp')
let textImp = document.getElementById('textImp')
let sendButt = document.getElementById('sendButt')

sendButt.addEventListener('click',() => {
    popupBg.classList.remove('active');
    popup.classList.remove('active'); 
});

for ( let i = 0; i< arrButtonDelete.length; i++) {

    let x = arrButtonDelete[i]
    let butId = x.getAttribute("id")

    x.addEventListener('click', async function () {
        const res = await fetch('http://localhost:5000/delete',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({butId: butId})
        }) 
        location.reload(true) 
        return res
    })
}

let namePost = ""
let textPost = ""

sendButt.addEventListener("click",async function sendPost() {
    namePost = nameImp.value
    nameImp.value = ""
    textPost = textImp.value
    textImp.value = ""
    const resb = await fetch('http://localhost:5000/create',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({namePost: namePost, textPost: textPost})
    })
    location.reload(true)   
    return resb;

})

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
