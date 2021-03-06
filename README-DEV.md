## Developer manual
This section is intended for the developer.

### Modifying adapter code
**Never** change any JS-files in ***build***-folder manually. Always perform modifications on TypeScript (.ts) files in src folder and run `npm run build` command to regenerate JS files. The ***build***-folder was only commited to the repository to satisfy some checks made by https://github.com/ioBroker/ioBroker.repochecker.

### Scripts in `package.json`
Several npm scripts are predefined for your convenience. You can run them using `npm run <scriptname>`
| Script name                     | Description                                                                               |
|---------------------------------|-------------------------------------------------------------------------------------------|
| `build`                         | Re-compile the TypeScript sources.                                                        |
| `build:lang`                    | Build language files to admin/i18n from words.js                                          |
| `watch`                         | Re-compile the TypeScript sources and watch for changes.                                  |
| `mockserver`                    | Start a Ventcube (Modbus) mock-server on localhost:10502                                  |
| `test:ts`                       | Executes the tests you defined in `*.test.ts` files.                                      |
| `test:package`                  | Ensures your `package.json` and `io-package.json` are valid.                              |
| `test:unit`                     | Tests the adapter startup with unit tests (fast, but might require module mocks to work). |
| `test:integration`              | Tests the adapter startup with an actual instance of ioBroker.                            |
| `test:integration:mock`         | Starts `mockserver` in background (only on Linux & OSX)                                   |
| `test:integration:mock-win`     | Starts `mockserver` in background (only on Windows)                                       |
| `test:integration:complete`     | Starts a **Ventcube mockserver** and runs integration tests against it. (Linux & OSX)     |
| `test:integration:complete-win` | Starts a **Ventcube mockserver** and runs integration tests against it. (Windows)         |
| `test`                          | Performs a minimal test run on package files and your tests.                              |
| `lint`                          | Runs `ESLint` to check your code for formatting errors and potential bugs.                |

### Tests

#### Unit Tests
At the moment there are no real unit tests for this adapter

#### Integration Tests
The fully automated integration test (`test:integration:complete`) currently works on Linux and OSX. Btw. if integration tests are run on WSL, the mock-server needs to be stopped manually (E.g. `pkill -f mockserver`) at the end, since ***fkill-cli*** won't work here due to missing proc-table support.

Unfortunately, on Windows background-processes are started differently, so `test-integration:complete-win` needs to be used. This seems (sometimes) bugged, as there are internal connection errors after first testcase (see https://github.com/ioBroker/testing/issues/330).

##### Mockserver
The adapter comes with a Ventcube (Modbus) mock-server that can be started via `npm run mockserver`. Upon each start the adapter generates a set of dummy values (within the ranges supported by Ventcube) and writes the current value-list to a textfile that can be used as basis for comparison in the integration tests.

The mock-server also supports write requests (to registers), but it won't check if the values are supported by Ventcube. This is due to limitations of the Modbus server concept. If a value is updated, the server also upates the textfile.

##### Testcases
Currently the most basic scenarios are checked. This includes:
- Start of the adapter and successful connection to mock
- Check if the adapter is able to retrieve data from server
- Check if the adapter is able to udpate data on the server

