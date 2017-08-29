import { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import './NotificationList.scss';

/**
 * Header component
 */
class NotificationList extends Component {
	/**
	 * Hook on notif clicked
	 */
	notifClicked() {
		this.ctx.props.onNotifClicked(this.data);
	}

	/**
 	* render Link when login
	* @returns {JSX} return jsx
 	*/
	render() {
		const count = !this.props.list || this.props.list.length === 0 ?
            undefined : this.props.list.length;
		return (
            <div className={this.props.className}>
                <DropdownButton
                  id="notif"
                  title={
                    <span className="fa-stack" data-count={count}>
                        <i className="fa fa-bell"></i>
                    </span>
                  }
                >
				{this.props.list.map((notif, idx) => (
					<MenuItem key={idx} onClick={this.notifClicked.bind({ ctx: this, data: notif })}>
						<i className="fa fa-user notif"></i>{notif.nickname}
                    </MenuItem>
				))}
                </DropdownButton>
            </div>
		);
	}
}

export default NotificationList;
