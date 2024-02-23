import { weekFn } from "../main.js";

describe("weekFn", () => {
    test("weekFn(1) returns 'Понедельник'", () => {
        expect(weekFn(1)).toBe("Понедельник");
    });
    test("weekFn(2) returns 'Вторник'", () => {
        expect(weekFn(2)).toBe("Вторник");
    });
    test("weekFn(3) returns 'Среда'", () => {
        expect(weekFn(3)).toBe("Среда");
    });
    test("weekFn(4) returns 'Четверг'", () => {
        expect(weekFn(4)).toBe("Четверг");
    });
    test("weekFn(5) returns 'Пятница'", () => {
        expect(weekFn(5)).toBe("Пятница");
    });
    test("weekFn(6) returns 'Суббота'", () => {
        expect(weekFn(6)).toBe("Суббота");
    });
    test("weekFn(7) returns 'Воскресенье'", () => {
        expect(weekFn(7)).toBe("Воскресенье");
    });
    test("weekFn(9) returns null", () => {
        expect(weekFn(9)).toBeNull();
    });
})

