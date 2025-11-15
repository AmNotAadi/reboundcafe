export const config = {
  compatibility_date: "2024-11-15",
  compatibility_flags: ["nodejs_compat"],
};

export async function onRequest(context: { next: () => Promise<Response> }) {
  return context.next();
}
