function volumeOfRectangularPrism(length, width, height)
{
    checkValidValues(length, "length");
    checkValidValues(width, "width");
    checkValidValues(height, "height");

    return length*width*height;
}

function surfaceAreaOfRectangularPrism(length, width, height)
{
    checkValidValues(length, "length");
    checkValidValues(width, "width");
    checkValidValues(height, "height");

    return 2*((width*length)+(height*length)+(height*width));
}

function volumeOfSphere(radius)
{
    checkValidValues(radius, "radius");
    let multiplier=4/3;

    return multiplier*( Math.PI * Math.pow(radius,3) );
}

function surfaceAreaOfSphere(radius)
{
    checkValidValues(radius, "radius");
    return 4 * (Math.PI * Math.pow(radius,2));
}

function checkValidValues(value, variableName)
{

    if(isNaN(value))
    {
        throw `${variableName} is not a number.`
    }

    if(value < 0)
    {
        throw `${variableName} cannot be less than 0.`
    }
}

module.exports = {volumeOfRectangularPrism, surfaceAreaOfRectangularPrism, volumeOfSphere, surfaceAreaOfSphere}