import { ContactFormData, ContactResponse, Experience, Project, SkillCategory } from '@/types/portfolio';
import { EXPERIENCES, PROJECTS, SKILL_CATEGORIES } from '@/lib/data';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const portfolioService = {
  async getProjects(): Promise<Project[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/api/projects`, { next: { revalidate: 60 } });
      if (!res.ok) throw new Error('API fetch failed');
      const json = await res.json();
      return json.data || PROJECTS;
    } catch {
      return PROJECTS;
    }
  },

  async getProjectBySlug(slug: string): Promise<Project | null> {
    try {
      const res = await fetch(`${API_BASE_URL}/api/projects/slug/${slug}`, { next: { revalidate: 60 } });
      if (!res.ok) throw new Error('API fetch failed');
      const json = await res.json();
      return json.data || PROJECTS.find((p) => p.slug === slug) || null;
    } catch {
      return PROJECTS.find((p) => p.slug === slug) || null;
    }
  },

  async getExperiences(): Promise<Experience[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/api/experiences`, { next: { revalidate: 60 } });
      if (!res.ok) throw new Error('API fetch failed');
      const json = await res.json();
      return json.data || EXPERIENCES;
    } catch {
      return EXPERIENCES;
    }
  },

  async getSkills(): Promise<SkillCategory[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/api/skills`, { next: { revalidate: 60 } });
      if (!res.ok) throw new Error('API fetch failed');
      const json = await res.json();
      return json.data || SKILL_CATEGORIES;
    } catch {
      return SKILL_CATEGORIES;
    }
  },

  async submitContact(data: ContactFormData): Promise<ContactResponse> {
    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message || 'Failed to submit contact message');
      }

      return {
        success: true,
        message: json.message || 'Message sent successfully to Janitha Sandanuwan.',
        receivedAt: json.data?.receivedAt || new Date().toISOString(),
      };
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Failed to send message';
      return {
        success: false,
        message: msg,
      };
    }
  },
};
