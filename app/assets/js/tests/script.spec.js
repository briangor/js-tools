describe('First Karma test', function () {
    it('should be true', function () {
        expect(true).toEqual(true);
    });
});

describe('Calculate tax', function () {
    //let a = b * (c / 100);
    it('should multiply amount by rate', function () {
        expect(calculateTax(100, 2)).toEqual(200);
    });
});


// describe('String Calculator', function () {
//     // 1
//     beforeEach(function () {
//         var fixture = `<div id="fixture">
//       <input id="input-numbers" type="text">
//         <input id="add-btn" type="button" value="Add">
//         <div><span id="result" /></div>
//     </div>`;
//         document.body.insertAdjacentHTML(
//             'afterbegin',
//             fixture);
//     });


//     afterEach(function () {
//         document.body.removeChild(document.getElementById('fixture'));
//     });
//     // 2
//     beforeEach(function () {
//         init();
//     });
//     // 3
//     it('should return 0 for empty string', function () {
//         document.getElementById('input-numbers').value = '';
//         document.getElementById('add-btn').click();
//         expect(document.getElementById('result').innerHTML).toBe('0');
//     });

//     it('should return 6 for 1,2,3', function () {
//         document.getElementById('input-numbers').value = '1,2,3';
//         document.getElementById('add-btn').click();
//         expect(document.getElementById('result').innerHTML).toBe('6');
//     });
// });