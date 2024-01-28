// TestCaseId.ts
import 'reflect-metadata';

export function TestCaseId(id: string) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    Reflect.defineMetadata('testCaseId', id, target, propertyKey);
  };
}