function snapCrackle(maxValue)
{
    let list = []
    for(let i = 1;i <= maxValue;i++)
    {
        list.push(i)
    }
    for(let i = 0;i < list.length;i++)
    {
        list[i] = list[i].toString()
        if(list[i] % 2 != 0 && list[i] % 5 == 0)
        {
            list[i] = list[i].replace(list[i],"SnapCrackle,")
        }
        else if(list[i] % 2 != 0)
        {
            list[i] = list[i].replace(list[i],"Snap,")
        }
        else if(list[i] % 5 == 0)
        {
            list[i] = list[i].replace(list[i],"Crackle,")
        }
        else
        {
            list[i] = list[i].replace(list[i], ` ${list[i]},`)
        }
    }
    return(list.join(" "))
}   