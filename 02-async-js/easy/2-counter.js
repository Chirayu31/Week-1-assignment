function counter(n) {
    let count = 1;

    function printCount() {
        console.clear();
        console.log(count);
        count++;

        if (count <= n) {
            setTimeout(printCount, 1000);
        }
    }

    printCount();
}

counter(10)