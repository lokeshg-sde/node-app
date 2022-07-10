import { pxToRem } from ".."

test("Base Theme Helpers", () => {
  const rems = pxToRem(16)

  expect(rems).toBe('1rem')
})
