function getArrayParams(...arr) {
  if(!arr.length) {
    return 0;
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const summ = arr.reduce((prev, current) => prev + current);
  const avg = Number((summ / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if(!arr.length) {
    return 0;
  }

  return arr.reduce((prev, current) => prev + current);
}

function differenceMaxMinWorker(...arr) {
  if(!arr.length) {
    return 0;
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if(!arr.length) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  arr.forEach(elem => {
    if(elem % 2 === 0) {
      sumEvenElement += elem;
    } else {
      sumOddElement += elem;
    }
  });

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(!arr.length) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  arr.forEach(elem => {
    if(elem % 2 === 0) {
      sumEvenElement += elem;
      countEvenElement++;
    }
  });

  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  arrOfArr.forEach(arr => {
    const funcWorkResult = func(...arr);

    if(funcWorkResult > maxWorkerResult) {
      maxWorkerResult = funcWorkResult;
    }
  });

  return maxWorkerResult;
}
