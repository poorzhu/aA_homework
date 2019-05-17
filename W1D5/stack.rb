 class Stack
    def initialize    
      @stack = []
    end

    def push(el)
      @stack.push(el)
    end

    def pop
      @stack.pop
    end

    def peek
      @stack[-1]
    end
end

class Queue
    def initialize    
      @queue = []
    end

    def enqueue(el)
      @queue.push(el)
    end

    def dequeue
      @queue.shift
    end

    def peek
      @queue[-1]
    end
end