import { IBarcodeItem } from "../interfaces/barcode.interface";

export function getBarcodes(): IBarcodeItem[] {
  const persistBarcodes = localStorage.getItem("barcodeItems");

  return persistBarcodes ? JSON.parse(persistBarcodes) : [];
}

export function setBarcodes(barcodes: IBarcodeItem[]): void {
  localStorage.setItem("barcodeItems", JSON.stringify(barcodes));
}
