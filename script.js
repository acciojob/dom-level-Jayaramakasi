//your JS code here. If required.
let count=1
let element=document.getElementById("level")
while (element!=document.documentElement) {
	 element=element.parentElement
	 count++
}

alert(`The level of the element is: ${count}`)
// const parent=element.parentElement