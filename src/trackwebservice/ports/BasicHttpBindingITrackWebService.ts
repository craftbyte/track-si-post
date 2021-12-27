import { VrniPoCrtniKodi } from "../definitions/VrniPoCrtniKodi";
import { VrniPoCrtniKodiResponse } from "../definitions/VrniPoCrtniKodiResponse";
import { VrniPoCrtniKodiLetna } from "../definitions/VrniPoCrtniKodiLetna";
import { VrniPoCrtniKodiLetnaResponse } from "../definitions/VrniPoCrtniKodiLetnaResponse";
import { VrniPoKodi } from "../definitions/VrniPoKodi";
import { VrniPoKodiResponse } from "../definitions/VrniPoKodiResponse";
import { VrniPoKomitentu } from "../definitions/VrniPoKomitentu";
import { VrniPoKomitentuResponse } from "../definitions/VrniPoKomitentuResponse";
import { VrniPoKodiZaObdobje } from "../definitions/VrniPoKodiZaObdobje";
import { VrniPoKodiZaObdobjeResponse } from "../definitions/VrniPoKodiZaObdobjeResponse";

export interface BasicHttpBindingITrackWebService {
    VrniPoCrtniKodi(vrniPoCrtniKodi: VrniPoCrtniKodi, callback: (err: any, result: VrniPoCrtniKodiResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    VrniPoCrtniKodiLetna(vrniPoCrtniKodiLetna: VrniPoCrtniKodiLetna, callback: (err: any, result: VrniPoCrtniKodiLetnaResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    VrniPoKodi(vrniPoKodi: VrniPoKodi, callback: (err: any, result: VrniPoKodiResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    VrniPoKomitentu(vrniPoKomitentu: VrniPoKomitentu, callback: (err: any, result: VrniPoKomitentuResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
    VrniPoKodiZaObdobje(vrniPoKodiZaObdobje: VrniPoKodiZaObdobje, callback: (err: any, result: VrniPoKodiZaObdobjeResponse, rawResponse: any, soapHeader: any, rawRequest: any) => void): void;
}
