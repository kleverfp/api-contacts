export class SequelizeHelper {
  static toJSONList<T = any>(instances: T[]): any[] {
    if (!instances || !Array.isArray(instances)) {
      return [];
    }

    return instances.map((instance: any) => {
      if (instance && typeof instance.toJSON === 'function') {
        return instance.toJSON();
      }
      return instance;
    });
  }
}
