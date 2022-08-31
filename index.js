
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
        return str + 'null';
    }

    Head(){
        return this.head;
    }

    Tail(){
        return this.tail;
    }

    at(index){
        let node = this.head;
        for(let i = 0; i <= index - 1; i++){
            node = node.next;
        }
        return node;
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
console.log(ll.at(2));
