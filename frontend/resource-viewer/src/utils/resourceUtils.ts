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

export function filterResources(
  resources: Resource[],
  query: string,
): Resource[] {
  const searchTerm = query.trim().toLowerCase();

  if (!searchTerm) {
    return resources;
  }

  return resources.filter((resource) => {
    const matchesTitle = resource.title
      .toLowerCase()
      .includes(searchTerm);

    const matchesTag = resource.tags.some((tag) =>
      tag.toLowerCase().includes(searchTerm),
    );

    return matchesTitle || matchesTag;
  });
}

export function sortResourcesByDate(resources: Resource[]): Resource[] {
  return [...resources].sort(
    (first, second) =>
      new Date(second.date_uploaded).getTime() -
      new Date(first.date_uploaded).getTime(),
  );
}