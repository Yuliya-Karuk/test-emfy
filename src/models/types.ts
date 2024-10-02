interface Link {
  href: string;
}

export interface Lead {
  account_id: number;
  closed_at: number | null;
  closest_task_at: number;
  created_at: number;
  created_by: number;
  custom_fields_values: null | unknown;
  group_id: number;
  id: number;
  is_deleted: boolean;
  labor_cost: number | null;
  loss_reason_id: number | null;
  name: string;
  pipeline_id: number;
  price: number;
  responsible_user_id: number;
  score: number | null;
  status_id: number;
  updated_at: number;
  updated_by: number;
  _embedded: {
    companies: unknown[];
    tags: string[];
  };
  _links: {
    self: Link;
  };
}


export interface ApiResponse {
  _page: number;
  _embedded: {
    leads: Lead[];
  };
  _links: {
    self: Link;
  }
}