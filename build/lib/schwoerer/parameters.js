"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchwoererParameter = void 0;
exports.SchwoererParameter = {
    "operation-mode": {
        descr: "Betriebsart",
        category: "basic",
        modbus_r: 100,
        modbus_w: 100,
        value_type: "choice",
        value_def: {
            0: "Aus",
            1: "Handbetrieb",
            2: "Winterbetrieb",
            3: "Sommerbetrieb",
            4: "Sommer Abluft"
        }
    },
    "manual-fan-level": {
        descr: "Manuelle Luftstufe",
        category: "advanced",
        modbus_r: 101,
        modbus_w: 101,
        value_type: "choice",
        value_def: {
            0: "Aus",
            1: "Stufe 1",
            2: "Stufe 2",
            3: "Stufe 3",
            4: "Stufe 4",
            5: "Automatik",
            6: "Linearantrieb"
        }
    },
    "current-fan-level": {
        descr: "Aktuelle Luftstufe",
        category: "basic",
        modbus_r: 102,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "Aus",
            1: "Stufe 1",
            2: "Stufe 2",
            3: "Stufe 3",
            4: "Stufe 4"
        }
    },
    "manual-air-troughput": {
        descr: "Manuelle Lineare Luftleistung",
        category: "advanced",
        modbus_r: 103,
        modbus_w: 103,
        value_type: "range",
        value_def: {
            min: 1,
            max: 100,
            unit: "%"
        }
    },
    "manual-fan-level-override": {
        descr: "Luftstufen Überschreibung",
        category: "advanced",
        modbus_r: 104,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "timeplan-basic-fan-level": {
        descr: "Luftstufen Überschreibung",
        category: "advanced",
        modbus_r: 110,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "Aus",
            1: "Stufe 1",
            2: "Stufe 2",
            3: "Stufe 3",
            4: "Stufe 4"
        }
    },
    "shock-ventilation": {
        descr: "Stoßlüftung",
        category: "basic",
        modbus_r: 111,
        modbus_w: 111,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "shock-ventilation-remaining": {
        descr: "Restlaufzeit Stoßlüftung",
        category: "basic",
        modbus_r: 112,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: 0,
            max: 60,
            unit: "min"
        }
    },
    "state-heatpump": {
        descr: "Status Wärmepumpe",
        category: "advanced",
        modbus_r: 114,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "Aus",
            5: "WP Heizen",
            49: "WP Kühlen"
        }
    },
    "state-nhr": {
        descr: "NHR Zustand",
        category: "advanced",
        modbus_r: 116,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "state-ventilation-inlet-air": {
        descr: "Status Gebläse Zuluft",
        category: "advanced",
        modbus_r: 117,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "Deaktiviert",
            1: "Anlaufphase",
            2: "Aktiv",
            5: "Standby",
            6: "Fehler"
        }
    },
    "state-ventilation-exhaust-air": {
        descr: "Status Gebläse Abluft",
        category: "advanced",
        modbus_r: 118,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "Deaktiviert",
            1: "Anlaufphase",
            2: "Aktiv",
            5: "Standby",
            6: "Fehler"
        }
    },
    "state-ewt": {
        descr: "EWT Zustand",
        category: "advanced",
        modbus_r: 121,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "EWT aus/geschlossen",
            1: "EWT im Heizbetrieb aktiv",
            2: "EWT im Kühlbetrieb aktiv"
        }
    },
    "state-bypass": {
        descr: "Bypass Zustand",
        category: "advanced",
        modbus_r: 123,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "Bypass geschlossen",
            1: "Bypass offen (Kühlen)",
            2: "Bypass offen (Heizen)"
        }
    },
    "state-hatch-out": {
        descr: "Außenklappe Zustand",
        category: "advanced",
        modbus_r: 131,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "geschlossen",
            1: "offen"
        }
    },
    "state-vhr": {
        descr: "Vorheizregister Zustand",
        category: "advanced",
        modbus_r: 133,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "Aus",
            1: "VHR 1 aktiv",
            2: "VHR 2 aktiv",
            3: "VHR 1 & 2 aktiv"
        }
    },
    "fan-level-timeplan": {
        descr: "Luftstufe Zeitprogramm",
        category: "advanced",
        modbus_r: 140,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "Aus",
            1: "Stufe 1",
            2: "Stufe 2",
            3: "Stufe 3",
            4: "Stufe 4"
        }
    },
    "fan-level-sensors": {
        descr: "Luftstufe Zeitprogramm",
        category: "advanced",
        modbus_r: 141,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "Aus",
            1: "Stufe 1",
            2: "Stufe 2",
            3: "Stufe 3",
            4: "Stufe 4"
        }
    },
    "air-throughput-in": {
        descr: "Luftleistung aktuell Zuluft",
        category: "basic",
        modbus_r: 142,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: 0,
            max: 100,
            unit: "%"
        }
    },
    "air-throughput-out": {
        descr: "Luftleistung aktuell Abluft",
        category: "basic",
        modbus_r: 143,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: 0,
            max: 100,
            unit: "%"
        }
    },
    "current-rpm-in": {
        descr: "Aktuelle Drehzahl Zuluft",
        category: "advanced",
        modbus_r: 144,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: 0,
            max: 10000,
            unit: "rpm"
        }
    },
    "current-rpm-out": {
        descr: "Aktuelle Drehzahl Abluft",
        category: "advanced",
        modbus_r: 145,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: 0,
            max: 10000,
            unit: "rpm"
        }
    },
    "t1-after-ewt": {
        descr: "T1 nach EWT",
        category: "advanced",
        modbus_r: 200,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "t2-after-vhr": {
        descr: "T2 nach VHR",
        category: "advanced",
        modbus_r: 201,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "t3-before-ne": {
        descr: "T3 vor NE",
        category: "advanced",
        modbus_r: 202,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "t4-after-ne": {
        descr: "T4 nach NE",
        category: "advanced",
        modbus_r: 203,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "t5-exhaust": {
        descr: "T5 Abluft",
        category: "advanced",
        modbus_r: 204,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "t6-in-wt": {
        descr: "T6 im WT",
        category: "advanced",
        modbus_r: 204,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "t7-vaporizer": {
        descr: "T7 Verdampfer",
        category: "advanced",
        modbus_r: 206,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "t8-condenser": {
        descr: "T8 Kondensator",
        category: "advanced",
        modbus_r: 207,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "t10-temp-outside": {
        descr: "T10 Außentemperatur",
        category: "basic",
        modbus_r: 209,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "heating-cooling-function": {
        descr: "Heiz- Kühlfunktion",
        category: "advanced",
        modbus_r: 230,
        modbus_w: 230,
        value_type: "choice",
        value_def: {
            0: "Aus",
            1: "Heizen",
            2: "Kühlen",
            3: "Auto T-Außen",
            4: "Auto Digitaler Eingang"
        }
    },
    "heatpump-heat": {
        descr: "Wärmepumpe Heizen",
        category: "advanced",
        modbus_r: 231,
        modbus_w: 231,
        value_type: "choice",
        value_def: {
            0: "Heizen aus",
            1: "Heizen frei"
        }
    },
    "heatpump-cool": {
        descr: "Wärmepumpe Kühlen",
        category: "advanced",
        modbus_r: 232,
        modbus_w: 232,
        value_type: "choice",
        value_def: {
            0: "Kühlen aus",
            1: "Kühlen frei"
        }
    },
    "additonal-heating-house": {
        descr: "Zusatzheizung Haus",
        category: "advanced",
        modbus_r: 234,
        modbus_w: 234,
        value_type: "choice",
        value_def: {
            0: "Aus",
            1: "ZH Haus frei"
        }
    },
    "alarm-pressurecheck-active": {
        descr: "Meldung Druckwächter aktiv",
        category: "advanced",
        modbus_r: 242,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "inaktiv",
            1: "Meldung steht an"
        }
    },
    "evu-lock-active": {
        descr: "EVU Sperre aktiv",
        category: "advanced",
        modbus_r: 243,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "inaktiv",
            1: "Meldung steht an"
        }
    },
    "maint-door-open": {
        descr: "Wartungstür offen",
        category: "basic",
        modbus_r: 244,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "geschlossen",
            1: "offen"
        }
    },
    "devicefilter-polluted": {
        descr: "Gerätefilter verschmutzt",
        category: "basic",
        modbus_r: 245,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "nein",
            1: "ja"
        }
    },
    "priorfilter-polluted": {
        descr: "Vorgelagerter Filter verschmutzt",
        category: "basic",
        modbus_r: 246,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "nein",
            1: "ja"
        }
    },
    "nt-deactivated": {
        descr: "Niedertarif abgeschaltet",
        category: "advanced",
        modbus_r: 247,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "inaktiv",
            1: "Meldung steht an"
        }
    },
    "supply-voltage-off": {
        descr: "Versorgungsspannung abgeschaltet",
        category: "advanced",
        modbus_r: 248,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "inaktiv",
            1: "Meldung steht an"
        }
    },
    "pressure-switch-activated": {
        descr: "Pressostat ausgelöst",
        category: "advanced",
        modbus_r: 250,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "inaktiv",
            1: "Meldung steht an"
        }
    },
    "evu-lock-external-active": {
        descr: "EVU Sperre extern Aktiv",
        category: "advanced",
        modbus_r: 251,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "inaktiv",
            1: "Meldung steht an"
        }
    },
    "heating-module-testmode-active": {
        descr: "Heizmodul Testbetrieb aktiv",
        category: "advanced",
        modbus_r: 252,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "inaktiv",
            1: "Meldung steht an"
        }
    },
    "emergency-mode-active": {
        descr: "Notbetrieb aktiv",
        category: "advanced",
        modbus_r: 253,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "inaktiv",
            1: "Meldung steht an"
        }
    },
    "inlet-air-too-cold": {
        descr: "Zuluft zu kalt",
        category: "advanced",
        modbus_r: 254,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "inaktiv",
            1: "aktiv"
        }
    },
    "devicefilter-expiration": {
        descr: "Restlauzeit Gerätefilter",
        category: "basic",
        modbus_r: 265,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: 0,
            max: 255,
            unit: "days"
        }
    },
    "priorfilter-expiration": {
        descr: "Restlauzeit Vorgelagerter Filter",
        category: "basic",
        modbus_r: 263,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: 0,
            max: 255,
            unit: "days"
        }
    },
    "error-message": {
        descr: "Fehlermeldung",
        category: "basic",
        modbus_r: 240,
        modbus_w: -1,
        value_type: "choice",
        value_def: {
            0: "Kein Fehler",
            257: "Drehzahl Zuluf fehlt",
            258: "Drehzahl Abluft fehlt",
            259: "Ventilator Zuluft Mindestdrehzahl nicht erreicht",
            260: "Ventilator Abluft Mindestdrehzahl nicht erreicht",
            261: "Ventilator Zuluft max. Drehzahl überschritten",
            262: "Ventilator Abluft max. Drehzahl überschritten",
            513: "Kommunikationsfehler zur BDE",
            514: "Kommunikationsfehler Nebenbedieneinheit",
            515: "Kommunikationsfehler Heizmodul",
            516: "Kommunikationsfehler Sensor",
            517: "Kommunikationsfehler Sensor-Adapter",
            518: "Kommunikation Empfänger",
            770: "Fehler Sensorelement T1-nach-Ewt",
            771: "Fehler Sensorelement T2-nach-Vhr",
            772: "Fehler Sensorelement T3-vor-Nhr",
            773: "Fehler Sensorelement T4-nach-Nhr",
            774: "Fehler Sensorelement T5-Abluft",
            775: "Fehler Sensorelement T6-im-WT",
            776: "Fehler Sensorelement T7-Verdampfer",
            777: "Fehler Sensorelement T8-Kondensator",
            779: "Fehler Sensorelement T10-Außentemperatur",
            1025: "Fehler Parameterspeicher",
            1026: "Fehler System-Bus",
            1281: "Wärmepumpe Hochdruck",
            1282: "Wärmepumpe Niederdruck",
            1283: "Maximal Abtauzeit überschritten",
            1284: "Wärmepumpe Niederdruck im Kühlbetrieb"
        }
    },
    "temp-room-1": //= temp-inside?
    {
        descr: "Ist Temp Raum 1",
        category: "basic",
        modbus_r: 360,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "temp-room-2": {
        descr: "Ist Temp Raum 2",
        category: "advanced",
        modbus_r: 361,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "temp-room-3": {
        descr: "Ist Temp Raum 3",
        category: "advanced",
        modbus_r: 362,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "temp-room-4": {
        descr: "Ist Temp Raum 4",
        category: "advanced",
        modbus_r: 363,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "temp-room-5": {
        descr: "Ist Temp Raum 5",
        category: "advanced",
        modbus_r: 364,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "temp-room-6": {
        descr: "Ist Temp Raum 6",
        category: "advanced",
        modbus_r: 365,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "temp-room-7": {
        descr: "Ist Temp Raum 7",
        category: "advanced",
        modbus_r: 366,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "temp-room-8": {
        descr: "Ist Temp Raum 8",
        category: "advanced",
        modbus_r: 367,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "temp-room-9": {
        descr: "Ist Temp Raum 9",
        category: "advanced",
        modbus_r: 368,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "temp-room-10": {
        descr: "Ist Temp Raum 10",
        category: "advanced",
        modbus_r: 369,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "temp-room-11": {
        descr: "Ist Temp Raum 11",
        category: "advanced",
        modbus_r: 370,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "temp-room-12": {
        descr: "Ist Temp Raum 12",
        category: "advanced",
        modbus_r: 371,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "temp-room-13": {
        descr: "Ist Temp Raum 13",
        category: "advanced",
        modbus_r: 372,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "temp-room-14": {
        descr: "Ist Temp Raum 14",
        category: "advanced",
        modbus_r: 373,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "temp-room-15": {
        descr: "Ist Temp Raum 15",
        category: "advanced",
        modbus_r: 374,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },
    "target-temp-room-1": {
        descr: "Soll Temp Raum 1",
        category: "advanced",
        modbus_r: 400,
        modbus_w: 400,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "target-temp-room-2": {
        descr: "Soll Temp Raum 2",
        category: "advanced",
        modbus_r: 401,
        modbus_w: 401,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "target-temp-room-3": {
        descr: "Soll Temp Raum 3",
        category: "advanced",
        modbus_r: 402,
        modbus_w: 402,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "target-temp-room-4": {
        descr: "Soll Temp Raum 4",
        category: "advanced",
        modbus_r: 403,
        modbus_w: 403,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "target-temp-room-5": {
        descr: "Soll Temp Raum 5",
        category: "advanced",
        modbus_r: 404,
        modbus_w: 404,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "target-temp-room-6": {
        descr: "Soll Temp Raum 6",
        category: "advanced",
        modbus_r: 405,
        modbus_w: 405,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "target-temp-room-7": {
        descr: "Soll Temp Raum 7",
        category: "advanced",
        modbus_r: 406,
        modbus_w: 406,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "target-temp-room-8": {
        descr: "Soll Temp Raum 8",
        category: "advanced",
        modbus_r: 407,
        modbus_w: 407,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "target-temp-room-9": {
        descr: "Soll Temp Raum 9",
        category: "advanced",
        modbus_r: 408,
        modbus_w: 408,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "target-temp-room-10": {
        descr: "Soll Temp Raum 10",
        category: "advanced",
        modbus_r: 409,
        modbus_w: 409,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "target-temp-room-11": {
        descr: "Soll Temp Raum 11",
        category: "advanced",
        modbus_r: 410,
        modbus_w: 410,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "target-temp-room-12": {
        descr: "Soll Temp Raum 12",
        category: "advanced",
        modbus_r: 411,
        modbus_w: 411,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "target-temp-room-13": {
        descr: "Soll Temp Raum 13",
        category: "advanced",
        modbus_r: 412,
        modbus_w: 412,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "target-temp-room-14": {
        descr: "Soll Temp Raum 14",
        category: "advanced",
        modbus_r: 413,
        modbus_w: 413,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "target-temp-room-15": {
        descr: "Soll Temp Raum 15",
        category: "advanced",
        modbus_r: 414,
        modbus_w: 414,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "target-temp-room-16": {
        descr: "Soll Temp Raum 16",
        category: "advanced",
        modbus_r: 415,
        modbus_w: 415,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "target-temp-room-17": {
        descr: "Soll Temp Raum 17",
        category: "advanced",
        modbus_r: 416,
        modbus_w: 416,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "base-temp-room-1": {
        descr: "Grundtemperatur Raum 1",
        category: "advanced",
        modbus_r: 420,
        modbus_w: 420,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "base-temp-room-2": {
        descr: "Grundtemperatur Raum 2",
        category: "advanced",
        modbus_r: 421,
        modbus_w: 421,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "base-temp-room-3": {
        descr: "Grundtemperatur Raum 3",
        category: "advanced",
        modbus_r: 422,
        modbus_w: 422,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "base-temp-room-4": {
        descr: "Grundtemperatur Raum 4",
        category: "advanced",
        modbus_r: 423,
        modbus_w: 423,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "base-temp-room-5": {
        descr: "Grundtemperatur Raum 5",
        category: "advanced",
        modbus_r: 424,
        modbus_w: 424,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "base-temp-room-6": {
        descr: "Grundtemperatur Raum 6",
        category: "advanced",
        modbus_r: 425,
        modbus_w: 425,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "base-temp-room-7": {
        descr: "Grundtemperatur Raum 7",
        category: "advanced",
        modbus_r: 426,
        modbus_w: 426,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "base-temp-room-8": {
        descr: "Grundtemperatur Raum 8",
        category: "advanced",
        modbus_r: 427,
        modbus_w: 427,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "base-temp-room-9": {
        descr: "Grundtemperatur Raum 9",
        category: "advanced",
        modbus_r: 428,
        modbus_w: 428,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "base-temp-room-10": {
        descr: "Grundtemperatur Raum 10",
        category: "advanced",
        modbus_r: 429,
        modbus_w: 429,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "base-temp-room-11": {
        descr: "Grundtemperatur Raum 11",
        category: "advanced",
        modbus_r: 430,
        modbus_w: 430,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "base-temp-room-12": {
        descr: "Grundtemperatur Raum 12",
        category: "advanced",
        modbus_r: 431,
        modbus_w: 431,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "base-temp-room-13": {
        descr: "Grundtemperatur Raum 13",
        category: "advanced",
        modbus_r: 432,
        modbus_w: 432,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "base-temp-room-14": {
        descr: "Grundtemperatur Raum 14",
        category: "advanced",
        modbus_r: 433,
        modbus_w: 433,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "base-temp-room-15": {
        descr: "Grundtemperatur Raum 15",
        category: "advanced",
        modbus_r: 434,
        modbus_w: 434,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "base-temp-room-16": {
        descr: "Grundtemperatur Raum 16",
        category: "advanced",
        modbus_r: 435,
        modbus_w: 435,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "base-temp-room-17": {
        descr: "Grundtemperatur Raum 17",
        category: "advanced",
        modbus_r: 436,
        modbus_w: 436,
        value_type: "range",
        value_def: {
            min: 10,
            max: 30,
            unit: "°C"
        }
    },
    "add-heating-enabled-room-1": {
        descr: "Zusatzheizung Freigabe Raum 1",
        category: "advanced",
        modbus_r: 440,
        modbus_w: 440,
        value_type: "choice",
        value_def: {
            0: "Gesperrt",
            1: "Heizen frei"
        }
    },
    "add-heating-enabled-room-2": {
        descr: "Zusatzheizung Freigabe Raum 2",
        category: "advanced",
        modbus_r: 441,
        modbus_w: 441,
        value_type: "choice",
        value_def: {
            0: "Gesperrt",
            1: "Heizen frei"
        }
    },
    "add-heating-enabled-room-3": {
        descr: "Zusatzheizung Freigabe Raum 3",
        category: "advanced",
        modbus_r: 442,
        modbus_w: 442,
        value_type: "choice",
        value_def: {
            0: "Gesperrt",
            1: "Heizen frei"
        }
    },
    "add-heating-enabled-room-4": {
        descr: "Zusatzheizung Freigabe Raum 4",
        category: "advanced",
        modbus_r: 443,
        modbus_w: 443,
        value_type: "choice",
        value_def: {
            0: "Gesperrt",
            1: "Heizen frei"
        }
    },
    "add-heating-enabled-room-5": {
        descr: "Zusatzheizung Freigabe Raum 5",
        category: "advanced",
        modbus_r: 444,
        modbus_w: 444,
        value_type: "choice",
        value_def: {
            0: "Gesperrt",
            1: "Heizen frei"
        }
    },
    "add-heating-enabled-room-6": {
        descr: "Zusatzheizung Freigabe Raum 6",
        category: "advanced",
        modbus_r: 445,
        modbus_w: 445,
        value_type: "choice",
        value_def: {
            0: "Gesperrt",
            1: "Heizen frei"
        }
    },
    "add-heating-enabled-room-7": {
        descr: "Zusatzheizung Freigabe Raum 7",
        category: "advanced",
        modbus_r: 446,
        modbus_w: 446,
        value_type: "choice",
        value_def: {
            0: "Gesperrt",
            1: "Heizen frei"
        }
    },
    "add-heating-enabled-room-8": {
        descr: "Zusatzheizung Freigabe Raum 8",
        category: "advanced",
        modbus_r: 447,
        modbus_w: 447,
        value_type: "choice",
        value_def: {
            0: "Gesperrt",
            1: "Heizen frei"
        }
    },
    "add-heating-enabled-room-9": {
        descr: "Zusatzheizung Freigabe Raum 9",
        category: "advanced",
        modbus_r: 448,
        modbus_w: 448,
        value_type: "choice",
        value_def: {
            0: "Gesperrt",
            1: "Heizen frei"
        }
    },
    "add-heating-enabled-room-10": {
        descr: "Zusatzheizung Freigabe Raum 10",
        category: "advanced",
        modbus_r: 449,
        modbus_w: 449,
        value_type: "choice",
        value_def: {
            0: "Gesperrt",
            1: "Heizen frei"
        }
    },
    "add-heating-enabled-room-11": {
        descr: "Zusatzheizung Freigabe Raum 11",
        category: "advanced",
        modbus_r: 450,
        modbus_w: 450,
        value_type: "choice",
        value_def: {
            0: "Gesperrt",
            1: "Heizen frei"
        }
    },
    "add-heating-enabled-room-12": {
        descr: "Zusatzheizung Freigabe Raum 12",
        category: "advanced",
        modbus_r: 451,
        modbus_w: 451,
        value_type: "choice",
        value_def: {
            0: "Gesperrt",
            1: "Heizen frei"
        }
    },
    "add-heating-enabled-room-13": {
        descr: "Zusatzheizung Freigabe Raum 13",
        category: "advanced",
        modbus_r: 452,
        modbus_w: 452,
        value_type: "choice",
        value_def: {
            0: "Gesperrt",
            1: "Heizen frei"
        }
    },
    "add-heating-enabled-room-14": {
        descr: "Zusatzheizung Freigabe Raum 14",
        category: "advanced",
        modbus_r: 453,
        modbus_w: 453,
        value_type: "choice",
        value_def: {
            0: "Gesperrt",
            1: "Heizen frei"
        }
    },
    "add-heating-enabled-room-15": {
        descr: "Zusatzheizung Freigabe Raum 15",
        category: "advanced",
        modbus_r: 454,
        modbus_w: 454,
        value_type: "choice",
        value_def: {
            0: "Gesperrt",
            1: "Heizen frei"
        }
    },
    "add-heating-enabled-room-16": {
        descr: "Zusatzheizung Freigabe Raum 16",
        category: "advanced",
        modbus_r: 455,
        modbus_w: 455,
        value_type: "choice",
        value_def: {
            0: "Gesperrt",
            1: "Heizen frei"
        }
    },
    "add-heating-enabled-room-17": {
        descr: "Zusatzheizung Freigabe Raum 17",
        category: "advanced",
        modbus_r: 456,
        modbus_w: 456,
        value_type: "choice",
        value_def: {
            0: "Gesperrt",
            1: "Heizen frei"
        }
    },
    "add-heating-active-room-1": {
        descr: "Zusatzheizung aktiv Raum 1",
        category: "advanced",
        modbus_r: 460,
        modbus_w: 460,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "add-heating-active-room-2": {
        descr: "Zusatzheizung aktiv Raum 2",
        category: "advanced",
        modbus_r: 461,
        modbus_w: 461,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "add-heating-active-room-3": {
        descr: "Zusatzheizung aktiv Raum 3",
        category: "advanced",
        modbus_r: 462,
        modbus_w: 462,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "add-heating-active-room-4": {
        descr: "Zusatzheizung aktiv Raum 4",
        category: "advanced",
        modbus_r: 463,
        modbus_w: 463,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "add-heating-active-room-5": {
        descr: "Zusatzheizung aktiv Raum 5",
        category: "advanced",
        modbus_r: 464,
        modbus_w: 464,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "add-heating-active-room-6": {
        descr: "Zusatzheizung aktiv Raum 6",
        category: "advanced",
        modbus_r: 465,
        modbus_w: 465,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "add-heating-active-room-7": {
        descr: "Zusatzheizung aktiv Raum 7",
        category: "advanced",
        modbus_r: 466,
        modbus_w: 466,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "add-heating-active-room-8": {
        descr: "Zusatzheizung aktiv Raum 8",
        category: "advanced",
        modbus_r: 467,
        modbus_w: 467,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "add-heating-active-room-9": {
        descr: "Zusatzheizung aktiv Raum 9",
        category: "advanced",
        modbus_r: 468,
        modbus_w: 468,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "add-heating-active-room-10": {
        descr: "Zusatzheizung aktiv Raum 10",
        category: "advanced",
        modbus_r: 469,
        modbus_w: 469,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "add-heating-active-room-11": {
        descr: "Zusatzheizung aktiv Raum 11",
        category: "advanced",
        modbus_r: 470,
        modbus_w: 470,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "add-heating-active-room-12": {
        descr: "Zusatzheizung aktiv Raum 12",
        category: "advanced",
        modbus_r: 471,
        modbus_w: 471,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "add-heating-active-room-13": {
        descr: "Zusatzheizung aktiv Raum 13",
        category: "advanced",
        modbus_r: 472,
        modbus_w: 472,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "add-heating-active-room-14": {
        descr: "Zusatzheizung aktiv Raum 14",
        category: "advanced",
        modbus_r: 473,
        modbus_w: 473,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "add-heating-active-room-15": {
        descr: "Zusatzheizung aktiv Raum 15",
        category: "advanced",
        modbus_r: 474,
        modbus_w: 474,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "add-heating-active-room-16": {
        descr: "Zusatzheizung aktiv Raum 16",
        category: "advanced",
        modbus_r: 475,
        modbus_w: 475,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "add-heating-active-room-17": {
        descr: "Zusatzheizung aktiv Raum 17",
        category: "advanced",
        modbus_r: 476,
        modbus_w: 476,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "heating-timeplan-enabled-room-1": {
        descr: "Freigabe Zeitprogramm Heizen Raum 1",
        category: "advanced",
        modbus_r: 500,
        modbus_w: 500,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "heating-timeplan-enabled-room-2": {
        descr: "Freigabe Zeitprogramm Heizen Raum 2",
        category: "advanced",
        modbus_r: 501,
        modbus_w: 501,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "heating-timeplan-enabled-room-3": {
        descr: "Freigabe Zeitprogramm Heizen Raum 3",
        category: "advanced",
        modbus_r: 502,
        modbus_w: 502,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "heating-timeplan-enabled-room-4": {
        descr: "Freigabe Zeitprogramm Heizen Raum 4",
        category: "advanced",
        modbus_r: 503,
        modbus_w: 503,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "heating-timeplan-enabled-room-5": {
        descr: "Freigabe Zeitprogramm Heizen Raum 5",
        category: "advanced",
        modbus_r: 504,
        modbus_w: 504,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "heating-timeplan-enabled-room-6": {
        descr: "Freigabe Zeitprogramm Heizen Raum 6",
        category: "advanced",
        modbus_r: 505,
        modbus_w: 505,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "heating-timeplan-enabled-room-7": {
        descr: "Freigabe Zeitprogramm Heizen Raum 7",
        category: "advanced",
        modbus_r: 506,
        modbus_w: 506,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "heating-timeplan-enabled-room-8": {
        descr: "Freigabe Zeitprogramm Heizen Raum 8",
        category: "advanced",
        modbus_r: 507,
        modbus_w: 507,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "heating-timeplan-enabled-room-9": {
        descr: "Freigabe Zeitprogramm Heizen Raum 9",
        category: "advanced",
        modbus_r: 508,
        modbus_w: 508,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "heating-timeplan-enabled-room-10": {
        descr: "Freigabe Zeitprogramm Heizen Raum 10",
        category: "advanced",
        modbus_r: 509,
        modbus_w: 509,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "heating-timeplan-enabled-room-11": {
        descr: "Freigabe Zeitprogramm Heizen Raum 11",
        category: "advanced",
        modbus_r: 510,
        modbus_w: 510,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "heating-timeplan-enabled-room-12": {
        descr: "Freigabe Zeitprogramm Heizen Raum 12",
        category: "advanced",
        modbus_r: 511,
        modbus_w: 511,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "heating-timeplan-enabled-room-13": {
        descr: "Freigabe Zeitprogramm Heizen Raum 13",
        category: "advanced",
        modbus_r: 512,
        modbus_w: 512,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "heating-timeplan-enabled-room-14": {
        descr: "Freigabe Zeitprogramm Heizen Raum 14",
        category: "advanced",
        modbus_r: 513,
        modbus_w: 513,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "heating-timeplan-enabled-room-15": {
        descr: "Freigabe Zeitprogramm Heizen Raum 15",
        category: "advanced",
        modbus_r: 514,
        modbus_w: 514,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "heating-timeplan-enabled-room-16": {
        descr: "Freigabe Zeitprogramm Heizen Raum 16",
        category: "advanced",
        modbus_r: 515,
        modbus_w: 515,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "heating-timeplan-enabled-room-17": {
        descr: "Freigabe Zeitprogramm Heizen Raum 17",
        category: "advanced",
        modbus_r: 516,
        modbus_w: 516,
        value_type: "choice",
        value_def: {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },
    "operating-hours-fan": {
        descr: "Betriebsstunden Lüfter",
        category: "advanced",
        modbus_r: 800,
        modbus_w: -1,
        value_type: "number",
        value_def: {
            unit: "Stunden"
        }
    },
    "operating-hours-fan-level-1": {
        descr: "Betriebsstunden Lüfter Stufe 1",
        category: "advanced",
        modbus_r: 801,
        modbus_w: -1,
        value_type: "number",
        value_def: {
            unit: "Stunden"
        }
    },
    "operating-hours-fan-level-2": {
        descr: "Betriebsstunden Lüfter Stufe 2",
        category: "advanced",
        modbus_r: 802,
        modbus_w: -1,
        value_type: "number",
        value_def: {
            unit: "Stunden"
        }
    },
    "operating-hours-fan-level-3": {
        descr: "Betriebsstunden Lüfter Stufe 3",
        category: "advanced",
        modbus_r: 803,
        modbus_w: -1,
        value_type: "number",
        value_def: {
            unit: "Stunden"
        }
    },
    "operating-hours-fan-level-4": {
        descr: "Betriebsstunden Lüfter Stufe 4",
        category: "advanced",
        modbus_r: 804,
        modbus_w: -1,
        value_type: "number",
        value_def: {
            unit: "Stunden"
        }
    },
    "operating-hours-wp": {
        descr: "Betriebsstunden WP",
        category: "advanced",
        modbus_r: 805,
        modbus_w: -1,
        value_type: "number",
        value_def: {
            unit: "Stunden"
        }
    },
    "operating-hours-wp-cooling": {
        descr: "Betriebsstunden WP kühlen",
        category: "advanced",
        modbus_r: 806,
        modbus_w: -1,
        value_type: "number",
        value_def: {
            unit: "Stunden"
        }
    },
    "operating-hours-vhr": {
        descr: "Betriebsstunden VHR",
        category: "advanced",
        modbus_r: 809,
        modbus_w: -1,
        value_type: "number",
        value_def: {
            unit: "Stunden"
        }
    },
    "operating-hours-zh-room": {
        descr: "Betriebsstunden ZH Raum",
        category: "advanced",
        modbus_r: 810,
        modbus_w: -1,
        value_type: "number",
        value_def: {
            unit: "Stunden"
        }
    },
    "operating-hours-ewt": {
        descr: "Betriebsstunden EWT",
        category: "advanced",
        modbus_r: 813,
        modbus_w: -1,
        value_type: "number",
        value_def: {
            unit: "Stunden"
        }
    }
};
