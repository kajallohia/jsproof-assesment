/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _hairColour, _topWear, _accessory) {
	
	const NFT = {
		"name" : _name,
		"hairColour" : _hairColour,
		"topWear" : _topWear,
		"accessory" : _accessory

	}
	NFTs.push(NFT);
	console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
	for(let i = 0;i<NFTs.length;i++) {
		console.log("\nname: "+NFTs[i].name);
		console.log("hairColour: "+NFTs[i].hairColour);
		console.log("topWear: "+NFTs[i].topWear);
		console.log("accessory: "+NFTs[i].accessory);
	}

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
	console.log("Total Supply: "+NFTs.length);
}

// call your functions below this line
mintNFT("Aditya", "Brown", "kurta", "Ring");
mintNFT("Aleena", "Blonde", "ethnic", "Chain");
mintNFT("Sweta", "Black", "onepiece", "Earrings");
listNFTs();
console.log("\n");
getTotalSupply();
