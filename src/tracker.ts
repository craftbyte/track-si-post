import { TrackWebServiceClient, createClientAsync } from "./trackwebservice";

const url = 'https://sledenje.posta.si/services/Wcf/TrackWebService.svc?singleWsdl';

export default class Tracker {
    private client!: TrackWebServiceClient;
    private komitentId!: number;
    private pogodbaId!: number;
    private podruznicaId!: number;

    private constructor() {}

    async create(komitentId: number, pogodbaId: number, podruznicaId: number) {
        const me = new Tracker();
        me.client = await createClientAsync(url);
        me.komitentId = komitentId;
        me.pogodbaId = pogodbaId;
        me.podruznicaId = podruznicaId;
        return me;
    }

    async trackByCode(code: string) {
        const result = await this.client.VrniPoCrtniKodiAsync({
            aKomitentId: this.komitentId.toString(),
            aPogodbaId: this.pogodbaId.toString(),
            aPodruznicaId: this.podruznicaId.toString(),
            aCrtnaKoda: code
        })
        const response = result[0];
        if (response.aOutResult?.ReturnCode !== 'Normal') throw new Error(response.aOutResult?.ReturnValue);
        return response.VrniPoCrtniKodiResult?.DogodkiPosiljke;
    }
    async trackByCodeYear(code: string) {
        const result = await this.client.VrniPoCrtniKodiLetnaAsync({
            aKomitentId: this.komitentId.toString(),
            aPogodbaId: this.pogodbaId.toString(),
            aPodruznicaId: this.podruznicaId.toString(),
            aCrtnaKoda: code
        })
        const response = result[0];
        if (response.aOutResult?.ReturnCode !== 'Normal') throw new Error(response.aOutResult?.ReturnValue);
        return response.VrniPoCrtniKodiLetnaResult?.DogodkiPosiljke;
    }
    async trackByPartialCode(partialCode: string, days: number) {
        const result = await this.client.VrniPoKodiAsync({
            aKomitentId: this.komitentId.toString(),
            aPogodbaId: this.pogodbaId.toString(),
            aPodruznicaId: this.podruznicaId.toString(),
            aDelnaCrtnaKoda: partialCode,
            aSteviloDni: days.toString()
        })
        const response = result[0];
        if (response.aOutResult?.ReturnCode !== 'Normal') throw new Error(response.aOutResult?.ReturnValue);
        return response.VrniPoKodiResult?.DogodkiPosiljke;
    }
    async trackByPartialCodePeriod(partialCode: string, from: Date, to: Date) {
        const result = await this.client.VrniPoKodiZaObdobjeAsync({
            aKomitentId: this.komitentId.toString(),
            aPogodbaId: this.pogodbaId.toString(),
            aPodruznicaId: this.podruznicaId.toString(),
            aDelnaCrtnaKoda: partialCode,
            aDatumOd: from.toISOString(),
            aDatumDo: to.toISOString()
        })
        const response = result[0];
        if (response.aOutResult?.ReturnCode !== 'Normal') throw new Error(response.aOutResult?.ReturnValue);
        return response.VrniPoKodiZaObdobjeResult?.DogodkiPosiljke;
    }
    async trackByPartner(days: number) {
        const result = await this.client.VrniPoKomitentuAsync({
            aKomitentId: this.komitentId.toString(),
            aPogodbaId: this.pogodbaId.toString(),
            aPodruznicaId: this.podruznicaId.toString(),
            aSteviloDni: days.toString()
        })
        const response = result[0];
        if (response.aOutResult?.ReturnCode !== 'Normal') throw new Error(response.aOutResult?.ReturnValue);
        return response.VrniPoKomitentuResult?.DogodkiPosiljke;
    }
}