
# GitHub Labels Action

GitHub Action to sync a repo's issue labels with my standard set. This is intended for use in @rowanmanning's repos, feel free to use it but I'm not changing anything to suit your need :grin:


## Table of Contents

  * [Usage](#usage)
  * [Labels](#labels)
  * [Contributing](#contributing)
  * [License](#license)


## Usage

To use this action, create the following file in your GitHub repo:

```
.github/workflows/sync-repo-labels.yml
```

```yml
on: [issues, pull_request]
name: Sync repo labels
jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: rowanmanning/github-labels@v1
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
```

You can do this by running the following command from a repo:

```bash
mkdir -p .github/workflows && curl https://raw.githubusercontent.com/rowanmanning/github-labels/v1/example.yml --output .github/workflows/sync-repo-labels.yml
```


## Labels

You can find the labels in [`./labels.js`](labels.js).


## Contributing

To contribute to this action, clone this repo locally and commit your code on a separate branch. If changes are not breaking, merge them into the `v1` branch and they'll be picked up by every repo running `v1` automatically.

Please run the linter before opening a pull-request:

```sh
make verify
```


## License

Licensed under the [MIT](LICENSE) license.<br/>
Copyright &copy; 2020, Rowan Manning
