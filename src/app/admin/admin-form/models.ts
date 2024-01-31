export interface CreateNewVideo {
  title: string;
  date: string;
  description?: string;
  link: string;
  tags: string[];
  img: string;
  custom?: boolean;
  id: string;
}
