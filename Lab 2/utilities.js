function deepEquality(object1, object2)
{
    deepEqualityErrorCheck(object1, object2);

    let object1Properties=Object.getOwnPropertyNames(object1);
    let object2Propertties=Object.getOwnPropertyNames(object2);

    if(object1Properties.length != object2Propertties.length)
    {
        return false;
    }

    for(let i=0; i<object1Properties.length; i++)
    {
        let propertyName = object1Properties[i];
        
        let object1PropertyValue=object1[propertyName];
        let object2PropertyValue=object2[propertyName];
        
        if(typeof object1PropertyValue !== typeof object2PropertyValue)
        {
            return false;
        }

        if(typeof object1PropertyValue === "object")
        {
            if(Array.isArray(object1PropertyValue))
            {
                for(let i = 0; i < object1PropertyValue.length ; i++)
                {
                    if(object1PropertyValue[i] !== object2PropertyValue[i])
                    {
                        return false;
                    }
                }
            }
            else
            {
                if(!deepEquality(object1PropertyValue, object2PropertyValue))
                {
                    return false;
                }
            }
        }
        else if(typeof object1PropertyValue === "function")
        {
            if(object1PropertyValue.toString() !== object2PropertyValue.toString())
            {
                return false;
            }
        }
        else
        {
            if(object1PropertyValue !== object2PropertyValue)
            {
                return false;
            }
        }
    }
    return true;
}

function deepEqualityErrorCheck(object1, object2)
{
    if(typeof object1 !== "object")
    {
        throw `Object 1 is not an object but ${typeof object1}.`
    }

    if(typeof object2 !== "object")
    {
        throw `Object 2 is not an object but ${typeof object2}.`
    }

    if(Array.isArray(object1))
    {
        throw `Object 1 is an array.`
    }

    if(Array.isArray(object2))
    {
        throw `Object 2 is an array.`
    }
}

function uniqueElements(arr)
{
    if(!Array.isArray(arr))
    {
        throw `The passed variable is not an array.`
    }

    if(arr.length === 0)
    {
        return 0;
    }

    let uniqueElement=[];
    let count=0;

    for(let i = 0; i < arr.length; i++)
    {
        if(uniqueElement.indexOf(arr[i]) > -1)
        {
            continue;
        }

        uniqueElement[count]=arr[i];
        count++;
    }

    return count;
}

function countOfEachCharacterInString(str)
{
    if(typeof str !== "string")
    {
        throw `The variable passed is not string but ${typeof str}.`
    }

    let map=new Map();

    for(let i = 0; i < str.length ; i++)
    {
        if(map.get(str[i]) === undefined)
        {
            map.set(str[i], 1);
        }
        else
        {
            let count=map.get(str[i]);
            count++;
            map.set(str[i], count);
        }
    }

    return map;
}

module.exports = {deepEquality, uniqueElements, countOfEachCharacterInString}