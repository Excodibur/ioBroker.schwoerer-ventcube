![Logo](admin/schwoerer-ventcube.png)
# ioBroker.schwoerer-ventcube

[![NPM version](http://img.shields.io/npm/v/iobroker.schwoerer-ventcube.svg)](https://www.npmjs.com/package/iobroker.schwoerer-ventcube)
[![Downloads](https://img.shields.io/npm/dm/iobroker.schwoerer-ventcube.svg)](https://www.npmjs.com/package/iobroker.schwoerer-ventcube)
![Number of Installations (latest)](http://iobroker.live/badges/schwoerer-ventcube-installed.svg)
![Number of Installations (stable)](http://iobroker.live/badges/schwoerer-ventcube-stable.svg)
[![Dependency Status](https://img.shields.io/david/Excodibur/iobroker.schwoerer-ventcube.svg)](https://david-dm.org/Excodibur/iobroker.schwoerer-ventcube)
[![Known Vulnerabilities](https://snyk.io/test/github/Excodibur/ioBroker.schwoerer-ventcube/badge.svg)](https://snyk.io/test/github/Excodibur/ioBroker.schwoerer-ventcube)

[![NPM](https://nodei.co/npm/iobroker.schwoerer-ventcube.png?downloads=true)](https://nodei.co/npm/iobroker.schwoerer-ventcube/)

## schwoerer-ventcube adapter for ioBroker

Adapter for Schwoererhaus Ventcube system. More information about Ventcube Fresh can be found [here](https://www.bauinfocenter.de/lueftung/lueftungsanlagen/).

Disclaimer: This adapter is neither developed nor officially supported by the company [Schwoererhaus KG](https://www.schwoererhaus.de/) which distributes the Ventcube systems. Instructions should be followed with care and at your own risk.

### Preconditions
In order to access the network-interface of Ventcube the following (known) preconditions need to be met:
- The Ventcube needs to be connected to you internal network (usually via standard RJ45-cable)
- Modbus TCP interface needs to be supported (Control-Panel: >= V1.05, VentCube: >= V02.11) and usally has to be enabled manually first
    * On Control Panel login to "Service" section (use standard password from docs)
	* In Basic Settings check that Network Connection is established and "9. Network Interface" and "10. Modbus TCP" are both active.
	* If the last two settings are not active, activate them and restart the Ventcube (e.g. by cutting the power temporarily)

### Configuration parameters
Depending on the building-specific Ventcube setup not all parameters that can be retrieved from or changed via the Ventcube interface will be used. Each parameter in the "parameters" folder goes side-by-side with an entry in the "lastUpdate" folder that indicates the last fetch timestamp for each parameter.

Currently not all parameters that can be retrieved by the Ventcube interface are provided by the adapter due to limited information regarding their purpose. They might be added to the adapter in the future though.

#### Most interesting parameters
- Betriebsart, changeable
- Stoßlüftung (30 minute level 4 air burst), changeable
- Innentemperatur
- T10 Außentemperator

### Reference system
The ioBroker adapter was tested sucessfully with:

| Control Panel | Ventcube | Modbus specification              |
|---------------|----------|-----------------------------------|
| V01.10        | V02.26   | Parameterliste_Modbus_TCP_03.2020 |

## Developer manual
This section is intended for the developer. It can be deleted later

### Best Practices
We've collected some [best practices](https://github.com/ioBroker/ioBroker.repositories#development-and-coding-best-practices) regarding ioBroker development and coding in general. If you're new to ioBroker or Node.js, you should
check them out. If you're already experienced, you should also take a look at them - you might learn something new :)

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

## Changelog

### 1.0.0
* (Excodibur) initial release

## License
MIT License

Copyright (c) 2020 Excodibur <excodibur@posteo.de>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.