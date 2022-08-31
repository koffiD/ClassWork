describe("value testing", () => {
    test("strings are string", () => {
      expect("Hello World").toBe("Hello World");
      expect(stringCheck("string")).toBeTruthy();
      expect(stringCheck("it's gonna be the same with quotes around it")).toBeTruthy();
      expect(stringCheck(200)).toBeFalsy();
    });
    test("numbers are numbers", () => {
      expect(3.14159).toBe(3.14159);
      expect(numberCheck(7.3)).toBeTruthy();
      expect(numberCheck(5 * 20)).toBeTruthy();
      expect(numberCheck("string")).toBeFalsy();
    });
    test("booleans are booleans", () => {
      expect(false).toBe(false);
      expect(booleanCheck(true)).toBeTruthy();
      expect(booleanCheck(false)).toBeTruthy();
      expect(booleanCheck(3.14159)).toBeFalsy();
    });
  });

  function numberCheck(x) {
    return typeof x == "number";
  }
  function stringCheck(x) {
    return typeof x == "string";
  }
  function booleanCheck(x) {
    return typeof x == "boolean";
  }