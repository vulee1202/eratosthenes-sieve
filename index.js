import createEratosthenes from "./src/utils/EratosthenesSieve.js";

class Index {
    #sieve;
    #primes;

    constructor() {
        this.initEratosthenes(0);
    }

    get primes() {
        if (!this.#primes) {
            this.#primes = this.#sieve.primes;
        }
        return this.#primes;
    }

    isPrime = (number) => {
        return this.#sieve.isPrime(number);
    };

    initEratosthenes = (maxNum) => {
        const sieve = createEratosthenes(maxNum);
        this.#sieve = sieve;
    };
}

const index = new Index();
index.initEratosthenes(10);
console.log(index.isPrime(20));
