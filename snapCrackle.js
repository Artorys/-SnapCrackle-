function snapCrackle(maxValue)
{
    let list = []
    let listPrimos = []
    let newlist = []
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
    list.forEach((el1,i1)=> 
    {
        listPrimos.forEach((el2)=>
        {
            list[i1] = list[i1].toString()
            if(el1 % 2 != 0 && el1 % 5 == 0 && el1 == el2)
            {
                list[i1] = list[i1].replace(list[i1],"SnapCracklePrime")
            }
            else if(el1 % 5 == 0 && el1 == el2)
            {
                list[i1] = list[i1].replace(list[i1],"CracklePrime")
            }
            else if(el1 % 2 != 0 && el1 == el2)
            {
                list[i1] = list[i1].replace(list[i1],"SnapPrime") 
            }
            else if(el1 % 2 != 0 && el1 % 5 == 0 && list[i1].includes("Prime") == false)
            {
                list[i1] = list[i1].replace(list[i1],"SnapCrackle")
            }
            else if(el1 % 5 == 0 && list[i1].includes("Prime") == false)
            {
                list[i1] = list[i1].replace(list[i1],"Crackle")
            }
            else if(el1 % 2 != 0 && list[i1].includes("Prime") == false)
            {
                list[i1] = list[i1].replace(list[i1],"Snap")
            }
            else if(el1 == el2)
            {
                list[i1] = list[i1].replace(list[i1],"Prime")
            }
        })
    })
    list = list.join(" ")
    list = list.replace(/ /g, ", ")
    return list
}
console.log(snapCrackle(30))
