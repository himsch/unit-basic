// 모듈 import
const Stack = require('../stack');

// Stack 모듈의 있는 API(interface)를 '어떻게 사용할 것' 인가에 대해 더 생각해볼 수 있다.
describe('Stack', () => {
  let stack;
  beforeEach(() => {
    // 매 테스트마다 새로운 Object 생성
    stack = new Stack();
  });

  it('스택은 생성시 항상 비어있어야한다.', () => {
    // 스택의 size 라는 함수를 호출해 비어있는지 확인할 수 있다.
    expect(stack.size()).toBe(0);
  });

  it('스택에 아이템을 push 할 수 있다.', () => {
    stack.push('🍌');
    expect(stack.size()).toBe(1);
  });

  describe('POP', () => {
    // 스택이 텅텅 비어있을 때, 계속 pop 하면 ?
    it('스택이 비어있을때, pop 호출하면 에러를 던진다.', () => {
      expect(() => {
        stack.pop();
      }).toThrow('Stack is empty');
    });

    it('마지막에 푸시된 아이템을 반환하고, 해당 아이템을 스택에서 제거한다.', () => {
      stack.push('🍌');
      stack.push('🍎');
      expect(stack.pop()).toBe('🍎');
      expect(stack.size()).toBe(1);
    });
  });

  describe('PEEK', () => {
    it('스택이 비어있을때, peek 호출하면 에러를 던진다.', () => {
      expect(() => {
        stack.peek();
      }).toThrow('Stack is empty');
    });

    it('peek은 마지막에 푸시된 아이템을 반환하지만, 해당 아이템을 제거하지 않는다.', () => {
      stack.push('🍌');
      stack.push('🍎');
      expect(stack.peek()).toBe('🍎');
      expect(stack.size()).toBe(2);
    });
  });
});