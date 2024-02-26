export class Response {
}
// export interface Result {
//     isSuccess: boolean;
//     message: string;
//     response: any
//     totalRecords: number
//   }

  // export interface Result {

  //     isSuccess: boolean;
  //     message: string;
  //     response: any;
  //     totalRecords: number;
  //     errors: string[];
  //     statusCode: number;

  // }

  export class Result {
    ok: boolean | undefined;
    body: any| undefined;
    isSuccess: boolean| undefined;
    message: string| undefined;
    response: any
    totalRecords: number| undefined
  }
