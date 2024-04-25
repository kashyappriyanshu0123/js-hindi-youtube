const myobj = {
    js : 'javascript',
    cpp : 'cplusplus',
    rb : 'ruby',                  //for - in loop will work with object to iterarate through it
    py : 'python'
}
// for (const key in myobj) {
//    console.log(key); //js,cpp,rb,py (key)
//   console.log(`${key} , shortcut is for ${myobj[key]}`); //  myobj[key] -> it will guve me the key value
// }

const programming = ["ruby","java","python","js"]
for (const key in programming) {
    //console.log(key);  // 0 , 1 ,2 ,3 -> it will give me keys  
   // console.log(programming[key]);  //ruby  java  python js
}


const map = new Map()  //its not iteratable in for-in loop it wont show any error but it wont print anything(for - in loop not working for maps)
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);       
}