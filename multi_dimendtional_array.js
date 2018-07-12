console.log("two dimentional array")
let cd=[[11,12,22],[23,24,25],[26,27,28]]
let r=0;
let e=0;
for(let row=0;row<cd.length;++row)
{
	for(let col=0;col<cd.length;++col)
	{
		e++;
		console.log(`a[${r}][${e
		}]->${cd[row][col]}`)
	}
	r++;
}