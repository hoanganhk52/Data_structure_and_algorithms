class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, val) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
            this.data[address].push([key, val]);
        }


    }

    get(key) {
        let address = this._hash(key);
        let currentBucket = this.data[address];

        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }

        return undefined;
    }
}

function firstRecurringCharacter(array) {
    const tmp = {};

    for(let i = 0; i < array.length; i++) {
        if (tmp[array[i]]) {
            return array[i];
        }

        tmp[array[i]] = true;
    }

    return null;
}

var test_arr = [1, 2, 3, 2, 6, 5];
console.log(firstRecurringCharacter(test_arr));