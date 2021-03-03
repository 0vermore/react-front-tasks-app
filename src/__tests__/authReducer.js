import authReducer from '../reducers/authReducer'
import * as types from '../actions/actionTypes'

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(authReducer(undefined, {})).toEqual([])
    })

    it('should handle AUTHENTICATE', () => {
        expect(
            authReducer([], {
                type: types.AUTHENTICATED,
                authenticated: true
            })
        ).toEqual(
            {
                authenticated: true
            }
        )
    })

    it('should handle UnAUTHENTICATE', () => {
        expect(
            authReducer([],{
                type: types.UnAUTHENTICATED,
                authenticated: false,
                error: types.error
            })
        ).toEqual(
            {
                state: [],
                authenticated: false,
                error: types.error
            }
        )
    })
})