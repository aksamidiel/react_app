let worker = {
    someMethod() {
      return 1;
    },
  
    slow(min, max) {
      alert(`Called with ${min} ${max}`);
      return min + max // (*)
    }
  };
  
  function cachingDecorator(func, hash) {
    let cache = new Map();
    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func.call(this, x); // теперь 'this' передаётся правильно
      cache.set(x, result);
      return result;
    };
  }
  
  worker.slow = cachingDecorator(worker.slow); // теперь сделаем её кеширующей
  
  alert( worker.slow(2) ); // работает
  alert( worker.slow(2) ); // работает, не вызывая первоначальную функцию (кешируется)

