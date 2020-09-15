# Changelog
<!--
	Placeholder for the next version (add instead of version-number-headline below):
	## __WORK IN PROGRESS__
-->
## 1.2.0 (2020-09-15)
* Added missing reconnect behaviour in case Ventcube is not reachable
* Added connection settings for new reconnect-behaviour
* Reworked layout ouf settings page
* (Development) Fixed mock-server connection handling and Windows integration tests
* (Development) Moved integration tests (windows, Linux, OSX) from Travis to Github Actions

## 1.1.2 (2020-09-11)
* Fixed bugs with negative function values (e.g. negative temperatures)
* (Development) Added integration testcases and Ventcube mockserver
* (Development) Improved code quality (ESLint)
* (Development) Added (release-script)[https://github.com/AlCalzone/release-script] to standartize build process

## 1.1.1
* Minor performance improvements. Improved setObject function use, limited subscribed states
 
## 1.1.0
* Multiple small fixes to fulfill ioBroker adapter requirements
* **New Option** ***Advanced Functions***: The adapter was extended to retrieve status for all known functions of Ventcube system. This includes 100+ new fields that include features of Ventcube like heating, cooling, etc.

## 1.0.1
* Bugfixes to adapter startup
* Added additional parameters to retrieval list

## 1.0.0
* Initial release
