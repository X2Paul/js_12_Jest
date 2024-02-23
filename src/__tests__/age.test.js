import { ageClassification } from "../main.js";

describe("ageClassification", () => {
    test("age -1 returns null", () => {
        expect(ageClassification(-1)).toBeNull();
    });
    test("age 1 returns детский возраст", () => {
        expect(ageClassification(1)).toBe("детский возраст");
    });
    test("age 24 returns детский возраст", () => {
        expect(ageClassification(24)).toBe("детский возраст");
    });
    test("age 24.01 returns молодой возраст", () => {
        expect(ageClassification(24.01)).toBe("молодой возраст");
    });
    test("age 44 returns молодой возраст", () => {
        expect(ageClassification(44)).toBe("молодой возраст");
    });
    test("age 44.01 returns средний возраст", () => {
        expect(ageClassification(44.01)).toBe("средний возраст");
    });
    test("age 65 returns средний возраст", () => {
        expect(ageClassification(65)).toBe("средний возраст");
    });
    test("age 65.1 returns пожилой возраст", () => {
        expect(ageClassification(65.1)).toBe("пожилой возраст");
    });
    test("age 75 returns пожилой возраст", () => {
        expect(ageClassification(75)).toBe("пожилой возраст");
    });
    test("age 75.01 returns старческий возраст", () => {
        expect(ageClassification(75.01)).toBe("старческий возраст");
    });
    test("age 90 returns старческий возраст", () => {
        expect(ageClassification(90)).toBe("старческий возраст");
    });
    test("age 90.01 returns долгожители", () => {
        expect(ageClassification(90.01)).toBe("долгожители");
    });
    test("age 122 returns долгожители", () => {
        expect(ageClassification(122)).toBe("долгожители");
    });
})