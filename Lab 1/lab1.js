const questionOne = function questionOne(arr) 
{
    let finalTotal=0;

    for(let i=0;i<arr.length;i++)
    {
        let squareNumber=Math.pow(arr[i],2)
        finalTotal=finalTotal+squareNumber
    }

    return finalTotal;
}

const questionTwo = function questionTwo(num) 
{
    if(num<=1)
    {
        return num;
    } 

    return questionTwo(num-1)+questionTwo(num-2)
}

const questionThree = function questionThree(text)
{
    let count=0

    for(let i=0;i<text.length;i++)
    {
        if(text.charAt(i)==='A' || text.charAt(i)==='a' || text.charAt(i)==='E' || text.charAt(i)==='e' || text.charAt(i)==='I' || text.charAt(i)==='i' || text.charAt(i)==='O' || text.charAt(i)==='o' || text.charAt(i)==='U' || text.charAt(i)==='u')
        {
            count++
        }
    }

    return count;
}

const questionFour = function questionFour(num) 
{
    if(num<0)
    {
        return NaN;
    }
    else if(num===0)
    {
        return 1;``
    }

    for(let i=num ; i>1 ;i--)
    {
        num = num*(i-1);
    }

    return num;
}

module.exports = {
    firstName: "HEM", 
    lastName: "SHAH", 
    studentId: "10432319",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};
