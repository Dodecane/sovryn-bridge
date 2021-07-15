## Overview

The Arbitrary Message Bridge (AMB) allows users to transfer arbitrary data between two blockchain networks as so the data could be interpreted as an arbitrary contract method invocation.

## Structure

| Sub-repository | Description |
| --- | --- |
| [Oracle](oracle/README.md) | Oracle responsible for listening to bridge related events and authorizing message relaying. |
| [Deployment](deployment/README.md) | Ansible playbooks for deploying cross-chain bridges. |
| [Oracle-E2E](oracle-e2e/README.md) | End to end tests for the Oracle |
| [Deployment-E2E](deployment-e2e/README.md) | End to end tests for the Deployment |
| [Commons](commons/README.md) | Interfaces, constants and utilities shared between the sub-repositories |
| [E2E-Commons](e2e-commons/README.md) | Common utilities and configuration used in end to end tests |
| [ALM](alm/README.md) | DApp interface tool for AMB Live Monitoring |

## Initializing the repository

Clone the repository.

If there is no need to build docker images for the AMB components (oracle, monitor), initialize submodules, install dependencies, compile the Smart Contracts:
```
yarn initialize
```

Then refer to the corresponding README files to get information about particular AMB component.

## Linting

Running linter for all JS projects:

```
yarn lint
```

## Tests

Running tests for all projects:

```
yarn test
```

Additionally there are end-to-end tests for [Oracle](oracle-e2e/README.md) and [Monitor](monitor-e2e/README.md).

For details on building, running and developing please refer to respective READMEs in sub-repositories.

## Building, running and deploying

Please refer to the instructions in sub-directories.
Configuration details are available [here](./CONFIGURATION.md).