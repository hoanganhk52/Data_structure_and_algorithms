const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = array[i];
        let min_index = i;
        for (let j = i + 1; j < array.length; j++) {
            if(min > array[j]) {
                min = array[j];
                min_index = j;
            }
        }
        array[min_index] = array[i];
        array[i] = min;

        console.log(array);
    }
}

selectionSort(numbers);