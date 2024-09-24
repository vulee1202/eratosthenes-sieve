class EratosthenesSieve {
    #maxNum;
    #primes;

    constructor(maxNum) {
        this.#maxNum = maxNum;
        this.#sieve(maxNum);
    }

    get primes() {
        const primes = this.#primes.reduce((primes, isPrime, index) => {
            if (isPrime) {
                primes.push(index);
            }
            return primes;
        }, []);

        return primes;
    }

    isPrime(index) {
        if (index > this.#maxNum) this.#sieve(index);
        return this.#primes[index];
    }

    #sieve(maxNum) {
        this.#primes = new Array(maxNum + 1).fill(true);
        this.#primes[0] = this.#primes[1] = false;
        for (let i = 2; i <= Math.sqrt(maxNum); i++) {
            if (this.#primes[i]) {
                for (let j = i * i; j <= maxNum; j += i) {
                    this.#primes[j] = false;
                }
            }
        }
    }
}

export default (maxNum) => new EratosthenesSieve(maxNum);
