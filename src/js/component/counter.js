import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";

export const SimpleCounter = props => {
	return (
		<div className="d-flex inline-block counter">
			<div className="digit">
				<div className=" faClock">
					<FontAwesomeIcon icon={faClock} />{" "}
				</div>
			</div>

			<div className="digit">{props.four}</div>
			<div className="digit">{props.three}</div>
			<div className="digit">{props.two}</div>
			<div className="digit">{props.one}</div>
		</div>
	);
};
SimpleCounter.defaultProps = {
	one: 0,
	two: 0,
	three: 0,
	four: 0
};
SimpleCounter.propTypes = {
	one: PropTypes.number,
	two: PropTypes.number,
	three: PropTypes.number,
	four: PropTypes.number
};
