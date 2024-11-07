export type SchedulePlaceType = {
  boardScheduleId: string;
  googlePlaceId: string;
  placeName: string;
  pointX: number;
  pointY: number;
  imageUrl: string;
  address: string;
};

export interface SchedulePlaceIdType extends SchedulePlaceType {
  boardId: number;
  number: number;
  date: string;
}
