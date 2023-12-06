export interface IResponseCategoryList {
  characterName: string;
  characterDescription: string;
  seriesList: Array<IResponseStandardCategory>;
  eventsList: Array<IResponseStandardCategory>;
  storiesList: Array<IResponseStandardCategory>;
  comicsList: Array<IResponseStandardCategory>;
}

export interface IResponseStandardCategory {
  id: number;
  thumbnail: string;
  description: string;
}
