export interface ServerResponse {
  collection: Collection;
}

export interface Collection {
  version: string;
  href: string;
  items: Item[];
  metadata: Metadata;
  links: CollectionLinks[];
}

export interface CollectionLinks {
  rel: string;
  prompt: string;
  href: string;
}

export interface Item {
  href: string;
  data: Data[];
  links: Link[];
}

export interface Data {
  center: string;
  title: string;
  keywords?: string[];
  nasa_id: string;
  date_created: string;
  media_type: string;
  description: string;
  album?: string[];
  location?: string;
  description_508?: string;
  secondary_creator?: string;
  photographer?: string;
}

export interface Link {
  href: string;
  rel: string;
  render?: string;
}

export interface Metadata {
  total_hits: number;
}

export interface GetCountersParams {
  parameter: string;
  page: number;
}
