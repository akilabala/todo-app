import {TodoItem, TodoItems} from './shared/todo-items.service';

export const appComponent: angular.IComponentOptions = {
  template: `
    <h2>Todo List:</h2>
    <todo-item item="item" ng-repeat="item in $ctrl.items"></todo-item>
    <todo-app-footer [items]="$ctrl.items" (remove-completed)="$ctrl.onRemoveCompleted()"></todo-app-footer>
  `,
  controller: class AppController {
    items: TodoItem[] = [];

    static $inject = ['todoItems'];
    constructor(protected todoItems: TodoItems) {}

    $onInit() {
      this.todoItems.fetch().then(items => this.items = items);
    }

    onRemoveCompleted() {
      this.todoItems.removeCompleted();
    }
  },
};
