import loglevel from 'loglevel';

/**
 * Return the logger level depending on the current environment.
 * @param {String} env - The current environment.
 * @return {loglevel.levels} The level for the logger.
 */
function getLoggerLevel(env) {
	if (env === 'development') {
		return loglevel.levels.TRACE;
	} else if (env === 'beta') {
		return loglevel.levels.ERROR;
	}
	return loglevel.levels.SILENT;
}

const env = process.env.NODE_ENV;

window.logger = loglevel;
logger.setLevel(getLoggerLevel(env));
