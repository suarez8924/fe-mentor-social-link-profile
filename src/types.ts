export type User = {
  avatar: { url: string; alt?: string };
  fullName: string;
  location: string;
  intro: string;
  socialLinks: Array<{ title: string; url: string }>;
};
