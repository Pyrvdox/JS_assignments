function firstFunc() {
  const someInt = 1;

  function secondFunc() {
    console.log(someInt);

    const otherInt = 3;//bo jest w funkcji wyzej, i tamte nie maja dostepu do tego co jest w tej
  }

  secondFunc();

  console.log(otherInt);
}

firstFunc();