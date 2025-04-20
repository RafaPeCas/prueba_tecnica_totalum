import { Injectable } from '@angular/core';
import { AuthOptions, TotalumApiSdk } from 'totalum-api-sdk';
import { environment } from "enviroments/enviroments..prod"

const options: AuthOptions = {
  apiKey: {
    'api-key': environment.totalumApiKey
  }
};

@Injectable({
  providedIn: 'root',
})

export class TotalumApiService {
  private client: TotalumApiSdk;

  constructor() {
    const options: AuthOptions = {
      apiKey: {
        'api-key': environment.totalumApiKey
      },
    };
    this.client = new TotalumApiSdk(options);
  }

  async getItems(tableName: string, page: number = 0, limit: number = 50, search: string = ''): Promise<any[]> {
    const response = await this.client.crud.getItems(tableName, {
      sort: {
        createdAt: 1  
      },
      pagination: {
        page: page,  
        limit: limit 
      }
    });
    return response.data.data;
  }

  async getItemById(tableName: string, id: string): Promise<any> {
    const response = await this.client.crud.getItemById(tableName, id);
    return response.data.data;
  }
  
  async createItem(tableName: string, data: any): Promise<any> {
    const response = await this.client.crud.createItem(tableName, data);
    return response.data.data;
  }
  
  async updateItem(tableName: string, id: string, data: any): Promise<any> {
    const response = await this.client.crud.editItemById(tableName, id, data);
    return response.data.data;
  }  
  
  async deleteItem(tableName: string, id: string): Promise<void> {
    await this.client.crud.deleteItemById(tableName, id);
  }  
  
}
