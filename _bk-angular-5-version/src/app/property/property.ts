 export interface PropertyInfo {
   metaType: string;
   type: string;
   subType: string;
   availability: string;
 }

 export interface Property {
   id: number;
   address: string;
   price: number;
   location: number[];
   beds: number;
   zipCode: string;
   images: any[];
   description: string;
   propertyInfo: PropertyInfo;
   source: string;
   estateAgent: string;
   isLive: boolean;
 }

 export interface Errors {
   error0: boolean;
   error1: boolean;
   error2: boolean;
   error3: boolean;
   error4: boolean;
   error5: boolean;
   error6: boolean;
 }

 export interface RootObject {
   success: boolean;
   rawSource: string;
   s3file: string;
   scrapedAt: Date;
   processedAt: string;
   property: Property;
   errors: Errors;
 }
