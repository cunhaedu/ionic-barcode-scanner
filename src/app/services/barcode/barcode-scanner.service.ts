import { Injectable } from '@angular/core';
import {
  CapacitorBarcodeScanner,
  CapacitorBarcodeScannerTypeHint,
  CapacitorBarcodeScannerCameraDirection,
} from '@capacitor/barcode-scanner';

@Injectable({
  providedIn: 'root'
})
export class BarcodeScannerService {

  constructor() { }

  async startScan(hint: CapacitorBarcodeScannerTypeHint = CapacitorBarcodeScannerTypeHint.ALL) {
    try {
      const result = await CapacitorBarcodeScanner.scanBarcode({
        hint,
        cameraDirection: CapacitorBarcodeScannerCameraDirection.BACK
      });

      return result.ScanResult;
    } catch (error: any) {
      if(error?.code && error.code === 'OS-PLUG-BARC-0006') {
        return '';
      } else {
        throw(error)
      }
    }
  }
}
