const expEventWithPlaceholders = {
    eventType: 'eventTypeValue',
    data: {
        field1: '<field1Data>',
        field2: '<field2Data>',
        field3: '<field3Data>',
    }
}
const expEventWithoutPlaceholders = {
    eventType: 'eventTypeValue',
    data: {
        field1: 'field1.data',
        field2: 'field 2 data',
        field3: 'field-3-data',
        field5: 'field 5 data'
    }
};
const expParams = {
    field1: 'field1.data',
    field2: 'field 2 data',
    field3: 'field-3-data',
    ignoredField: 'ignoredField data'
};
const actEventObj1 = {
    eventType: 'eventTypeValue',
    data: {
        field1: 'field1.data',
        field2: 'field 2 data',
        field3: 'field-3-data',
        appMetaData: {
            field4Child: 'field 4-child data',
        },
        field5: 'field 5 data'
    }
};
const actEventObj2 = {
    eventType: 'eventTypeValue',
    data: {
        field1: 'field1.data',
        field2: 'field 2 data',
        field3: 'field-3-data',
    }
};

context('Demo analytics test for digitalData events verification', function () {
    describe('Check analytics command works', () => {
        it('check digitalData event - do deepEqual verification as default', () => {
            global.qe.analytics.checkEvent(actEventObj1, expEventWithoutPlaceholders);
        });

        it('check digitalData event - update expected object with parameters then do deepInclude assertions', () => {
            const expResult = global.qe.analytics.updateExpResult(expEventWithPlaceholders, expParams);
            global.qe.analytics.checkEvent(actEventObj1, expResult, false);
        });

        it('check digitalData event - update expected object with parameters then do deepEqual assertion', () => {
            const expResult = global.qe.analytics.updateExpResult(expEventWithPlaceholders, expParams);
            global.qe.analytics.checkEvent(actEventObj2, expResult, true);
        });
    })
});