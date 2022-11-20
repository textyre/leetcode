class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let pointer = head;
    let prevPointer = null;
    let index = 0;
    while (pointer !== null) {
        if (isEnd(pointer, n)) {
            // console.log('prevPointer', prevPointer);
            // console.log('index', index)
            if (index === 0) {
                return pointer.next;
            }
            prevPointer!.next = pointer?.next || null;
            return head;
        }
        index++;
        prevPointer = pointer;
        pointer = pointer.next;
    }

    return head;
}

function isEnd(head: ListNode | null, n: number) {
    let index = 0;
    let pointer = head;
    while (index < n) {
        // console.log(pointer, index, n);
        // console.log('isEnd', pointer?.next === null, index === n - 1)
        if (pointer?.next === null && index === n - 1) {
            // console.log('return true')
            return true;
        }
        pointer = pointer?.next || null;
        index++;
    }
    // console.log('return false')
    return false;
}


const listItem7 = new ListNode(7);
const listItem6 = new ListNode(6, listItem7);
const listItem5 = new ListNode(5, listItem6);
const listItem4 = new ListNode(4, listItem5);
const listItem3 = new ListNode(3, listItem4);
const listItem2 = new ListNode(2, listItem3);
const listItem = new ListNode(1, listItem2);

console.log(removeNthFromEnd(listItem, 2));
