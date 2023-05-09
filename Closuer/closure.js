score = 4
function one()
{
    let score = 0
    console.log(score);
}
function two()
{
    let score = 3
    console.log(score);
}

function three()
{
    console.log(score);
}
// one()
// two()
// three()
// console.log(score);

function outerFunct()
{
    let outerVar ="I am at scope level 1"
    function innerrFunc()
    {
        let innerVal = "i am at scope level 2"
        console.log(outerVar)
    }
    // console.log(innerval);
    // innerrFunc()
}
// outerFunct()

const myGlobalvalue = 0

function func()
{
    const val1 = 1 ;
    console.log(myGlobalvalue);

    function innerrFunc()
    {
        const val2 = 2
        console.log(val2 , val1 ,myGlobalvalue)

        function innerOfInnerFuct()
        {
            const val3 = 3
            console.log(val3 ,val2, val1 , myGlobalvalue);
        }
        innerOfInnerFuct()
    } innerrFunc()
}
func()

function superFunc()
{
    let outervalue = "I am outer"
    function minorFunc()
    {
        console.log(outervalue)
    }
    minorFunc()
}
superFunc()