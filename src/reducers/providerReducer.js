export default function providerReducer(state = {}, action) {
    switch (action.type){
        case 'PROVIDER_LOGGED_IN':
            return {providerInfo: action.provider, token: action.token}
        case 'UPDATED_PROVIDER':
            return {providerInfo: action.provider}
        case 'DELETE_PROVIDER':
            return {}
        default:
            return state
    }
}