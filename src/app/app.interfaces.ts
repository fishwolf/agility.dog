export interface StructApiBase
{
    result: any;
    data:   any;
}


/*
export interface StructApiResult {
  code: number;
  detail: string;
}

export interface StructApiBase<T> {
  result: StructApiResult;
  data: T;
}

export interface StructApi extends StructApiBase<any> {}


export interface ApiNextEvents extends StructApiBase<StructNextEvents> {}

export interface StructNextEvents {
  id: string;
  date: string;
  tipo: string; 
  nome: string
  struttura: string;
  citta: string;
  provincia: string;
  locandine: string
  locandina: string
}
*/