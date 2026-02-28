let arr=[1,2,3,4,5,6]
const addone=(num)=>{return num+1}
let res=arr.map(addone)

let double=arr.map((num)=>num*2)
//console.log(double)


let b=arr.filter((num)=>num>3)
//console.log(b)

let c=arr.filter((num)=>num%2==0)
//console.log(c)
let arr1=[1,2,3,4,5,6]
let sum=arr.reduce((total,curr)=>{return total+curr},0)
//console.log(sum)

let products=[
    {id:2
        
        ,name:'laptop',price:25000},
    {id:2,name:'mobile',price:9500},
    {id:3,name:'keyboard',price:2000},
]
let product=products.filter((p)=>p.price>6000)
//console.log(product)
//let productName=products.map((product)=>{/console.log(product.name, product.id,product.price)})
let sum1=products.reduce((total,product1)=> {return total+product1.price},0);
//console.log(sum1)
let a=products.find((p)=>p.id==2)
//console.log(a)
let students={
    name:"Deepa",
    department:"cse",
    age:22
}
const {name,department}=students
//console.log(name,department)

let arr11=[11,22,33,44,55]
let arr2=[66,77]
let arr3=[...arr11,...arr2]
//console.log(arr3)

const promise=new Promise((resolve,reject)=>{
    let success=true
    if(success){
    resolve('data recieved successfully')
}
else{
    reject("error fetching data")
}
})
promise.then((data)=>console.log(data)).catch((error)=>console.log(error))

