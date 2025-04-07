/**
 * Normalizes image paths to ensure correct rendering
 * 
 * @param imagePath - The original image path
 * @returns The normalized image path for proper rendering
 */
export const normalizePath = (imagePath: string): string => {
  // If it's an external URL (starts with http), return as is
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // If it's a public path that incorrectly includes "/public" prefix, remove it
  if (imagePath.startsWith('/public/')) {
    return imagePath.replace('/public/', '/');
  }
  
  // If it starts with / but not /public, return as is
  if (imagePath.startsWith('/')) {
    return imagePath;
  }
  
  // Otherwise, ensure it has a leading slash
  return `/${imagePath}`;
};

/**
 * Determines if an image exists in the public directory
 * This is a client-side function and doesn't actually check file existence,
 * but helps during development to validate paths
 * 
 * @param imagePath - The image path to check
 * @returns true if the path is likely valid
 */
export const validateImagePath = (imagePath: string): boolean => {
  // Check if it's an external URL
  if (imagePath.startsWith('http')) {
    return true;
  }
  
  // Normalize the path
  const normalizedPath = normalizePath(imagePath);
  
  // Image paths should include an extension
  const hasExtension = /\.(jpg|jpeg|png|gif|svg|webp)$/i.test(normalizedPath);
  
  // Image paths should be well-formed
  const isWellFormed = normalizedPath.includes('/image/') || 
                       normalizedPath.includes('/images/') || 
                       normalizedPath.includes('/assets/');
  
  return hasExtension && isWellFormed;
};
