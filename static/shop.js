money = 0
itemCost = {
    CensoredMovie:2,
    Waterworks:5,
    PocketWatch:10,
    TheOneHundredThousandChipChallenge:20,
    QuandaleDinglesFamilyTree:50,
    Dumbphone:100,
    Dumberphone:200,
    Dumbestphone:500,
    Dumdumphone:1000,
    WashYourBumBum:2000,
    UnusedSmallBusinessBuilding:5000,
    UsedAircraft:10000,
    House:20000,
    Car:50000,
    UsedAirportTerminal:100000,
    Hogwarts:200000,
    LordOfTheRings:500000,
    UnusedBumbumphone:1000000

function ListProducts(){
    const buttonDiv = getElementBuyId("shopButtons")

    for (let item in itemCost){
        const element = document.createlement("Button")
        element.setAttribute("class", "shopButton")
        element.setAttribute("onClick", "BuyShopItem"(${item}))
        element.setAttribute("id", item)
        element.innerText = item + ": " + itemCost[item]

        buttonDiv.appendChild(element)
    }
}

ListProducts()

function BuyShopItem(itemID){
    //console.log(itemID)
    itemPrice = itemCost[itemID.replace("Button", "")]
    console.log(itemID + ": " + itemPrice)
}