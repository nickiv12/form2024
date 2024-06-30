const tbodyElement = document.querySelector('tbody');

const mutationObserver = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.type === 'childList') {
      updateRowCount();
    }
  }
});

mutationObserver.observe(tbodyElement, { childList: true });

function updateRowCount() {
  const rowCount = tbodyElement.querySelectorAll('tr').length;
  console.log(" В tbody кол-во строк:", rowCount);
}

// Initial row count update
updateRowCount();


// Обычное функциональное выражение
var add = function(a, b) {
  return a + b;
};

// Стрелочная функция
const sum = (a, b) => a + b;
console.log(sum(2, 3)); // 5



//  Функциональное объявление.
function sum(a, b) {
  return a + b;
}

// Фукнциональное выражение.
const sum = function(a, b) {
  return a + b;
};

// инициализация - стрелочная (анонимная) функция получает имя.
const sum = (a, b) => a + b;





