import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor() { }

  // basically copied straight from the react app, doesn't 
  // really fit in the angular app but it's fine for now
  detectHost = async (): Promise<string> => {
    const checkUrl = async (url: string): Promise<boolean> => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        return true;
      } catch (error) {
        console.error(`Failed to fetch from ${url}:`, error);
        return false;
      }
    };

    const rootUrl = "/api/health";

    const isLocalHealthy = await checkUrl("http://localhost:8000/api/health");
    if (isLocalHealthy) {
      return "http://localhost:8000";
    }

    const isRootHealthy = await checkUrl(rootUrl);
    if (isRootHealthy) {
      const root = window.location.origin;
      return root;
    }

    throw new Error("Both health checks failed, please check the Verba Server");
  };
}
