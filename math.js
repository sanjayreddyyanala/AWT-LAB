export let add = (a,b)=>{
    return a+b;
}

export let multiply = (a,b)=>{
    return a*b;
}

export let sub = (a,b) => {
    return Math.abs(a-b);
}

export let div = (a,b) => {
    if(b == 0) {
        return 0;
    }else {
        return a/b;
    }
}
