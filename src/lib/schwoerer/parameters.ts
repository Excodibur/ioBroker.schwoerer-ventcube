export let SchwoererParameter: { [index: string]: any } =
{
    "operation-mode":
    {
        descr: "Betriebsart",
        modbus_r: 100,
        modbus_w: 100,
        value_type: "choice",
        value_def:
        {
            0: "Aus",
            1: "Handbetrieb",
            2: "Winterbetrieb",
            3: "Sommerbetrieb",
            4: "Sommer Abluft"
        }
    },

    "temp-outside":
    {
        descr: "T10 Außentemperatur",
        modbus_r: 209,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },

    "temp-inside":
    {
        descr: "Innentemperatur",
        modbus_r: 360,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },

    "temp-room-2":
    {
        descr: "Ist Temp Raum 2",
        modbus_r: 361,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },

    "temp-room-3":
    {
        descr: "Ist Temp Raum 3",
        modbus_r: 362,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },

    "t1-after-ewt":
    {
        descr: "T1 nach EWT",
        modbus_r: 200,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },

    "t2-after-vhr":
    {
        descr: "T2 nach VHR",
        modbus_r: 201,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },

    "t3-before-ne":
    {
        descr: "T3 vor NE",
        modbus_r: 202,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },

    "t4-after-ne":
    {
        descr: "T4 nach NE",
        modbus_r: 203,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },

    "t5-exhaust":
    {
        descr: "T5 Abluft",
        modbus_r: 204,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },

    "t6-in-wt":
    {
        descr: "T6 im WT",
        modbus_r: 204,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },

    "t7-vaporizer":
    {
        descr: "T7 Verdampfer",
        modbus_r: 206,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },

    "t8-condenser":
    {
        descr: "T8 Kondensator",
        modbus_r: 207,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: -50,
            max: 100,
            unit: "°C"
        }
    },

    "manual-fan-level":
    {
        descr: "Manuelle Luftstufe",
        modbus_r: 101,
        modbus_w: 101,
        value_type: "choice",
        value_def:
        {
            0: "Aus",
            1: "Stufe 1",
            2: "Stufe 2",
            3: "Stufe 3",
            4: "Stufe 4",
            5: "Automatik",
            6: "Linearantrieb"
        }
    },

    "current-fan-level":
    {
        descr: "Aktuelle Luftstufe",
        modbus_r: 102,
        modbus_w: -1,
        value_type: "choice",
        value_def:
        {
            0: "Aus",
            1: "Stufe 1",
            2: "Stufe 2",
            3: "Stufe 3",
            4: "Stufe 4"
        }
    },

    "shock-ventilation":
    {
        descr: "Stoßlüftung",
        modbus_r: 111,
        modbus_w: 111,
        value_type: "choice",
        value_def:
        {
            0: "Inaktiv",
            1: "Aktiv"
        }
    },

    "shock-ventilation-remaining":
    {
        descr: "Restlaufzeit Stoßlüftung",
        modbus_r: 112,
        modbus_w: -1,
        value_type: "range",
        value_def:
        {
            min: 0,
            max: 60,
            unit: "min"
        }
    },

    "devicefilter-expiration":
    {
        descr: "Restlauzeit Gerätefilter",
        modbus_r: 265,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: 0,
            max: 255,
            unit: "days"
        }
    },

    "devicefilter-polluted":
    {
        descr: "Gerätefilter verschmutzt",
        modbus_r: 245,
        modbus_w: -1,
        value_type: "choice",
        value_def:
        {
            0: "nein",
            1: "ja"
        }
    },

    "priorfilter-expiration":
    {
        descr: "Restlauzeit Vorgelagerter Filter",
        modbus_r: 263,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: 0,
            max: 255,
            unit: "days"
        }
    },

    "priorfilter-polluted":
    {
        descr: "Vorgelagerter Filter verschmutzt",
        modbus_r: 246,
        modbus_w: -1,
        value_type: "choice",
        value_def:
        {
            0: "nein",
            1: "ja"
        }
    },

    "bypass-state":
    {
        descr: "Bypass Zustand",
        modbus_r: 123,
        modbus_w: -1,
        value_type: "choice",
        value_def:
        {
            0: "Bypass geschlossen",
            1: "Bypass offen (Kühlen)",
            2: "Bypass offen (Heizen)"
        }
    },

    "air-throughput-in":
    {
        descr: "Luftleistung aktuell Zuluft",
        modbus_r: 142,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: 0,
            max: 100,
            unit: "%"
        }
    },

    "air-throughput-out":
    {
        descr: "Luftleistung aktuell Abluft",
        modbus_r: 143,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: 0,
            max: 100,
            unit: "%"
        }
    },

    "current-rpm-in":
    {
        descr: "Aktuelle Drehzahl Zuluft",
        modbus_r: 144,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: 0,
            max: 10000,
            unit: "rpm"
        }
    },

    "current-rpm-out":
    {
        descr: "Aktuelle Drehzahl Abluft",
        modbus_r: 145,
        modbus_w: -1,
        value_type: "range",
        value_def: {
            min: 0,
            max: 10000,
            unit: "rpm"
        }
    },

    "maint-door-open":
    {
        descr: "Wartungstür offen",
        modbus_r: 244,
        modbus_w: -1,
        value_type: "choice",
        value_def:
        {
            0: "geschlossen",
            1: "offen"
        }
    },

    "ermergency-mode":
    {
        descr: "Notbetrieb aktiv",
        modbus_r: 253,
        modbus_w: -1,
        value_type: "choice",
        value_def:
        {
            0: "inaktiv",
            1: "aktiv"
        }
    },

    "air-outside-too-cold":
    {
        descr: "Zuluft zu kalt",
        modbus_r: 254,
        modbus_w: -1,
        value_type: "choice",
        value_def:
        {
            0: "inaktiv",
            1: "aktiv"
        }
    },

    "error-message":
    {
        descr: "Fehlermeldung",
        modbus_r: 240,
        modbus_w: -1,
        value_type: "choice",
        value_def:
        {
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
    }
}
