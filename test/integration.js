const path = require("path");
const { tests } = require("@iobroker/testing");
const { exception } = require("console");

function delay(t, val) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(val);
        }, t);
    });
 }

 function readValuesFromMock() {
     var fs = require('fs');
     try {
        var fileData = fs.readFileSync('mock_service_registers.json', 'utf8');

        var arr = JSON.parse(fileData);
        return arr;
     } catch (error) {
        console.error("Could not read mock service file");
     }
 }

// Run integration tests - See https://github.com/ioBroker/testing for a detailed explanation and further options
tests.integration(path.join(__dirname, ".."), {
    defineAdditionalTests(getHarness) {

        
        describe("Adapter core functions", () => {
            it ("should read correct values from Ventcube mock", () => {
                return new Promise(async (resolve, reject) => {
                    const harness = getHarness();

                    await harness.startAdapterAndWait()

                    //check if states shown correlate to mock server
                    //read data from mock logs
                    let mockValues = readValuesFromMock();

                    //get state from adapter, adapter need some time to load first values from mock
                    await delay (15000);
                    
                    //Check one value from mockservice and compare to state in adapter. In theory we could iterate over all values
                    //but let's keep it simple for now.
                    harness.states.getState("schwoerer-ventcube.0.parameters.base-temp-room-1", function (error, state){
                        //Special treatment is needed for this value specifically, as measure-unit is °C and adapter divides it
                        //by 10 (by design).
                        let compareAdapterValue = state.val * 10;
                        if (compareAdapterValue == mockValues['base-temp-room-1'])
                            resolve();
                        else {
                            reject("ERROR - Value Missmatch. Function: base-temp-room-1, Adapter value: " + compareAdapterValue + ", Mock value:" + mockValues['base-temp-room-1']);
                        }
                    });

                });
            }).timeout(20000);

            it ("should write correct value to Ventcube mock", () => {
                return new Promise(async (resolve, reject) => {
                    const harness = getHarness();

                    await harness.startAdapterAndWait()

                    //TODO: perhaps read old value from mock first to ensure it is really changed
                    let mockValues = readValuesFromMock();
                    let initialBaseTempRoom1 = mockValues['base-temp-room-1'] / 10;
                    let newBaseTempRoom1Rnd = initialBaseTempRoom1;

                    while (newBaseTempRoom1Rnd == initialBaseTempRoom1)
                        newBaseTempRoom1Rnd = Math.floor(Math.random() * 30) + 10; //minValue = 10, maxvalue = 30
                    
                    //get state from adapter, adapter need some time to load first values from mock
                    await delay (15000);

                    await harness.states.setStateAsync("schwoerer-ventcube.0.parameters.base-temp-room-1", newBaseTempRoom1Rnd);
                    //check if states shown correlate to mock server
                    

                    // give adapter time to send new value to
                    await delay (2000);

                    //read data from mock logs
                    mockValues = readValuesFromMock();

                    if (mockValues['base-temp-room-1'] == (newBaseTempRoom1Rnd*10)) {
                        console.log("SUCCESS - Old base-temp-room-1 was: " + initialBaseTempRoom1 + " now: " + newBaseTempRoom1Rnd);
                        resolve();
                    } else {
                        reject("ERROR - Value for function base-temp-room-1 should have been updated to 33, but in Mock actually is " + mockValues['base-temp-room-1'])
                    }
                });

            }).timeout(30000);;
        });
    }
});
