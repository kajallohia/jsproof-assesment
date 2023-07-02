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
    const NftNum = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _ShirtSize, _ShirtColor, _bling) {
    const NFTobj ={
        "name" : _name,
        "shirtSize" : _ShirtSize,
        "ShirtColor" : _ShirtColor,
        "bling" : _bling
    };
    NftNum.push(NFTobj);
    console.log("Minted : " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i = 0; i < NftNum.length; i++){
        console.log("\nID: \t\t" + (i + 1));
        console.log("Name: \t\t" + NftNum[i].name);
        console.log("Shirt Size: \t" + NftNum[i].shirtSize);
        console.log("Shirt Color: \t" + NftNum[i].ShirtColor);
        console.log("Bling: \t\t" + NftNum[i].bling);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal no of NFTs We have: " + NftNum.length);
}

// call your functions below this line
mintNFT("Adidas", "M", "Black", "Gold Plated");
mintNFT("Tommy", "L", "Pink", "Silver lined");
mintNFT("Zara", "XL", "Orange", "Plain");
mintNFT("Peter England", "M", "Black", "Plain");
mintNFT("Puma", "L", "Black", "Silver Lined");
mintNFT("U.S Polo", "M", "white", "Silver Plated");
listNFTs();
getTotalSupply();
