class TreeNode{
	constructor(data)
	{
		this.data=data;
		this.left=null;
		this.right=null;
	}
}

const root =  new TreeNode(1);

class BinaryTree{
	generateList()
	{
		const two = new TreeNode(2);
		const four = new TreeNode(4);
		const three = new TreeNode(3);
		root.left=two;
		root.right=three;
		three.left=four;
	}
}

const binaryTree = new BinaryTree();

window.onload = (e)=>{
	binaryTree.generateList();
}