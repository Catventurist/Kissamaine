import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "page"
declare module "C:/Users/M/Coding/Kissamaine/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}