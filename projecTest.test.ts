import {describe,it} from "@jest/globals"
 
     describe("testing math", () => {
      it ("should do some simple math", () => {
    expect(10).toBeLessThan(100)
    expect(100).toBeGreaterThan(10)
     expect (10).not.toEqual(100)
      expect(10 === 10).toBe(true)
