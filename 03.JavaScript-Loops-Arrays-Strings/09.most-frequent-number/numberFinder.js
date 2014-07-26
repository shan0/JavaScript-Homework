function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var counter = 1;
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;

        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
            counter++;
        }
    }
    return maxEl + " -> " + counter + " times";
}

console.log(mode([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]));
console.log(mode([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]));
console.log(mode([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]));