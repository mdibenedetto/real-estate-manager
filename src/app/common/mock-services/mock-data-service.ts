import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as properties from '../../../assets/mock/properties.json';

export class MockDataService implements InMemoryDbService {
    createDb() {
        return { properties };
    }
}