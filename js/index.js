// 1) Создайте всплывающее окно, которое спрашивает (у вводящего пользователя на экране) ввод вашего
// любимого фильма и если ввод неверен, то программа отправляет запрос alert “Попробуйте ещё раз”. В
// функции должны быть минимум 1 условие(истиное и ложное). Если можете - используйте вариант создания
// своей функции, пример: function Вашеимяфункциитут()"
// Если не получается - использовуйте prompt и alert.

// function movi () {
//     var flag = true;
//     var favoritMovie = "Спартак";
//     while (flag) {
//         let movieName = prompt("Введите название моего любимого фильма: ")
//         if (movieName == "stop") {
//             break;
//         }else if (movieName == favoritMovie) {
//             flag = false;
//             alert("Верно! Мой любимый фильм - " + favoritMovie);
//         }else {
//             alert("Неверно! Попробуйте ещё раз! Или введите " + "stop");
//         }
//     }
// }
// movi();





// * 2) Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента слово, 
// вместо второго - предложение, вместо третьего - новую букву. Массив должен состоять только из строк. 
// Выведите итоговый массив в документ, через всплывающее окно или в консоль.


let arr = ["a","b","c"];
arr[0] = "word";
arr[1] = "new world company";
arr[2] = "o";

for (let i = 0; i < arr.length; i++) {
    alert(arr[i]);    
}

// или
// alert(arr);






