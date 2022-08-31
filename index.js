
class Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor(arr){
        this.head = null;
        this.tail = null;

        for(let i = 0; i < arr.length; i++){
            this.append(arr[i]);
        }
    }

    prepend(value){
        let node = new Node(value, this.head);
        if(this.head === null) this.tail = node; //if list is empty
        this.head = node;
    }

    append(value){
        let node = new Node(value, null);
        if(this.head === null) {
            this.head = node;
            this.tail = node;
        }else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    size(){
        let node = this.head;
        let s = 0;
        while(node !== null){
            s++;
            node = node.next;
        }
        return s;
    }

    Head(){
        return this.head;
    }

    Tail(){
        return this.tail;
    }

    at(index){
        if(index >= this.size()) return null;
        let node = this.head;
        for(let i = 0; i <= index - 1; i++){
            node = node.next;
        }
        return node;
    }

    pop(){
        if(this.head === null) return; //if list is empty
        if(this.head === this.tail) head = tail = null; //if list has only one element
        else {
            let node = this.head;
            while(node.next.next !== null){
                node = node.next;
            }
            this.tail = node;
            node.next = null;
        }
    }

    contains(value){
        let node = this.head;
        while(node !== null){
            if(node.value === value) return true;
            node = node.next;
        }
        return false;
    }

    find(value){
        let index = 0;
        let node = this.head;
        while(node !== null){
            if(node.value === value) return index;
            node = node.next;
            index++;
        }
        return -1;
    }

    insertAt(value, index){
        if(index === 0) this.prepend(value);
        let node = this.at(index - 1);
        let newNode = new Node(value, node.next);
        node.next = newNode;
    }

    toString(){
        let node = this.head;
        let str = '';
        while (node !== null) {
            str += `(${node.value}) => `;
            node = node.next;
        }
        return str + 'null';
    }
}

let ll = new LinkedList([4,6,2,75,39]);
// console.log(ll.toString());
// ll.append(45);
// console.log(ll.toString());
// ll.prepend(12);
// console.log(ll.toString());
// console.log(ll.Head());
// console.log(ll.Tail());
// console.log('size: ' + ll.size());
// console.log(ll.at(8));
// console.log(ll.pop());
// console.log(ll.toString());
// console.log(ll.contains(75));
// console.log(ll.contains(55));
// console.log(ll.find(75));
// console.log(ll.find(67));
console.log(ll.toString());
console.log(ll.insertAt(67,3));
console.log(ll.toString());
