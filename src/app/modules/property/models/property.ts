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
  // [key: string]: any;
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

export interface PropertyMetadata {
  id: number;
  processedDate: string;
  receivedDate: string;
  property: Property;
  // TODO: check if this is correct
  // success: boolean;
  // rawSource: string;
  // s3file: string;
  // scrapedAt: Date;
  // processedAt: string;
  // errors: Errors;
}

export interface InMemoryPropertyHTTPResponse {
  [key: number]: PropertyMetadata,
  default: PropertyMetadata[];
}
