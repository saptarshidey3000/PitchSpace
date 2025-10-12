import "server-only";

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, token } from "../env";

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Always false for writes
  token, // Must exist for write operations
});

// Validate token presence
if (!writeClient.config().token) {
  throw new Error("❌ Sanity write client token not found");
}
