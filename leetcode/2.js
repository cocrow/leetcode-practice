/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

//题目地址 https://leetcode.com/problems/add-two-numbers/

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    var headNode = new ListNode(0);
    var tempNode = headNode;
    var addNum = 0;
    var jin_num = 0; //进位标志
    while (l1 != null || l2 != null) {
        if (l1) {
            addNum = addNum + l1.val;
            l1 = l1.next;
        }
        if (l2) {
            addNum = addNum + l2.val;
            l2 = l2.next;
        }
        if (jin_num === 1) {
            addNum++;
            jin_num = 0;
        }
        if (addNum > 9) {
            addNum = addNum - 10;
            jin_num = 1;
        }
        tempNode.next = new ListNode(addNum);
        tempNode = tempNode.next;
        addNum = 0;
    }
    if (jin_num == 1) {
        //还有进位
        tempNode.next = new ListNode(1);
        tempNode = tempNode.next;
    }
    return headNode.next;
};


//test
list1 = new ListNode(0)
list1.next = new ListNode(9);
list1.next.next = new ListNode(9);

list2 = new ListNode(0)
list2.next = new ListNode(0);
list2.next.next = new ListNode(1);


function printList(list) {
    while(list) {
        console.log(list.val);
        list = list.next;
    }
}

add = addTwoNumbers(list1, list2);
console.log(add);
printList(add);