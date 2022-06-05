const l1 = [1, 2, 9];
const l2 = [1, 3, 4];
//output -> 1,1,2,3,4,4

var mergeBoth = function (l1, l2) {
  const head = new ListNode(0);
  let merged = head;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      merged.next = l1;
      l1 = l1.next;
    } else {
      merged.next = l2;
      l2 = l2.next;
    }

    merged = merged.next;
  }

  if (l1) {
    merged.next = l1;
  } else {
    merged.next = l2;
  }

  return head.next;
};

console.log(mergeBoth(l1, l2));
