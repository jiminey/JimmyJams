import { connect } from 'react-redux'

import Library from '../library/library'

const mapStateToProps = ({ session }) => {

    return ({
        currentUser: session.id,

    })
}

const mapDispatchToProps = dispatch => ({

})


export default connect(mapStateToProps, mapDispatchToProps)(Library)
