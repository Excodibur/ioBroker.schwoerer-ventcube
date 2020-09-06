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
| `test:ts`   | Executes the tests you defined in `*.test.ts` files.     |
| `test:package`    | Ensures your `package.json` and `io-package.json` are valid. |
| `test:unit`       | Tests the adapter startup with unit tests (fast, but might require module mocks to work). |
| `test:integration`| Tests the adapter startup with an actual instance of ioBroker. |
| `test` | Performs a minimal test run on package files and your tests. |
| `lint` | Runs `ESLint` to check your code for formatting errors and potential bugs. |

### Writing tests
When done right, testing code is invaluable, because it gives you the 
confidence to change your code while knowing exactly if and when 
something breaks. A good read on the topic of test-driven development 
is https://hackernoon.com/introduction-to-test-driven-development-tdd-61a13bc92d92. 
Although writing tests before the code might seem strange at first, but it has very 
clear upsides.

The template provides you with basic tests for the adapter startup and package files.
It is recommended that you add your own tests into the mix.

### Publishing the adapter
To get your adapter released in ioBroker, please refer to the documentation 
of [ioBroker.repositories](https://github.com/ioBroker/ioBroker.repositories#requirements-for-adapter-to-get-added-to-the-latest-repository).

### Test the adapter manually on a local ioBroker installation
In order to install the adapter locally without publishing, the following steps are recommended:
1. Create a tarball from your dev directory:  
	```bash
	npm pack
	```
1. Upload the resulting file to your ioBroker host
1. Install it locally (The paths are different on Windows):
	```bash
	cd /opt/iobroker
	npm i /path/to/tarball.tgz
	```

For later updates, the above procedure is not necessary. Just do the following:
1. Overwrite the changed files in the adapter directory (`/opt/iobroker/node_modules/iobroker.schwoerer-ventcube`)
1. Execute `iobroker upload schwoerer-ventcube` on the ioBroker host
