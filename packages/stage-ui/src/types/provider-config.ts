export interface ProviderConfigExport {
  format: 'provider-config:v1'
  exportedAt: string
  credentials: Record<string, Record<string, unknown>>
  addedProviders: Record<string, boolean>
}
