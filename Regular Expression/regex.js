/**
 * For each of the following items, write a regular expression to test whether any
    of the given substrings occur in a string. The regular expression should match
    only strings containing one of the substrings described.
 */

// car and cat
console.log(/\bcar?t?\b/.test('car and cat'))

// pop and prop
console.log(/\bpr?op\b/.test('pop and prop'))

// ferret, ferry and ferrari
console.log(/\b[^ferr]+\b/.test('ferret, ferry, ferrari'))

// Any word ending in ious
console.log(/[ious]\b/.test('areious v'))

// A whitespace character followed by a period, comma, colon, or semicolon
console.log(/\s[.,:;]/.test(' cghz .'))

// A word longer than six letters
console.log(/\w{6}/.test('fdgdsd'))

// A word without the letter e (or E)
console.log(/\b[^\We]+\b/i.test('hgdeg'))
