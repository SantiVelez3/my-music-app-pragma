export interface TrackModel {
    id:string;
    name:string;
    popularity:string;
    album: string[]
    isFavorite?:boolean;
}
