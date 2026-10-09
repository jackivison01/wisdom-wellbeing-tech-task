import type { Resource, ResourceGroups } from "../models/resource";

export function groupByCategory(
  resources: Resource[],
): ResourceGroups {
  return resources.reduce<Record<string, Resource[]>>((groups, resource) => {
    groups[resource.category] ??= [];
    groups[resource.category].push(resource);
    return groups;
  }, {});
}