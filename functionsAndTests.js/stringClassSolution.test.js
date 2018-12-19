require("./stringClassSolutions")

describe('test for Vowels', () => {
    test("string that contain vowels", () => {
        expect('kaze-m'.hasVowels()).toBeTruthy()
    })
    
    test("string that contain no vowels", () => {
        expect('jdtddg'.hasVowels()).toBeFalsy()
    })

    test("string that contain only numbers", () => {
        expect('123456'.hasVowels()).toBeFalsy()
    })

    test("string that contain only special characters", () => {
        expect('jdtddg'.hasVowels()).toBeFalsy()
    })

})

describe('test for toUpper', () => {
    test('string that is completely lowercase', () => {
        expect('mercedes'.toUpper()).toBe('MERCEDES')
    })

    test('string that is completely uppercase', () => {
        expect('MANG0'.toUpper()).toBe('MANGO')
    })

    test('string that contain mixture of upper and lower', () => {
        expect('caPiTulate'.toUpper()).toBe('CAPITULATE')
    })

    test('string that contain lower at the beginning and upper at the end', () => {
        expect('casti-GATE'.toUpper()).toBe('CASTI-GATE')
    })

})

describe('test for toLower', () => {
    test('string that is completely uppercase', () => {
        expect('MERCEDES'.toLower()).toBe('mercedes')
    })

    test('string that is completely uppercase', () => {
        expect('MANG0'.toLower()).toBe('mango')
    })

    test('string that contain mixture of upper and lower', () => {
        expect('CApiTuLAtE'.toLower()).toBe('capitulate')
    })

    test('string that contain upper at the beginning and lower at the end', () => {
        expect('CASTI-gate'.toLower()).toBe('casti-gate')
    })

})