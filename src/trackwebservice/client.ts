import { Client as SoapClient, createClientAsync as soapCreateClientAsync } from "soap";
import { VrniPoCrtniKodi } from "./definitions/VrniPoCrtniKodi";
import { VrniPoCrtniKodiResponse } from "./definitions/VrniPoCrtniKodiResponse";
import { VrniPoCrtniKodiLetna } from "./definitions/VrniPoCrtniKodiLetna";
import { VrniPoCrtniKodiLetnaResponse } from "./definitions/VrniPoCrtniKodiLetnaResponse";
import { VrniPoKodi } from "./definitions/VrniPoKodi";
import { VrniPoKodiResponse } from "./definitions/VrniPoKodiResponse";
import { VrniPoKomitentu } from "./definitions/VrniPoKomitentu";
import { VrniPoKomitentuResponse } from "./definitions/VrniPoKomitentuResponse";
import { VrniPoKodiZaObdobje } from "./definitions/VrniPoKodiZaObdobje";
import { VrniPoKodiZaObdobjeResponse } from "./definitions/VrniPoKodiZaObdobjeResponse";
import { TrackWebService } from "./services/TrackWebService";

export interface TrackWebServiceClient extends SoapClient {
    TrackWebService: TrackWebService;
    VrniPoCrtniKodiAsync(vrniPoCrtniKodi: VrniPoCrtniKodi): Promise<[result: VrniPoCrtniKodiResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    VrniPoCrtniKodiLetnaAsync(vrniPoCrtniKodiLetna: VrniPoCrtniKodiLetna): Promise<[result: VrniPoCrtniKodiLetnaResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    VrniPoKodiAsync(vrniPoKodi: VrniPoKodi): Promise<[result: VrniPoKodiResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    VrniPoKomitentuAsync(vrniPoKomitentu: VrniPoKomitentu): Promise<[result: VrniPoKomitentuResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
    VrniPoKodiZaObdobjeAsync(vrniPoKodiZaObdobje: VrniPoKodiZaObdobje): Promise<[result: VrniPoKodiZaObdobjeResponse, rawResponse: any, soapHeader: any, rawRequest: any]>;
}

/** Create TrackWebServiceClient */
export function createClientAsync(...args: Parameters<typeof soapCreateClientAsync>): Promise<TrackWebServiceClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any;
}
