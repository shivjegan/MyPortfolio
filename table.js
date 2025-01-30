let t1=document.getElementById('t1');
let stu=[]
let n= eval(prompt("Enter the number of students:",""));



for(i=0;i<n;i++)
{
    stu[i]=[];
    for(j=0;j<5;j++)
    {
        stu[i][j]=prompt("Enter the Value ",j, "")
    }
}
let listItems='';
 for(i=0;i<stu.length;i++)
    {
        tot=0,AVg=0,res="PASS";
        for(j=0;j<stu[i].length;j++)
        {
            listItems+=`
                        <td>${stu[i][j]}</td>`
        
            if(j>1)
            {
                tot+=eval(stu[i][j]);
                if(stu[i][j]<35)
                    res="FAIL";
            }


        }
        Avg=tot/3;
        listItems+=`<td>${tot}</td>
                     <td>${Avg}</td>
                     <td>${res}</td>
                     <tr>`;
    }
    t1.innerHTML+=listItems;
