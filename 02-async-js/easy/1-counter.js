function counter(n) {
    let count = 1;

    const interval = setInterval(() => {
        console.log(count)
        count++

        if (count > n) {
            clearInterval(interval)
        }
    }, 1000)
}

counter(10)