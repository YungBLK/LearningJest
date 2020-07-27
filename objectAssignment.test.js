const  data  =  require('./objectAssignment');

test('Object assingnment', () => {
    expect(data).toEqual({'one': 1, 'two': 2});
})
