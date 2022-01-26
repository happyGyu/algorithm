function saveThePrisoner(n, m, s) {
    const remain = (m % n + s - 1) % n;
    return remain === 0? n : remain;
}