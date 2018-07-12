console.log("List algorithem");
function List() {
	this.datastore=[];	
	this.append=append;
	this.length=length;
	this.listsize=0;
	this.find=find;
	this.remove=remove;
	this.message="yes your value will be found";
}
function append(app)
{
	this.datastore[this.listsize++]=app;

}
function length()
{
	return this.listsize;
}
function find(e1)
{
	for(let i=0;i<=this.datastore.length;i++)
		{
			if(this.datastore[i]==e1)
			{
				return this.find=1;
			}
		}
		return this.find=0;
}
function remove(e2)
{
	for(let i=0;i<this.datastore.length;i++)
	{
		if(this.datastore[i]==e2)
		{
			delete this.datastore[i];
			break;
		}
		else{
			return this.message="sorry!we not found";
		}
	}
}
var names=new List();
names.append("darshit");
names.append("hasmukhbhai");
names.append("cismox");
names.length();
names.find("darshit")
names.remove("darsht");
console.log(names)
