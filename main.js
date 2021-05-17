$(() => {
  // Todoを保存する配列を用意する
  const todos = [];

  // DOM操作に必要な要素を取得する
  const $todoInput = $('#todo-input');
  const $todoContainer = $('#todo-container');
  const $addButton = $('#add-buton');

  // 追加ボタンをクリックしたときの処理を実装する
  $addButton.click(() => {
    const todo = $todoInput.val();
    if (todo) {
      todos.push(todo);
      $todoInput.val('');
      showTodos();
    }
  });

  // Todoを保存している配列を一覧表示する
  const showTodos = () => {
    $todoContainer.empty();

    todos.forEach((todo, index) => {
      const $item = $(`<li class="item">${todo}</li>`);
      const $deleteButton = $(`<button class="item-button">削除</button>`);

      $item.append($deleteButton);
      $todoContainer.append($item);

      $deleteButton.click(() => {
        deleteTodoByIndex(index);
      });
    });
  };

  // 指定したTodoを配列から取り除く
  const deleteTodoByIndex = (index) => {
    todos.splice(index, 1);
    showTodos();
  };
});