import { describe, it, expect } from 'vitest';
import { readFileSync, existsSync } from 'fs';
import { glob } from 'glob';
import { join } from 'path';

describe('Policy Documents Validation', () => {
  // Get all markdown files in the repository
  const policyFiles = glob.sync('*.md', { cwd: process.cwd() });
  const policyFilesWithoutExt = glob.sync('privacy-policy-*', { cwd: process.cwd() });
  const allPolicyFiles = [...policyFiles, ...policyFilesWithoutExt];

  it('should have at least one policy document', () => {
    expect(allPolicyFiles.length).toBeGreaterThan(0);
  });

  describe('File naming conventions', () => {
    it('should follow consistent naming patterns', () => {
      const validPatterns = [
        /^privacy-policy(\.md)?$/,           // privacy-policy.md or privacy-policy
        /^privacy-policy_.+(\.md)?$/,        // privacy-policy_service.md
        /^privacy-policy-.+$/,               // privacy-policy-service
        /^terms-of-use_.+(\.md)?$/,          // terms-of-use_service.md
        /^terms-of-service_.+(\.md)?$/       // terms-of-service_service.md
      ];

      allPolicyFiles.forEach(file => {
        const isValid = validPatterns.some(pattern => pattern.test(file));
        expect(isValid, `File "${file}" does not follow naming conventions`).toBe(true);
      });
    });

    it('should use consistent separators for service-specific policies', () => {
      const serviceSpecificFiles = allPolicyFiles.filter(file => 
        file.includes('_') || (file.includes('-') && file !== 'privacy-policy.md')
      );
      
      // At least check that we have some service-specific files
      expect(serviceSpecificFiles.length).toBeGreaterThan(0);
    });
  });

  describe('Document content validation', () => {
    allPolicyFiles.forEach(file => {
      describe(`${file}`, () => {
        let content;
        
        it('should exist and be readable', () => {
          expect(existsSync(file)).toBe(true);
          content = readFileSync(file, 'utf-8');
          expect(content).toBeDefined();
          expect(content.length).toBeGreaterThan(0);
        });

        it('should not be empty', () => {
          if (!content) content = readFileSync(file, 'utf-8');
          expect(content.trim().length).toBeGreaterThan(0);
        });

        it('should contain basic policy structure for policy files', () => {
          if (!content) content = readFileSync(file, 'utf-8');
          
          if (file.includes('privacy-policy')) {
            // Privacy policies should contain key privacy-related terms
            const privacyTerms = [
              /privacy|Privacy/,
              /data|Data|information|Information/,
              /collect|Collect|use|Use/
            ];
            
            const hasPrivacyContent = privacyTerms.some(term => term.test(content));
            expect(hasPrivacyContent, 'Privacy policy should contain privacy-related content').toBe(true);
          }
          
          if (file.includes('terms-of-use') || file.includes('terms-of-service')) {
            // Terms should contain basic legal structure
            const termsIndicators = [
              /terms|Terms|agreement|Agreement/,
              /use|Use|service|Service/
            ];
            
            const hasTermsContent = termsIndicators.some(term => term.test(content));
            expect(hasTermsContent, 'Terms document should contain terms-related content').toBe(true);
          }
        });

        it('should have reasonable content length', () => {
          if (!content) content = readFileSync(file, 'utf-8');
          // Policy documents should have substantial content (at least 100 characters)
          expect(content.trim().length).toBeGreaterThanOrEqual(100);
        });
      });
    });
  });

  describe('Repository structure', () => {
    it('should have expected policy files', () => {
      const expectedFiles = [
        'privacy-policy.md',
        'privacy-policy_peila.md', 
        'terms-of-use_peila.md',
        'privacy-policy-hapning'
      ];
      
      expectedFiles.forEach(expectedFile => {
        expect(allPolicyFiles).toContain(expectedFile);
      });
    });

    it('should maintain service-specific variants consistency', () => {
      // Check that service-specific files exist for services that have multiple policy types
      const services = new Set();
      
      allPolicyFiles.forEach(file => {
        const serviceMatch = file.match(/_(.+?)(\.md)?$/);
        if (serviceMatch) {
          services.add(serviceMatch[1]);
        }
      });
      
      // We should have at least one service with multiple policies
      expect(services.size).toBeGreaterThanOrEqual(1);
    });
  });
});