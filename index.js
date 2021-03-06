'use strict';

const core = require('@actions/core');
const githubLabelSync = require('github-label-sync');
const labels = require('./labels');

(async () => {
	try {
		await githubLabelSync({
			accessToken: core.getInput('github-token'),
			repo: process.env.GITHUB_REPOSITORY,
			labels,
			log: {
				info: core.info,
				warn: core.warning
			}
		});
	} catch (error) {
		core.setFailed(error.message);
	}
})();
