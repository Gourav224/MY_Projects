let todoList = [
    {
        item: `buymilk`,
        dueDate: `2023-12-13`
    },
    {
        item: `buycake`,
        dueDate: `2023-12-13`
    },
];
displayList();
function addTodo() {
    let todoinput = document.querySelector('#todo_input');
    let tododate = document.querySelector(`#todo_date`);
    let todoitem = todoinput.value;
    let tododueDate = tododate.value;

    todoList.push({
        item: todoitem,
        dueDate: tododueDate,
    });
    todoinput.value = "";
    tododate.value = "";
    displayList();

}
function displayList() {
    let containeritems = document.querySelector('.todo_container');
    let newHtml = ``;
    for (let i = 0; i < todoList.length; i++) {
        let { item, dueDate } = todoList[i];
        newHtml += `
            <span>${item}</span>
            <span>${dueDate}</span>
            <button class="btn_delete" onclick="todoList.splice(${i},1);
            displayList();">Delete</button>
        `
    }
    containeritems.innerHTML = newHtml;
}