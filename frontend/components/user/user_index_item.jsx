import React from 'react';
import { Link } from 'react-router-dom'


class UserIndexItem extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <div className="user_index">

                    <div>
                        <Link to={`/users/${this.props.user.id}`}>
                            <img className='user-splash' src={this.props.user.photoUrl} />
                        </Link>
                    </div>

                    <div>
                        {this.props.user.username.slice(0, 16)}
                    </div>

                </div>
            </div>
        );
    }
}

export default UserIndexItem;
