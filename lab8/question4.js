/**
 * Question 4: Use Object literal and constructor function to create LinkedList. Methods below:
    
    1) add(value)
    2) remove(value)
    3) print()
    
After completion, we can call methods as below and see the results in console if call print().
    linkedlist.add(1);
    linkedlist.add(2);
    linkedlist.add(3);
    linkedlist.print(); //in the console, you should see: LinkedList{1,2,3}
    linkedlist.remove(3);
    linkedlist.print(); //in the console, you should see: LinkedList{1,3}
 * 
 */


// Object literal

let linkedlist = {};
linkedlist.add = function (element) {
    if (this.value === undefined) {
        this.value = element;
        this.next = null;
    } else {
        let current = this;
        while (current.next) {
            current = current.next;
        }
        current.next = { value: element, next: null };
    }
}

linkedlist.remove = function (element) {
    var current = this;
    var prev = null;
    while (current) {
        if (current.value === element) {
            if (prev == null) {
                this.value = current.next.value;
                this.next = current.next.next;
            } else {
                prev.next = current.next;
            }
            return true;
        }
        prev = current;
        current = current.next;
    }
    return false;
}

linkedlist.printHelper = function (list, result) {
    if (list.next == null) {
        result += list.value;
        return result;
    }
    result += list.value + ',';
    return this.printHelper(list.next, result);
}
linkedlist.print = function () {
    let result = 'LinkedList{';
    result = this.printHelper(this, result);
    result += '}';
    console.log(result);
}

linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,2,3}
linkedlist.remove(3);
linkedlist.print(); //in the console, you should see: LinkedList{1,3}



//Constructor Function

function LinkedList() {

}

LinkedList.prototype.add = function (element) {
    if (this.value === undefined) {
        this.value = element;
        this.next = null;
    } else {
        let current = this;
        while (current.next) {
            current = current.next;
        }
        current.next = { value: element, next: null };
    }
}

LinkedList.prototype.remove = function (element) {
    var current = this;
    var prev = null;
    while (current) {
        if (current.value === element) {
            if (prev == null) {
                this.value = current.next.value;
                this.next = current.next.next;
            } else {
                prev.next = current.next;
            }
            return true;
        }
        prev = current;
        current = current.next;
    }
    return false;
}

LinkedList.prototype.printHelper = function (list, result) {
    if (list.next == null) {
        result += list.value;
        return result;
    }
    result += list.value + ',';
    return this.printHelper(list.next, result);
}

LinkedList.prototype.print = function () {
    let result = 'LinkedList{';
    result = this.printHelper(this, result);
    result += '}';
    console.log(result);
}

let linkedlistPrototype = new LinkedList();
linkedlistPrototype.add(1);
linkedlistPrototype.add(2);
linkedlistPrototype.add(3);
linkedlistPrototype.print(); //in the console, you should see: LinkedList{1,2,3}
linkedlistPrototype.remove(3);
linkedlistPrototype.print(); //in the console, you should see: LinkedList{1,3}