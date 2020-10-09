import { BaseEntity } from './base-entity.interface';

export interface Movie extends BaseEntity {
    academyAwardNominations: number;
    academyAwardWins: number;
    boxOfficeRevenueInMillions: number;
    budgetInMillions: number;
    rottenTomatesScore: number;
    runtimeInMinutes: number;
}