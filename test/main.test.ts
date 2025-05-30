import { describe, it, expect } from 'vitest'
import test from '../'

describe('HelloTest', () => {
    it('works', () => {
        expect(test).toBe('HelloWorld')
    })
})   