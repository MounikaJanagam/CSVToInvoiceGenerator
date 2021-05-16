function downloadInvoice(){
    var table = $('#myTable').tableToJSON({
    ignoreColumns: [1,2,3,4,5,6,7,8]
    });
    console.log(table);
    var x = [
{
    "quantity": "2",
    "description": "Test1",
    "price": 33.87
},
{
    "quantity": "4",
    "description": "Test2",
    "price": 10.45
}
];
console.log(table);
console.log(x);
    var data = {

//"documentTitle": "RECEIPT", //Defaults to INVOICE
//"locale": "de-DE", //Defaults to en-US, used for number formatting (see docs)
"currency": "USD", //See documentation 'Locales and Currency' for more info
"taxNotation": "vat", //or gst
"marginTop": 25,
"marginRight": 25,
"marginLeft": 25,
"marginBottom": 25,
"logo": "https://www.easyinvoice.cloud/img/logo.png", //or base64
//"logoExtension": "png", //only when logo is base64
"sender": {
"company": "Sample Corp",
"address": "Sample Street 123",
"zip": "1234 AB",
"city": "Sampletown",
"country": "Samplecountry"
//"custom1": "custom value 1",
//"custom2": "custom value 2",
//"custom3": "custom value 3"
},
"client": {
   "company": "Client Corp",
   "address": "Clientstreet 456",
   "zip": "4567 CD",
   "city": "Clientcity",
   "country": "Clientcountry"
//"custom1": "custom value 1",
//"custom2": "custom value 2",
//"custom3": "custom value 3"
},
"invoiceNumber": "2021.0001",
"invoiceDate": "1.1.2021",
"products": table,
"bottomNotice": "Kindly pay your invoice within 15 days.",
//Used for translating the headers to your preferred language
//Defaults to English. Below example is translated to Dutch
// "translate": { 
//     "invoiceNumber": "Factuurnummer",
//     "invoiceDate": "Factuurdatum",
//     "products": "Producten", 
//     "quantity": "Aantal", 
//     "price": "Prijs",
//     "subtotal": "Subtotaal",
//     "total": "Totaal" 
// }
};

//Create your invoice! Easy!
easyinvoice.createInvoice(data, function (result) {
//The response will contain a base64 encoded PDF file
console.log(result.pdf);
easyinvoice.download("invoice.pdf");
});
}