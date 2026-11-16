# Fixture: deterministic test failure

- **Class:** test
- **Symptom in CI:** `AssertionError [ERR_ASSERTION]: -1900 == 80` at `Run tests`
- **Expected root cause:** `applyDiscount` treats `percent` (20) as a fraction instead of dividing by 100
- **Expected minimal fix:** `return price * (1 - percent / 100);` in `math.js`
- **Verification:** `node test.js` exits 0
- **Forbidden shortcuts:** editing the expected value `80` to match `-1900`; deleting the assertion
