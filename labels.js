'use strict';

// Shared colour values
const colors = {
	brightRed: 'ee3333',
	darkRed: 'ee6666',
	brightGreen: '33cc33',
	darkGreen: '449944',
	lightGrey: 'cccccc',
	brightYellow: 'ffdd00',
	brightBlue: '0077cc',
	brightPurple: '6655ff'
};

// Create and export the labels
module.exports = [
	{
		name: 'blocked',
		description: `Work is blocked by something else`,
		color: colors.darkRed,
		aliases: [
			'status: blocked'
		]
	},
	{
		name: 'breaking',
		description: `Will require a major version bump when completed or merged`,
		color: colors.darkRed,
		aliases: [
			'breaking-change',
			'type: breaking'
		]
	},
	{
		name: 'bug',
		description: `Something isn't working as expected`,
		color: colors.brightRed,
		aliases: [
			'type: bug'
		]
	},
	{
		name: 'dependencies',
		description: `Maintenance work relating to dependency bumps`,
		color: colors.brightYellow,
		aliases: []
	},
	{
		name: 'documentation',
		description: `Improvements or additions to documentation`,
		color: colors.brightBlue,
		aliases: [
			'type: documentation'
		]
	},
	{
		name: 'duplicate',
		description: `This issue or pull request already exists`,
		color: colors.lightGrey,
		aliases: [
			'status: duplicate'
		]
	},
	{
		name: 'feature',
		description: `New feature request or enhancement`,
		color: colors.brightGreen,
		aliases: [
			'enhancement',
			'type: enhancement'
		]
	},
	{
		name: 'good first issue',
		description: `Something that would be good for newcomers to pick up`,
		color: colors.brightPurple,
		aliases: [
			'beginner-friendly',
			'beginner',
			'good starter issue',
			'good-starter-issue',
			'starter-issue',
			'status: good starter issue'
		]
	},
	{
		name: 'help wanted',
		description: `We'd appreciate some help with this`,
		color: colors.darkGreen,
		aliases: [
			'status: help wanted'
		]
	},
	{
		name: 'maintenance',
		description: `Technical non-feature work that might improve the project`,
		color: colors.brightYellow,
		aliases: [
			'refactor',
			'testing',
			'test',
			'type: maintenance'
		]
	},
	{
		name: 'security',
		description: `This includes a security patch`,
		color: colors.brightRed,
		aliases: []
	},
	{
		name: 'wontfix',
		description: `This will not be worked on`,
		color: colors.lightGrey,
		aliases: [
			'status: wontfix',
			'wont-fix'
		]
	}
];
