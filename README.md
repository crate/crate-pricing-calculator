# crate-pricing-calculator

Hello and welcome to the CrateDB Cloud Frontend Engineer take-home coding exercise.

You are looking at a very basic bootstrapped React application that mimics a feature of the
actual CrateDB Cloud console - the ability to display pricing information for a CrateDB
cluster configuration based on the parameters that the user selects. 

The user is able to select a cloud region, the name of the product (which is basically a CPU+RAM combo)
and the number of nodes that the cluster should be deployed with. 

## Getting started

```shell
$ git clone ...
# If you don't use nvm you can skip this part, but make sure you use node v20.
$ nvm use
$ npm install
$ npm start
```

## The challenge

This simple application has a single component - the `DeployPage`. The component has the HTML and CSS already written for you. It takes the following parameters:

- A list of regions
- A list of products
- An object containing pricing information for products based on regions.
- An `onSubmit` handler (you won't need to change this)

Your job is twofold
- Implement logic to calculate and display the correct price based on the region, product and nodes combination that the user has selected. (hint: the prices passed to the DeployPage component are per-node prices)
- Develop a Testing Library test suite to test that the correct prices are being calculated.

> [!NOTE]  
> Some products have region-specific prices and some do not - in which case they should use the default price for that product.

### Acceptance Criteria

- The Deploy Page shows the default price for products that do not have a region-specific price
- The Deploy Page shows region-specific prices for products that do have them
- Changing the number of nodes adjusts the price accordingly (i.e. 3x nodes = 3x the price)
- The number of nodes can only be adjusted to the maximum that is defined for that product

### Non-functional requirements

- Testing Library component tests for the code are implemented (`npm test`)
- The linter is run before the code is submitted (`npm run lint -- --fix`)

## How to submit 

Please take a `git diff` of all your changes and send them to us in a GitHub Gist (private) or by email.

Please **do not** open pull requests against this repo. Doing so will immediately invalidate your
assignment. Sorry.

:zap: Good luck with your solution, we look forward to seeing it.