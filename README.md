# crate-pricing-calculator

Hello and welcome to the CrateDB Cloud Frontend Engineer coding take-home coding exercise.

You are looking at a very basic bootstrapped React application that mimics a feature of the
actual CrateDB Cloud console - the ability to display pricing information for a CrateDB
cluster based on the parameters the the user selects. 

The user is able to select a cloud region, the name of the product (which is basically a CPU+RAM combo)
and the number of nodes that the cluster should be deployed with. 

## Starting

```shell
$ git clone ...
# If you don't use nvm you can skip this part, but make sure you use node v20.
$ nvm use
$ npm install
$ npm start
```

## The challenge

This simple application has a single component - the `DeployPage`. The component has the HTML
already written for you. It takes the following parameters:

- A list of regions
- A list of products
- A value for the max cluster size
- An object containing pricing information for products based on regions.

Your job is to implement the logic that would calculate the correct price based on what the user has selected.
Some products have region-specific prices and some do not - in which case they use the default price for that product. 

### Acceptance Criteria

- The component shows the default price for products that do not have a region specific price
- The component shows region specific prices for products that do have them
- Changing the number of nodes adjusts the price accordingly (i.e. 3x nodes = 3x the price)

### Non-functional requirements

- Unit tests for the code are implemented
- The linter is run before the code is submitted (`npm run lint -- --fix`)

## How to submit 

Please take a `git diff` of all your changes and send them to us in a Github Gist (private).

Please **do not** open pull requests against this repo. Doing so will immediately invalidate your
assignment. Sorry.