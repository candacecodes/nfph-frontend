export default function organizationReducer(state = [], action) {
    switch (action.type){
        case 'FETCH_ORGANIZATIONS':
            return action.organizations
        default:
            return state
    }
}