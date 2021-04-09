var tempString = '';
var tempId = document.getElementsByName("offerListingID")[0].value;

tempId = tempId.match(/.{1,40}/g);

tempId.forEach(function(part){
    tempString += part + '\n';
})

var tempObj = {
    offerId: tempString,
    asin: window.location.pathname.match(/B\w{9}/)
}


var offerIdDiv = document.createElement('h4');
offerIdDiv.textContent = `\nOffer ID: ${tempObj.offerId}`;
offerIdDiv.value = tempObj.offerId;
var productTile = document.getElementById("titleSection")
productTile.appendChild(offerIdDiv);

var offerIdCopy = document.createElement('button');
offerIdCopy.textContent = "Copy Offer Id";
productTile.appendChild(offerIdCopy);

offerIdCopy.addEventListener("click", function(){
    var temp = document.createElement("INPUT");
    temp.value = offerIdDiv.value;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();

})

var asinDiv = document.createElement('h4');
asinDiv.textContent = `\nASIN: ${tempObj.asin}`;
asinDiv.value = tempObj.asin;
productTile.appendChild(asinDiv);

var asinCopy = document.createElement('button');
asinCopy.textContent = "Copy ASIN";
productTile.appendChild(asinCopy);

asinCopy.addEventListener("click", function(){
    var asinTemp = document.createElement("INPUT");
    asinTemp.value = asinDiv.value;
    document.body.appendChild(asinTemp);
    asinTemp.select();
    document.execCommand("copy");
    asinTemp.remove();
})