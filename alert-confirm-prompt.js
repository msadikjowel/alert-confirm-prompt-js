const picnic = () => {
    const response = confirm('Are you going with us?');
    if (response) {
        prompt('Give me money for picnic cost');
    }
    else {
        alert('Sleep in house');
    }
}