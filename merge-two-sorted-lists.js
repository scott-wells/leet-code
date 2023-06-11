/**
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists in a one sorted list. 
 * The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    let tmpNode = new ListNode(0); // new temp list to append nodes to
    let currNode = tmpNode; // pointer node starts at this temp head

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            currNode.next = list1;
            list1 = list1.next;
        } else {
            currNode.next = list2;
            list2 = list2.next;
        }
        currNode = currNode.next;
    }
    currNode.next = list1 !== null ? list1 : list2;

    return tmpNode.next;
};

mergeTwoLists([1,2,4],[1,3,4]);
mergeTwoLists([1,2,4,5,6,8],[1,3,4,6,8,9]);
mergeTwoLists([],[]);
mergeTwoLists([],[0]);