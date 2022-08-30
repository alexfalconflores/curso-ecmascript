const regex = /(\d{4})-(\d{2})-(\d{2})/; // date format: yyyy-mm-dd

const matchers = regex.exec('2018-01-01');
console.table(matchers);