const spoon = {
    isExist: true
  }
  
  const fork = spoon;
  fork.isExist  = false;
  
  console.log(fork); //nie