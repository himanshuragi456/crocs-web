export const IO = (item: Element, options?: Record<string, any>) => {
     return new Promise<void>((resolve) => {
          const observer = new window.IntersectionObserver((entries) => {
               entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                         resolve();
                    }
               });
          }, options);
          observer.observe(item);
     });
};
