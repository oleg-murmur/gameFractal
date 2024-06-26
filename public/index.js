


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Возвращаем новые координаты после поворота на 90 градусов
function turnRight(x, y) {
    return [y, -x];
}

function turnLeft(x, y) {
    return [-y, x];
}

let turnSequence = [true]; // Изначально один правый поворот

function generateTurns(generations) {
    for (let gen = 1; gen < generations; gen++) {
        const newPattern = [];
        for (let i = turnSequence.length - 1; i >= 0; i--) {
            newPattern.push(!turnSequence[i]); // Инвертируем повороты
        }
        turnSequence = [...turnSequence, true, ...newPattern];
    }
}

function drawStep(ctx, x, y, dx, dy, index) {
    if (index >= turnSequence.length) {
        return; // Завершаем анимацию
    }

    let turn = turnSequence[index];
    let newDx, newDy;

    if (turn) {
        [newDx, newDy] = turnRight(dx, dy);
    } else {
        [newDx, newDy] = turnLeft(dx, dy);
    }

    let newX = x + dx;
    let newY = y + dy;

    ctx.lineTo(newX, newY);
    ctx.stroke();

    // Рекурсивно вызываем следующий шаг анимации
    requestAnimationFrame(() => drawStep(ctx, newX, newY, newDx, newDy, index + 1));
}

function drawDragonCurve(x, y, length, generations) {
    generateTurns(generations);
    
    // Начальная позиция и направление (dx, dy)
    let dx = length;
    let dy = 0;

    ctx.beginPath();
    ctx.moveTo(x, y);

    // Запускаем анимацию с первого шага
    drawStep(ctx, x, y, dx, dy, 1);
}

// Начальная точка и параметры
const startX = 500;
const startY = 200;
const length = 8;
const generations =11;

drawDragonCurve(startX, startY, length, generations);
// drawDragonCurve(300, 400, 8, 11);







// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// // Возвращаем новые координаты после поворота на 90 градусов
// function turnRight(x, y) {
//     return [y, -x];
// }

// function turnLeft(x, y) {
//     return [-y, x];
// }

// // Функция для генерации случайной последовательности поворотов
// function generateRandomTurns(length) {
//     let turns = [];
//     for (let i = 0; i < length; i++) {
//         turns.push(Math.random() >= 0.5);
//     }
//     return turns;
// }

// let turnSequence = generateRandomTurns(12); // Генерируем начальную последовательность поворотов

// function drawStep(ctx, x, y, dx, dy, index) {
//     if (index >= turnSequence.length) {
//         return; // Завершаем анимацию
//     }

//     let turn = turnSequence[index];
//     let newDx, newDy;

//     if (turn) {
//         [newDx, newDy] = turnRight(dx, dy);
//     } else {
//         [newDx, newDy] = turnLeft(dx, dy);
//     }

//     // Случайная длина шага
//     let step = (Math.random() * 20) + 10;

//     // Перемещаемся в новое место
//     let newX = x + newDx * step;
//     let newY = y + newDy * step;

//     // Рисуем линию
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     ctx.lineTo(newX, newY);
//     ctx.stroke();

//     // Рекурсивно рисуем следующий шаг с задержкой для анимации
//     setTimeout(() => drawStep(ctx, newX, newY, newDx, newDy, index + 1), 100);
// }

// // Инициализация
// function init() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.strokeStyle = "black";
//     ctx.lineWidth = 2;

//     // Начальная позиция
//     let startX = Math.random() * canvas.width;
//     let startY = Math.random() * canvas.height;

//     // Начальное направление (случайное)
//     let initialDx = Math.random() >= 0.5 ? 1 : -1;
//     let initialDy = Math.random() >= 0.5 ? 1 : -1;

//     drawStep(ctx, startX, startY, initialDx, initialDy, 0);
// }

// // Запуск анимации
// init();









// console.log('work2')
// // const branches = 3;
// const ctx = canvas.getContext('2d');
// async function drawFractal(x, y, len, angle, depth) {
//     if (depth === 0) return;

//     let x2 = x + len * Math.cos(angle);
//     let y2 = y + len * Math.sin(angle);
//     drawLine(x, y, x2, y2);

//     await new Promise((resolve) => setTimeout(resolve, 50)); // Задержка в 100 миллисекунд

//     // await drawFractal(x2, y2, len * 0.7, angle + 0.3, depth - 1);
//     // await drawFractal(x2, y2, len * 0.7, angle - 0.3, depth - 1);
//     await drawFractal(x2, y2, len * 0.7, angle + 0.3, depth - 1);
//     await drawFractal(x2, y2, len * 0.9, angle - 0.2, depth - 1);
//     await drawFractal(x2, y2, len * 0.5, angle - 0.1, depth - 1);
// }
// // Конечно, вот пример функции для отрисовки фрактала треугольника Серпинского:

