## Developer manual
This section is intended for the developer.

### Modifying adapter code
**Never** change any JS-files in ***build***-folder manually. Always perform modifications on TypeScript (.ts) files in src folder and run `npm run build` command to regenarte JS files. The ***build***-folder was only added to the repository files to satisfy some checks made by [https://github.com/ioBroker/ioBroker.repochecker].

### Scripts in `package.json`
Several npm scripts are predefined for your convenience. You can run them using `npm run <scriptname>`
| Script name | Description                                              |
|-------------|----------------------------------------------------------|
| `build`    | Re-compile the TypeScript sources.                       |
| `watch`     | Re-compile the TypeScript sources and watch for changes. |
| `mockserver` | Start a Ventcube (Modbus) mock-server on localhost:502 |
| `test:ts`   | Executes the tests you defined in `*.test.ts` files.     |
| `test:package`    | Ensures your `package.json` and `io-package.json` are valid. |
| `test:unit`       | Tests the adapter startup with unit tests (fast, but might require module mocks to work). |
| `test:integration`| Tests the adapter startup with an actual instance of ioBroker. |
| `test:integration:complete` | Starts a **Ventcube mockserver** and runs integration tests against it.
| `test` | Performs a minimal test run on package files and your tests. |
| `lint` | Runs `ESLint` to check your code for formatting errors and potential bugs. |

### Tests

#### Unit Tests
At the moment there are no real unit tests for this adapter

#### Integration Tests

##### Mockserver
The adapter comes with a Ventcube (Modbus) mock-server that can be started via `npm run mockserver`. On each start the adapter generates a set of dummy values (within the ranges supported by Ventcube) and writes the current value-list to a textfile that can be used as basis for comparison in the integration tests.

The mock-server also supports write requests (to registers), but it won't check if the values are supported by Ventcube. This is due to limitations of the Modbus server concept. If a value is updated, the server also upates the textfile.

##### Testcases
Currently the most basic scenarios are checked. This includes:
- Start of the adapter and successful connection to mock
- Check if the adapter is able to retrieve data from server
- Check if the adapter is able to udpate data on the server

