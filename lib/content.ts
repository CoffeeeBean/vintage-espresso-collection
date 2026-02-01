import fs from 'fs';
import path from 'path';
import type { SiteConfig, HeroContent, AboutContent, Machine, GalleryImage, StatsContent } from '@/types';

const contentDirectory = path.join(process.cwd(), 'content');

export function getContentData<T>(folder: string, file: string): T | null {
  const filePath = path.join(contentDirectory, folder, `${file}.json`);
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents) as T;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return null;
  }
}

export function getAllMachines(): Machine[] {
  const machinesDirectory = path.join(contentDirectory, 'machines');
  try {
    const fileNames = fs.readdirSync(machinesDirectory);
    const machines = fileNames
      .filter(fileName => fileName.endsWith('.json'))
      .map(fileName => {
        const filePath = path.join(machinesDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContents);
        return {
          slug: fileName.replace(/\.json$/, ''),
          ...data
        } as Machine;
      });
    
    return machines.sort((a, b) => (a.order || 0) - (b.order || 0));
  } catch (error) {
    console.error('Error reading machines:', error);
    return [];
  }
}

export function getAllGalleryImages(): GalleryImage[] {
  const galleryDirectory = path.join(contentDirectory, 'gallery');
  try {
    if (!fs.existsSync(galleryDirectory)) {
      return [];
    }
    const fileNames = fs.readdirSync(galleryDirectory);
    const images = fileNames
      .filter(fileName => fileName.endsWith('.json'))
      .map(fileName => {
        const filePath = path.join(galleryDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContents) as GalleryImage;
      });
    
    return images.sort((a, b) => (a.order || 0) - (b.order || 0));
  } catch (error) {
    console.error('Error reading gallery:', error);
    return [];
  }
}
