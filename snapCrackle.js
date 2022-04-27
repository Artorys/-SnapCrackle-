function snapCrackle(maxValue)
{
    let list = []
    let listPrimos = []
    for(let i = 1;i <= maxValue;i++)
    {
        list.push(i)
    }
    for(let i = 1; i < maxValue; i++)
    {
        list[i] = list[i].toString()
        let primo = true
        for(let j = 1;j < i;j++)
        {
            if(list[i] % list[j]  === 0 )
            {
                primo = false;
                break
            }
        }
        if(primo)
        {
           listPrimos.push(list[i])
        }
    }
    for(let i = 0;i < list.length;i++)
    {
        list[i] = list[i].toString()
        for(let j = 0;j < listPrimos.length;j++)
        {
            if(list[i] == listPrimos[j] && list[i] % 2 != 0 &&  list[i] % 5 == 0)
            {
                list[i] = list[i].replace(list[i],"SnapCracklePrime")
            }
            else if(list[i] == listPrimos[j] && list[i] % 2 != 0)
            {
                list[i] = list[i].replace(list[i],"SnapPrime")
            }
            else if(list[i] == listPrimos[j])
            {
                list[i] = list[i].replace(list[i],"Prime")
            }
        }
        if(list[i] % 2 != 0 && list[i] % 5 == 0 && list[i].includes("Prime") == false)
        {
            list[i] = list[i].replace("SnapCrackle")
        }
        else if(list[i] % 2 != 0 && list[i].includes("Prime") == false)
        {
            list[i] = list[i].replace(list[i],"Snap")
        }
        else if(list[i] % 5 == 0 && list[i].includes("Prime") == false)
        {
            list[i] = list[i].replace(list[i],"Crackle")
        }
        else
        {
            list[i] = list[i].replace(list[i],`${list[i]}`)
        }
        
    }
    list = list.join(" ")
    list = list.replace(/ /g, ", ")
    return list
}
console.log(snapCrackle(11))
