// Fast & slow pointers
// Two pointers that move through the array
// at different speeds.
// Useful when dealing with cyclic linked lists or arrays.
// When moving at different speeds the algorithm
// proves the two pointers are bound to meet in a cycle.

// How to identify a fast & slow pointer pattern:
// - Problem will deal with looping linked list or array.
// - When you need to know the position of a certain element
//   overall length of the linked list.

// When should you use the two pointers pattern over this?
// - When you have a singly linked list and can't move
//   backwards.
// - When you have a linked list and you need to figure out
//   if it is palindrome.

// Leetcode problems:
// 1. Linked list cycle #141 (easy)
// 2. Palindrome linked list #234 (medium)
// 3. Cycle in a circular array #457 (hard)

// Leetcode problem #141 solution:
var hasCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
};

// Leetcode problem #234
