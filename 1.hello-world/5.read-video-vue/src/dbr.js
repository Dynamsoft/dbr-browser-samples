import DBR from "dynamsoft-javascript-barcode";
DBR.BarcodeReader.engineResourcePath = "https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.2.1/dist/";
// Please visit https://www.dynamsoft.com/customer/license/trialLicense to get a trial license
DBR.BarcodeReader.organizationID = "200001";
// DBR.BarcodeReader._bUseFullFeature = true; // Control of loading min wasm or full wasm.
export default DBR;