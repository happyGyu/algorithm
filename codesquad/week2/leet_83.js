/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const deleteDuplicates = function(head) {
    let survived = head;
    let pointer = head? head.next : null;
    while (pointer) {
        if (survived.val === pointer.val) {
            survived.next = pointer.next;
        } else {
            survived = pointer;
        }
        pointer = pointer.next;
    }
    return head;
};