![Logo](admin/schwoerer-ventcube.png)
# ioBroker.schwoerer-ventcube

[![NPM version](http://img.shields.io/npm/v/iobroker.schwoerer-ventcube.svg)](https://www.npmjs.com/package/iobroker.schwoerer-ventcube)
[![Downloads](https://img.shields.io/npm/dm/iobroker.schwoerer-ventcube.svg)](https://www.npmjs.com/package/iobroker.schwoerer-ventcube)
![Number of Installations (latest)](http://iobroker.live/badges/schwoerer-ventcube-installed.svg)
![Number of Installations (stable)](http://iobroker.live/badges/schwoerer-ventcube-stable.svg)
[![Dependency Status](https://img.shields.io/david/Excodibur/iobroker.schwoerer-ventcube.svg)](https://david-dm.org/Excodibur/iobroker.schwoerer-ventcube)
[![Known Vulnerabilities](https://snyk.io/test/github/Excodibur/ioBroker.schwoerer-ventcube/badge.svg)](https://snyk.io/test/github/Excodibur/ioBroker.schwoerer-ventcube)
[![Travis-CI](http://img.shields.io/travis/excodibur/ioBroker.schwoerer-ventcube/master.svg)](https://travis-ci.org/Excodibur/ioBroker.schwoerer-ventcube)

[![NPM](https://nodei.co/npm/iobroker.schwoerer-ventcube.png?downloads=true)](https://nodei.co/npm/iobroker.schwoerer-ventcube/)

## schwoerer-ventcube adapter for ioBroker

Adapter for Schwoererhaus Ventcube system. More information about Ventcube Fresh can be found [here](https://www.bauinfocenter.de/lueftung/lueftungsanlagen/).

**Disclaimer**: This adapter is neither developed nor officially supported by the company [Schwoererhaus KG](https://www.schwoererhaus.de/) which distributes the Ventcube systems. Instructions should be followed with care and at your own risk.

### Preconditions
In order to access the network-interface of Ventcube the following (known) preconditions need to be met:
- The Ventcube needs to be connected to you internal network (usually via standard RJ45-cable)
- Modbus TCP interface needs to be supported (Control-Panel: >= V1.05, VentCube: >= V02.11) and usally has to be enabled manually first
    * On Control Panel login to "Service" section (use standard password from docs)
	* In Basic Settings check that Network Connection is established and "9. Network Interface" and "10. Modbus TCP" are both active.
	* If the last two settings are not active, activate them and restart the Ventcube (e.g. by cutting the power temporarily)

### Configuration parameters
Depending on the building-specific Ventcube setup not all parameters that can be retrieved from or changed via the Ventcube interface will be used. Each parameter in the "parameters" folder goes side-by-side with an entry in the "lastUpdate" folder that indicates the last fetch timestamp for each parameter.

All parameters mentioned in the specification referenced below were added to the adapter and can be accessed via ***Advanced Functions*** option that is configurable during adapter deployment. Enabling this option will cause the adapter to periodically retrieve data for 100+ parameters, of which most might not be used in common households. Test scope was limited to ***Basic Functions*** (enabled by default).

#### Most interesting parameters
- Betriebsart, changeable
- Stoßlüftung (30 minute level 4 air burst), changeable
- Ist Temp Raum 1 (temperature inside house)
- T10 Außentemperator

### Reference system
The ioBroker adapter was tested sucessfully with:

| Control Panel | Ventcube | Modbus specification              |
|---------------|----------|-----------------------------------|
| V01.10        | V02.26   | Parameterliste_Modbus_TCP_03.2020 |

## Changelog

### 1.1.0
* (Excodibur) Multiple small fixes to fulfill ioBroker adapter requirements
* (Excodibur) **New Option** ***Advanced Functions***: The adapter was extended to retrieve status for all known functions of Ventcube system. This includes 100+ new fields that include features of Ventcube like heating, cooling, etc.

### 1.0.1
* (Excodibur) Bugfixes to adapter startup
* (Excodibur) Added additional parameters to retrieval list

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