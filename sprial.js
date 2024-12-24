const sprial=(n)=>{
    let arr = new Array(n).fill(null);
    for(let i=0;i<n;i++)
        arr[i]= new Array(n).fill(0);
    
  let count =1;

  for(let pos=0;pos<parseInt(n/2);pos++){
    var i=pos,j=pos;  
    for(;j<n-pos;j++){
        arr[i][j]=count;
        count++;
    }
    j--;
    for(i=pos+1;i<n-pos;i++){
        arr[i][j]= count;
        count++;
    }
    i--;
    for(j=n-pos-2;j>=pos;j--){
        arr[i][j]= count;
        count++;
    }
    j++;
    for(i=n-pos-2;i>pos;i--){
        arr[i][j]= count;
        count++;
    }
  }
    
    for(let i=0;i<n;i++){
        let ans = "";
        for(let j=0;j<n;j++)
            ans= ans+"\t"+arr[i][j];
        console.log(ans);
    }
}

sprial(10);
