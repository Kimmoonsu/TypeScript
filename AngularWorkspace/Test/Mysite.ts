// import * as $ from "jquery";
// import {Ajax} from "./AjaxTest";

module MySite {
    export class CustomerPage {
        constructor() {
            this.loadCustomers();
        }
        loadCustomers = (): void => {

            document.body.innerHTML = "hello";
//             var service = new Ajax.Service();
//             var customerUrl = "http://onepercentserver.azurewebsites.net/OnePercentServer/voteResult.do";
//             //Sample 1 - request method no error handling. in this case global error handler handles it
//             var options = new Ajax.Options(customerUrl);
//             service.request(options, function (d) {
//                 document.body.innerHTML = "hello";
//             });
//             //Sample 2 - request method but handling error
//             var options = new Ajax.Options(customerUrl);
//             service.request(options, function (d) {
//                 $("#grid").html(d);
//             }, function (d) {
//                 alert("Error - " + d);
//             });
//             //Sample 3 - use get
//             service.get(customerUrl, function (d) {
//                 $("#grid").html(d);
//             });
//             //Sample 4 - get with data
//             service.getWithDataInput(customerUrl, { ProductId: 1 }, function (d) {
//                 $("#grid").html(d);
//             });
        }
    }
}
function test(){
    alert("in");
    new MySite.CustomerPage();
}