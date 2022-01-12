/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 const hasCycle = function(head) {
    const log = new Map();
    while (head) {
        if (log.has(head)) {
            return true;
        } else {
            log.set(head, true);
            head = head.next;
        }
    }
    return false;
};