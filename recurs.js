function Node(data, next = null) {
    this.data = data;
    this.next = next;
  }


  const filter = (head, p) => head ? (p(head.data) ? new Node(head.data, filter(head.next, p)) : filter(head.next, p)) : null

  console.log(filter(new Node(1, new Node(2, new Node(3))), x => x >= 2))