// function drawTriangle(x1, y1, x2, y2, x3, y3) {
//     // Соединяем вершины треугольника линиями
//     drawLine(x1, y1, x2, y2);
//     drawLine(x2, y2, x3, y3);
//     drawLine(x3, y3, x1, y1);
// }
// async function drawSierpinskiTriangle(x1, y1, x2, y2, x3, y3, depth) {
//     if (depth === 0) {
//         drawTriangle(x1, y1, x2, y2, x3, y3);
//     } else {
//         let midX1 = (x1 + x2) / 2;
//         let midY1 = (y1 + y2) / 2;
//         let midX2 = (x2 + x3) / 2;
//         let midY2 = (y2 + y3) / 2;
//         let midX3 = (x1 + x3) / 2;
//         let midY3 = (y1 + y3) / 2;

//         // Рекурсивно отрисовываем 3 треугольника меньшей глубины
//         await new Promise((resolve) => setTimeout(resolve, 50)); // Задержка в 100 миллисекунд

//         await drawSierpinskiTriangle(x1, y1, midX1, midY1, midX3, midY3, depth - 1);
//         await drawSierpinskiTriangle(midX1, midY1, x2, y2, midX2, midY2, depth - 1);
//         await drawSierpinskiTriangle(midX3, midY3, midX2, midY2, x3, y3, depth - 1);
//     }
// }
// async function drawTwistingFractal(x, y, angle, length, level, maxLevel) {
//     // Выход из рекурсии
//     if (level === maxLevel) {
//         return;
//     }

//     ctx.beginPath();
//     ctx.moveTo(x, y);
    
//     // Вычисляем конечные координаты для следующей ветви
//     const endX = x + length * Math.cos(angle);
//     const endY = y + length * Math.sin(angle);

//     ctx.lineTo(endX, endY);
//     ctx.strokeStyle = `hsl(${level * 30}, 50%, 50%)`;
//     ctx.stroke();

//     // Изменяем угол поворота для следующей ветви
//     angle += level * 0.2;
//     await new Promise((resolve) => setTimeout(resolve, 50)); // Задержка в 100 миллисекунд

//     // Рисуем следующие ветви
//     await drawTwistingFractal(endX, endY, angle, length * 0.7, level + 1, maxLevel); // левая ветвь
//     await drawTwistingFractal(endX, endY, -angle, length * 0.7, level + 1, maxLevel); // правая ветвь
// }
// // Вызов функции для отрисовки фрактального узора
// drawTwistingFractal(canvas.width / 2, canvas.height, -Math.PI / 2, 100, 1, 10);
// // Вызов функции для отрисовки треугольника Серпинского
// drawSierpinskiTriangle(200, 600, 800, 600, 500, 100, 5);

// async function drawTwistingFractal(x, y, angle, length, level, maxLevel, branches) {
//     // Выход из рекурсии
//     if (level === maxLevel) {
//         return;
//     }

//     ctx.beginPath();
//     ctx.moveTo(x, y);
    
//     // Вычисляем конечные координаты для следующей ветви
//     const endX = x + length * Math.cos(angle);
//     const endY = y + length * Math.sin(angle);

//     ctx.lineTo(endX, endY);
//     ctx.strokeStyle = `hsl(${level * 30}, 50%, 50%)`;
//     ctx.stroke();

//     // Изменяем угол поворота для следующей ветви
//     const angleStep = (2 * Math.PI) / branches;

//     // Рисуем следующие ветви
//     for (let i = 0; i < branches; i++) {
//         await new Promise((resolve) => setTimeout(resolve, 2)); // Задержка в 100 миллисекунд

//         await drawTwistingFractal(endX, endY, angle + i * angleStep, length * 0.7, level + 1, maxLevel, branches);
//     }
// }

// // Пример вызова функции для фрактала, закручивающегося в окружность

// ctx.clearRect(0, 0, canvas.width, canvas.height);
// ctx.lineWidth = 2;

// const startX = canvas.width / 2;
// const startY = canvas.height / 2;
// const initialAngle = -Math.PI / 2; // начальный угол направления вверх
// const initialLength = 100;
// const maxLevel = 5;
// const branches = 6; // количество ветвей на каждом уровне (6 для окружности)

// drawTwistingFractal(startX, startY, initialAngle, initialLength, 0, maxLevel, branches);
// function drawLine(x1, y1, x2, y2) {
//     const canvas = document.getElementById('canvas');
//     const ctx = canvas.getContext('2d');

//     ctx.beginPath();
//     ctx.moveTo(x1, y1);
//     ctx.lineTo(x2, y2);
//     ctx.stroke();
// }

// // Вызов функции для генерации фрактального дерева
// // drawCircularTwistingFractal(400, 200, 50, -Math.PI / 2, 7, 0.1);
// drawFractal(400, 400, 50, -Math.PI / 2, 5);