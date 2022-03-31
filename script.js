const itemEl = document.querySelector('.item');
const dateEl = document.querySelector('.date');
const quantityEl = document.querySelector('.quantity');
const addExpenseBtn = document.querySelector('.add-expense');
const tableBody = document.querySelector('.table-body');

addExpenseBtn.addEventListener('click', addExpenseFun);

function addExpenseFun(e){
    e.preventDefault();
    if ((itemEl.value == '') || (dateEl.value == '') || (quantityEl.value == '')) return;
    tableBody.innerHTML += `<tr>
                                <td>${itemEl.value}</td>
                                <td>${dateEl.value}</td>
                                <td>$${quantityEl.value}</td>
                                <td><button class="remove-btn">Remove</button></td>
                            </tr>`  
    itemEl.value = '';
    dateEl.value = '';
    quantityEl.value = '';                
}

tableBody.addEventListener('click', deleteExpenseFun);

function deleteExpenseFun(e){
    const item = e.target;
    if (item.classList[0] = "remove-btn") {
        tableRow = (item.parentElement).parentElement;
        tableRow.classList.add('fall');
        tableRow.addEventListener('transitionend', function(){
            tableRow.remove();
        })
    }
}