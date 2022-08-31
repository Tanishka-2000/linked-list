
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

    toString(){
        let node = this.head;
        let str = '';
        while (node !== null) {
            str += `(${node.value}) => `;
            node = node.next;
        }
        return str+'null';
    }
}

let ll = new LinkedList([4,6,2,75,39]);
console.log(ll.toString());
ll.append(45);
console.log(ll.toString());
ll.prepend(12);
console.log(ll.toString());
