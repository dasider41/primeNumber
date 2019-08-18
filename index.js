const minPrime = 2;
const maxNumber = 100;

const isPrime = n => {
  for (i = minPrime; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const primes = max => {
  let data = [];
  for (n = minPrime; n <= max; n++) {
    if (isPrime(n)) {
      data.push(n);
    }
  }
  return data;
};

console.log(primes(maxNumber));
