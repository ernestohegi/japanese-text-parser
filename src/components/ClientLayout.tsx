"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 6 * 60 * 1000, // 6 minutes
      refetchOnMount: "always",
    },
  },
});

type ClientLayoutProps = {
  children: React.ReactNode;
};

export const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
