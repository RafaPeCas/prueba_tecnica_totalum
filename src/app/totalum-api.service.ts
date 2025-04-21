import { Injectable } from '@angular/core';
import { AuthOptions, TotalumApiSdk } from 'totalum-api-sdk';
import { environment } from "enviroments/enviroments."

const options: AuthOptions = {
  apiKey: {
    'api-key': environment.totalumApiKey
  }
};

@Injectable({
  providedIn: 'root',
})
export class TotalumApiService {
  private client: TotalumApiSdk | null = null;

  private initClient(): void {
    if (this.client) return;
    const options: AuthOptions = {
      apiKey: {
        'api-key': environment.totalumApiKey
      },
    };

    try {
      this.client = new TotalumApiSdk(options);
    } catch (error) {
      console.error("Error inicializando TotalumApiSdk:", error);
      throw error; 
    }
  }

  async getItems(tableName: string, page: number = 0, limit: number = 50, search: string = ''): Promise<any[]> {
    try {
      this.initClient();
      const response = await this.client!.crud.getItems(tableName, {
        sort: { createdAt: 1 },
        pagination: { page, limit }
      });
      return response.data.data;
    } catch (error) {
      console.error("Error al obtener items:", error);
      throw error;
    }
  }

  async getItemById(tableName: string, id: string): Promise<any> {
    this.initClient();
    const response = await this.client!.crud.getItemById(tableName, id);
    return response.data.data;
  }

  async createItem(tableName: string, data: any): Promise<any> {
    this.initClient();
    const response = await this.client!.crud.createItem(tableName, data);
    return response.data.data;
  }

  async updateItem(tableName: string, id: string, data: any): Promise<any> {
    this.initClient();
    const response = await this.client!.crud.editItemById(tableName, id, data);
    return response.data.data;
  }

  async deleteItem(tableName: string, id: string): Promise<void> {
    this.initClient();
    await this.client!.crud.deleteItemById(tableName, id);
  }
}